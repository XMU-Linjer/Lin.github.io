// proxy.pac - Version: 1
// ˵����ʹ����ıʵ���Ϊ����10.243.211.192:7897������������������� DIRECT��

function FindProxyForURL(url, host) {
    // ֱ����ͨ�ù��򣨾������������򡢱��ص�ַ�ȣ�
    if (isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        shExpMatch(host, "localhost") ||
        shExpMatch(host, "127.*") ||
        shExpMatch(host, "10.*") ||
        shExpMatch(host, "192.168.*") ||
        shExpMatch(host, "172.16.*")) {
        return "DIRECT";
    }

    // ��ıʵ����Zerotier IP:�˿ڣ�
    var LAPTOP_PROXY = "PROXY 10.243.211.192:7897";

    // �Ѵ���ŵ�һ��������� DIRECT ��Ϊ����
    // ���ͣ��ͻ��˻��ȳ��Դ���������ʧ�ܻ��˻� DIRECT��������С�ӳ٣�
    return LAPTOP_PROXY + "; DIRECT";
}
