# 语言学习AI
## 环境要求
### 一、本地化AI部署
（1）下载 ollma 平台：https://ollama.com/download
（2）安装成功后测试：ollama --version
（3）下载 deepseek 模型：ollama run deepseek-r1:1.5b
（4）下载完成自动运行 r1 测试模型，可使用默认地址访问运行状态：http://127.0.0.1:11434/
（5）并修改 AI SDK provider
    import { ollama } from 'ollama-ai-provider-v2';
    ...
    model: ollama("deepseek-r1:1.5b")
    ...


