class JSONResponse {
    constructor(code, payload) {
        this.code = code;
        this.payload = payload;
    }
    send(req, res) {
        return res.status(this.code).json({
            status: this.code,
            msg: this.payload
        });
    }
}

module.exports = {
    JSONResponse
};
