// proxy.pac - Version: 1
// 说明：使用你的笔电作为代理（10.243.211.192:7897），若代理不可用则回退 DIRECT。

function FindProxyForURL(url, host) {
    // 直连的通用规则（局域网、本地域、本地地址等）
    if (isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        shExpMatch(host, "localhost") ||
        shExpMatch(host, "127.*") ||
        shExpMatch(host, "10.*") ||
        shExpMatch(host, "192.168.*") ||
        shExpMatch(host, "172.16.*")) {
        return "DIRECT";
    }

    // 你的笔电代理（Zerotier IP:端口）
    var LAPTOP_PROXY = "PROXY 10.243.211.192:7897";

    // 把代理放第一，后面加上 DIRECT 作为备用
    // 解释：客户端会先尝试代理，若连接失败会退回 DIRECT（可能有小延迟）
    return LAPTOP_PROXY + "; DIRECT";
}
