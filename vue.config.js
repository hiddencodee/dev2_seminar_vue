/*
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "../src/main/resources/static",
	indexPath: "../static/index.html",
	devServer: {
		port: 9091,	// 접속 포트 변경
		proxy: {
			"/api":{
				target: "http://localhost:8082",
				changeOrigin: true,
			}
		}, // devServer: back-end 내장 was의 주소를 작성하게 되면 된다.
	}
});
*/
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
