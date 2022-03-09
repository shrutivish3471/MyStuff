var ids = {
  oracle: {
    "ClientId": "05b6ba9495e6442a9b2974a9a67e9a74",
    "ClientSecret": "f299b014-0754-486e-acb6-6d6d4a98327e",
	"ClientTenant": "idcs-31bcec80ac684afea23b015d1f23d0d5",
    "IDCSHost": "https://idcs-31bcec80ac684afea23b015d1f23d0d5.identity.oraclecloud.com",
    "AudienceServiceUrl" : "https://idcs-31bcec80ac684afea23b015d1f23d0d5.identity.oraclecloud.com",
    "TokenIssuer": "https://identity.oraclecloud.com/",
    "scope": "urn:opc:idm:t.user.me openid",
    "logoutSufix": "/oauth2/v1/userlogout",
    "redirectURL": "http://localhost:3000/callback",
    "LogLevel":"warn",
    "ConsoleLog":"True"
  }
};

module.exports = ids;
