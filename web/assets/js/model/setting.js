class AllSetting {

    constructor(data) {
        this.webListen = "";
        this.webDomain = "";
        this.webPort = 54321;
        this.webCertFile = "";
        this.webKeyFile = "";
        this.webBasePath = "/";
        this.sessionMaxAge = "";
        this.pageSize = 0;
        this.expireDiff = "";
        this.trafficDiff = "";
        this.tgBotEnable = false;
        this.tgBotToken = "";
        this.tgBotChatId = "";
        this.tgRunTime = "@daily";
        this.tgBotBackup = false;
        this.tgBotLoginNotify = false;
        this.tgCpu = "";
        this.tgLang = "";
        this.subEnable = false;
        this.subListen = "";
        this.subPort = "2096";
        this.subPath = "/sub/";
        this.subDomain = "";
        this.subCertFile = "";
        this.subKeyFile = "";
        this.subUpdates = 0;
        this.subEncrypt = true;
        this.subShowInfo = false;
        this.subURI = '';

        this.timeLocation = "Asia/Tehran";

        if (data == null) {
            return
        }
        ObjectUtil.cloneProps(this, data);
    }

    equals(other) {
        return ObjectUtil.equals(this, other);
    }
}