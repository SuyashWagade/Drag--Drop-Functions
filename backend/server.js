import express from "express";
import cors from "cors";
import fs from "fs";
import yaml from "js-yaml";
import { WebSocketServer } from "ws";

const app = express();
app.use(cors());
app.use(express.json());

const HTTP_PORT = 4000;
const WS_PORT = 8080;

const COMMENTS_FILE = "./comments.yaml";
const STACK_FILE = "./stack.yaml";

/* ---------------- WebSocket ---------------- */
const wss = new WebSocketServer({ port: WS_PORT });

wss.on("connection", (ws) => {
  console.log("✅ WebSocket connected");

  ws.on("message", (data) => {
    const message = JSON.parse(data);

    /* ================= SAVE FULL STACK ================= */
    if (message.type === "SAVE_STACK") {
      const { stack } = message.payload;

      fs.writeFileSync(
        STACK_FILE,
        yaml.dump({ stack }),
        "utf8"
      );

      ws.send(
        JSON.stringify({
          type: "STACK_SAVED",
        })
      );

      return;
    }

    /* ================= SAVE COMMENT ================= */
    if (message.type === "ADD_COMMENT") {
      const { instanceId, comment } = message.payload;

      let yamlData = {};
      if (fs.existsSync(COMMENTS_FILE)) {
        yamlData =
          yaml.load(fs.readFileSync(COMMENTS_FILE, "utf8")) || {};
      }

      if (!yamlData[instanceId]) {
        yamlData[instanceId] = { comments: [] };
      }

      yamlData[instanceId].comments.push({
        text: comment,
        time: new Date().toISOString(),
      });

      fs.writeFileSync(
        COMMENTS_FILE,
        yaml.dump(yamlData),
        "utf8"
      );

      // broadcast comment saved
      wss.clients.forEach((client) => {
        if (client.readyState === 1) {
          client.send(
            JSON.stringify({
              type: "COMMENT_SAVED",
              payload: { instanceId, comment },
            })
          );
        }
      });
    }
  });

  ws.on("close", () => {
    console.log("❌ WebSocket disconnected");
  });
});

/* ---------------- HTTP ---------------- */
app.listen(HTTP_PORT, () => {
  console.log(`✅ HTTP server running on ${HTTP_PORT}`);
  console.log(`✅ WebSocket running on ${WS_PORT}`);
});
