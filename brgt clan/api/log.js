export default function handler(req, res) {
    const ip =
        req.headers["x-real-ip"] ||
        req.headers["x-forwarded-for"]?.split(",")[0] ||
        req.socket.remoteAddress;

    console.log("VISITANTE:", ip);

    res.status(200).json({ status: "ok", ip });
}
