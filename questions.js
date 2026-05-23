const questionSets = [
  {
    "set_name": "2026考证顺序刷题2-B-1",
    "items": [
      {
        "id": 1,
        "type": "single",
        "question": "URL的组成格式为（）。",
        "options": [
          "A. 资源类型.存放资源的主机域名.资源文件名",
          "B. 资源类型.资源文件名.存放资源的主机域名",
          "C. 主机域名.资源类型.资源文件名",
          "D. 资源文件名.主机域名.资源类型"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 2,
        "type": "single",
        "question": "用户从CA安全认证中心申请自己的证书，并将该证书安装在浏览器的主要目的是（）。",
        "options": [
          "A. 以防止他人假冒自己",
          "B. 验证Web服务器的真实性",
          "C. 保护自己的计算机免受到病毒的危害",
          "D. 防止第三方偷看传输的信息"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 3,
        "type": "single",
        "question": "下列选项中，（）不是导致Web服务溢出攻击的原因。",
        "options": [
          "A. 服务器使用Windows操作系统",
          "B. 没有能够过滤用户输入中的恶意字符",
          "C. 开发者没有完全考虑Web用户可能的行为",
          "D. 应用服务器处理输入数据时存在缓冲区溢出漏洞"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 4,
        "type": "single",
        "question": "为增强Web应用程序的安全性，某软件开发经理决定加强Web软件安全开发培训，下列哪项内容不在考虑范围内。（）",
        "options": [
          "A. 关于网站身份鉴别技术方面安全知识的培训",
          "B. 针对OpenSSL心脏出血漏洞方面安全知识的培训",
          "C. 针对SQL注入漏洞的安全编程培训",
          "D. 关于ARM系统漏洞挖掘方面安全知识的培训"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 5,
        "type": "single",
        "question": "渗透测试的流程不包含（）。",
        "options": [
          "A. 留后门",
          "B. 信息收集",
          "C. 漏洞挖掘",
          "D. 提权"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 6,
        "type": "single",
        "question": "下列关于域名备案的目的的描述中，不正确的是（）。",
        "options": [
          "A. 为了防止在网上从事非法的网站经营活动",
          "B. 为了打击不良互联网信息的传播",
          "C. 未经备案，不得在中华人民共和国境内从事互联网信息服务",
          "D. 如果网站不备案的话，很有可能被查处以后关停"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 7,
        "type": "single",
        "question": "《互联网域名管理办法》规定，（）是中国的国家顶级域名。",
        "options": [
          "A. .China",
          "B. .CHN",
          "C. .CA",
          "D. .CN"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 8,
        "type": "single",
        "question": "下列选项中，不属于CDN网络中包含的功能实体的是（）。",
        "options": [
          "A. 内容缓存设备",
          "B. 内容交换机",
          "C. 内容路由器",
          "D. 内容服务器"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 9,
        "type": "single",
        "question": "数据备份保护信息系统的安全属性是（）。",
        "options": [
          "A. 可审性",
          "B. 可用性",
          "C. 完整性",
          "D. 保密性"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 10,
        "type": "single",
        "question": "（）是按备份周期对整个系统所有的文件（数据）进行备份，是客服系统数据不安全最简单的方法。",
        "options": [
          "A. 完整备份策略",
          "B. 按需备份策略",
          "C. 差分备份策略",
          "D. 增量备份策略"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 11,
        "type": "single",
        "question": "要设置系统的备份还原，可使用的对话框是（）。",
        "options": [
          "A. 文件夹选项",
          "B. 系统属性",
          "C. 显示属性",
          "D. 设备管理器"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 12,
        "type": "single",
        "question": "关于冷备份的说法正确的是（）。",
        "options": [
          "A. 支持按表和按用户恢复",
          "B. 低度维护，高度安全",
          "C. 单独使用时，只能提供到“某一时间点上”的恢复",
          "D. 非常快速，且容易归档"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 13,
        "type": "single",
        "question": "在职业道德实践中，要求做到公私分明，以下不符合要求的是（）。",
        "options": [
          "A. 正确认识公与私的关系",
          "B. 树立奉献意识",
          "C. 从细微处严格要求自己",
          "D. 从自身利益为主，公私兼顾"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 14,
        "type": "single",
        "question": "公司应明确员工的雇佣条件和考察评价的方法与程序，减少因雇佣不当而产生的安全风险。人员考察的内容不包括（）。",
        "options": [
          "A. 身份考验、来自组织和个人的品格鉴定",
          "B. 家庭背景情况调查",
          "C. 学历和履历的真实性和完整性",
          "D. 学术及专业资格"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 15,
        "type": "single",
        "question": "关于企业文化，你认为正确的是（）。",
        "options": [
          "A. 企业文化是企业管理的重要因素",
          "B. 企业文化是企业的外在表象",
          "C. 企业文化产生于改革开放过程中的中国",
          "D. 企业文化建设的核心内容是文娱和体育活动"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 16,
        "type": "single",
        "question": "下列不属于企业文化功能的是（）。",
        "options": [
          "A. 整合功能",
          "B. 激励功能",
          "C. 强制功能",
          "D. 自律功能"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 17,
        "type": "single",
        "question": "在（）情况下，一个组织应对公众和媒体公告其信息系统中发生的信息安全事件。",
        "options": [
          "A. 当信息安全事件的负面影响扩展到本组织以外时",
          "B. 只要发生了安全事件就应当公告",
          "C. 只有公众的什么财产安全受到巨大危害时才公告",
          "D. 当信息安全事件平息之后"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 18,
        "type": "single",
        "question": "加强职业道德修养的方式不包括（）。",
        "options": [
          "A. 学习职业道德规范",
          "B. 自我放纵",
          "C. 以先进典型为标尺",
          "D. 慎独"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 19,
        "type": "single",
        "question": "在下列做法中，符合举止得体要求的是（）。",
        "options": [
          "A. 态度谦卑",
          "B. 感情热烈",
          "C. 行为适度",
          "D. 举止随意"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 20,
        "type": "single",
        "question": "管理员账号可以（）。",
        "options": [
          "A. 在客户机上使用",
          "B. 在自己的私人电脑上登录",
          "C. 在工作电脑上登录",
          "D. 将账号密码告诉给关系较好的同事"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 21,
        "type": "single",
        "question": "微型计算机中，控制器的基本功能是（）。",
        "options": [
          "A. 实现算术运算和逻辑运算",
          "B. 存储各种控制信息",
          "C. 保持各种控制状态",
          "D. 控制机器各个部件协调一致地工作"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 22,
        "type": "single",
        "question": "使用（）命令可以检查网络适配器是否工作正常等网络问题。",
        "options": [
          "A. tracert",
          "B. netstat",
          "C. ping",
          "D. arp"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 23,
        "type": "single",
        "question": "下列选项列出的计算机系统由低到高分层顺序中，正确的是（）。",
        "options": [
          "A. 硬件-应用软件-操作系统-其他系统软件",
          "B. 硬件-操作系统-其他系统软件-应用软件",
          "C. 硬件-其他系统软件-操作系统-应用软件",
          "D. 硬件-应用软件-其他系统软件-操作系统"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 24,
        "type": "single",
        "question": "对高级语言程序的下列叙述中，正确的是（）。",
        "options": [
          "A. 计算机语言中，只有机器语言属于低级语言",
          "B. 高级语言源程序可以被计算机直接执行",
          "C. C语言属于高级语言",
          "D. 机器语言是与机器硬件是无关的"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 25,
        "type": "single",
        "question": "多媒体计算机的硬件主要体现在配备了（）。",
        "options": [
          "A. 显卡",
          "B. 网卡",
          "C. 声卡",
          "D. 调制解调器"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 26,
        "type": "single",
        "question": "在Windows系统中，默认权限最低的用户组是（）。",
        "options": [
          "A. everyone",
          "B. administrator",
          "C. power user",
          "D. users"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 27,
        "type": "single",
        "question": "在Linux系统中，要列出一个目录下的所有文件需要使用的命令行为（）。",
        "options": [
          "A. ls -l",
          "B. ls",
          "C. ls -a",
          "D. ls -d"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 28,
        "type": "single",
        "question": "下列选项中，属于移动互联网设备主流的操作系统的是（）。",
        "options": [
          "A. 三星、苹果、微软",
          "B. Unix、Linux",
          "C. iOS、Android",
          "D. Windows10、Windows2016 Server"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 29,
        "type": "single",
        "question": "数据库系统在其内部具有3级模式，用来描述数据库中全体数据的全局逻辑结构和特性的是（）。",
        "options": [
          "A. 外模式",
          "B. 概念模式",
          "C. 内模式",
          "D. 存储模式"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 30,
        "type": "single",
        "question": "SQL语句中修改表结构的命令是（）。",
        "options": [
          "A. MODIFY TABLE",
          "B. MODIFY STRUCTURE",
          "C. ALTER TABLE",
          "D. ALTER STRUCTURE"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 31,
        "type": "single",
        "question": "OSI 代表的是以下哪一项（）。",
        "options": [
          "A. Organization for Standards Institute",
          "B. Organization for Internet Standards",
          "C. Open Standards Institute",
          "D. Open Systems Interconnection"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 32,
        "type": "single",
        "question": "TCP/IP协议体系结构中，IP层对应OSI/RM模型的（）。",
        "options": [
          "A. 会话层",
          "B. 网络层",
          "C. 数据链路层",
          "D. 传输层"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 33,
        "type": "single",
        "question": "小于（）的 TCP/UDP 端口号已保留与现有服务所对应，大于此数字的端口号可自由分配。",
        "options": [
          "A. 199",
          "B. 100",
          "C. 1024",
          "D. 2048"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 34,
        "type": "single",
        "question": "以下应用层协议中，可以用做邮件服务的协议有（）。",
        "options": [
          "A. TFTP",
          "B. SMTP",
          "C. SNMP",
          "D. HTTP"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 35,
        "type": "single",
        "question": "当路由器接收的 IP 报文的 TTL 值等于 0 时，采取的处理方式是（）。",
        "options": [
          "A. 将该分组分片",
          "B. 丢掉该分组",
          "C. 转发该分组",
          "D. 以上答案均不对"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 36,
        "type": "single",
        "question": "如果多个局域网要进行网络互连，并且需要它们处于不同的广播域，可以使用的网络互连设备是（）。",
        "options": [
          "A. 交换机",
          "B. 集线器",
          "C. 网桥",
          "D. 路由器"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 37,
        "type": "single",
        "question": "无线局域网 WLAN的传输介质是（）。",
        "options": [
          "A. 无线电波",
          "B. 红外线",
          "C. 载波电流",
          "D. 卫星通信"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 38,
        "type": "single",
        "question": "当 AC 为旁挂式组网时，如果数据是直接转发，则数据流（）AC;如果数据是隧道转发模式，则数据流（）AC。",
        "options": [
          "A. 不经过，经过",
          "B. 不经过，不经过",
          "C. 经过，经过",
          "D. 经过，不经过"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 39,
        "type": "single",
        "question": "在STP网络中，可以通过配置（）来指定根桥。",
        "options": [
          "A. 桥优先级",
          "B. 端口速率",
          "C. 双工模式",
          "D. 管理IP"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 40,
        "type": "single",
        "question": "现代的病毒木马融合了（）这些新技术。",
        "options": [
          "A. 进程注入",
          "B. 注册表隐藏",
          "C. 漏洞扫描",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 41,
        "type": "single",
        "question": "当路由器的主控板发生故障，以下选项中不可能发生的是（）。",
        "options": [
          "A. 路由器自动切换到备用主控板进行工作",
          "B. 转发数据包出现丢包情况",
          "C. 切换备用主控板失败，路由器宕机",
          "D. 路由器正常工作"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 42,
        "type": "single",
        "question": "下列哪个协议可提供“ping”和“traceroute”这样的故障诊断功能（）。",
        "options": [
          "A. ICMP",
          "B. IGMP",
          "C. ARP",
          "D. RARP"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 43,
        "type": "single",
        "question": "职业道德是一种（）的约束机制。",
        "options": [
          "A. 强制性",
          "B. 非强制性",
          "C. 随意性",
          "D. 自发性"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 44,
        "type": "single",
        "question": "关于职业道德的特征，表述不正确的是（）。",
        "options": [
          "A. 鲜明的职业性",
          "B. 适用范围上的广泛性",
          "C. 相对稳定性和连续性",
          "D. 一定的强制性"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 45,
        "type": "single",
        "question": "下列（）属于职业道德的社会功能。",
        "options": [
          "A. 提高社会道德水平",
          "B. 规范职业活动",
          "C. 整合职业活动",
          "D. 引导职业活动向和谐方向发展"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 46,
        "type": "single",
        "question": "社会主义职业道德的核心是（）。",
        "options": [
          "A. 爱岗敬业",
          "B. 诚实守信",
          "C. 为人民服务",
          "D. 忠于革命事业"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 47,
        "type": "single",
        "question": "职业是人们在社会中所从事的作为谋生手段的工作，以下选项不属于职业的特征的是（）。",
        "options": [
          "A. 目的性",
          "B. 社会性",
          "C. 群体性",
          "D. 个体性"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 48,
        "type": "single",
        "question": "（）给公司带来了最大的安全风险。",
        "options": [
          "A. 临时工",
          "B. 咨询人员",
          "C. 离职人员",
          "D. 当前员工"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 49,
        "type": "single",
        "question": "（）负有决定信息分类级别的责任。",
        "options": [
          "A. 用户",
          "B. 数据所有者",
          "C. 审计员",
          "D. 安全官"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 50,
        "type": "single",
        "question": "终端安全管理目标:规范支撑系统中终端用户的行为，降低来自支撑系统终端的安全威胁，可解决（）问题。",
        "options": [
          "A. 终端接入和配置管理;终端账号、秘密、漏洞补丁等系统安全管理;桌面及主机设置管理;终端防病毒管理",
          "B. 终端账号、秘密、漏洞补丁等系统安全管理;桌面及主机设置管理;终端防病毒管理",
          "C. 终端接入和配置管理;桌面及主机设置管理;终端防病毒管理",
          "D. 终端接入和配置管理;终端账号、秘密、漏洞补丁等系统安全管理;桌面及主机设置管理"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 51,
        "type": "single",
        "question": "一台完整的冯·诺依曼型计算机的硬件系统应包含（）。",
        "options": [
          "A. CPU、运算器、存储器、输入设备和输出设备",
          "B. CPU、存储器、输入设备和输出设备",
          "C. CPU、辅助存储器、输入设备和输出设备",
          "D. CPU、辅助存储器、键盘和显示器"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 52,
        "type": "single",
        "question": "在输入输出控制方法中，采用（）可以使得设备与主存间的数据块传送无需CPU干预。",
        "options": [
          "A. 程序控制输入输出",
          "B. 中断",
          "C. DMA",
          "D. 总线控制"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 53,
        "type": "single",
        "question": "网卡的主要功能不包括（）。",
        "options": [
          "A. 将计算机连接到通信介质上",
          "B. 进行电信号匹配",
          "C. 实现数据传输",
          "D. 网络互连"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 54,
        "type": "single",
        "question": "将十进制的整数化为二进制整数的方法是（）。",
        "options": [
          "A. 乘以二取整法",
          "B. 除以二取整法",
          "C. 乘以二取小数法",
          "D. 除以二取余法"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 55,
        "type": "single",
        "question": "下列系统软件与应用软件的相互关系中，正确的是（）。",
        "options": [
          "A. 两者互为基础",
          "B. 两者之间没有任何关系",
          "C. 前者以后者为基础",
          "D. 后者以前者为基础"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 56,
        "type": "single",
        "question": "下列选项中，不属于进程三种基本状态的是（）。",
        "options": [
          "A. 运行态",
          "B. 就绪态",
          "C. 后备态",
          "D. 阻塞态"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 57,
        "type": "single",
        "question": "在Linux系统中，（）命令可以将普通用户转换为超级用户。",
        "options": [
          "A. super",
          "B. passwd",
          "C. tar",
          "D. su"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 58,
        "type": "single",
        "question": "下列选项属于移动操作系统的是（）。",
        "options": [
          "A. Linux",
          "B. Android",
          "C. Windows 10",
          "D. Windows 2016 Server"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 59,
        "type": "single",
        "question": "下列选项中，不属于数据库管理的是（）。",
        "options": [
          "A. 数据库的建立",
          "B. 数据库的调整",
          "C. 数据库的监控",
          "D. 数据库的校对"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 60,
        "type": "single",
        "question": "在SQL数据库中，（）语句能校验整数列i的值不小于1不大于10。",
        "options": [
          "A. i BETWEEN 1 AND 10",
          "B. i BETWEEN 0 AND 11",
          "C. i IN INTERVAL(0,11)",
          "D. i IN INTERVAL(1,10)"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 61,
        "type": "single",
        "question": "在七十年代末，国际标准化组织 ISO 提出了开放系统互连参考模型。协议分层大大简化了网络协议的复杂性，在 OSI7 层模型中，网络层的功能主要是（）。",
        "options": [
          "A. 在信道上传输原始的比特流",
          "B. 加强物理层数据传输原始比特流的功能并且进行流量调控",
          "C. 确定数据包从源端到目的端如何选择路由",
          "D. 确保到达对方的各段信息正确无误"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 62,
        "type": "single",
        "question": "TCP/IP协议是公开发布的，数据包在网络上通常是明码传送，容易被（）。",
        "options": [
          "A. 窃听和欺骗",
          "B. 代码",
          "C. 行为监测法",
          "D. 软件模拟法"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 63,
        "type": "single",
        "question": "RIP协议 是在（）之上的一种路由协议。",
        "options": [
          "A. Ethernet",
          "B. IP",
          "C. TCP",
          "D. UDP"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 64,
        "type": "single",
        "question": "SMTP 协议是工作在（）。",
        "options": [
          "A. 网络层",
          "B. 传输层",
          "C. 会话层",
          "D. 应用层"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 65,
        "type": "single",
        "question": "当路由器接收到报文后，根据其目的 IP 地址在路由表中查询没有对应的表项时，采取的处理方式是（）。",
        "options": [
          "A. 丢掉该分组",
          "B. 将该分组分片",
          "C. 转发该分组",
          "D. 以上答案均不对"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 66,
        "type": "single",
        "question": "AP的主要功能为（）。",
        "options": [
          "A. 提供无线覆盖",
          "B. 鉴权",
          "C. 计费",
          "D. 加密"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 67,
        "type": "single",
        "question": "当无线通信过程中信号强度太弱、错误率较高时，无线客户端会切换到其它无线 AP 的信道，这个过程称为（）。",
        "options": [
          "A. 关联",
          "B. 重关联",
          "C. 漫游",
          "D. 负载平衡"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 68,
        "type": "single",
        "question": "下面关于双链路备份组网中，描述不正确的是（）。",
        "options": [
          "A. 双链路备份技术在网络重要节点提高了网络可靠性，保证了业务稳定",
          "B. 备 AC 要一直处于上电状态",
          "C. 在 AP 与主备 AC 建立主备链路的过程中，先建立的链路一定为主链路",
          "D. 主备 AC 上的网络业务配置要保持一致"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 69,
        "type": "single",
        "question": "链路聚合成员端口应当按照一定要求和配置，以下可以不满足的选项是（）。",
        "options": [
          "A. 端口成员速率一致",
          "B. 端口成员同属一个VLAN",
          "C. 端口成员所用传输介质相同",
          "D. 端口成员协商模式一致"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 70,
        "type": "single",
        "question": "防火墙通过（）来阻塞邮件附件中的病毒。",
        "options": [
          "A. 数据控制",
          "B. 连接控制",
          "C. ACL控制",
          "D. 协议控制"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 71,
        "type": "single",
        "question": "以下措施不能用来避免网络风暴的是（）。",
        "options": [
          "A. 交换机开启stp协议",
          "B. 交换机的端口开启边缘端口功能",
          "C. 仅采用路由器三层接口完成接入",
          "D. 网络设计时避免成环的网络结构"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 72,
        "type": "single",
        "question": "arp命令的格式中（）表示显示地址映射表项。",
        "options": [
          "A. arp",
          "B. arp -a",
          "C. arp -d inet_addr",
          "D. arp -s inet_addr phys_addr"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 73,
        "type": "single",
        "question": "以下对职业的内涵描述中，正确的是?",
        "options": [
          "A. 职业需要专业的知识与技能",
          "B. 职业不一定需要参与社会分工",
          "C. 通过工作获得的财富只包含物质财富",
          "D. 合理的报酬就是通过劳动后每月获得的薪水"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 74,
        "type": "single",
        "question": "职业道德是指从事一定职业劳动的人们，在长期的职业活动中形成的（）。",
        "options": [
          "A. 行为规范",
          "B. 操作程序",
          "C. 劳动技能",
          "D. 思维习惯"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 75,
        "type": "single",
        "question": "下列选项中属于职业道德范畴的是（）。",
        "options": [
          "A. 企业经营业绩",
          "B. 企业发展战略",
          "C. 员工的技术水平",
          "D. 人们的内心信念"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 76,
        "type": "single",
        "question": "市场经济条件下，职业道德最终将对企业起到（）的作用。",
        "options": [
          "A. 决策科学化",
          "B. 提高竞争力",
          "C. 决定经济效益",
          "D. 决定前途于命运"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 77,
        "type": "single",
        "question": "以下哪个选项最准确地描述了职业道德的基本内涵?",
        "options": [
          "A. 遵守法律法规和组织规章制度",
          "B. 追求个人利益和财富积累",
          "C. 维护客户利益和满足其需求",
          "D. 保持良好的道德品质和职业操守"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 78,
        "type": "single",
        "question": "职业道德的核心原则是什么?",
        "options": [
          "A. 个人发展和成就",
          "B. 真诚和诚信",
          "C. 利润最大化",
          "D. 社会责任和公益责任"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 79,
        "type": "single",
        "question": "各种职业集体对从业人员的道德要求，总是从本职业的活动和交往的内容和方式出发，适应于本职业活动的客观环境和具体条件。这说明职业道德具有（）的特点。",
        "options": [
          "A. 实践性",
          "B. 时代性",
          "C. 客观性",
          "D. 多样性"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 80,
        "type": "single",
        "question": "以下关于职业道德的说法中，你认为不正确的是（）。",
        "options": [
          "A. 任何职业道德的适用范围都不是普遍的，而是特定的、有限的",
          "B. 职业道德的形式因行业不同而有所不同",
          "C. 职业道德不具有时代性",
          "D. 职业道德主要适用于走上社会岗位的成年人"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 81,
        "type": "single",
        "question": "职业道德是一种内在的、（）的约束机制。",
        "options": [
          "A. 强制性",
          "B. 非强制性",
          "C. 随意性",
          "D. 自发性"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 82,
        "type": "single",
        "question": "下列关于职业道德的说法中，你认为正确的是（）。",
        "options": [
          "A. 有职业道德的人一定能胜任工作",
          "B. 没有职业道德的人干不好任何工作",
          "C. 职业道德有时起作用，有时不起作用",
          "D. 职业道德无关紧要，可有可无"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 83,
        "type": "single",
        "question": "下列说法中不正确的是（）。",
        "options": [
          "A. 职业道德有利于协调职工与领导之间的关系",
          "B. 职业道德有利于协调职工与企业之间的关系",
          "C. 如果企业职工不遵守企业规章制度，是因为规章制度不合理",
          "D. 职业道德是企业文化的重要组成部分"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 84,
        "type": "single",
        "question": "职业道德修养中，以下哪个方面是至关重要的?",
        "options": [
          "A. 个人利益追求",
          "B. 持续学习和自我提升",
          "C. 管理层的指导",
          "D. 追求权力和地位"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 85,
        "type": "single",
        "question": "要做到遵纪守法，对每个职工来说，必须做到（）。",
        "options": [
          "A. 有法可依",
          "B. 反对“管”“卡”“压”",
          "C. 反对自由主义",
          "D. 努力学法、知法、守法、用法"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 86,
        "type": "single",
        "question": "以下不属于爱岗敬业的具体要求是（）。",
        "options": [
          "A. 树立职业理想",
          "B. 强化职业责任",
          "C. 提高职业技能",
          "D. 抓住择业机遇"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 87,
        "type": "single",
        "question": "遵纪守法是指职业人员应当（）。",
        "options": [
          "A. 追逐个人利益",
          "B. 遵守行业规范和法律法规",
          "C. 追求权力和地位",
          "D. 忽视职业道德要求"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 88,
        "type": "single",
        "question": "下列哪一项没有违反诚实守信的要求?",
        "options": [
          "A. 保守企业秘密",
          "B. 派人打进竞争对手内部，增强竞争优势",
          "C. 根据服务对象来决定是否遵守承诺",
          "D. 凡有利于企业利益的行为"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 89,
        "type": "single",
        "question": "积极参加（）是职业道德修养的根本途径。",
        "options": [
          "A. 职业实践",
          "B. 职业教育",
          "C. 职业评级",
          "D. 职业素养"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 90,
        "type": "single",
        "question": "勤奋进取的基本要求之一是（）。",
        "options": [
          "A. 避免参与工作培训和学习机会",
          "B. 不主动接受新的工作挑战",
          "C. 主动学习和提升自己的专业知识和技能",
          "D. 不愿意与他人分享工作经验和知识"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 91,
        "type": "single",
        "question": "“天时不如地利，地利不如人和”强调的是（）。",
        "options": [
          "A. 地理优势",
          "B. 团结互助",
          "C. 一团和气",
          "D. 领导和群众关系融洽"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 92,
        "type": "single",
        "question": "在日常的工作中，要发挥社会主义市场经济机制的积极作用，必须增强（）。",
        "options": [
          "A. 个人意识、协作意识、效率意识、物质利益观念、改革开放意识",
          "B. 个人意识、竞争意识、公平意识、民主法制意识、开拓创新精神",
          "C. 自立意识、竞争意识、效率意识、民主法制意识、开拓创新精神",
          "D. 自立意识、协作意识、公平意识、物质利益观念、改革开放意识"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 93,
        "type": "single",
        "question": "有效的团队合作需要具备的基本能力之一是（）。",
        "options": [
          "A. 忽视团队目标，只关注个人目标",
          "B. 不积极参与团队讨论和决策",
          "C. 共享工作责任，共同努力完成任务",
          "D. 忽视他人的工作进展和需求"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 94,
        "type": "single",
        "question": "操作者操作设备必须严格遵守设备的（）。",
        "options": [
          "A. 标准操作规程",
          "B. 相关安全制度",
          "C. 公司制度",
          "D. 岗位操作规程"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 95,
        "type": "single",
        "question": "在使用设备时，爱护设备与安全操作的基本要求不包括（）。",
        "options": [
          "A. 重视设备安全规则，规范操作",
          "B. 保持设备清洁和整洁",
          "C. 遵守设备安全规则，正确使用和维护设备",
          "D. 按照个人习惯操作设备"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 96,
        "type": "single",
        "question": "某机械厂的一位领导说:机械工业工艺复杂，技术密集，工程师在图纸上画得再好、再精确，工人操作中如果差那么一毫米，最终出来的就可能是废品。这段话主要强调（）素质的重要性。",
        "options": [
          "A. 专业技能",
          "B. 思想政治",
          "C. 职业道德",
          "D. 身心素质"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 97,
        "type": "single",
        "question": "勇于创新的基本含义包括（）。",
        "options": [
          "A. 不接受任何改变和创新",
          "B. 不关注工作质量的提升和创新",
          "C. 提出新的想法和方法，推动进步",
          "D. 遵循传统工作模式，为稳妥尽量不改变"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 98,
        "type": "single",
        "question": "在工作中，勇于创新与精益求精的基本要求不包括（）。",
        "options": [
          "A. 关注工作效率和质量的提升",
          "B. 愿意尝试新的工作方法和技术",
          "C. 推动工作流程改进和质量提升",
          "D. 忽视个人职责，不关注工作成果"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 99,
        "type": "single",
        "question": "国际规定，电压（）伏以下不必考虑防止电击的危险。",
        "options": [
          "A. 36伏",
          "B. 65伏",
          "C. 25伏",
          "D. 220伏"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 100,
        "type": "single",
        "question": "漏电保护器的使用是防止（）。",
        "options": [
          "A. 触电事故",
          "B. 电压波动",
          "C. 电荷超负荷",
          "D. 温度过高"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 101,
        "type": "single",
        "question": "电器漏电时的处理方法是?",
        "options": [
          "A. 用绝缘手套将插头拔下来",
          "B. 用棉布包裹住电线",
          "C. 用湿毛巾擦拭漏电部分",
          "D. 设备断电并修理电器"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 102,
        "type": "single",
        "question": "操作系统的基本类型主要有（）。",
        "options": [
          "A. 批处理系统、分时系统及多任务系统",
          "B. 实时操作系统、批处理操作系统及分时操作系统",
          "C. 单用户系统、多用户系统及批处理系统",
          "D. 实时系统、分时系统和多用户系统"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 103,
        "type": "single",
        "question": "下操作系统中属于网络操作系统的是（）。",
        "options": [
          "A. MS-DOS",
          "B. Windows98",
          "C. UNIX",
          "D. Windows Server"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 104,
        "type": "single",
        "question": "中断处理的4个阶段为（）。",
        "options": [
          "A. 保存现场、执行中断处理程序、分析中断源、恢复现场",
          "B. 保存现场、恢复现场、执行中断处理程序、分析中断源",
          "C. 保存现场、分析中断源、执行中断处理程序、恢复现场",
          "D. 分析中断源、保存现场、执行中断处理程序、恢复现场"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 105,
        "type": "single",
        "question": "现代操作系统的两个基本特征是（）和资源共享。",
        "options": [
          "A. 多道程序设计",
          "B. 中断处理",
          "C. 程序的并发执行",
          "D. 实现分时与实时处理"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 106,
        "type": "single",
        "question": "计算机系统的组成包括（）。",
        "options": [
          "A. 程序和数据",
          "B. 计算机硬件和计算机软件",
          "C. 处理器和内存",
          "D. 处理器，存储器和外围设备"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 107,
        "type": "single",
        "question": "计算机中，负责指挥计算机各部分自动协调一致地进行工作的部件是（）。",
        "options": [
          "A. 运算器",
          "B. 控制器",
          "C. 存储器",
          "D. 总线"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 108,
        "type": "single",
        "question": "下面关于cache的叙述，错误的是（）。",
        "options": [
          "A. 高速缓冲存储器简称cache",
          "B. cache处于主存与CPU之间",
          "C. 程序访问的局部性为cache的引入提供了理论依据",
          "D. cache的速度远比CPU的速度慢"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 109,
        "type": "single",
        "question": "当代计算机的最主要的体系结构称为是（）。",
        "options": [
          "A. 冯·诺依曼机",
          "B. 非冯·诺依曼机",
          "C. 图灵机",
          "D. PASCAL机"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 110,
        "type": "multiple",
        "question": "加密的强度主要取决于（）。",
        "options": [
          "A. 算法的强度",
          "B. B、密钥的保密性",
          "C. C、明文的长度",
          "D. D、密钥的强度"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          3
        ]
      },
      {
        "id": 111,
        "type": "multiple",
        "question": "AIX中采用没有警告的快速关机可以用（）或（）命令。",
        "options": [
          "A. #shutdown -F",
          "B. B、#halt",
          "C. C、backup",
          "D. D、restore"
        ],
        "analysis": "",
        "answer": [
          0,
          1
        ]
      },
      {
        "id": 112,
        "type": "multiple",
        "question": "以下是按照计算机规模分类的是（）。",
        "options": [
          "A. 巨型机",
          "B. B、移动电脑",
          "C. C、大型机",
          "D. D、小型机",
          "E. E、微型机"
        ],
        "analysis": "",
        "answer": [
          0,
          2,
          3,
          4
        ]
      },
      {
        "id": 113,
        "type": "multiple",
        "question": "电力监控系统安全防护的总体原则是（）。",
        "options": [
          "A. 安全分区",
          "B. B、网络专用",
          "C. C、横向隔离",
          "D. D、纵向认证"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 114,
        "type": "multiple",
        "question": "以下哪些属于IX1500的RAID特性?（）",
        "options": [
          "A. RAID级别转换",
          "B. B、RAID容量扩展",
          "C. C、RAID缓存掉电72小时保护",
          "D. D、RAID6支持"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 115,
        "type": "multiple",
        "question": "元数据的来源包括（）。",
        "options": [
          "A. 通过用户交互、定义和数据分析定义业务元数据",
          "B. B、通过某些维护支持活动可以将有关数据的质量描述和其他发现添加到源数据储存库中，或从IT系统中获取元数据",
          "C. C、可以在汇总层面或者细节层面识别元数据",
          "D. D、对相关元数据的适当管理和在元数据之间导航是重要的使用需求"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 116,
        "type": "multiple",
        "question": "下列一组数中，比八进制37大的有（）。",
        "options": [
          "A. 11011001B",
          "B. B、75D",
          "C. C、37D",
          "D. D、2A7H",
          "E. E、50D"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      {
        "id": 117,
        "type": "multiple",
        "question": "计算机后门的作用包括（）。",
        "options": [
          "A. 方便下次直接进入",
          "B. B、监视用户所有隐私",
          "C. C、监视用户所有行为",
          "D. D、完全控制用户主机"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 118,
        "type": "multiple",
        "question": "由于跨站脚本攻击漏洞而造成的危害的是（）。",
        "options": [
          "A. 网站挂马",
          "B. B、盗窃企业重要的具有商业价值的资料",
          "C. C、访问未授权的页面和资源",
          "D. D、盗取各类用户账号"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          3
        ]
      },
      {
        "id": 119,
        "type": "multiple",
        "question": "拒绝服务攻击方式包括（）。",
        "options": [
          "A. 利用大量数据挤占网络带宽",
          "B. B、利用大量请求消耗系统性能",
          "C. C、利用协议实现缺陷",
          "D. D、利用系统处理方式缺陷"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 120,
        "type": "multiple",
        "question": "社会工程学利用的人性弱点包括（）。",
        "options": [
          "A. 信任权威",
          "B. B、信任共同爱好",
          "C. C、期望守信",
          "D. D、期望社会认可"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 121,
        "type": "multiple",
        "question": "以下哪些是IPSAN的优点:（）。",
        "options": [
          "A. 实现弹性扩展的存储网络，能自适应应用的改变",
          "B. B、已经验证的传输设备保证运行的可靠性",
          "C. C、以太网从1G向10G及更高速过渡，只需通过简单的升级便可得到极大的性能提升，并保护投资",
          "D. D、大量熟悉的网络技术和管理的人才减少培训和人力成本",
          "E. E、IP跨长距离扩展能力，轻松实现远程数据复制和灾难恢复"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      {
        "id": 122,
        "type": "multiple",
        "question": "异常信息包含了针对开发和维护人员调试使用的系统信息，为了避免攻击者发现潜在缺陷并进行攻击的情况，在设计异常信息时应注意（）。",
        "options": [
          "A. 使用结构化异常处理机制",
          "B. B、程序发生异常时，应终止当前业务，并对当前业务进行回滚操作",
          "C. C、通信双方中一方在一段时间内未作反应，另一方自动结束会话",
          "D. D、程序发生异常时，应在日志中记录详细的错误消息"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 123,
        "type": "multiple",
        "question": "服务台人员在为用户提供支持服务时，（）。",
        "options": [
          "A. 必须礼貌、真诚的提供服务",
          "B. B、对待用户应耐心",
          "C. C、仔细倾听用户的描述",
          "D. D、提出积极的建议"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 124,
        "type": "judge",
        "question": "IP地址219.25.23.56的缺省子网掩码有16位。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 125,
        "type": "judge",
        "question": "ipv6 地址 1070:0:0:0:8:0:0:417a 可以简写为 1070::8::417a。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 126,
        "type": "judge",
        "question": "TCP 连接的建立是一个三次握手的过程，而 TCP 连接的终止则要经过四次握手。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 127,
        "type": "judge",
        "question": "Ping命令的输出信息中包括目的地址、ICMP报文长度、序号、TTL值、以及往返时间。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 128,
        "type": "judge",
        "question": "网络规划设计的时候，应充分考虑用户功能需求、物理布局、设备类型、网络负载等综合情况。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 129,
        "type": "judge",
        "question": "养成职业道德习惯是职业道德教育的内容之一。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 130,
        "type": "judge",
        "question": "服从管理，不问对属于职业守则。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 131,
        "type": "judge",
        "question": "微型计算机的CPU主要由运算器和控制器组成。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 132,
        "type": "judge",
        "question": "文件误删除之后不要重启或者关闭系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 133,
        "type": "judge",
        "question": "计算机的软件是指计算机中的指令的集合。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 134,
        "type": "judge",
        "question": "计算机能直接执行机器语言程序。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 135,
        "type": "judge",
        "question": "一个完整的多媒体计算机系统，应包含三个组成部分，它们分别是文字处理系统、声音处理系统和图像处理系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 136,
        "type": "judge",
        "question": "在Windows系统中，对话框的形状是一个矩形框，在默认状态下，其大小是不能改变的。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 137,
        "type": "judge",
        "question": "DNS 工作于OSI 参考模型的网络层，在信道上传输原始的比特流。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 138,
        "type": "judge",
        "question": "IP报文中的部分字段的含义包含源mac地址。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 139,
        "type": "judge",
        "question": "220.0.9是B类IP地址。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 140,
        "type": "judge",
        "question": "由于 TCP 协议在建立连接和关闭连接时都采用三次握手制，所以 TCP 支持可靠传输。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 141,
        "type": "judge",
        "question": "UDP协议并不去处理报文的丢失、重复、时延、乱序等各种问题，而是让应用层来保证信息的可靠性传输。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 142,
        "type": "judge",
        "question": "DNS用来把具有可读性的MAC地址映射成IP地址。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 143,
        "type": "judge",
        "question": "二层交换机属于数据链路层设备，可以识别数据帧中的 mac 地址信息，根据 mac 地址转发数据，并将这些 mac 地址与对应的端口信息记录在自己的 mac 地址表中。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 144,
        "type": "judge",
        "question": "功率较小的室内分布系统需环境评估通过后方能建设。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 145,
        "type": "judge",
        "question": "输出功率等于和小于15W的移动式无线电通讯设备，其电磁辐射可以免于管理，如陆上、海上移动通讯设备以及步话机等。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 146,
        "type": "judge",
        "question": "操作系统的基本类型主要有实时操作系统、批处理操作系统及分时操作系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 147,
        "type": "judge",
        "question": "主要由于linux小部分由汇编大部分用C语言编写原因，使linux易于移植。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 148,
        "type": "judge",
        "question": "打印机，键盘，鼠标器都属于输入设备的。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 149,
        "type": "judge",
        "question": "可回溯性是网络协议的特点。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 150,
        "type": "judge",
        "question": "用于描述DNS数据库段的数据是一种ASCII文本数据。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 151,
        "type": "judge",
        "question": "错误检测和纠正网络协议实现可靠传输的方法之一。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 152,
        "type": "judge",
        "question": "根据网络故障的性质，可将网络故障分为路由故障和线路故障。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 153,
        "type": "judge",
        "question": "如果无法通过域名访问特定网站，nslookup命令可用于检查域名解析是否正常。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 154,
        "type": "judge",
        "question": "用人单位在试用期解除劳动合同的，可以随时解除，无需向劳动者说明理由。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 155,
        "type": "judge",
        "question": "根据《中华人民共和国劳动法》，劳动者每日工作时间标准是8小时。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 156,
        "type": "judge",
        "question": "依当事人一方的意思表示即可发生抵销效力的权利，称为抵销权。该权利属于形成权。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 157,
        "type": "judge",
        "question": "《民法典》自2021年1月1日起施行。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 158,
        "type": "judge",
        "question": "侵害他财产的，财产的损失应当按照财产生成时财产的市场价值或其他方式计算。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 159,
        "type": "judge",
        "question": "民法典首次明确禁止性骚扰，违背他人意愿，以言语、肢体行为等方式对他人实施性骚扰的，受害人有权依法请求行为人承担民事责任。机关、企业、学校等单位应当采取合理的预防、受理投诉调查处置等措施，防止和制止利用职权、从属关系等实施性骚扰。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 160,
        "type": "judge",
        "question": "根据《民法典》的规定，民事主体可以依法查询自己的信用评价，发现信用评价不当的，可以自行采取删除这一必要措施。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 161,
        "type": "judge",
        "question": "当网络拓扑发生变化时，交换机不会自动启用备份链路。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 162,
        "type": "judge",
        "question": "STP通过在交换机之间传递一种特殊的协议报文（BPDU）来确定网络的拓扑结构。BPDU中包含了足够的信息来保证交换机完成生成树计算。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 163,
        "type": "judge",
        "question": "默认路由通常会在出口网络中使用。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      }
    ]
  },
  {
    "set_name": "2026考证顺序刷题4-B-1",
    "items": [
      {
        "id": 1,
        "type": "single",
        "question": "Windows server 2016添加DHCP服务器角色时，系统会提示（）是服务器安装的先决的条件之一。",
        "options": [
          "A. 管理员帐户使用了弱密码",
          "B. 管理员帐户使用了强密码",
          "C. guest帐户使用了弱密码",
          "D. guest帐户使用了强密码"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 2,
        "type": "single",
        "question": "成功安装 DHCP 服务器角色后，需要对 DHCP 服务器进行授权和配置，以下描述不正确的是（）。",
        "options": [
          "A. 如果在域环境中安装DHCP，则必须执行授权步骤使 DHCP 服务器在域中运行",
          "B. 使用 DHCP控制台创建新 DHCP 作用域时，在“添加排除和延迟”页面上，可以指定希望服务器分配的地址池范围",
          "C. 安装在 active directory 域中未经授权的 DHCP 服务器无法正常工作，并且不会将 IP 地址租给 DHCP 客户端",
          "D. 在 Windows 桌面上，打开“开始”菜单并选择“Windows管理工具”>“DHCP”，可以进入DHCP控制台界面"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 3,
        "type": "single",
        "question": "Windows Server 2012系统中，可以在cmd窗口中使用appcmd命令检查IIS中是否启用了“目录浏览”功能。appcmd工具的所在目录是（）。",
        "options": [
          "A. C:\\Windows32\\System\\inetsrv\\",
          "B. C:\\Windows\\System32\\inetsrv\\",
          "C. C:\\Windows\\System\\inetsrv\\",
          "D. C:\\Windows\\System32\\InputMethod\\"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 4,
        "type": "single",
        "question": "Windows Server 2012系统中，检查IIS中是否禁用了“目录浏览”功能，可以在cmd窗口中使用命令（）进行检查。",
        "options": [
          "A. C:\\Windows\\system32\\inetsrv目录下的appcmd.exe",
          "B. C:\\Windows32\\System\\inetsrv目录下的cmd.exe",
          "C. C:\\Windows\\System32\\configuration目录下的appcmd.exe",
          "D. C:\\Windows\\system32\\inetsrv目录下的cmd.exe"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 5,
        "type": "single",
        "question": "IIS在默认情况下产生错误的时候，会给客户端反馈详细的错误信息，这将导致服务器一些敏感信息或文件被泄露，我们可以通过点击功能视图中的（）图标，对服务器进行加固。",
        "options": [
          "A. 错误页",
          "B. WebDAV",
          "C. 处理程序映射",
          "D. .NET错误页"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 6,
        "type": "single",
        "question": "默认情况下，IIS管理中错误页功能，对不同的错误状态设置了（）。",
        "options": [
          "A. 不同的响应页面",
          "B. 相同的响应页面",
          "C. 没有响应页面",
          "D. 用户定义的响应页面"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 7,
        "type": "single",
        "question": "安全加固管理中，IIS错误页配置方法正确的是（）。",
        "options": [
          "A. 设置自定义错误页中如含有中文字符，不建议使用GB2312编码",
          "B. 在IIS错误页功能页中，对不同的错误状态设置自定义相应页面，避免网站敏感信息泄露",
          "C. 可以通过修改.NET错误页功能来实现",
          "D. 错误页设置不可以通过直接修改原有的报错页面文件路径或错误页内容来实现"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 8,
        "type": "single",
        "question": "Windows server 2008 中自带的 FTP 服务中，加固FTP匿名登录漏洞时，我们必须在FTP身份验证中（）。",
        "options": [
          "A. 启用匿名身份验证",
          "B. 禁用匿名身份验证",
          "C. 启用基本身份验证",
          "D. 禁用基本身份验证"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 9,
        "type": "single",
        "question": "以 Windows server 2008 中自带的 FTP 服务为例，（）功能可以禁用匿名用户登录。",
        "options": [
          "A. FTP身份验证",
          "B. FTP授权规则",
          "C. FTP请求筛选",
          "D. FTP IPv4地址和域限制"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 10,
        "type": "single",
        "question": "Windows server 2012 IIS中“添加FTP站点”页面，在“身份验证和授权信息”身份验证（），授权允许访问选择“所有用户”，权限勾选“读取”，则FTP匿名登录会被禁用。",
        "options": [
          "A. 匿名和基本都勾选",
          "B. 只勾选基本",
          "C. 匿名和基本都不勾选",
          "D. 只勾选匿名"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 11,
        "type": "single",
        "question": "已经新建了两个用于登录FTP的账户，在IIS配置FTP用户隔离时，FTP服务器根目录下LocalUser目录中，新建的隔离用户目录必须（），否则无法实现用户隔离。",
        "options": [
          "A. 名称和FTP账户用户名称必须保持一致",
          "B. 随便定义名称",
          "C. 定义为ftp1和ftp2",
          "D. 定义为Local和User"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 12,
        "type": "single",
        "question": "以 Windows server 2008 中自带的 FTP 服务为例，通过点击功能视图中的“FTP IPv4地址和域限制”图标，可以指定允许访问FTP站点的（）。",
        "options": [
          "A. 源IP地址",
          "B. 目标IP地址",
          "C. 源端口",
          "D. 目标端口"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 13,
        "type": "single",
        "question": "FTP 服务进行安全加固时，可以使用 VPN 等安全接入手段连接到 FTP 服务器端，同时使用安全组来控制访问源（）。",
        "options": [
          "A. 端口",
          "B. 用户",
          "C. 文档",
          "D. IP"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 14,
        "type": "single",
        "question": "VLAN是将一个物理局域网进行（）划分，所有同一个VLAN内的各个工作站无需放置在同一个物理空间。",
        "options": [
          "A. 虚拟",
          "B. 物理",
          "C. 逻辑",
          "D. 交换"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 15,
        "type": "single",
        "question": "VLAN采用的主要协议为（）。",
        "options": [
          "A. 802.1q",
          "B. 802.11",
          "C. 802.3",
          "D. 802.15"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 16,
        "type": "single",
        "question": "以下关于VLAN的主要用途描述错误的是（）。",
        "options": [
          "A. 合并广播域",
          "B. 合并冲突域",
          "C. 隔离广播域",
          "D. 隔离用户"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 17,
        "type": "single",
        "question": "以下不是VLAN的作用的是（）。",
        "options": [
          "A. 便于逻辑工作组的管理与通信",
          "B. 隔离广播域，防止广播风暴",
          "C. 提供更高的安全性",
          "D. 增加网络传输速度"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 18,
        "type": "single",
        "question": "以下哪个选项不是VLAN的常见用途?（）",
        "options": [
          "A. 提供网络安全隔离",
          "B. 优化网络传输性能",
          "C. 简化网络管理和配置",
          "D. 支持多个无线网络的覆盖"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 19,
        "type": "single",
        "question": "以下关于VLAN的叙述中，属于其优点的是（）。",
        "options": [
          "A. 允许逻辑地划分网段",
          "B. 减少了冲突域的数量",
          "C. 增加了冲突域的大小",
          "D. 减少了广播域的数量"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 20,
        "type": "single",
        "question": "VLAN的优点之一是（）。",
        "options": [
          "A. 提高网络安全性",
          "B. 扩展物理网络范围",
          "C. 增加网络带宽",
          "D. 提供无线网络安全"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 21,
        "type": "single",
        "question": "在下面关于VLAN的定义中，不正确的是（）。",
        "options": [
          "A. native vlan",
          "B. tag vlan",
          "C. port vlan",
          "D. IEEE802.1Q vlan"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 22,
        "type": "single",
        "question": "在IEEE 802.1Q标准中，VLAN的定义方法使用的是（）。",
        "options": [
          "A. MAC地址",
          "B. IP地址",
          "C. VLAN标签",
          "D. 端口号"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 23,
        "type": "single",
        "question": "以下哪种模式用于将单个VLAN分配给交换机接口?（）",
        "options": [
          "A. access模式",
          "B. Trunk模式",
          "C. Hybrid模式",
          "D. High模式"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 24,
        "type": "single",
        "question": "当多个VLAN需要跨越两台物理交换机时，需要（）。",
        "options": [
          "A. 用三层端口连接两台交换机",
          "B. 用Trunk端口连接两台交换机",
          "C. 用路由器来连接两台交换机",
          "D. 在两台交换机上配置VLAN即可"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 25,
        "type": "single",
        "question": "单臂路由是指（）。",
        "options": [
          "A. 路由器和交换机在一起",
          "B. 路由器接在主干网上的一个交换设备上",
          "C. 路由器和工作站连在一起",
          "D. 单独的一个分支路由器"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 26,
        "type": "single",
        "question": "下列关于配置单臂路由的方法错误的是?（）",
        "options": [
          "A. 每个VLAN一个物理连接",
          "B. 交换机上，把连接到路由器的端口配置成Trunk类型的端口，并允许相关VLAN的帧通过",
          "C. 在路由器上需要创建子接口",
          "D. 交换机和路由器之间仅使用一条物理链路连接"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 27,
        "type": "single",
        "question": "当PC串口和交换机console口连接时，应使用（）。",
        "options": [
          "A. 直通线",
          "B. 反转线",
          "C. 交叉线",
          "D. 双绞线"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 28,
        "type": "single",
        "question": "Telnet协议工作在OSI七层结构中的（）。",
        "options": [
          "A. 网络层",
          "B. 传输层",
          "C. 表示层",
          "D. 应用层"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 29,
        "type": "single",
        "question": "用户可以通过修改HTTPS服务器的（），能有效地防止攻击者通过HTTPS服务标准端口号攻击设备，从而进一步增加设备的安全性。",
        "options": [
          "A. 证书文件",
          "B. 公钥文件",
          "C. 私钥文件",
          "D. 端口号"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 30,
        "type": "single",
        "question": "本地组账户被赋予了一定的权限，以便让它们具备（）计算机或访问本机资源的能力。",
        "options": [
          "A. 管理本地",
          "B. 管理远程",
          "C. 管理数据库",
          "D. 管理现实"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 31,
        "type": "single",
        "question": "Windows本地组账户可以包含（）。",
        "options": [
          "A. 本地用户账户",
          "B. 域用户账户",
          "C. 本地用户账户和域用户账户",
          "D. 只能包含本地计算机的内置账户"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 32,
        "type": "single",
        "question": "在设置账户密码时，默认要求用户的密码必须至少（）个字符，且不可包含用户账户名称或全名。",
        "options": [
          "A. 2",
          "B. 4",
          "C. 6",
          "D. 8"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 33,
        "type": "single",
        "question": "若要新建Test组，需要在（）对话框输入新建的组名Test。",
        "options": [
          "A. 组",
          "B. 计算机管理",
          "C. 本地用户和组",
          "D. 新建组"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 34,
        "type": "single",
        "question": "在Windows本地计算机上将本地用户添加到本地用户组的命令是（）。",
        "options": [
          "A. net user /add",
          "B. net user /delete",
          "C. net localgroup /add",
          "D. net localgroup /delete"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 35,
        "type": "single",
        "question": "Windows文件访问控制是用于（）的安全机制。",
        "options": [
          "A. 控制网络访问速度",
          "B. 控制文件传输协议",
          "C. 控制文件的访问和权限",
          "D. 控制网络设备配置"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 36,
        "type": "single",
        "question": "在Linux系统中，可以使用（）命令为创建账户。",
        "options": [
          "A. useradd",
          "B. userdel",
          "C. usermod",
          "D. groupadd"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 37,
        "type": "single",
        "question": "Linux文件权限中保存的信息不包括（）。",
        "options": [
          "A. 文件所有者的权限",
          "B. 文件所有者所在组的权限",
          "C. 其他用户的权限",
          "D. 文件失效时间"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 38,
        "type": "single",
        "question": "在Linux中，可以通过配置（）目录来存放硬件设备的特殊文件。",
        "options": [
          "A. /dev",
          "B. /bin",
          "C. /etc",
          "D. /home"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 39,
        "type": "single",
        "question": "在整个树状目录结构中，最顶层有（）个根目录。",
        "options": [
          "A. 一",
          "B. 二",
          "C. 三",
          "D. 四"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 40,
        "type": "single",
        "question": "在Linux中，可使用（）命令移动一个目录。",
        "options": [
          "A. mkdir",
          "B. rm",
          "C. mv",
          "D. cd"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 41,
        "type": "single",
        "question": "在Linux中，对于较多的文件适合使用（）或less命令查看。",
        "options": [
          "A. more",
          "B. many",
          "C. much",
          "D. big"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 42,
        "type": "single",
        "question": "在Linux中，创建的文件默认作为不可执行文件，因此没有（）权限。",
        "options": [
          "A. w",
          "B. x",
          "C. r",
          "D. b"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 43,
        "type": "single",
        "question": "Linux系统对普通文件默认的访问权限是（）。",
        "options": [
          "A. -rwxrwx---",
          "B. -rw-rw-r--",
          "C. wx------",
          "D. -rw-r--r--"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 44,
        "type": "single",
        "question": "文件隐藏属性chattr命令最常使用的属性是a和i，其中a属性表示文件的内容只能（），不能修改或删除。",
        "options": [
          "A. 减少",
          "B. 管理",
          "C. 访问",
          "D. 增加"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 45,
        "type": "single",
        "question": "补丁管理这一流程使企业可以对系统环境中的内部软件部署和（）进行控制。",
        "options": [
          "A. 维护",
          "B. 规划",
          "C. 修改",
          "D. 设置"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 46,
        "type": "single",
        "question": "以下哪个术语通常用于指代未经修复的已知漏洞?（）",
        "options": [
          "A. 错误",
          "B. 补丁",
          "C. 恶意软件",
          "D. 漏洞"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 47,
        "type": "single",
        "question": "防病毒软件升级的一个重要原因是（）。",
        "options": [
          "A. 增加系统的电源效率",
          "B. 提高网络连接速度",
          "C. 修复已知的病毒",
          "D. 添加新的游戏功能"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 48,
        "type": "single",
        "question": "在域名类型中，.edu表示的是（）。",
        "options": [
          "A. 工商企业",
          "B. 教育机构",
          "C. 非盈利组织",
          "D. 政府部门"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 49,
        "type": "single",
        "question": "域名中的顶级域（TLD）是指（）。",
        "options": [
          "A. 域名的第一个部分，用于标识网站所属的国家或地区",
          "B. 域名的最后一部分，通常表示域名的类型或性质",
          "C. 域名的中间部分，用于指定特定的网站",
          "D. 域名中的任意部分，可以是字母、数字或其他字符的组合"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 50,
        "type": "single",
        "question": "域名解析就是将好记的域名解析成（），然后在此地址的主机上将一个子目录与域名绑定。",
        "options": [
          "A. MAC地址",
          "B. 物理地址",
          "C. 逻辑地址",
          "D. IP地址"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 51,
        "type": "single",
        "question": "在域名解析中，DNS缓存是（）。",
        "options": [
          "A. 域名服务器的备份副本",
          "B. 域名的注册记录",
          "C. 临时存储的域名解析结果",
          "D. 域名的所有者信息"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 52,
        "type": "single",
        "question": "域名的注册步骤不包括（）。",
        "options": [
          "A. 选择注册商网站",
          "B. 选域名",
          "C. 准备身份证或企业营业执照",
          "D. 向客户收款"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 53,
        "type": "single",
        "question": "DNS服务包含了正向解析和（）解析。",
        "options": [
          "A. 网页",
          "B. 反向",
          "C. 同步",
          "D. 异步"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 54,
        "type": "single",
        "question": "对数据进行备份是为了保证数据的一致性和（）性，消除系统使用者和操作者的后顾之忧。",
        "options": [
          "A. 异步",
          "B. 破坏",
          "C. 完整",
          "D. 零碎"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 55,
        "type": "single",
        "question": "常用的数据备份方式包括完全备份、增量备份和（）备份。",
        "options": [
          "A. 差异",
          "B. 正常",
          "C. 减量",
          "D. 零碎"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 56,
        "type": "single",
        "question": "Windows数据备份通过Windows服务器系统内置的（）功能来对服务器中的重要数据信息进行自动备份的。",
        "options": [
          "A. 任务计划",
          "B. 计算机管理",
          "C. 计算机计划",
          "D. 电池计划"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 57,
        "type": "single",
        "question": "增量备份和差异备份的主要区别在于（）。",
        "options": [
          "A. 增量备份备份的数据更多",
          "B. 差异备份备份的数据更多",
          "C. 增量备份只备份与上次完全备份之后更改的数据",
          "D. 差异备份只备份与上次完全备份之后新增的数据"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 58,
        "type": "single",
        "question": "常用数据备份软件不包括（）。",
        "options": [
          "A. Ghost",
          "B. driveimage",
          "C. driver2driver",
          "D. Winstone"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 59,
        "type": "single",
        "question": "以下哪个工具可以用于在Linux系统中进行数据备份和恢复操作?（）",
        "options": [
          "A. Time Machine",
          "B. acronis True Image",
          "C. rsync",
          "D. Windows backup and Restore"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 60,
        "type": "single",
        "question": "网络管理的5大功能域是（）。",
        "options": [
          "A. 配置管理、故障管理、计费管理、性能管理和安全管理",
          "B. 配置管理、故障管理、计费管理、带宽管理和安全管理",
          "C. 配置管理、故障管理、成本管理、性能管理和安全管理",
          "D. 配置管理、用户管理、计费管理、性能管理和安全管理"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 61,
        "type": "single",
        "question": "ICMP协议属于 TCP/IP 网络中的网络层协议，ICMP报文封装在（）协议数据单元中传送，在网络中起着差错和拥塞控制的作用。",
        "options": [
          "A. IP",
          "B. TCP",
          "C. UDP",
          "D. PPP"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 62,
        "type": "single",
        "question": "ICMP测试的目的是什么（）。",
        "options": [
          "A. 确定消息是否能够到达目的地，如果不能，则确定可能的原因",
          "B. 保证网络中的所有活动都是受检测的",
          "C. 确定网络是否是跟据模型建立的",
          "D. 确定网络是处于控制模型还是用户模型"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 63,
        "type": "single",
        "question": "在（）输入“ping”命令，可进行网络连通测试。",
        "options": [
          "A. 资源管理器中",
          "B. 命令提示符后",
          "C. VB编辑器中",
          "D. Word文档中"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 64,
        "type": "single",
        "question": "在 Windows 中，tracert 命令的-h 选项表示（）。",
        "options": [
          "A. 指定主机名",
          "B. 指定最大跳步数",
          "C. 指定到达目标主机的时间",
          "D. 指定源路由"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 65,
        "type": "single",
        "question": "ISO定义的网络管理功能中，（）包括的功能有风险分析、网管系统保护等。",
        "options": [
          "A. 配置管理",
          "B. 故障管理",
          "C. 性能管理",
          "D. 安全管理"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 66,
        "type": "single",
        "question": "某客户端采用 ping 命令检测网络连接故障时，发现可以 ping 通 127.0.0.1 及本机的IP地址，但无法 ping 通同一网段内其他工作正常的计算机的 IP 地址。该客户端的故障可能是（）。",
        "options": [
          "A. TCP/IP 协议不能正常工作",
          "B. 本机网卡不能正常工作",
          "C. 本机网络接口故障",
          "D. DNS 服务器地址设置错误"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 67,
        "type": "single",
        "question": "下列哪项是物理层故障的例子?（）。",
        "options": [
          "A. 封装不正确",
          "B. STP 配置不正确",
          "C. ARP 映射不正确",
          "D. 时钟频率不正确"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 68,
        "type": "single",
        "question": "广播流量过多一般表明（）出了问题。",
        "options": [
          "A. 物理层",
          "B. 数据链路层",
          "C. 网络层",
          "D. 传输层"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 69,
        "type": "single",
        "question": "流量控制实际上是对（）的控制。",
        "options": [
          "A. 发送方的数据流量",
          "B. 接收方的数据流量",
          "C. 发送、接收方的数据流量",
          "D. 链路上任意两结点的数据流量"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 70,
        "type": "single",
        "question": "会话劫持的这种攻击形式破坏了下列哪一项内容（）。",
        "options": [
          "A. 网络信息的抗抵赖性",
          "B. 网络信息的保密性",
          "C. 网络服务的可用性",
          "D. 网络信息的完整性"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 71,
        "type": "single",
        "question": "在下列这些网络攻击模型的攻击过程中，端口扫描攻击一般属于哪一项（）。",
        "options": [
          "A. 信息收集",
          "B. 弱点挖掘",
          "C. 攻击实施",
          "D. 痕迹清除"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 72,
        "type": "single",
        "question": "在网络攻击模型中，下列哪种攻击过程不属于预攻击阶段（）。",
        "options": [
          "A. 身份隐藏",
          "B. 开辟后门",
          "C. 弱点挖掘",
          "D. 信息收集"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 73,
        "type": "single",
        "question": "网络中存在各种各样的安全威胁，一个安全的系统不仅要从检测网络攻击行为出发，更应该设计一定的防御措施以抵抗入侵行为。防火墙属于网络安全技术中的静态安全技术，对于动态发展的网络中的安全问题无法彻底解决。这就需要引入（）。",
        "options": [
          "A. 身份验证系统",
          "B. 智能识别系统",
          "C. 入侵检测系统",
          "D. 网络防御系统"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 74,
        "type": "single",
        "question": "下列关于端口扫描器功能叙述错误的是（）。",
        "options": [
          "A. 发现一个主机或网络的能力",
          "B. 一旦发现一台主机，有发现什么服务正运行在这台主机上的能力",
          "C. 通过测试这些服务，发现漏洞的能力",
          "D. 能够扫描且不被发现的能力"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 75,
        "type": "single",
        "question": "下面软件产品中，（）是属于漏洞扫描器。",
        "options": [
          "A. X-Scan",
          "B. Norton antiVirus",
          "C. Snort",
          "D. WEB"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 76,
        "type": "single",
        "question": "如果一个网站存在CSRF漏洞，可以通过CSRF漏洞做下面哪些事情（）。",
        "options": [
          "A. 获取网站用户注册的个人资料信息",
          "B. 修改网站用户注册的个人资料信息",
          "C. 冒用网站用户的身份发布信息",
          "D. 以上都可以"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 77,
        "type": "single",
        "question": "John the Ripper工具的Incremental crack Mode模式是（）。",
        "options": [
          "A. 可以选择使用规则及不使用不规则的字典档破解模式",
          "B. 用最简单的变形来进行破解的工作，速度最快",
          "C. 暴力破解，尝试所有可能的字符组合",
          "D. 可以定义用户自己的破解模式"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 78,
        "type": "single",
        "question": "关于缓冲区溢出的原理错误的是（）。",
        "options": [
          "A. 缓冲区溢出通常是由编程疏忽引起的",
          "B. 如果缓冲区被写满，而程序没有去检查缓冲区边界，也没有停止接收数据，这时缓冲区溢出就会发生",
          "C. 一小部分数据或者一套指令的溢出就可能导致一个程序或者操作系统崩溃",
          "D. C语言具有检查边界的功能"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 79,
        "type": "single",
        "question": "下列关于拒绝服务攻击说法错误的是（）。",
        "options": [
          "A. 来自网络的拒绝服务攻击可以分为停止服务和消耗资源两类",
          "B. 拒绝服务攻击的目的是利用各种攻击技术使服务器或者主机等拒绝为合法用户提供服务",
          "C. 停止服务意味着毁坏或者关闭用户想访问的特定的服务",
          "D. 停止服务是目前最流行的拒绝服务攻击方式"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 80,
        "type": "single",
        "question": "针对软件的拒绝服务攻击是通过消耗系统资源使软件无法响应正常请求的一种攻击方式，在软件开发时分析拒绝服务攻击的威胁，以下哪个不是需要考虑的攻击方式（）。",
        "options": [
          "A. 攻击者利用软件存在逻辑错误，通过发送某种类型数据导致运算进入死循环，CPU资源占用始终100%",
          "B. 攻击者利用软件脚本使用多重嵌套查询，在数据量大时会导致查询效率低，通过发送大量的查询导致数据库响应缓慢",
          "C. 攻击者利用软件不自动释放连接的问题，通过发送大量连接消耗软件并发连接数，导致并发连接数耗尽而无法访问",
          "D. 攻击者买通了IDC人员，将某软件运行服务器的网线拔掉导致无法访问"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 81,
        "type": "single",
        "question": "关于web安全及其威胁防护技术的描述，不正确的是（）。",
        "options": [
          "A. 当前web面临的主要威胁有可信任站点的漏洞、浏览器及其插件的漏洞、网络钓鱼、僵尸网络等",
          "B. web防篡改技术包括单点登录、时间轮询、事件触发等",
          "C. web内容安全管理技术包括电子邮件过滤、网页过滤、反间谍软件等",
          "D. web访问控制的主要任务是保证网络资源不被非法访问者访问"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 82,
        "type": "single",
        "question": "N-Stealth不包含哪个插件（）。",
        "options": [
          "A. dara",
          "B. Retina",
          "C. SAINT",
          "D. ISS Internet Scanner"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 83,
        "type": "single",
        "question": "关于恶意代码，以下说法错误的是（）。",
        "options": [
          "A. 从传播范围来看，恶意代码呈现多平台传播的特征",
          "B. 按照运行平台，恶意代码可以分为网络传播型病毒、文件传播型病毒",
          "C. 不感染的依附性恶意代码无法单独执行",
          "D. 为了对目标系统实施攻击和破坏活动，传播途径是恶意代码赖以生存和繁殖的基本条件"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 84,
        "type": "single",
        "question": "以下关于软件逆向工程说法错误的是（）。",
        "options": [
          "A. 恶意软件开发者利用逆向工程定位操作系统和应用程序的漏洞，并利用该漏洞开发恶意软件",
          "B. 防病毒软件开发者利用逆向工程分析恶意软件的步骤、行为和对系统造成的破坏，进而提出防范机制",
          "C. 很多应用程序使用公有加解密算法，可利用逆向工程分析其算法的实现细节和缺陷",
          "D. 如果某些软件进行了特殊的设计或具备难以实现的功能，其竞争者可能通过对组件的逆向"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 85,
        "type": "single",
        "question": "恶意代码的攻击模型中（）是恶意代码实现其恶意目的的必要条件。",
        "options": [
          "A. 潜伏",
          "B. 维持或提升现有特权",
          "C. 破坏",
          "D. 侵入系统"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 86,
        "type": "single",
        "question": "恶意代码的生存技术中的模糊变换技术是（）。",
        "options": [
          "A. 自身保护",
          "B. 多态，难以进行基于特征的识别",
          "C. 简单实现恶意代码的组合和变化",
          "D. 提高自身的伪装能力和防破译能力，增加检测和清除的难度"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 87,
        "type": "single",
        "question": "哪一项不是特洛伊木马所窃取的信息（）。",
        "options": [
          "A. 计算机名字",
          "B. 硬件信息",
          "C. QQ用户密码",
          "D. 系统文件"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 88,
        "type": "single",
        "question": "当进行分析校验的时候，你通常会在什么情况下发现一个被木马感染了的文件?（）",
        "options": [
          "A. 在可执行文件的末尾有扩展名为.TRJ的文件",
          "B. 文件的尺寸变大或者变小，或者时间戳错误",
          "C. 文件被删除",
          "D. 文件已经具备了一个.SRC扩展名"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 89,
        "type": "single",
        "question": "下列关于“特洛伊木马”病毒的叙述中不正确的是（）。",
        "options": [
          "A. 特洛伊木马程序一般分为服务端和客户端",
          "B. 特洛伊木马的隐蔽性是其最重要的特征",
          "C. 特洛伊木马必须是自动启动和运行的程序",
          "D. 特洛伊木马以感染其它程序为目的，通过网络进行主动复制传播"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 90,
        "type": "single",
        "question": "特洛伊木马有两大类型，以下哪一种是属于可以控制?（）",
        "options": [
          "A. universale",
          "B. transitive",
          "C. 两种都是",
          "D. 两种都不是"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 91,
        "type": "single",
        "question": "按计算机病毒入侵系统途径可将计算机病毒分为（）。",
        "options": [
          "A. 蠕虫病毒、脚本病毒、外壳病毒、入侵病毒",
          "B. 源码病毒、入侵病毒、操作系统和外壳病毒",
          "C. 操作系统病毒、木马病毒、脚本病毒、图片病毒",
          "D. 入侵病毒、脚本病毒、操作系统病毒、蠕虫病毒"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 92,
        "type": "single",
        "question": "僵尸网络botnet有（）地执行相同的恶意行为的特点。",
        "options": [
          "A. 一对多",
          "B. 多对一",
          "C. 多对多",
          "D. 一对一"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 93,
        "type": "single",
        "question": "僵尸网络 botnet 概念中的bot程序是 robot 的缩写，是指（）。",
        "options": [
          "A. 提供攻击的应用",
          "B. 提供IRC聊天服务的服务器",
          "C. 实现恶意控制功能的程序代码",
          "D. 控制和通信的中心服务器"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 94,
        "type": "single",
        "question": "不属于教唆犯罪、传授犯罪手段和方法信息的是（）。",
        "options": [
          "A. 利用僵尸网络进行DDoS攻击",
          "B. 教授制作钓鱼网站",
          "C. 教授利用感冒药制造冰毒",
          "D. 在微信群内发信教唆去市政府请愿"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 95,
        "type": "single",
        "question": "网络安全事件的分类有（）。",
        "options": [
          "A. 5种",
          "B. 6种",
          "C. 7种",
          "D. 8种"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 96,
        "type": "single",
        "question": "对于网络安全事件分类中，错误的是（）。",
        "options": [
          "A. 有害程序事件",
          "B. 网络攻击事件",
          "C. 信息破坏事件",
          "D. 物理攻击事件"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 97,
        "type": "single",
        "question": "网络安全事件分类中的网络攻击事件中有（）。",
        "options": [
          "A. 后门攻击事件、漏洞攻击事件",
          "B. 蠕虫事件、特洛伊事件",
          "C. 信息假冒事件、信息泄露事件",
          "D. 混合程序攻击事件、网页内嵌事件"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 98,
        "type": "single",
        "question": "网络安全事件中的特洛伊事件属于（）。",
        "options": [
          "A. 信息内容安全事件",
          "B. 有害程序事件",
          "C. 灾害性事件",
          "D. 其他事件"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 99,
        "type": "single",
        "question": "信息篡改事件、信息假冒事件、信息泄露事件、信息窃取事件、信息丢失事件和其他信息破坏事件是属于（）。",
        "options": [
          "A. 信息内容安全事件",
          "B. 信息破坏事件",
          "C. 灾害性事件",
          "D. 其他事件"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 100,
        "type": "single",
        "question": "信息内容安全事件是指（）。",
        "options": [
          "A. 指蓄意制造、传播计算机病毒，或是因受到计算机病毒影响而导致的事件",
          "B. 不能归类的网络安全事件",
          "C. 通过网络传播法律法规禁止信息，组织非法串联、煽动集会游行或炒作敏感问题并危害国家安全、社会稳定和公众利益的事件",
          "D. 信息篡改事件、信息假冒事件、信息泄露事件、信息窃取事件、信息丢失事件和其他信息破坏事件"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 101,
        "type": "single",
        "question": "网络运营者采取监测、记录网络运行状态和网络安全事件的日志信息不少于（）。",
        "options": [
          "A. 1个月",
          "B. 3个月",
          "C. 6个月",
          "D. 1年"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 102,
        "type": "single",
        "question": "发生网络安全事件(事故)在第一时间报告公安机关的同时，立即启动应急处置方案，开展（）工作。",
        "options": [
          "A. 保护对象重要性评估",
          "B. 应急处置",
          "C. 预警分级评估",
          "D. 损害程度评估"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 103,
        "type": "single",
        "question": "网络安全事件分级总共有（）。",
        "options": [
          "A. 1级",
          "B. 2级",
          "C. 3级",
          "D. 4级"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 104,
        "type": "single",
        "question": "网络安全事件分级中的特别重大事件为（）。",
        "options": [
          "A. Ⅰ级",
          "B. Ⅱ级",
          "C. Ⅲ级",
          "D. Ⅳ级"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 105,
        "type": "single",
        "question": "下列为较大网络安全事件的是（）。",
        "options": [
          "A. 其他对社会秩序、经济建设和公众利益构成严重威胁、造成严重影响的",
          "B. 国家秘密信息、重要敏感信息和关键数据丢失或被窃取、篡改、假冒，对国家安全和社会稳定构成严重威胁",
          "C. 其他对社会秩序、经济建设和公众利益构成较严重威胁、造成较严重影响的",
          "D. 重要网络和信息系统遭受严重的系统损失，造成系统长时间中断或局部瘫痪，业务处理能力受到极大影响"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 106,
        "type": "single",
        "question": "信息安全事件对社会所造成影响的范围和程度称社会影响，可以划分为（）。",
        "options": [
          "A. 特别重大的社会影响",
          "B. 重大的社会影响",
          "C. 较大的社会影响",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 107,
        "type": "single",
        "question": "关于信息安全事件分级，对于事发组织是可承受的事件属于（）。",
        "options": [
          "A. 特别重大事件",
          "B. 一般事件",
          "C. 较大事件",
          "D. 重大事件"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 108,
        "type": "single",
        "question": "关于预警的响应与处置，下列说法错误的是（）。",
        "options": [
          "A. 当网络安全威胁情况消除或威胁达不到黄色预警级别，预警发布机构应及时解除预警",
          "B. 预警发布机构根据网络安全事件或威胁的动态变化，及时发布预警的升级或降级信息",
          "C. 当可能对网络与信息系统保护对象产生特别严重的损害时，网络与信息系统的主管和运营部门应及时向单位负责人和信息安全第一责任人汇报",
          "D. 网络与信息系统的主管和运营部门接到网络安全预警后，应分析、研判相关事件或威胁对自身网络安全保护对象可能造成损害的程度"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 109,
        "type": "single",
        "question": "网络运营者应当制定（），及时处置系统漏洞、计算机病毒、网络攻击、网络侵入等安全风险。",
        "options": [
          "A. 网络安全事件应急演练方案",
          "B. 网络安全事件应急预案",
          "C. 网络安全事件补救措施",
          "D. 网络安全事件应急处置措施"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 110,
        "type": "multiple",
        "question": "国家采取措施，（）来源于中华人民共和国境内外的网络安全风险和威胁，保护关键信息基础设施免受攻击、侵入、干扰和破坏。",
        "options": [
          "A. 监测",
          "B. B、防御",
          "C. C、处置",
          "D. D、隔离"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 111,
        "type": "multiple",
        "question": "属于安全闭环组成部分的是（）。",
        "options": [
          "A. 检测",
          "B. B、响应",
          "C. C、防护",
          "D. D、预警"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 112,
        "type": "multiple",
        "question": "系统等保定级主要包括以下几个步骤:（）。",
        "options": [
          "A. 系统识别和描述",
          "B. B、信息系统划分",
          "C. C、系统的运行维护",
          "D. D、安全等级确定"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          3
        ]
      },
      {
        "id": 113,
        "type": "multiple",
        "question": "《危险化学品安全管理条例》（国务院令第491号）的目标:（）。",
        "options": [
          "A. 加强危险化学品的安全管理",
          "B. B、预防和减少危险化学品事故",
          "C. C、保障人民群众生命财产安全",
          "D. D、保护环境"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 114,
        "type": "multiple",
        "question": "根据《中国南方电网有限责任公司IT服务管理办法（2014年）》，IT服务管理事件经理职责:（）。",
        "options": [
          "A. 负责事件解决过程中的协调和监控",
          "B. B、负责事件升级的判断与执行",
          "C. C、负责与其它流程经理的沟通与协调",
          "D. D、负责收集、分析事件数据，发现潜在问题"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 115,
        "type": "multiple",
        "question": "逻辑强隔离装置部署在应用服务器与数据库服务器之间，实现（）功能。",
        "options": [
          "A. 访问控制",
          "B. B、网络强隔离",
          "C. C、地址绑定",
          "D. D、防SQL注入攻击"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 116,
        "type": "multiple",
        "question": "物联网工程师证书是根据国家工信部门要求颁发的一类物联网专业领域下工业和信息化领域人才证书，除物联网工程师外，还有哪些方向（）。",
        "options": [
          "A. 节能环保工程师",
          "B. B、物联网系统工程师",
          "C. C、智能电网工程师",
          "D. D、智能物流工程师"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 117,
        "type": "multiple",
        "question": "数据备份系统由哪几部分组成:（）。",
        "options": [
          "A. 备份服务器",
          "B. B、备份网络",
          "C. C、备份设备",
          "D. D、备份软件",
          "E. E、磁盘阵列"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 118,
        "type": "multiple",
        "question": "计算机中通常使用的三种数据单位包括（）。",
        "options": [
          "A. 位",
          "B. B、编码",
          "C. C、字",
          "D. D、字节",
          "E. E、字段"
        ],
        "analysis": "",
        "answer": [
          0,
          2,
          3
        ]
      },
      {
        "id": 119,
        "type": "multiple",
        "question": "关于“心脏出血”漏洞的阐述正确的是（）。",
        "options": [
          "A. 通过读取网络服务器内存，攻击者可以访问敏感数据",
          "B. B、该病毒可使用户心脏出血",
          "C. C、心脏出血漏洞是“灾难性的”",
          "D. D、“心脏出血”漏洞的危险性在于，它要比一般的漏洞潜伏得更深"
        ],
        "analysis": "",
        "answer": [
          0,
          2,
          3
        ]
      },
      {
        "id": 120,
        "type": "multiple",
        "question": "中间件的优势特点是（）。",
        "options": [
          "A. 面向程序设计人员",
          "B. B、缩短应用程序开发周期",
          "C. C、节约开发成本",
          "D. D、减少系统初期建设成本"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 121,
        "type": "judge",
        "question": "TCP代理是指我们的FW部署在客户端和服务器中间，当客户端向服务器发送的SYN报文经过FW时，FW代替服务器与客户端建立三次握手，它可以对SYN报文进行拦截。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 122,
        "type": "judge",
        "question": "UDP分片分为首分片和后续分片，Anti-DDoS设备只对首分片执行防御动作，如果首分片异常被丢弃了，后续分片因找不到首分片的会话会直接被后续转发流程丢弃。UDP首分片防御方法和UDP flood防御方法一致。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 123,
        "type": "judge",
        "question": "为保证数据库是可恢复的，登记日志文件时必须遵循两条规则:（1）登记的次序严格按照并发事务执行的时间次序。（2）必须先写日志文件，后写数据库。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 124,
        "type": "judge",
        "question": "增量备份在数据恢复时必须依赖上一次完全备份和上一次的增量备份才能对数据进行完整恢复，恢复时数据重构较完全备份慢，恢复窗口更大。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 125,
        "type": "judge",
        "question": "网络安全事件的应急响应流程中，首先应进行的是事件检测与报告，而非直接关闭受影响系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 126,
        "type": "judge",
        "question": "零信任架构的核心思想是“永不信任，始终验证”，因此不需要区分内网和外网资源的访问控制策略。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 127,
        "type": "judge",
        "question": "区块链技术的去中心化特性使其无法被篡改，因此基于区块链存储的敏感数据无需额外加密保护。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 128,
        "type": "judge",
        "question": "物联网设备由于资源受限，通常无法运行复杂的安全软件，因此更容易成为网络攻击的目标。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 129,
        "type": "judge",
        "question": "跨站请求伪造（CSRF）攻击的核心是利用用户已认证的会话，因此关闭浏览器会话即可完全防范该类攻击。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 130,
        "type": "judge",
        "question": "安全审计日志应至少保留6个月，以便在发生安全事件时进行溯源分析。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 131,
        "type": "judge",
        "question": "采用HTTPS协议传输数据后，所有传输内容均无法被截取，因此无需担心数据泄露风险。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 132,
        "type": "judge",
        "question": "服务器虚拟化技术会增加网络攻击面，因为多个虚拟机共享同一物理硬件资源，一个虚拟机被攻破可能影响其他虚拟机。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 133,
        "type": "judge",
        "question": "弱口令攻击属于暴力破解的一种，因此启用账户锁定策略（如输错5次锁定）可有效防范。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 134,
        "type": "judge",
        "question": "数据库加密仅需对敏感字段（如密码、身份证号）进行加密，普通字段无需加密，以提高查询效率。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 135,
        "type": "judge",
        "question": "无线局域网的WPS功能虽然方便用户快速连接，但存在安全漏洞，可能导致密码被破解，因此不建议启用。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 136,
        "type": "judge",
        "question": "入侵防御系统（IPS）工作在串联模式，能够实时阻断攻击流量，而入侵检测系统（IDS）工作在旁路模式，仅能报警无法阻断。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 137,
        "type": "judge",
        "question": "系统漏洞分为高危、中危、低危三个级别，仅需修复高危漏洞即可保证系统安全。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 138,
        "type": "judge",
        "question": "电子邮件的DKIM签名机制可验证邮件发送者的身份，防止邮件被伪造，因此无需再启用SPF机制。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 139,
        "type": "judge",
        "question": "终端安全管理中，禁止外接USB设备可完全防范移动存储介质带来的病毒传播风险。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 140,
        "type": "judge",
        "question": "网络地址转换（NAT）不仅能实现私网地址与公网地址的转换，还能隐藏内部网络结构，提高网络安全性。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 141,
        "type": "judge",
        "question": "云计算环境中，租户的数据存储在共享的云服务器上，因此云服务商的管理员可以随意访问租户数据。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 142,
        "type": "judge",
        "question": "数字证书的有效期届满后，仍可继续使用，只需重新下载安装即可。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 143,
        "type": "judge",
        "question": "脚本病毒主要通过网页脚本、邮件脚本等方式传播，因此禁用浏览器的JavaScript功能可有效防范。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 144,
        "type": "judge",
        "question": "网络安全等级保护二级以上的信息系统，必须每年进行一次等级测评。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 145,
        "type": "judge",
        "question": "访问控制列表（ACL）仅能基于IP地址、端口号进行访问控制，无法基于用户身份进行权限限制。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 146,
        "type": "judge",
        "question": "数据脱敏技术通过对敏感数据进行替换、加密等处理，使其在不影响业务使用的前提下无法识别原始信息，因此脱敏后的数据可直接用于测试环境。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 147,
        "type": "judge",
        "question": "僵尸网络攻击的主要目的是利用大量受控主机发起DDoS攻击，因此关闭主机的网络连接即可清除僵尸程序。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 148,
        "type": "judge",
        "question": "操作系统的默认账户（如Windows的administrator、Linux的root）如果不修改默认密码，会成为黑客攻击的重要突破口。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 149,
        "type": "judge",
        "question": "网页防篡改技术中的事件触发模式，是指实时监控网页文件的变化，一旦发现篡改立即恢复，比时间轮询模式更及时。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 150,
        "type": "judge",
        "question": "网络安全策略的制定无需考虑业务可用性，只需优先保证安全性。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 151,
        "type": "judge",
        "question": "移动设备的越狱（iOS）或root（Android）操作会破坏系统的安全机制，导致设备更容易被植入恶意软件。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 152,
        "type": "judge",
        "question": "安全漏洞扫描工具的扫描结果100%准确，因此扫描结果显示无漏洞的系统即为安全系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 153,
        "type": "judge",
        "question": "分布式拒绝服务（DDoS）攻击的流量通常来自大量合法的网络设备，因此难以通过防火墙直接阻断。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 154,
        "type": "judge",
        "question": "企业的网络安全培训仅需对技术人员进行，普通员工无需参与，因为他们不会接触核心系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 155,
        "type": "judge",
        "question": "数据备份的“3-2-1原则”是指:至少3份备份、2种不同介质、1份异地存放，该原则可有效防范数据丢失风险。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 156,
        "type": "judge",
        "question": "域名系统（DNS）的缓存中毒攻击是指攻击者篡改DNS服务器的缓存记录，将域名解析到恶意IP地址，因此定期清理DNS缓存可防范该攻击。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 157,
        "type": "judge",
        "question": "防火墙的默认策略应设置为“deny all”，即拒绝所有流量，再根据业务需求开放必要的端口和服务，这是更安全的配置方式。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 158,
        "type": "judge",
        "question": "计算机病毒必须依附于可执行文件才能传播，因此文本文件（如TXT）不会携带病毒。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 159,
        "type": "judge",
        "question": "身份认证中的双因素认证（2FA）结合了两种不同类型的认证因素（如密码+验证码），其安全性高于单因素认证。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 160,
        "type": "judge",
        "question": "网络安全事件发生后，应优先恢复业务运行，再进行事件溯源和原因分析，避免造成更大的业务损失。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      }
    ]
  },
  {
    "set_name": "2026考证顺序刷题5-S",
    "items": [
      {
        "id": 1,
        "type": "single",
        "question": "在日常的工作中，要发挥社会主义市场经济机制的积极作用，必须增强（）。",
        "options": [
          "A. 个人意识、协作意识、效率意识、物质利益观念、改革开放意识",
          "B. 个人意识、竞争意识、公平意识、民主法制意识、开拓创新精神",
          "C. 自立意识、竞争意识、效率意识、民主法制意识、开拓创新精神",
          "D. 自立意识、协作意识、公平意识、物质利益观念、改革开放意识"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 2,
        "type": "single",
        "question": "有效的团队合作需要具备的基本能力之一是（）。",
        "options": [
          "A. 忽视团队目标，只关注个人目标",
          "B. 不积极参与团队讨论和决策",
          "C. 共享工作责任，共同努力完成任务",
          "D. 忽视他人的工作进展和需求"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 3,
        "type": "single",
        "question": "操作者操作设备必须严格遵守设备的（）。",
        "options": [
          "A. 标准操作规程",
          "B. 相关安全制度",
          "C. 公司制度",
          "D. 岗位操作规程"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 4,
        "type": "single",
        "question": "在使用设备时，爱护设备与安全操作的基本要求不包括（）。",
        "options": [
          "A. 重视设备安全规则，规范操作",
          "B. 保持设备清洁和整洁",
          "C. 遵守设备安全规则，正确使用和维护设备",
          "D. 按照个人习惯操作设备"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 5,
        "type": "single",
        "question": "某机械厂的一位领导说:机械工业工艺复杂，技术密集，工程师在图纸上画得再好、再精确，工人操作中如果差那么一毫米，最终出来的就可能是废品。这段话主要强调（）素质的重要性。",
        "options": [
          "A. 专业技能",
          "B. 思想政治",
          "C. 职业道德",
          "D. 身心素质"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 6,
        "type": "single",
        "question": "勇于创新的基本含义包括（）。",
        "options": [
          "A. 不接受任何改变和创新",
          "B. 不关注工作质量的提升和创新",
          "C. 提出新的想法和方法，推动进步",
          "D. 遵循传统工作模式，为稳妥尽量不改变"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 7,
        "type": "single",
        "question": "在工作中，勇于创新与精益求精的基本要求不包括（）。",
        "options": [
          "A. 关注工作效率和质量的提升",
          "B. 愿意尝试新的工作方法和技术",
          "C. 推动工作流程改进和质量提升",
          "D. 忽视个人职责，不关注工作成果"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 8,
        "type": "single",
        "question": "国际规定，电压（）伏以下不必考虑防止电击的危险。",
        "options": [
          "A. 36伏",
          "B. 65伏",
          "C. 25伏",
          "D. 220伏"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 9,
        "type": "single",
        "question": "漏电保护器的使用是防止（）。",
        "options": [
          "A. 触电事故",
          "B. 电压波动",
          "C. 电荷超负荷",
          "D. 温度过高"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 10,
        "type": "single",
        "question": "电器漏电时的处理方法是?",
        "options": [
          "A. 用绝缘手套将插头拔下来",
          "B. 用棉布包裹住电线",
          "C. 用湿毛巾擦拭漏电部分",
          "D. 设备断电并修理电器"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 11,
        "type": "single",
        "question": "操作系统的基本类型主要有（）。",
        "options": [
          "A. 批处理系统、分时系统及多任务系统",
          "B. 实时操作系统、批处理操作系统及分时操作系统",
          "C. 单用户系统、多用户系统及批处理系统",
          "D. 实时系统、分时系统和多用户系统"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 12,
        "type": "single",
        "question": "下操作系统中属于网络操作系统的是（）。",
        "options": [
          "A. MS-DOS",
          "B. Windows98",
          "C. UNIX",
          "D. Windows Server"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 13,
        "type": "single",
        "question": "中断处理的4个阶段为（）。",
        "options": [
          "A. 保存现场、执行中断处理程序、分析中断源、恢复现场",
          "B. 保存现场、恢复现场、执行中断处理程序、分析中断源",
          "C. 保存现场、分析中断源、执行中断处理程序、恢复现场",
          "D. 分析中断源、保存现场、执行中断处理程序、恢复现场"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 14,
        "type": "single",
        "question": "现代操作系统的两个基本特征是（）和资源共享。",
        "options": [
          "A. 多道程序设计",
          "B. 中断处理",
          "C. 程序的并发执行",
          "D. 实现分时与实时处理"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 15,
        "type": "single",
        "question": "计算机系统的组成包括（）。",
        "options": [
          "A. 程序和数据",
          "B. 计算机硬件和计算机软件",
          "C. 处理器和内存",
          "D. 处理器，存储器和外围设备"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 16,
        "type": "single",
        "question": "计算机中，负责指挥计算机各部分自动协调一致地进行工作的部件是（）。",
        "options": [
          "A. 运算器",
          "B. 控制器",
          "C. 存储器",
          "D. 总线"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 17,
        "type": "single",
        "question": "下面关于cache的叙述，错误的是（）。",
        "options": [
          "A. 高速缓冲存储器简称cache",
          "B. cache处于主存与CPU之间",
          "C. 程序访问的局部性为cache的引入提供了理论依据",
          "D. cache的速度远比CPU的速度慢"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 18,
        "type": "single",
        "question": "当代计算机的最主要的体系结构称为是（）。",
        "options": [
          "A. 冯·诺依曼机",
          "B. 非冯·诺依曼机",
          "C. 图灵机",
          "D. PASCAL机"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 19,
        "type": "single",
        "question": "如果在具有层次结构的一组元素中，存在着一对一的关系，我们可以认为这样的数据的逻辑类型就是（）。",
        "options": [
          "A. 集合",
          "B. 线性结构",
          "C. 树型结构",
          "D. 图型结构"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 20,
        "type": "single",
        "question": "结构化程序设计强调将程序分解为（）。",
        "options": [
          "A. 子程序",
          "B. 对象",
          "C. 类",
          "D. 方法"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 21,
        "type": "single",
        "question": "数据管理技术的发展过程中，经历了人工管理阶段、文件系统阶段和数据库系统阶段。在这几个阶段中，数据独立性最高的是（）阶段。",
        "options": [
          "A. 数据库系统",
          "B. 文件系统",
          "C. 人工管理",
          "D. 数据项管理"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 22,
        "type": "single",
        "question": "关系数据模型（）。",
        "options": [
          "A. 只能表示实体间的1:1联系",
          "B. 只能表示实体间的1:n",
          "C. 只能表示实体间的 m:n",
          "D. 可以表示实体间的上述三种联系"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 23,
        "type": "single",
        "question": "（）是指进程或程序正常运行时周期性记录进程或程序有关信息的点，目的是当系统发生故障或错误时，从最新检测点恢复。",
        "options": [
          "A. 还原点",
          "B. 检验点",
          "C. 检查点",
          "D. 失真点"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 24,
        "type": "single",
        "question": "Internet 的前身是（）。",
        "options": [
          "A. IPXNET",
          "B. ARPANET",
          "C. Ethernet",
          "D. IPNET"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 25,
        "type": "single",
        "question": "IP地址10.10.10.256属于（）类IP地址。",
        "options": [
          "A. A",
          "B. B",
          "C. C",
          "D. IP地址格式错误"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 26,
        "type": "single",
        "question": "网桥及一般的二层交换机在进行数据包转发时，识别的数据包包头中的（）进行数据包的转发。",
        "options": [
          "A. 下一跳地址",
          "B. IP地址",
          "C. MAC地址",
          "D. 网络地址"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 27,
        "type": "single",
        "question": "以下哪个协议不属于TCP/IP模型中网络层（）。",
        "options": [
          "A. ICMP",
          "B. RARP",
          "C. IGMP",
          "D. RIP"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 28,
        "type": "single",
        "question": "根据作用范围分类，网络协议可以分为几种类型?",
        "options": [
          "A. 2",
          "B. 3",
          "C. 4",
          "D. 5"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 29,
        "type": "single",
        "question": "以下哪种网络适用于跨越城市或国家的通信?",
        "options": [
          "A. 局域网",
          "B. 广域网",
          "C. 互联网",
          "D. 无线网"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 30,
        "type": "single",
        "question": "下列哪些是对计算机网络不正确的定义?",
        "options": [
          "A. 计算机网络是计算机的集合",
          "B. 计算机网络的目的是相互共享资源",
          "C. 计算机网络是在协议控制下通过通信系统来实现计算机之间的连接",
          "D. 计算机网络中的一台计算机可以干预另一台计算机的工作"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 31,
        "type": "single",
        "question": "如下网络拓扑结构中，具有一定集中控制功能的网络是（）。",
        "options": [
          "A. 总线型网络",
          "B. 星型网络",
          "C. 环形网络",
          "D. 全连接型网络"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 32,
        "type": "single",
        "question": "星形、总线型、环形和网状形是按照（）分类。",
        "options": [
          "A. 网络功能",
          "B. 管理性质",
          "C. 网络跨度",
          "D. 网络拓扑"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 33,
        "type": "single",
        "question": "VLAN（Virtual Local Area Network）是指（）。",
        "options": [
          "A. 一种物理隔离网络的方法",
          "B. 一种用于连接远程办公室的网络设备",
          "C. 一种逻辑上划分的虚拟局域网",
          "D. 一种用于提高网络带宽的技术"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 34,
        "type": "single",
        "question": "在命令行中使用ping命令可以执行什么操作（）。",
        "options": [
          "A. 发送网络请求并显示响应时间",
          "B. 查看网络设备的配置信息",
          "C. 在网络上查找可用的设备",
          "D. 建立安全的远程连接"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 35,
        "type": "single",
        "question": "下列静态路由器配置正确的是（）。",
        "options": [
          "A. ip route-static 129.1.0.0 16 serial 0",
          "B. ip route-static 10.0.0.2 16 129.1.0.0",
          "C. ip route-static 129.1.0.0 16 10.0.0.2",
          "D. ip route-static 129.1.0.0 255.255.0.0 10.0.0.2"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 36,
        "type": "single",
        "question": "在Linux操作系统中，（）配置文件用于存放本机主机名及经常访问IP地址的主机名，在对IP进行域名解析时，可以设定为先访问该文件，再访问DNS，最后访问NIS。",
        "options": [
          "A. /etc/hosts",
          "B. /etc/resolv.conf",
          "C. /etc/inted.conf",
          "D. /etc/host.conf"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 37,
        "type": "single",
        "question": "《中华人民共和国网络安全法》自（）起施行。",
        "options": [
          "A. 2018年1月1日",
          "B. 2017年6月1日",
          "C. 2025年1月1日",
          "D. 2019年6月1日"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 38,
        "type": "single",
        "question": "网络运营者应当对其收集的用户信息严格保密，并建立健全（）。",
        "options": [
          "A. 用户信息保密制度",
          "B. 用户信息保护制度",
          "C. 用户信息加密制度",
          "D. 用户信息保全制度"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 39,
        "type": "single",
        "question": "依法负有网络安全监督管理职责的部门及其工作人员，必须对在履行职责中知悉的（）严格保密，不得泄露、出售或者非法向他人提供。",
        "options": [
          "A. 个人信息",
          "B. 隐私",
          "C. 商业秘密",
          "D. 以上全是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 40,
        "type": "single",
        "question": "国家倡导诚实守信、（）的网络行为，推动传播社会主义核心价值观，采取措施提高全社会的网络安全意识和水平，形成全社会共同参与促进网络安全的良好环境。",
        "options": [
          "A. 自由平等",
          "B. 团结互助",
          "C. 健康文明",
          "D. 和平友爱"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 41,
        "type": "single",
        "question": "《中华人民共和国网络安全法》规定，网络运营者应当制定（），及时处置系统漏洞、计算机病毒、网络攻击、网络侵入等安全风险。",
        "options": [
          "A. 网络安全事件应急预案",
          "B. 网络安全事件补救措施",
          "C. 网络安全事件应急演练方案",
          "D. 网站安全规章制度"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 42,
        "type": "single",
        "question": "《中华人民共和国网络安全法》规定，（）应当为公安机关、国家安全机关依法维护国家安全和侦查犯罪的活动提供技术支持和协助。",
        "options": [
          "A. 电信科研机构",
          "B. 电信企业",
          "C. 网络合作商",
          "D. 网络运营者"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 43,
        "type": "single",
        "question": "计算机信息系统安全保护等级根据计算机信息系统在国家安全、经济建设、社会生活中的（），计算机信息系统受到破坏后对国家安全、社会秩序、公共利益以及公民、法人和其他组织的合法权益的（）等因素确定。",
        "options": [
          "A. 经济价值 经济损失",
          "B. 重要程度 危害程度",
          "C. 经济价值 危害程度",
          "D. 重要程度 经济损失"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 44,
        "type": "single",
        "question": "安全测评报告由（）报地级以上市公安机关公共信息网络安全监察部门。",
        "options": [
          "A. 安全服务机构",
          "B. 县级公安机关公共信息网络安全监察部门",
          "C. 测评机构",
          "D. 计算机信息系统运营、使用单位"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 45,
        "type": "single",
        "question": "根据《广东省计算机信息系统安全保护条例》规定，计算机信息系统的运营、使用单位没有向地级市以上人民政府公安机关备案的，由公安机关处以（）。",
        "options": [
          "A. 警告",
          "B. 拘留15",
          "C. 罚款1500元",
          "D. 警告或者停机整顿"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 46,
        "type": "single",
        "question": "根据网络安全等级保护分级管理标准，信息系统网络安全保护等级分为（）级?",
        "options": [
          "A. 3",
          "B. 4",
          "C. 5",
          "D. 6"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 47,
        "type": "single",
        "question": "计算机信息系统的（），应当遵守法律、行政法规和国家其他有关规定。",
        "options": [
          "A. 建设",
          "B. 应用",
          "C. 建设和应用",
          "D. 运行"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 48,
        "type": "single",
        "question": "运输、携带、邮寄计算机信息媒体进出境的，应当如实向（）申报。",
        "options": [
          "A. 公安部",
          "B. 新闻出版局",
          "C. 海关",
          "D. 本地人民政府"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 49,
        "type": "single",
        "question": "根据《中华人民共和国计算机信息系统安全保护条例》，以下属于计算机信息系统安全风险的是?",
        "options": [
          "A. 高速互联网连接",
          "B. 安装最新的操作系统",
          "C. 未经授权访问",
          "D. 定期备份数据"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 50,
        "type": "single",
        "question": "根据《中华人民共和国计算机信息系统安全保护条例》，以下哪种行为属于对计算机病毒的防范措施?",
        "options": [
          "A. 成功的网络攻击",
          "B. 及时的安全漏洞修复",
          "C. 安装未经验证的软件",
          "D. 数据的大规模传输"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 51,
        "type": "multiple",
        "question": "下列哪些属于服务器硬件的冗余?（）",
        "options": [
          "A. 磁盘冗余",
          "B. B、电源冗余",
          "C. C、网卡冗余",
          "D. D、双机冗余"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 52,
        "type": "multiple",
        "question": "下述描述中，正确的是（）。",
        "options": [
          "A. 设置了交换机的管理地址后，就可使用Telnet方式来登录连接交换机，并实现对交换机的管理与配置",
          "B. B、首次配置交换机时，必须采用Console口登录配置",
          "C. C、默认情况下，交换机的所有端口均属于VLAN1，设置管理地址，实际上就是设置VLAN1接口的地址",
          "D. D、交换机允许同时建立多个Telnet登录连接"
        ],
        "analysis": "",
        "answer": [
          1,
          2,
          3
        ]
      },
      {
        "id": 53,
        "type": "multiple",
        "question": "国家采取措施，（）来源于中华人民共和国境内外的网络安全风险和威胁，保护关键信息基础设施免受攻击、侵入、干扰和破坏。",
        "options": [
          "A. 监测",
          "B. B、防御",
          "C. C、处置",
          "D. D、隔离"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 54,
        "type": "multiple",
        "question": "属于安全闭环组成部分的是（）。",
        "options": [
          "A. 检测",
          "B. B、响应",
          "C. C、防护",
          "D. D、预警"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 55,
        "type": "multiple",
        "question": "系统等保定级主要包括以下几个步骤:（）。",
        "options": [
          "A. 系统识别和描述",
          "B. B、信息系统划分",
          "C. C、系统的运行维护",
          "D. D、安全等级确定"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          3
        ]
      },
      {
        "id": 56,
        "type": "multiple",
        "question": "《危险化学品安全管理条例》（国务院令第491号）的目标:（）。",
        "options": [
          "A. 加强危险化学品的安全管理",
          "B. B、预防和减少危险化学品事故",
          "C. C、保障人民群众生命财产安全",
          "D. D、保护环境"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 57,
        "type": "multiple",
        "question": "根据《中国南方电网有限责任公司IT服务管理办法（2014年）》，IT服务管理事件经理职责:（）。",
        "options": [
          "A. 负责事件解决过程中的协调和监控",
          "B. B、负责事件升级的判断与执行",
          "C. C、负责与其它流程经理的沟通与协调",
          "D. D、负责收集、分析事件数据，发现潜在问题"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 58,
        "type": "multiple",
        "question": "逻辑强隔离装置部署在应用服务器与数据库服务器之间，实现（）功能。",
        "options": [
          "A. 访问控制",
          "B. B、网络强隔离",
          "C. C、地址绑定",
          "D. D、防SQL注入攻击"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 59,
        "type": "multiple",
        "question": "物联网工程师证书是根据国家工信部门要求颁发的一类物联网专业领域下工业和信息化领域人才证书，除物联网工程师外，还有哪些方向（）。",
        "options": [
          "A. 节能环保工程师",
          "B. B、物联网系统工程师",
          "C. C、智能电网工程师",
          "D. D、智能物流工程师"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 60,
        "type": "multiple",
        "question": "数据备份系统由哪几部分组成:（）。",
        "options": [
          "A. 备份服务器",
          "B. B、备份网络",
          "C. C、备份设备",
          "D. D、备份软件",
          "E. E、磁盘阵列"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 61,
        "type": "judge",
        "question": "无线网络设备安装繁琐，成本高。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 62,
        "type": "judge",
        "question": "LTE系统采用了正交频分复用和多入多出等关键技术，在网络架构和多址接入技术方面有了革命性的变化，被业界通俗称为3G。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 63,
        "type": "judge",
        "question": "交换机端口安全默认是打开的。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 64,
        "type": "judge",
        "question": "安全MAC地址的最大数量是默认是2。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 65,
        "type": "judge",
        "question": "端口安全功能是通过对MAC地址表的配置，来实现在某一端口只允许一台或者几台确定的设备访问此台交换机端口。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 66,
        "type": "judge",
        "question": "802.1x是一种基于端口的网络接入控制协议。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 67,
        "type": "judge",
        "question": "目前无线路由器里带有的加密模式主要有:WEP，WPA-PSK（TKIP），WPA2-PSK（AES）。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 68,
        "type": "judge",
        "question": "WPA全名为Wi-Fi Protected access，有WPWPA2和WPA3三个标准，是一种保护无线电脑网络（Wi-Fi）安全的系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 69,
        "type": "judge",
        "question": "白名单列表:拒绝接入WLAN网络客户端的MAC地址列表，只有存在该列表的用户才能接入。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 70,
        "type": "judge",
        "question": "黑白名单的配置方式有基于VAP（服务集）:该配置只对某些SSID启用。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 71,
        "type": "judge",
        "question": "在windows操作系统中，安全审计功能包括:注册表维护设置信息、日志系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 72,
        "type": "judge",
        "question": "域的审核策略确保所有账户登录事件都被审核。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 73,
        "type": "judge",
        "question": "Linux在secure日志中登陆成功日志和审计日志是一个文件。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 74,
        "type": "judge",
        "question": "当发生了定义的规则中的动作时，如果有一个规则在/etc/audit/auditd.conf中定义则它会通过调度程序发送，然后会有一条日志消息写到/var/log/audit/audit.log中。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 75,
        "type": "judge",
        "question": "防病毒软件的漏洞修复功能，能第一时间获取补丁相关信息，及时修复未被发现的漏洞。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 76,
        "type": "judge",
        "question": "PS C:\\Users\\administrator> Get-WindowsFeature Web-DAV-Publishing display Name Name []WebDAV发布 --- Web-DAV-Publishing 是用来检查WebDAV功能开启的状态。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 77,
        "type": "judge",
        "question": "IIS管理器的FTP站点中，选中你要授权的文件夹，并切换到“内容视图”，选中“FTP授权规则”，双击“FTP授权规则”，可进入“授权规则”管理界面，为指定的用户设置权限。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 78,
        "type": "judge",
        "question": "以 Windows server 2008 中自带的 FTP 服务为例，进行FTP站点加固时，启用FTP授权规则一般会允许所有匿名用户访问站点，并设置允许“读取和写入”权限。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 79,
        "type": "judge",
        "question": "DHCP IP地址耗尽攻击是指攻击者不断变换物理地址，尝试申请DHCP域中的IP地址，直到耗尽 DHCP Server地址池中的所有地址，导致其他正常用户无法获取IP地址的行为。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 80,
        "type": "judge",
        "question": "为了应对DHCP Server仿冒者攻击，可引入DHCP Snooping技术，在DHCP客户端和DHCP 服务器之间建立一道虚拟防火墙。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      }
    ]
  },
  {
    "set_name": "2026考证顺序刷题6-S",
    "items": [
      {
        "id": 1,
        "type": "single",
        "question": "以下（）设备可以看作一种多端口的网桥设备。",
        "options": [
          "A. 中继器",
          "B. 交换机",
          "C. 路由器",
          "D. 集线器"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 2,
        "type": "single",
        "question": "STP桥优先级占（）位。",
        "options": [
          "A. 8",
          "B. 16",
          "C. 32",
          "D. 64"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 3,
        "type": "single",
        "question": "以下关于生成树协议中Forwarding状态描述错误的是（）。",
        "options": [
          "A. Forwarding状态的端口可以接收BPDU报文",
          "B. Forwarding状态的端口不学习报文MAC地址",
          "C. Forwarding状态的端口可以转发数据报文",
          "D. Forwarding状态的端口可以发送BPDU报文"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 4,
        "type": "single",
        "question": "RSTP协议增加了边缘端口的概念，使得连接终端设备的端口（）。",
        "options": [
          "A. 不参与STP计算，无需等待计时器超时",
          "B. 无法接收BPDU报文",
          "C. 无法接入交换机",
          "D. 简化配置"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 5,
        "type": "single",
        "question": "链路聚合端口成员应保证，除了（）。",
        "options": [
          "A. 端口成员速率一致",
          "B. 端口成员同属一个VLAN",
          "C. 端口成员所用传输介质相同",
          "D. 端口成员协商模式一致"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 6,
        "type": "single",
        "question": "路由器是根据（）来进行数据的转发。",
        "options": [
          "A. MAC地址",
          "B. IP地址",
          "C. 比特",
          "D. 数据段"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 7,
        "type": "single",
        "question": "以下关于默认路由的描述正确的是（）。",
        "options": [
          "A. 默认路由是一种特殊的静态路由",
          "B. 所有数据包都会按照默认路由进行转发",
          "C. 默认路由是路由表中的第一条路由",
          "D. 默认路由是路由表中的最后一条路由"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 8,
        "type": "single",
        "question": "以下哪个组播地址是OSPF路由协议所使用的（）。",
        "options": [
          "A. 224.0.0.6",
          "B. 224.0.0.7",
          "C. 224.0.0.9",
          "D. 224.0.0.10"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 9,
        "type": "single",
        "question": "运行OSPF协议的两台路由器无法正常建立邻居，不可能是以下那种因素（）。",
        "options": [
          "A. 验证不一致",
          "B. Hello计时器或dead计时器不一致",
          "C. 修改其中一台路由器的dr-priorty为0",
          "D. 区域设置不一致"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 10,
        "type": "single",
        "question": "（）标准引入正交频分复用技术，定义了5GHz频段高速物理层规范。",
        "options": [
          "A. IEEE 802.11c",
          "B. IEEE 802.11b",
          "C. IEEE 802.11a",
          "D. IEEE 802.11g"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 11,
        "type": "single",
        "question": "以下（）项不属于“胖”“瘦”AP两种技术的区别。",
        "options": [
          "A. 安全策略控制",
          "B. 灵活性",
          "C. 信道间干扰",
          "D. 集中管理配置"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 12,
        "type": "single",
        "question": "无线局域网的最初协议是（）。",
        "options": [
          "A. IEEE802.11",
          "B. IEEE802.5",
          "C. IEEE802.3",
          "D. IEEE802.1"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 13,
        "type": "single",
        "question": "IEEE802.11b标准采用了（）调制方式。",
        "options": [
          "A. FHSS",
          "B. DSSS",
          "C. OFDM",
          "D. MIMO"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 14,
        "type": "single",
        "question": "下面那个属于射频范围2.4GHz的物理层规范（）。",
        "options": [
          "A. 802.11g",
          "B. 802.11a",
          "C. 802.11e",
          "D. 802.11i"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 15,
        "type": "single",
        "question": "MIMO是以下哪种协议中支持的技术（）。",
        "options": [
          "A. 802.11n",
          "B. 802.11g",
          "C. 802.11ac",
          "D. 802.11a"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 16,
        "type": "single",
        "question": "同时支持2.4G和5G频段的802.11协议是以下哪一种（）。",
        "options": [
          "A. 802.11ac",
          "B. 802.11n",
          "C. 802.11B",
          "D. 802.11a"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 17,
        "type": "single",
        "question": "以下（）项不属于基于OFDM的调制方式。",
        "options": [
          "A. BPSK",
          "B. DBPSK",
          "C. QPSK",
          "D. QAM"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 18,
        "type": "single",
        "question": "关于“密码复杂性要求策略”的描述正确的是（）。",
        "options": [
          "A. 密码长度要求至少7位",
          "B. 在密码中至少要同时包括大/小写字母，数字和非字母符号的三种类型",
          "C. 不能包括全部的账户包，但可以包括账户名种的部分连续部分",
          "D. 不能是上次已使用过的密码"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 19,
        "type": "single",
        "question": "密码策略中的密码复杂性要求密码的长度至少几个字符（）。",
        "options": [
          "A. 6",
          "B. 7",
          "C. 8",
          "D. 9"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 20,
        "type": "single",
        "question": "密码策略中，关于密码复杂性的说法不正确的是（）。",
        "options": [
          "A. 建议使用大小写字母、数字和特殊字符组成密码",
          "B. 密码复杂性要求在创建新密码或更改密码时强制执行",
          "C. 复杂密码可以长期使用",
          "D. 要求密码有最小的长度，如六个字符"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 21,
        "type": "single",
        "question": "防止非法授权访问网络设备的方法不包括（）。",
        "options": [
          "A. 强制使用Telnet远程登录",
          "B. 使用基于用户名和加密密码的强认证方法",
          "C. 使用基于用户名的权限分配",
          "D. 使用ACL限制非法IP"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 22,
        "type": "single",
        "question": "等保2.0标准对集中管控提出明确要求:“应能够建立一条安全的信息传输路径”，即要求远程网管终端应通过（）方式连接，防止远程管理中信息泄露。",
        "options": [
          "A. HTTP",
          "B. HTTPS",
          "C. SSL",
          "D. SSH"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 23,
        "type": "single",
        "question": "等保2.0标准对集中管控提出明确要求:“应对网络链路、安全设备、网络设备和服务器等的运行状况进行集中检测”，即要求路由交换设备应配置（）服务。",
        "options": [
          "A. SMTP",
          "B. AAA",
          "C. SNMP",
          "D. SSH"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 24,
        "type": "single",
        "question": "网络互联设备系统命令采用分级保护方式，最高级别是（）。",
        "options": [
          "A. 0",
          "B. 1",
          "C. 10",
          "D. 15"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 25,
        "type": "single",
        "question": "网络互联设备系统命令采用分级保护方式，默认情况下2级可以（）。",
        "options": [
          "A. 使用网络诊断工具命令（ping、tracert）",
          "B. 用于系统维护，查看配置",
          "C. 进行业务操作，使用各个网络层次的配置命令",
          "D. 修改系统内部参数"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 26,
        "type": "single",
        "question": "对于路由器的用户可以设置两种用户权限。可赋予其哪两种访问权限?",
        "options": [
          "A. 非特权和特权",
          "B. 特权及普通用户",
          "C. 管理员及系统管理员",
          "D. 普通用户和系统管理员"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 27,
        "type": "single",
        "question": "在交换机配置mac地址和端口绑定的好处不包括（）。",
        "options": [
          "A. 解决IP地址盗用",
          "B. 防止ARP攻击",
          "C. 管理接入设备数量",
          "D. 进行流量审计"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 28,
        "type": "single",
        "question": "为防止员工随意更换工位上网以及冒用他人IP地址上网，建议在交换机配置（）。",
        "options": [
          "A. IP + PORT 绑定",
          "B. MAC + PORT 绑定",
          "C. IP + MAC绑定",
          "D. IP + MAC + PORT 绑定"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 29,
        "type": "single",
        "question": "交换机端口安全违规处理动作不包括（）。",
        "options": [
          "A. 丢弃数据帧，不产生警告",
          "B. 丢弃数据帧，产生警告",
          "C. 丢弃数据帧，将端口shutdown",
          "D. 转发数据帧，并产生警告"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 30,
        "type": "single",
        "question": "当交换机端口违规处理方式配置为protect时，在收到其他非安全mac地址数据帧时，交换机会（）。",
        "options": [
          "A. 继续转发数据帧",
          "B. 丢弃，不产生警告",
          "C. 丢弃，同时产生警告",
          "D. 丢弃，并将端口shutdown"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 31,
        "type": "single",
        "question": "以下关于WLAN安全机制的叙述中，（）是正确的。",
        "options": [
          "A. WPA是为建立无线网络安全环境提供的第一个安全机制",
          "B. WEP和IPSec协议一样，其目标都是通过加密无线电波来提供安全保证",
          "C. WEP2的初始化向量（IV）空间为64位",
          "D. WPA提供了比WEP更为安全的无线局域网接入方案"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 32,
        "type": "single",
        "question": "哪个WLAN的安全机制可以实现无线AP和认证服务器AS之间的双向认证。（）",
        "options": [
          "A. WPA",
          "B. WPA2",
          "C. WAPI",
          "D. EAP"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 33,
        "type": "single",
        "question": "WEP协议通过对无线帧的加密部分加入（）来提供数据完整性的验证。",
        "options": [
          "A. ICV",
          "B. IV",
          "C. MIC",
          "D. CRC"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 34,
        "type": "single",
        "question": "1x用于WLAN的安全认证，在无线客户端与（）之间进行身份的认证。",
        "options": [
          "A. AP",
          "B. AC",
          "C. AS",
          "D. WLAN交换机"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 35,
        "type": "single",
        "question": "在无线网络安全机制WAPI中，（）实现通信数据的加密传输。",
        "options": [
          "A. WAI",
          "B. WPI",
          "C. ASU",
          "D. AAA"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 36,
        "type": "single",
        "question": "使用WEP加密机制，64位和128位的加密算法分别对于输入（）的16进制字符作为密钥。",
        "options": [
          "A. 5位、16位",
          "B. 5位、26位",
          "C. 10位、16位",
          "D. 10位、26位"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 37,
        "type": "single",
        "question": "关于入侵检测系统（IDS），下面说法不正确的是（）。",
        "options": [
          "A. IDS的主要功能是对计算机和网络资源上的恶意使用行为进行识别和响应",
          "B. IDS需要配合安全审计系统才能应用，后者为前者提供审计分析资料",
          "C. IDS主要用于检测来自外部的入侵行为",
          "D. IDS可用于发现合法用户是否滥用特权"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 38,
        "type": "single",
        "question": "以下哪个属于IPS的功能?（）",
        "options": [
          "A. 检测网络攻击",
          "B. 网络流量检测",
          "C. 实时异常告警",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 39,
        "type": "single",
        "question": "IPS是指（）。",
        "options": [
          "A. 入侵检测系统",
          "B. 入侵保护系统",
          "C. 网络入侵系统",
          "D. 网络保护系统"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 40,
        "type": "single",
        "question": "以下关于入侵防御系统(IPS)的描述中，错误的是（）。",
        "options": [
          "A. IPS产品在网络中是在线旁路式工作，能保证处理方法适当而且可预知",
          "B. IPS能对流量进行逐字节检查，且可将经过的数据包还原为完整的数据流",
          "C. IPS提供主动、实时的防护，能检测网络层、传输层和应用层的内容",
          "D. 如果检测到攻击企图，IPS就会自动将攻击包丢掉或采取措施阻断攻击源"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 41,
        "type": "single",
        "question": "在Windows Server用户“密码策略”设置中，“密码必须符合复杂性要求”策略启用后，用户设置密码时必须满足（）要求。",
        "options": [
          "A. 必须使用大写字母、数字、小写字母和符号中的3种",
          "B. 密码最小长度为6位",
          "C. 必须使用大写字母、数字、小写字母和符号",
          "D. 密码长度没有限制"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 42,
        "type": "single",
        "question": "为组织创建适当的密码策略，每个用户必须遵守这个密码策略，下列正确的是（）。",
        "options": [
          "A. 定义“强制密码历史”可以使系统记忆几个以前使用过的密码，当用户密码到期时，用户将可重复使用以前的密码",
          "B. “密码最长期限”通常的时间间隔为30到60天",
          "C. “最短密码长度”可以使密码至少包含指定个数的字符",
          "D. 七位以上的短密码比长密码具有更强的安全性"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 43,
        "type": "single",
        "question": "下面不属于本地用户组密码安全策略的内容是（）。",
        "options": [
          "A. 密码必须符合复杂性要求",
          "B. 设定密码长度最小值",
          "C. 设定用户不能更改密码",
          "D. 强制密码历史"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 44,
        "type": "single",
        "question": "在Windows server中，账户策略中的（）对于域或本地用户账户，决定系统锁定账户的时间，以及锁定谁的账户。",
        "options": [
          "A. 审核策略",
          "B. Kerberos策略",
          "C. 密码策略",
          "D. 账户锁定策略"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 45,
        "type": "single",
        "question": "在“本地安全设置”中，用户账户锁定策略，当3次无效登录后，用户账户被锁定的实际时间是（）。",
        "options": [
          "A. 账户将一直被锁定，直到管理员明确解除对它的锁定",
          "B. 30分钟",
          "C. 账户锁定时间无效",
          "D. 10分钟"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 46,
        "type": "single",
        "question": "用户帐户被锁定，是因为（）。",
        "options": [
          "A. 帐户长时间没有被使用",
          "B. 帐户超过了帐户锁定阈值",
          "C. 系统管理员禁止该用户帐户",
          "D. 帐户超过使用期限"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 47,
        "type": "single",
        "question": "如果windows中帐户锁定阈值设置为0，表示（）。",
        "options": [
          "A. 用户帐户不会被锁定",
          "B. 用户帐户永久锁定",
          "C. 用户帐户密码输错一次以上永久锁定",
          "D. 用户帐户不能修改密码"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 48,
        "type": "single",
        "question": "您的网络包含一个active directory域。你有一个成员服务器运行域。你有一个成员服务器运行Windows Server 2008 R2。你需要立即停用到服务器的所有传入连接。你应该怎么做?",
        "options": [
          "A. 从服务管理单元中，禁用IP 助手",
          "B. 从服务管理单元中，禁用Netlogon 服务",
          "C. 从Windows防火墙，启用公共配置文件中“阻止所有连接选项”",
          "D. 从Windows防火墙，启用域配置文件中“阻止所有连接选项”"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 49,
        "type": "single",
        "question": "你的公司有一个单一的活动目录域。该公司通过网络防火墙保护。远程用户通过使用PPTP VPN服务器连接到网络。当用户尝试连接到VPN服务器，他们会收到以下错误信息:远程计算机没有响应?你需要确保用户能够建立VPN连接。你应该怎么做?",
        "options": [
          "A. 打开防火墙上的1423端口",
          "B. 打开防火墙上的1723端口",
          "C. 打开防火墙上的3389端口",
          "D. 打开防火墙上的6000端口"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 50,
        "type": "single",
        "question": "你的网络中有两台服务器分别名为Server1和Server2，两台服务器都运行Windows Server 2008 R2。Server1上有几条自定义入站规则和安全连接规则。你要将Server1上的这几条防火墙规则覆盖到Server2上，你该怎么做?",
        "options": [
          "A. 在命令提示符下，运行netsh.exe firewall dump",
          "B. 在命令提示符下，运行netsh.exe firewall show > firewall.txt",
          "C. 在高级安全Windows防火墙控制台，单击“导出策略”",
          "D. 在高级安全Windows防火墙控制台，单击“安全连接规则”，然后单击“导出列表”"
        ],
        "analysis": "",
        "answer": 2
      }
    ]
  },
  {
    "set_name": "2026考证顺序刷题1-B",
    "items": [
      {
        "id": 1,
        "type": "single",
        "question": "道德中所谓“应该”的意思是（）。",
        "options": [
          "A. 基于社会利益，按照社会公认的价值取向行事",
          "B. 考虑自己的利益需求，按照自己的想法行事",
          "C. 根据实际情况，不断对办事方式做出调整",
          "D. 从人际关系出发，凡是合乎人情的，就是应该的"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 2,
        "type": "single",
        "question": "道德中所谓“应该”的意思是（）。",
        "options": [
          "A. 基于社会利益，按照社会公认的价值取向行事",
          "B. 考虑自己的利益需求，按照自己的想法行事",
          "C. 根据实际情况，不断对办事方式做出调整",
          "D. 从人际关系出发，凡是合乎人情的，就是应该的"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 3,
        "type": "single",
        "question": "职业道德是（）。",
        "options": [
          "A. 从业人员的特定行为规范",
          "B. 企业上司的指导性要求",
          "C. 从业人员的自我约束",
          "D. 职业纪律方面的最低要求"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 4,
        "type": "single",
        "question": "下列关于为事公道的说法中，你认为错误的是（）。",
        "options": [
          "A. 为事公道就是要站在公正的立场上，按标准为事",
          "B. 为事公道不可能有明确的标准，只能因人而异",
          "C. 工作人员接待顾客时不以貌取人属于办事公道",
          "D. 办事公道不排斥折中处理的方式"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 5,
        "type": "single",
        "question": "下列关于职业道德的说法中，你认为正确的是（）。",
        "options": [
          "A. 没有职业道德的人干不好任何工作",
          "B. 有职业道德的人一定能够胜任工作",
          "C. 职业道德有时起作用，有时不起作用",
          "D. 职业道德无关紧要，可有可无"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 6,
        "type": "single",
        "question": "以下关于人员与职业道德关系的说法中，你认为正确的是（）。",
        "options": [
          "A. 每个从业人员都应该以德为先，做有职业道德的人",
          "B. 只有每个人都遵守职业道德，职业道德才会起作用",
          "C. 遵守职业道德与否，应该视具体情况而定",
          "D. 知识和技能是第一位的，职业道德则是第二位的"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 7,
        "type": "single",
        "question": "遵纪守法是指（）。",
        "options": [
          "A. 每个从业人员都要遵守纪律和法律，尤其要遵守职业纪律和与职业活动相关的法律法规",
          "B. 只遵守与所从事职业相关的法律法规",
          "C. 只遵守计量法",
          "D. 只遵守标准化法"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 8,
        "type": "single",
        "question": "要做到遵纪守法，对每个职工来说，必须做到（）。",
        "options": [
          "A. 有法可依",
          "B. 反对“管”“卡”“压”",
          "C. 反对自由主义",
          "D. 努力学法、知法、守法、用法"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 9,
        "type": "single",
        "question": "遵守职业纪律，不要求从业人员（）。",
        "options": [
          "A. 履行岗位职责",
          "B. 执行操作规程",
          "C. 可不遵守那些自己认为不合理的制度",
          "D. 处理好上下级关系"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 10,
        "type": "single",
        "question": "在程序的执行过程中，Cache和主存的地址映射是由（）完成的。",
        "options": [
          "A. 操作系统",
          "B. 程序员调度",
          "C. 硬件自动",
          "D. 用户软件"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 11,
        "type": "single",
        "question": "关于在I/O设备与主机间交换数据的叙述，（）是错误的。",
        "options": [
          "A. 中断方式下，CPU需要执行程序来实现数据传送任务",
          "B. 中断方式和DMA方式下，CPU与I/O设备都可同步工作",
          "C. 中断方式和DMA方式中，快速I/O设备更适合采用中断方式传递数据",
          "D. 若同时接到DMA请求和中断请求，CPU优先响应DMA请求"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 12,
        "type": "single",
        "question": "路由器是一种用于网络互连的计算机设备，但作为路由器，并不具备的是（）。",
        "options": [
          "A. 路由功能",
          "B. 多层交换",
          "C. 支持两种以上的子网协议",
          "D. 具有存储、转发、寻径功能"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 13,
        "type": "single",
        "question": "将二进制数11000001B转换为十进制数应该是（）。",
        "options": [
          "A. 193",
          "B. 189",
          "C. 187",
          "D. 195"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 14,
        "type": "single",
        "question": "下列软件中，属于应用软件的是（）。",
        "options": [
          "A. UNIX",
          "B. OFFICE",
          "C. LINUX",
          "D. WINDOWS"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 15,
        "type": "single",
        "question": "因争用资源产生死锁的必要条件是互斥、循环等待、不可抢占和（）。",
        "options": [
          "A. 请求与释放",
          "B. 释放与等待",
          "C. 释放与阻塞",
          "D. 保持与等待"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 16,
        "type": "single",
        "question": "在Linux系统中，（）目录用来存放用户密码信息。",
        "options": [
          "A. /boot",
          "B. /var",
          "C. /etc",
          "D. /dev"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 17,
        "type": "single",
        "question": "以下选项中，不属于Android系统的缺点的是（）。",
        "options": [
          "A. 版本过多，升级频繁",
          "B. 显著的开放性可以使其拥有更多的开发者",
          "C. 过分依赖开发商，缺少标准配置",
          "D. Android的开放性容易带来隐私危机"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 18,
        "type": "single",
        "question": "下列模式中，能够给出数据库物理存储结构与物理存取方法的是（）。",
        "options": [
          "A. 内模式",
          "B. 外模式",
          "C. 概念模式",
          "D. 逻辑模式"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 19,
        "type": "single",
        "question": "下列关于视图的说法错误的是（）。",
        "options": [
          "A. 视图是从一个或多个基本表导出的表，它是虚表",
          "B. 视图一经定义就可以和基本表一样被查询、删除和更新",
          "C. 某一用户可以定义若干个视图",
          "D. 视图可以用来定义新的视图"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 20,
        "type": "single",
        "question": "交换机工作在 OSI 七层中的 （）。",
        "options": [
          "A. 一层",
          "B. 二层",
          "C. 三层",
          "D. 三层以上"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 21,
        "type": "single",
        "question": "在 TCP/IP 协议中，A 类地址可用的网络地址是多少个（）。",
        "options": [
          "A. 125",
          "B. 126",
          "C. 127",
          "D. 128"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 22,
        "type": "single",
        "question": "应用程序 PING 发出的是（）报文。",
        "options": [
          "A. TCP 请求报文",
          "B. TCP 应答报文",
          "C. ICMP 请求报文",
          "D. ICMP 应答报文"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 23,
        "type": "single",
        "question": "如果要用电脑远程登录到另一台路由器，使用的应用程序为（）。",
        "options": [
          "A. HTTP",
          "B. PING",
          "C. TELNET",
          "D. TRACERT"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 24,
        "type": "single",
        "question": "当路由器的数据链路层收到报文的 MTU 大于该路由器将要发出接口的最大 MTU 时，采取的应对措施是（）。",
        "options": [
          "A. 丢掉该分组",
          "B. 将该分组分片",
          "C. 向源路由器发出请求，减小其分组大小",
          "D. 直接转发该分组"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 25,
        "type": "single",
        "question": "在以太网网络中（）可以将网络分成多个冲突域，但不能将网络分成多个广播域。",
        "options": [
          "A. 网桥",
          "B. 交换机",
          "C. 路由器",
          "D. 集线器"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 26,
        "type": "single",
        "question": "以下在局域网中进行网段分割时最好用的设备是（）。",
        "options": [
          "A. 路由器",
          "B. 交换机",
          "C. 网桥",
          "D. 集线器"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 27,
        "type": "single",
        "question": "下列关于 SSID 的说法错误的是（）。",
        "options": [
          "A. 一个 AP 上可以释放多个不同的 SSID",
          "B. 多个 AP 上可以释放相同的一个 SSID",
          "C. 一个 AP 上可以配置的 SSID 数目没有数量的限制",
          "D. 一个 AP 的两组天线上可以释放相同的 SSID 信号"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 28,
        "type": "single",
        "question": "以下关于静态路由说法错误的是（）。",
        "options": [
          "A. 通过网络管理员手动配置",
          "B. 路由器之间需要交互路由信息",
          "C. 不能自动适应网络拓扑的变化",
          "D. 对系统性能要求低"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 29,
        "type": "single",
        "question": "目前无线局域网主要以（）作传输媒介。",
        "options": [
          "A. 短波",
          "B. 微波",
          "C. 激光",
          "D. 红外线"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 30,
        "type": "single",
        "question": "对于利用软件缺陷进行的网络攻击，最有效的措施是（）。",
        "options": [
          "A. 及时更新补丁程序",
          "B. 安装防病毒软件并及时更新病毒库",
          "C. 安装防火墙",
          "D. 安装漏洞扫描软件"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 31,
        "type": "single",
        "question": "源主机ping 目的设备时，如果网络工作正常，则目的设备在接收到该报文后，将会向源主机回应 ICMP（）报文。",
        "options": [
          "A. Echo Request",
          "B. Echo Reply",
          "C. TTL-Exceeded",
          "D. Port-Unreachable"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 32,
        "type": "single",
        "question": "根据等级保护相关管理文件，等级保护对象的安全保护等级分为（）。",
        "options": [
          "A. 三级",
          "B. 四级",
          "C. 五级",
          "D. 六级"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 33,
        "type": "single",
        "question": "关于我国加强信息安全保障工作的主要原则，以下说法错误的是（）。",
        "options": [
          "A. 立足国情，以我为主，坚持技术与管理并重",
          "B. 正确处理安全和发展的关系，以安全保发展，在发展中求安全",
          "C. 统筹规划，突出重点，强化基础工作",
          "D. 全面提高信息安全防护能力，保护公众利益，维护国家安全"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 34,
        "type": "single",
        "question": "下面关于OSI 参考模型各层功能的说法错误的是（）。",
        "options": [
          "A. 物理层涉及在通信信道上传输的原始比特流，它定义了传输数据所需要的机械、电气功能及规程等特性",
          "B. 网络层决定传输报文的最佳路由，其关键问题是确定数据包从源端到目的端如何选择路由",
          "C. 传输层的基本功能是建立、维护虚电路，进行差错校验和流量控制",
          "D. 会话层负责数据格式处理、数据加密等"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 35,
        "type": "single",
        "question": "下面哪个协议不是 TCP/IP 中的网络层协议（）。",
        "options": [
          "A. IP",
          "B. RARP",
          "C. ARP",
          "D. UDP"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 36,
        "type": "single",
        "question": "将一个B类地址网段精确的分为512个子网那么子网掩码是（）。",
        "options": [
          "A. 255.255.255.252",
          "B. 255.255.255.128",
          "C. 255.255.0.0",
          "D. 255.255.255.192"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 37,
        "type": "single",
        "question": "IPv6的基本报头长度为（）Byte。",
        "options": [
          "A. 40",
          "B. 48",
          "C. 32",
          "D. 64"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 38,
        "type": "single",
        "question": "下列哪项最恰当地描述了建立 TCP 连接时“第一次握手”所做的工作（）。",
        "options": [
          "A. “连接发起方”向“接收方”发送一个 SYN-ACK 段",
          "B. “接收方”向“连接发起方”发送一个 SYN-ACK 段",
          "C. “连接发起方”向目标主机的 TCP 进程发送一个 SYN 段",
          "D. “接收方”向源主机的 TCP 进程发送一个 SYN 段作为应答"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 39,
        "type": "single",
        "question": "下列所述的哪个不是 ICMP 协议的功能（）。",
        "options": [
          "A. 报告 TCP 连接超时信息",
          "B. 重定向 UDP 消息",
          "C. 转发 SNMP 数据",
          "D. 查找子网掩码"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 40,
        "type": "single",
        "question": "当一台主机的IP地址是192.168.0.19，子网掩码是255.255.255.224，那么主机所在网络的网络号占ip地址的（）位。",
        "options": [
          "A. 24",
          "B. 25",
          "C. 27",
          "D. 28"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 41,
        "type": "single",
        "question": "企业在管理交换机配置权限时，对不同的账户权限进行分级管理，对于S5700以下选项中（）级权限的账户可以查看交换机的配置信息。",
        "options": [
          "A. 0",
          "B. 1",
          "C. 2",
          "D. 3"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 42,
        "type": "single",
        "question": "第一次对路由器进行配置的时候，一般使用（）登录路由器进行配置。",
        "options": [
          "A. 以太网口",
          "B. console口",
          "C. 环回口",
          "D. 串行端口"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 43,
        "type": "single",
        "question": "以下哪一项不是胖 AP 入网需要配置的参数（）。",
        "options": [
          "A. IP 地址",
          "B. DNS 服务器地址",
          "C. 默认网关地址",
          "D. 子网掩码"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 44,
        "type": "single",
        "question": "以下操作系统中，不属于网络操作系统的是（）。",
        "options": [
          "A. Linux",
          "B. UNIX",
          "C. Windows Server 2016",
          "D. DOS"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 45,
        "type": "single",
        "question": "Windows Server 2016操作系统的版本主要包括:Essentials、（）和Datacenter。",
        "options": [
          "A. 精简版",
          "B. Enterprise",
          "C. Standard",
          "D. Student"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 46,
        "type": "single",
        "question": "以下（）不是安全模型的实例。",
        "options": [
          "A. BLP模型",
          "B. US Wall模型",
          "C. Chinese Wall模型",
          "D. Biba模型"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 47,
        "type": "single",
        "question": "TCSEC（可信计算机系统评估标准）将网络安全分为（）个等级。",
        "options": [
          "A. 三",
          "B. 五",
          "C. 七",
          "D. 九"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 48,
        "type": "single",
        "question": "零信任网络（亦称零信任架构）模型对于企业网（）。",
        "options": [
          "A. 严格区分内外网",
          "B. 内外网有条件转换",
          "C. 无内网外网之分",
          "D. 内网优先外网"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 49,
        "type": "single",
        "question": "硬件安全技术，是指用硬件的手段保障计算机系统或网络系统中的信息安全的各种技术，以下哪种不属于硬件安全技术的有（）。",
        "options": [
          "A. 侧信道技术",
          "B. 硬件固件安全技术",
          "C. 无线传感器网络安全技术",
          "D. 数据备份技术"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 50,
        "type": "single",
        "question": "签名可以解决的鉴别问题包括（）、接收方篡改、第三方冒充。",
        "options": [
          "A. 发送者伪造",
          "B. 发送者否认",
          "C. 文件窃取",
          "D. 文件丢失"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 51,
        "type": "single",
        "question": "下列关于安全审计的内容说法中错误的是（）。",
        "options": [
          "A. 应对网络系统中的网络设备运行情况、网络流量、用户行为等进行日志记录",
          "B. 审计记录应包括:事件的日期和时间、用户、事件类型、事件是否成功及其他与审计相关的信息",
          "C. 应能根据记录数据进行分析，并生成报表",
          "D. 为了节约存储空间，审计记录可以随意删除、修改或覆盖"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 52,
        "type": "single",
        "question": "最小权限的英文缩写是（）。",
        "options": [
          "A. PSAP",
          "B. PPP",
          "C. PSA",
          "D. POLP"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 53,
        "type": "single",
        "question": "按照通用标准规范，安全审计主要包含数据生成、事件选择、事件存储、自动响应、（）、审计复核6个主要功能模块。",
        "options": [
          "A. 审计选择",
          "B. 事件分析",
          "C. 审计分析",
          "D. 事件处理"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 54,
        "type": "single",
        "question": "合理利用linux的日志文件，可以即时了解系统的安全情况，下面（）不是日志文件。",
        "options": [
          "A. /etc/smb.conf",
          "B. /var/log/lastlog",
          "C. /var/log/secure",
          "D. /var/log/wtmp"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 55,
        "type": "single",
        "question": "在Windows操作系统安全配置中，以下不属于账号安全配置的是（）。",
        "options": [
          "A. 禁用guest账号",
          "B. 更改管理员缺省账号名称",
          "C. 锁定管理员账号",
          "D. 删除与工作无关的账号"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 56,
        "type": "single",
        "question": "关于密码技术，以下（）描述是错误的。",
        "options": [
          "A. 密码学包括密码编码学和密码分析学两门学科",
          "B. 对称密钥密码体制基本特征是发送方和接收方共享相同的密钥",
          "C. 密码体制的安全既依赖于对密钥的保密，又依赖于对算法的保密",
          "D. 对称密钥加密算法不易实现数字签名，限制了它的应用范围"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 57,
        "type": "single",
        "question": "SQL语言分别为交互式SQL和（）。",
        "options": [
          "A. 提示式SQL",
          "B. 多用户SQL",
          "C. 嵌入式SQL",
          "D. 解释式SQL"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 58,
        "type": "single",
        "question": "以下哪一项不是常见的将病毒植入主机的方式（）。",
        "options": [
          "A. 移动媒体",
          "B. 运行正版软件",
          "C. 访问网页",
          "D. 邮件附件"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 59,
        "type": "single",
        "question": "为了防止电子邮件中的恶意代码，应该由（）方式阅读电子邮件。",
        "options": [
          "A. 纯文本",
          "B. 网页",
          "C. 程序",
          "D. 会话"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 60,
        "type": "single",
        "question": "对于病毒，（）可以绕过一些杀毒软件的扫描，从而实现它作为病毒的一些入侵或破坏的一些特性。",
        "options": [
          "A. 压缩",
          "B. 脱壳",
          "C. 加壳",
          "D. 破壳"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 61,
        "type": "single",
        "question": "逆向工程是（）过程。",
        "options": [
          "A. 模型到代码",
          "B. 代码到模型",
          "C. 设计到实现",
          "D. 类图到包图"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 62,
        "type": "single",
        "question": "网络应用服务，是（），包括网站建设、虚拟主机、企业邮箱等服务。",
        "options": [
          "A. 互联网基础服务资讯提供平台",
          "B. 在网络环境中为客户端提供各种服务的专用计算机系统",
          "C. 为客户提供本地服务的程序",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 63,
        "type": "single",
        "question": "能够进行域名和与之相对应的IP地址转换的服务器是（）。",
        "options": [
          "A. VPN服务器",
          "B. WEB服务器",
          "C. DNS服务器",
          "D. DHCP服务器"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 64,
        "type": "single",
        "question": "关于DNS服务，下列说法正确的是（）。",
        "options": [
          "A. 是动态主机配置协议",
          "B. 是域名解析协议",
          "C. 是用于分配域名的",
          "D. 必须配合HTTP协议来使用"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 65,
        "type": "single",
        "question": "如果DNS安装成功，将在%systemroot%\\system32文件夹下自动创建一个名为（）的文件夹。",
        "options": [
          "A. 域名",
          "B. dns",
          "C. dnsmessage",
          "D. dnslog"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 66,
        "type": "single",
        "question": "DNS常见的威胁有（）。",
        "options": [
          "A. DNS放大攻击",
          "B. DNS缓存中毒",
          "C. 僵尸网络反向代理",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 67,
        "type": "single",
        "question": "面对DNS威胁可常用的防御方法有（）。",
        "options": [
          "A. 采用更严格的访问控制",
          "B. 部署零信任方案",
          "C. 检查/验证DNS记录",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 68,
        "type": "single",
        "question": "下面对WEB的说法错误的是（）。",
        "options": [
          "A. 是一种基于超文本和HTTP的、全球性的、静态交互的、跨平台的分布式图形信息系统",
          "B. 即全球广域网，也称为万维网",
          "C. 建立在Internet上的一种网络服务",
          "D. 为浏览者在Internet上查找和浏览信息提供了图形化的、易于访问的直观界面，其中的文档及超级链接将Internet上的信息节点组织成一个互为关联的网状结构"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 69,
        "type": "single",
        "question": "下列（）端口属于WEB服务的默认端口。",
        "options": [
          "A. 21",
          "B. 53",
          "C. 80",
          "D. 110"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 70,
        "type": "single",
        "question": "常见WEB攻击方法，不包括（）。",
        "options": [
          "A. 利用服务器配置漏洞",
          "B. 恶意代码上传下载",
          "C. 构造恶意输入（SQL注入攻击、命令注入攻击、跨站脚本攻击）",
          "D. 业务测试"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 71,
        "type": "single",
        "question": "在访问WEB站点时，为了防止第三方偷看传输的内容，我们可以采取的行动为（）。",
        "options": [
          "A. 将整个Internet划分成Internet、Intranet、可信、受限等不同区域",
          "B. 在主机浏览器中加载自己的证书",
          "C. 浏览站点前索要WEB站点的证书",
          "D. 通信中使用SSL技术"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 72,
        "type": "single",
        "question": "FTP的工作模式分主动模式和被动模式。主要是站在服务器的角度去看问题，被动模式下服务器开放TCP（）端口进行数据传输。",
        "options": [
          "A. 21",
          "B. 随机",
          "C. 80",
          "D. 20"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 73,
        "type": "single",
        "question": "在IIS中搭建FTP网站，下列说法错误的是（）。",
        "options": [
          "A. 基本访问方式是需要账号，但不需要密码登录的",
          "B. FTP的默认端口可以修改",
          "C. 访问FTP的权限可以设置读取和写入方式",
          "D. 身份验证可以采用匿名方式"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 74,
        "type": "single",
        "question": "FTP存在的漏洞不包括（）。",
        "options": [
          "A. 匿名身份验证",
          "B. 明文传输",
          "C. 不验证数据的完整性",
          "D. 基于用户名密码验证"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 75,
        "type": "single",
        "question": "在IIS里配置 FTP 服务，通过配置“FTP IPv4地址和域限制”，可以指定允许访问FTP站点的（）。",
        "options": [
          "A. 源端口号",
          "B. 目的端口号",
          "C. 源IP地址",
          "D. 目的IP地址"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 76,
        "type": "single",
        "question": "DHCP服务是基于（）协议。",
        "options": [
          "A. TCP",
          "B. UDP",
          "C. ICMP",
          "D. HTTP"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 77,
        "type": "single",
        "question": "配置DHCP服务中，下列说法正确的是（）。",
        "options": [
          "A. 可以配置保留的IP地址，与主机的MAC地址对应",
          "B. 分配一个IP地址池，必须配置排除地址",
          "C. 每个作用域可以配置的IP地址范围是256",
          "D. 只能配置一个作用域"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 78,
        "type": "single",
        "question": "DHCP饿死攻击的原理是（）。",
        "options": [
          "A. 当攻击者私自安装并运行DHCP Server 程序后，可以将自己伪装成DHCP Server",
          "B. 攻击者利用ARP机制，欺骗客户端把攻击者当成DHCP服务器，把发向DHCP服务器的流量发给攻击者;同理，攻击者欺骗DHCP服务器，把攻击者当成DHCP客户端，把发向DHCP客户端的流量发给攻击者",
          "C. 攻击者持续大量地向DHCP服务器申请IP地址，直到耗尽DHCP服务器地址池的IP地址，使DHCP服务器无法再给正常的主机分配IP地址",
          "D. 通过拦截正常的网络通信数据，并进行数据篡改和嗅探，而通信的双方却毫不知情"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 79,
        "type": "single",
        "question": "在DHCP服务配置完成后，手动在客户端获得TCP/IP信息，重新获得TCP/IP信息的命令是（）。",
        "options": [
          "A. ipconfig/release",
          "B. ipconfig/renew",
          "C. ipconfig/all",
          "D. nslookup"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 80,
        "type": "single",
        "question": "Linux的文件共享服务是（）。",
        "options": [
          "A. DNS",
          "B. FTP",
          "C. Samba",
          "D. DHCP"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 81,
        "type": "single",
        "question": "配置IPSec VPN实现数据的保密性，需选择安全协议（）。",
        "options": [
          "A. IKE",
          "B. AH",
          "C. ESP",
          "D. SSL"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 82,
        "type": "single",
        "question": "以下对于引入 VLAN 的二层交换机说法错误的是（）。",
        "options": [
          "A. 任何一个帧都不能从自己所属的 VLAN 被转发到其他的 VLAN 中",
          "B. 每一个 VLAN 都是一个独立的广播域",
          "C. 每一个人都不能随意地从网络上的一点，毫无控制地直接访问另一点的网络或监听整个网络上的帧",
          "D. VLAN 隔离了广播域，但并没有隔离各个 VLAN 之间的任何流量"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 83,
        "type": "single",
        "question": "查看以下交换机端口的配置后，选项中说法错误的是（）。",
        "options": [
          "A. interface GigabitEthernet 0/0/2",
          "B. port hybrid pvid vlan 100",
          "C. port hybrid tagged vlan 100",
          "D. port hybrid untagged vlan 200",
          "E. 如果数据帧携带的 vlan tag 为 200，则剥离该 tag 转发",
          "F. 如果收到不带 vlan tag 的数据帧，交换机要添加 vlan tag 100",
          "G. 接口类型为 hybrid",
          "H. 如果数据帧携带的 vlan tag 为 100，则剥离该 tag 转发"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 84,
        "type": "single",
        "question": "支持VLAN的以太网帧格式中，tag标签的长度值是（）字节。",
        "options": [
          "A. 2",
          "B. 8",
          "C. 4",
          "D. 6"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 85,
        "type": "single",
        "question": "以下对于手动负载均衡模式的链路聚合说法正确的是（）。",
        "options": [
          "A. 手工负载分担模式下所有活动接口都参与数据的转发，分担负载流量",
          "B. 手工负载分担模式下最多只能有 4 个活动端口",
          "C. 手工负载分担模式下链路两端的设备相互发送 LACP 报文",
          "D. 手工负载分担模式下可以配置活动端口的数量"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 86,
        "type": "single",
        "question": "配置IP地址和掩码需在VRP（）下进行。",
        "options": [
          "A. 用户视图",
          "B. 系统视图",
          "C. 接口视图",
          "D. 其他视图"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 87,
        "type": "single",
        "question": "标准的SNMP服务使用的端口号是（）。",
        "options": [
          "A. 161、162",
          "B. 160、161",
          "C. 162、163",
          "D. 160、163"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 88,
        "type": "single",
        "question": "某企业新购入路由器，作为网络管理员、初次配置该设备通常通过（）方式。",
        "options": [
          "A. SNMP",
          "B. FTP",
          "C. Console口登录",
          "D. Telnet"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 89,
        "type": "single",
        "question": "VRP 操作系统命令划分为访问级、监控级、配置级、管理级 4 个级别。企业在进行账号分配时，一般给企业见习人员分配什么级别的账号（）。",
        "options": [
          "A. 配置级",
          "B. 访问级",
          "C. 管理级",
          "D. 监控级"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 90,
        "type": "single",
        "question": "当管理员通过 Telnet 登录路由器后，发现无法配置路由器的接口 IP 地址。那么可能的原因是（）。",
        "options": [
          "A. Telnet 用户的认证方式配置错误",
          "B. 管理员使用的 Telnet 终端软件禁止相应操作",
          "C. Telnet 用户的级别配置错误",
          "D. SNMP 参数配置错误"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 91,
        "type": "single",
        "question": "Windows操作系统默认的系统管理员账号为（）。",
        "options": [
          "A. Windows",
          "B. administrator",
          "C. guest",
          "D. root"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 92,
        "type": "single",
        "question": "在Windows Server 2016操作系统中，创建隐藏共享文件夹时，需要在文件夹共享名的后面附加一个（）符号。",
        "options": [
          "A. &",
          "B. #",
          "C. $",
          "D. @"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 93,
        "type": "single",
        "question": "Linux系统账号分为超级用户、普通用户、（）。",
        "options": [
          "A. 特权用户",
          "B. 一般用户",
          "C. 内置用户",
          "D. 来宾用户"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 94,
        "type": "single",
        "question": "在Linux系统中，添加用户组命令是（）。",
        "options": [
          "A. groupadd",
          "B. gpasswd",
          "C. groups",
          "D. groupmod"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 95,
        "type": "single",
        "question": "Linux系统中修改文件的所有者的命令是（）。",
        "options": [
          "A. chgrp",
          "B. chown",
          "C. chpasswd",
          "D. chmod"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 96,
        "type": "single",
        "question": "资源安全管理通常会保护（）和保护文件。",
        "options": [
          "A. 关键用户",
          "B. 关键分区",
          "C. 个人信息",
          "D. 日志系统"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 97,
        "type": "single",
        "question": "在Linux中，以下（）做法不能提升网络安全性。",
        "options": [
          "A. 使用telnet远程登录Linux系统",
          "B. 定期检查系统中的日志",
          "C. 防止ping",
          "D. 使用ssh远程登录Linux系统"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 98,
        "type": "single",
        "question": "Linux系统安全增强技术包括以下（）选项。",
        "options": [
          "A. 启用匿名账户",
          "B. 配置最大权限",
          "C. 限制远程访问",
          "D. 设置容易记有规律的口令"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 99,
        "type": "single",
        "question": "访问控制列表的类型包含扩展访问控制列表和（）。",
        "options": [
          "A. 行为访问控制",
          "B. 标准访问控制列表",
          "C. 限制访问控制列表",
          "D. 用户访问控制列表"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 100,
        "type": "single",
        "question": "常见的访问控制模型有（）、自主访问控制、强制访问控制和基于属性访问控制几种。",
        "options": [
          "A. 基于权限访问控制",
          "B. 基于端口访问控制",
          "C. 基于时间访问控制",
          "D. 基于角色访问控制"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 101,
        "type": "single",
        "question": "在访问控制策略制定防外还是防内是考虑（）。",
        "options": [
          "A. 不同网络应用的安全需求",
          "B. 所有和应用相关的信息的确认",
          "C. 网络信息传播和授权策略",
          "D. 访问权限的更新与维护"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 102,
        "type": "single",
        "question": "系统补丁主要用来修复系统的（）。",
        "options": [
          "A. 美观",
          "B. 顺畅",
          "C. 安全",
          "D. 便捷"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 103,
        "type": "single",
        "question": "windows更新系统补丁的三种方法是:（）、工具软件更新和手动更新。",
        "options": [
          "A. 系统更新",
          "B. 定时更新",
          "C. 最大化更新",
          "D. 有权更新"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 104,
        "type": "single",
        "question": "下列是不感染的独立性恶意代码的是（）。",
        "options": [
          "A. 特洛伊木马",
          "B. 点滴器",
          "C. 计算机病毒",
          "D. 后门"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 105,
        "type": "single",
        "question": "Windows病毒包括宏病毒和（）。",
        "options": [
          "A. 脚本病毒",
          "B. 木马",
          "C. 流感病毒",
          "D. 毒虫病毒"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 106,
        "type": "single",
        "question": "以下（）不属于一个合理的反病毒方法的执行措施。",
        "options": [
          "A. 检测",
          "B. 识别",
          "C. 破坏",
          "D. 清除"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 107,
        "type": "single",
        "question": "杀毒软件扫描到的病毒文件，通常采取的杀毒方式是（）。",
        "options": [
          "A. 禁止访问",
          "B. 删除",
          "C. 保留",
          "D. 不处理"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 108,
        "type": "single",
        "question": "某台主机属于中国电信系统，其域名应以（）结尾。",
        "options": [
          "A. com.cn",
          "B. com",
          "C. net.cn",
          "D. net"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 109,
        "type": "single",
        "question": "以下关于域名和IP地址的说法正确的是（）。",
        "options": [
          "A. 域名和IP地址是相同的",
          "B. 域名与IP地址是对应的，但不是一一对应的",
          "C. 域名与IP地址是一一对应的",
          "D. Internet上的每台计算机都必须有唯一的IP地址和域名"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 110,
        "type": "multiple",
        "question": "我国网络安全法律体系的特点包括（）。",
        "options": [
          "A. 以《网络安全法》为基本法统领，覆盖各个领域",
          "B. B、部门规章及以下文件占多数",
          "C. C、涉及多个管理部门",
          "D. D、内容涵盖网络安全管理、保障、责任各个方面"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 111,
        "type": "multiple",
        "question": "我国网络安全法律体系的特点包括（）。",
        "options": [
          "A. 以《网络安全法》为基本法统领，覆盖各个领域",
          "B. B、部门规章及以下文件占多数",
          "C. C、涉及多个管理部门",
          "D. D、内容涵盖网络安全管理、保障、责任各个方面"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 112,
        "type": "multiple",
        "question": "网络安全，是指通过采取必要措施，防范对网络的攻击、侵入、干扰、破坏和非法使用以及意外事故，使网络处于稳定可靠运行的状态，以及保障网络数据的（）的能力。",
        "options": [
          "A. 真实性",
          "B. B、完整性",
          "C. C、保密性",
          "D. D、可用性"
        ],
        "analysis": "",
        "answer": [
          1,
          2,
          3
        ]
      },
      {
        "id": 113,
        "type": "multiple",
        "question": "实施网络安全管理的关键成功因素包括（）。",
        "options": [
          "A. 向所有管理者和员工有效地推广安全意识",
          "B. B、向所有管理者、员工及其他伙伴方分发信息安全策略、指南和标准",
          "C. C、为网络安全管理活动提供资金支持",
          "D. D、提供适当的培训和教育"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 114,
        "type": "multiple",
        "question": "SQL注入攻击有可能产生（）危害。",
        "options": [
          "A. 网页被挂木马",
          "B. B、恶意篡改网页内容",
          "C. C、未经授权状况下操作数据库中的数据",
          "D. D、私自添加系统账号"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 115,
        "type": "multiple",
        "question": "以下属于弥补openSSL安全漏洞措施的是（）。",
        "options": [
          "A. 更新补丁",
          "B. B、更新X.509证书",
          "C. C、更换泄露的密钥",
          "D. D、杀毒"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 116,
        "type": "multiple",
        "question": "降低计算机病毒的影响范围就必须有效的控制计算机病毒的传播途径，下列属于计算机病毒传播途径的是（）。",
        "options": [
          "A. 通过文件共享传播",
          "B. B、通过电子邮件传播",
          "C. C、通过WEB网页传播",
          "D. D、通过系统漏洞传播"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 117,
        "type": "multiple",
        "question": "下列有关计算机病毒的说法中，正确的是（）。",
        "options": [
          "A. 计算机病毒可以通过WORD文档进行传播",
          "B. B、用杀毒软件将存储介质杀毒之后，该存储介质仍会再染病毒",
          "C. C、计算机病毒可以自动生成",
          "D. D、计算机病毒在某些条件下被激活之后，才开始起干扰和破坏作用"
        ],
        "analysis": "",
        "answer": [
          0,
          2,
          3
        ]
      },
      {
        "id": 118,
        "type": "multiple",
        "question": "对社会工程学攻击解释中意思贴近的是（）。",
        "options": [
          "A. 计算机存在逻辑错误",
          "B. B、人做出错误判断",
          "C. C、攻击者的计算机知识",
          "D. D、多种攻击技术复合"
        ],
        "analysis": "",
        "answer": [
          1,
          3
        ]
      },
      {
        "id": 119,
        "type": "multiple",
        "question": "在地址翻译原理中，防火墙根据什么来使用传输到相同的IP发送给内部不同的主机上（）。",
        "options": [
          "A. 防火墙记录的目的端口",
          "B. B、防火墙使用广播的方式发送",
          "C. C、防火墙根据每个包的时间顺序",
          "D. D、防火墙根据每个包的TCP序列号"
        ],
        "analysis": "",
        "answer": [
          0,
          3
        ]
      },
      {
        "id": 120,
        "type": "multiple",
        "question": "防火墙有哪些缺点和不足?（）",
        "options": [
          "A. 防火墙不能抵抗最新的未设置策略的攻击漏洞",
          "B. B、防火墙的并发连接数限制容易导致拥塞或者溢出",
          "C. C、防火墙对服务器合法开放的端口的攻击大多无法阻止",
          "D. D、防火墙可以阻止内部主动发起连接的攻击"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 121,
        "type": "multiple",
        "question": "主机系统高可用技术包括以下哪些工作模式（）。",
        "options": [
          "A. 双机热备份方式",
          "B. B、双机互备方式",
          "C. C、多处理器协同方式",
          "D. D、群集并发存取方式"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          3
        ]
      },
      {
        "id": 122,
        "type": "multiple",
        "question": "下列关于网络信息安全说法正确的有（）。",
        "options": [
          "A. 网络运营者应当对其收集的用户信息严格保密",
          "B. B、网络运营者应妥善管理用户信息，无需建立用户信息保护制度",
          "C. C、网络运营者不得泄露、篡改、毁损其收集的个人信息",
          "D. D、在经过处理无法识别特定个人且不能复原的情况下，未经被收集者同意，网络运营者不得向他人提供个人信息"
        ],
        "analysis": "",
        "answer": [
          0,
          2
        ]
      },
      {
        "id": 123,
        "type": "multiple",
        "question": "某单位信息内网的一台计算机上一份重要文件泄密，但从该计算机上无法获得泄密细节和线索，可能的原因是（）。",
        "options": [
          "A. 该计算机未开启审计功能",
          "B. B、该计算机审计日志未安排专人进行维护",
          "C. C、该计算机感染了木马",
          "D. D、该计算机存在系统漏洞"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 124,
        "type": "judge",
        "question": "国家鼓励开发网络数据安全保护和利用技术，促进公共图书馆资源开放，推动技术创新和经济社会发展。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 125,
        "type": "judge",
        "question": "国家鼓励开发网络数据安全保护和利用技术，促进公共图书馆资源开放，推动技术创新和经济社会发展。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 126,
        "type": "judge",
        "question": "任意翻阅同事文件资料的行为违反职业行为规范。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 127,
        "type": "judge",
        "question": "运算器是计算机对数据进行加工处理的部件，主要执行加、减、乘、除等算术运算。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 128,
        "type": "judge",
        "question": "快速格式化会检测是否有坏扇区。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 129,
        "type": "judge",
        "question": "计算机软件按其用途及实现的功能不同可分为系统软件和应用软件两大类。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 130,
        "type": "judge",
        "question": "计算机能直接识别汇编语言程序。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 131,
        "type": "judge",
        "question": "利用多媒体计算机可以进行观看VCD、听音乐、玩游戏、录放音等操作。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 132,
        "type": "judge",
        "question": "在Windows系统中，对于C盘上被删除的文件均在回收站中。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 133,
        "type": "judge",
        "question": "开放系统互连参考模型（OSI）中，网络层以数据包的形式传输数据流。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 134,
        "type": "judge",
        "question": "当IP报文在internet中运动的时候，每经过一台路由器，IP报文的TTL字段的值就被路由器减1，如果该字段的值被减为0，则这个报文就会被设备丢弃。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 135,
        "type": "judge",
        "question": "30.0.1是B类IP地址。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 136,
        "type": "judge",
        "question": "TCP分段中，有字段被称为序号sequence number，它代表着该TCP分段自身的序号，接受该分段的一方可以根据这个序号判断是否存在分段重收，或者漏收的情况。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 137,
        "type": "judge",
        "question": "UDP报文没有数据报文和控制报文之分，所有UDP报文都是UDP数据报文。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 138,
        "type": "judge",
        "question": "目前Internet上基于以太网的网络设备多数使用长地址类型的物理地址。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 139,
        "type": "judge",
        "question": "配置同一台交换机 VLANIF 接口的 IP 地址可以相同。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 140,
        "type": "judge",
        "question": "网络地址转换技术又称为NAT技术，它的基本作用是实现私网地址转换成公网地址，不能将公网地址转换成私网地址。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 141,
        "type": "judge",
        "question": "如果更改了 AP 射频的配置参数，必须重启 AP 后命令才能生效。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 142,
        "type": "judge",
        "question": "当客户端出现可以连接到无线网络，也可以访问外网，但网络速度较慢的情况时，可能是此位置的信号强度不够或者当前 AP 设备断电。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 143,
        "type": "judge",
        "question": "Linux 没有像 Windows那样的桌面系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 144,
        "type": "judge",
        "question": "用户登录之前需按 Ctrl+Alt+Del 可确保用户输入其密码时通过信任的路径进行通信。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 145,
        "type": "judge",
        "question": "基于端口的VLAN划分方式，可以利用交换机把网络划分成多个vlan，一般情况下交换机默认的vlan是vlan1。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 146,
        "type": "judge",
        "question": "将交换机端口配置成trunk口后，可以根据网络情况配置Trunk端口允许哪些VLAN的数据帧通过。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 147,
        "type": "judge",
        "question": "STP确定交换机的根端口是由BID、RPC、PID共同决定。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 148,
        "type": "judge",
        "question": "为方便对路由器的管理，通常会对路由器改名和设置管理地址，并将管理地址宣告进路由协议中去。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 149,
        "type": "judge",
        "question": "OSPF通过路由协议算法可以生成一棵无环的最短路径树，因而OSPF路由协议没有环路问题。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 150,
        "type": "judge",
        "question": "SNMP 报文是通过 UDP 来承载的。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 151,
        "type": "judge",
        "question": "只要用户远程登录交换机，就能够执行任何命令。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 152,
        "type": "judge",
        "question": "华为的管理级用户权限，能够允许切换设备主备板件。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 153,
        "type": "judge",
        "question": "一个组中可以根据需要包含多个用户帐户。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 154,
        "type": "judge",
        "question": "职业道德是事业成功的保证。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 155,
        "type": "judge",
        "question": "爱岗敬业是对员工的基本要求。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 156,
        "type": "judge",
        "question": "计算机系统包含硬件系统和操作系统两大部分。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 157,
        "type": "judge",
        "question": "人和计算机进行信息交换是通过输入输出设备实现的。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 158,
        "type": "judge",
        "question": "三层交换机主要用于骨干网络和连接子网。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 159,
        "type": "judge",
        "question": "计算机中最小单位是二进制的一个数位。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 160,
        "type": "judge",
        "question": "应用软件的作用是扩大计算机的存储容量。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 161,
        "type": "judge",
        "question": "操作系统直接作用于硬件上，并为其它软件提供支持。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 162,
        "type": "judge",
        "question": "在OSI 参考模型中，网络层的功能主要是。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 163,
        "type": "judge",
        "question": "TCP/IP 模型的网络接口层对应于 OSI 模型的物理层、数据链路层和网络层。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      }
    ]
  },
  {
    "set_name": "2026考证顺序刷题2-B-2",
    "items": [
      {
        "id": 1,
        "type": "single",
        "question": "URL的组成格式为（）。",
        "options": [
          "A. 资源类型.存放资源的主机域名.资源文件名",
          "B. 资源类型.资源文件名.存放资源的主机域名",
          "C. 主机域名.资源类型.资源文件名",
          "D. 资源文件名.主机域名.资源类型"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 2,
        "type": "single",
        "question": "用户从CA安全认证中心申请自己的证书，并将该证书安装在浏览器的主要目的是（）。",
        "options": [
          "A. 以防止他人假冒自己",
          "B. 验证Web服务器的真实性",
          "C. 保护自己的计算机免受到病毒的危害",
          "D. 防止第三方偷看传输的信息"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 3,
        "type": "single",
        "question": "下列选项中，（）不是导致Web服务溢出攻击的原因。",
        "options": [
          "A. 服务器使用Windows操作系统",
          "B. 没有能够过滤用户输入中的恶意字符",
          "C. 开发者没有完全考虑Web用户可能的行为",
          "D. 应用服务器处理输入数据时存在缓冲区溢出漏洞"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 4,
        "type": "single",
        "question": "为增强Web应用程序的安全性，某软件开发经理决定加强Web软件安全开发培训，下列哪项内容不在考虑范围内。（）",
        "options": [
          "A. 关于网站身份鉴别技术方面安全知识的培训",
          "B. 针对OpenSSL心脏出血漏洞方面安全知识的培训",
          "C. 针对SQL注入漏洞的安全编程培训",
          "D. 关于ARM系统漏洞挖掘方面安全知识的培训"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 5,
        "type": "single",
        "question": "渗透测试的流程不包含（）。",
        "options": [
          "A. 留后门",
          "B. 信息收集",
          "C. 漏洞挖掘",
          "D. 提权"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 6,
        "type": "single",
        "question": "下列关于域名备案的目的的描述中，不正确的是（）。",
        "options": [
          "A. 为了防止在网上从事非法的网站经营活动",
          "B. 为了打击不良互联网信息的传播",
          "C. 未经备案，不得在中华人民共和国境内从事互联网信息服务",
          "D. 如果网站不备案的话，很有可能被查处以后关停"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 7,
        "type": "single",
        "question": "《互联网域名管理办法》规定，（）是中国的国家顶级域名。",
        "options": [
          "A. .China",
          "B. .CHN",
          "C. .CA",
          "D. .CN"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 8,
        "type": "single",
        "question": "下列选项中，不属于CDN网络中包含的功能实体的是（）。",
        "options": [
          "A. 内容缓存设备",
          "B. 内容交换机",
          "C. 内容路由器",
          "D. 内容服务器"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 9,
        "type": "single",
        "question": "数据备份保护信息系统的安全属性是（）。",
        "options": [
          "A. 可审性",
          "B. 可用性",
          "C. 完整性",
          "D. 保密性"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 10,
        "type": "single",
        "question": "（）是按备份周期对整个系统所有的文件（数据）进行备份，是客服系统数据不安全最简单的方法。",
        "options": [
          "A. 完整备份策略",
          "B. 按需备份策略",
          "C. 差分备份策略",
          "D. 增量备份策略"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 11,
        "type": "single",
        "question": "要设置系统的备份还原，可使用的对话框是（）。",
        "options": [
          "A. 文件夹选项",
          "B. 系统属性",
          "C. 显示属性",
          "D. 设备管理器"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 12,
        "type": "single",
        "question": "关于冷备份的说法正确的是（）。",
        "options": [
          "A. 支持按表和按用户恢复",
          "B. 低度维护，高度安全",
          "C. 单独使用时，只能提供到“某一时间点上”的恢复",
          "D. 非常快速，且容易归档"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 13,
        "type": "single",
        "question": "在职业道德实践中，要求做到公私分明，以下不符合要求的是（）。",
        "options": [
          "A. 正确认识公与私的关系",
          "B. 树立奉献意识",
          "C. 从细微处严格要求自己",
          "D. 从自身利益为主，公私兼顾"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 14,
        "type": "single",
        "question": "公司应明确员工的雇佣条件和考察评价的方法与程序，减少因雇佣不当而产生的安全风险。人员考察的内容不包括（）。",
        "options": [
          "A. 身份考验、来自组织和个人的品格鉴定",
          "B. 家庭背景情况调查",
          "C. 学历和履历的真实性和完整性",
          "D. 学术及专业资格"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 15,
        "type": "single",
        "question": "关于企业文化，你认为正确的是（）。",
        "options": [
          "A. 企业文化是企业管理的重要因素",
          "B. 企业文化是企业的外在表象",
          "C. 企业文化产生于改革开放过程中的中国",
          "D. 企业文化建设的核心内容是文娱和体育活动"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 16,
        "type": "single",
        "question": "下列不属于企业文化功能的是（）。",
        "options": [
          "A. 整合功能",
          "B. 激励功能",
          "C. 强制功能",
          "D. 自律功能"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 17,
        "type": "single",
        "question": "在（）情况下，一个组织应对公众和媒体公告其信息系统中发生的信息安全事件。",
        "options": [
          "A. 当信息安全事件的负面影响扩展到本组织以外时",
          "B. 只要发生了安全事件就应当公告",
          "C. 只有公众的什么财产安全受到巨大危害时才公告",
          "D. 当信息安全事件平息之后"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 18,
        "type": "single",
        "question": "加强职业道德修养的方式不包括（）。",
        "options": [
          "A. 学习职业道德规范",
          "B. 自我放纵",
          "C. 以先进典型为标尺",
          "D. 慎独"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 19,
        "type": "single",
        "question": "在下列做法中，符合举止得体要求的是（）。",
        "options": [
          "A. 态度谦卑",
          "B. 感情热烈",
          "C. 行为适度",
          "D. 举止随意"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 20,
        "type": "single",
        "question": "管理员账号可以（）。",
        "options": [
          "A. 在客户机上使用",
          "B. 在自己的私人电脑上登录",
          "C. 在工作电脑上登录",
          "D. 将账号密码告诉给关系较好的同事"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 21,
        "type": "single",
        "question": "微型计算机中，控制器的基本功能是（）。",
        "options": [
          "A. 实现算术运算和逻辑运算",
          "B. 存储各种控制信息",
          "C. 保持各种控制状态",
          "D. 控制机器各个部件协调一致地工作"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 22,
        "type": "single",
        "question": "使用（）命令可以检查网络适配器是否工作正常等网络问题。",
        "options": [
          "A. tracert",
          "B. netstat",
          "C. ping",
          "D. arp"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 23,
        "type": "single",
        "question": "下列选项列出的计算机系统由低到高分层顺序中，正确的是（）。",
        "options": [
          "A. 硬件-应用软件-操作系统-其他系统软件",
          "B. 硬件-操作系统-其他系统软件-应用软件",
          "C. 硬件-其他系统软件-操作系统-应用软件",
          "D. 硬件-应用软件-其他系统软件-操作系统"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 24,
        "type": "single",
        "question": "对高级语言程序的下列叙述中，正确的是（）。",
        "options": [
          "A. 计算机语言中，只有机器语言属于低级语言",
          "B. 高级语言源程序可以被计算机直接执行",
          "C. C语言属于高级语言",
          "D. 机器语言是与机器硬件是无关的"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 25,
        "type": "single",
        "question": "多媒体计算机的硬件主要体现在配备了（）。",
        "options": [
          "A. 显卡",
          "B. 网卡",
          "C. 声卡",
          "D. 调制解调器"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 26,
        "type": "single",
        "question": "在Windows系统中，默认权限最低的用户组是（）。",
        "options": [
          "A. everyone",
          "B. administrator",
          "C. power user",
          "D. users"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 27,
        "type": "single",
        "question": "在Linux系统中，要列出一个目录下的所有文件需要使用的命令行为（）。",
        "options": [
          "A. ls -l",
          "B. ls",
          "C. ls -a",
          "D. ls -d"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 28,
        "type": "single",
        "question": "下列选项中，属于移动互联网设备主流的操作系统的是（）。",
        "options": [
          "A. 三星、苹果、微软",
          "B. Unix、Linux",
          "C. iOS、Android",
          "D. Windows10、Windows2016 Server"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 29,
        "type": "single",
        "question": "数据库系统在其内部具有3级模式，用来描述数据库中全体数据的全局逻辑结构和特性的是（）。",
        "options": [
          "A. 外模式",
          "B. 概念模式",
          "C. 内模式",
          "D. 存储模式"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 30,
        "type": "single",
        "question": "SQL语句中修改表结构的命令是（）。",
        "options": [
          "A. MODIFY TABLE",
          "B. MODIFY STRUCTURE",
          "C. ALTER TABLE",
          "D. ALTER STRUCTURE"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 31,
        "type": "single",
        "question": "OSI 代表的是以下哪一项（）。",
        "options": [
          "A. Organization for Standards Institute",
          "B. Organization for Internet Standards",
          "C. Open Standards Institute",
          "D. Open Systems Interconnection"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 32,
        "type": "single",
        "question": "TCP/IP协议体系结构中，IP层对应OSI/RM模型的（）。",
        "options": [
          "A. 会话层",
          "B. 网络层",
          "C. 数据链路层",
          "D. 传输层"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 33,
        "type": "single",
        "question": "小于（）的 TCP/UDP 端口号已保留与现有服务所对应，大于此数字的端口号可自由分配。",
        "options": [
          "A. 199",
          "B. 100",
          "C. 1024",
          "D. 2048"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 34,
        "type": "single",
        "question": "以下应用层协议中，可以用做邮件服务的协议有（）。",
        "options": [
          "A. TFTP",
          "B. SMTP",
          "C. SNMP",
          "D. HTTP"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 35,
        "type": "single",
        "question": "当路由器接收的 IP 报文的 TTL 值等于 0 时，采取的处理方式是（）。",
        "options": [
          "A. 将该分组分片",
          "B. 丢掉该分组",
          "C. 转发该分组",
          "D. 以上答案均不对"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 36,
        "type": "single",
        "question": "如果多个局域网要进行网络互连，并且需要它们处于不同的广播域，可以使用的网络互连设备是（）。",
        "options": [
          "A. 交换机",
          "B. 集线器",
          "C. 网桥",
          "D. 路由器"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 37,
        "type": "single",
        "question": "无线局域网 WLAN的传输介质是（）。",
        "options": [
          "A. 无线电波",
          "B. 红外线",
          "C. 载波电流",
          "D. 卫星通信"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 38,
        "type": "single",
        "question": "当 AC 为旁挂式组网时，如果数据是直接转发，则数据流（）AC;如果数据是隧道转发模式，则数据流（）AC。",
        "options": [
          "A. 不经过，经过",
          "B. 不经过，不经过",
          "C. 经过，经过",
          "D. 经过，不经过"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 39,
        "type": "single",
        "question": "在STP网络中，可以通过配置（）来指定根桥。",
        "options": [
          "A. 桥优先级",
          "B. 端口速率",
          "C. 双工模式",
          "D. 管理IP"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 40,
        "type": "single",
        "question": "现代的病毒木马融合了（）这些新技术。",
        "options": [
          "A. 进程注入",
          "B. 注册表隐藏",
          "C. 漏洞扫描",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 41,
        "type": "single",
        "question": "当路由器的主控板发生故障，以下选项中不可能发生的是（）。",
        "options": [
          "A. 路由器自动切换到备用主控板进行工作",
          "B. 转发数据包出现丢包情况",
          "C. 切换备用主控板失败，路由器宕机",
          "D. 路由器正常工作"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 42,
        "type": "single",
        "question": "下列哪个协议可提供“ping”和“traceroute”这样的故障诊断功能（）。",
        "options": [
          "A. ICMP",
          "B. IGMP",
          "C. ARP",
          "D. RARP"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 43,
        "type": "single",
        "question": "职业道德是一种（）的约束机制。",
        "options": [
          "A. 强制性",
          "B. 非强制性",
          "C. 随意性",
          "D. 自发性"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 44,
        "type": "single",
        "question": "关于职业道德的特征，表述不正确的是（）。",
        "options": [
          "A. 鲜明的职业性",
          "B. 适用范围上的广泛性",
          "C. 相对稳定性和连续性",
          "D. 一定的强制性"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 45,
        "type": "single",
        "question": "下列（）属于职业道德的社会功能。",
        "options": [
          "A. 提高社会道德水平",
          "B. 规范职业活动",
          "C. 整合职业活动",
          "D. 引导职业活动向和谐方向发展"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 46,
        "type": "single",
        "question": "社会主义职业道德的核心是（）。",
        "options": [
          "A. 爱岗敬业",
          "B. 诚实守信",
          "C. 为人民服务",
          "D. 忠于革命事业"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 47,
        "type": "single",
        "question": "职业是人们在社会中所从事的作为谋生手段的工作，以下选项不属于职业的特征的是（）。",
        "options": [
          "A. 目的性",
          "B. 社会性",
          "C. 群体性",
          "D. 个体性"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 48,
        "type": "single",
        "question": "（）给公司带来了最大的安全风险。",
        "options": [
          "A. 临时工",
          "B. 咨询人员",
          "C. 离职人员",
          "D. 当前员工"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 49,
        "type": "single",
        "question": "（）负有决定信息分类级别的责任。",
        "options": [
          "A. 用户",
          "B. 数据所有者",
          "C. 审计员",
          "D. 安全官"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 50,
        "type": "single",
        "question": "终端安全管理目标:规范支撑系统中终端用户的行为，降低来自支撑系统终端的安全威胁，可解决（）问题。",
        "options": [
          "A. 终端接入和配置管理;终端账号、秘密、漏洞补丁等系统安全管理;桌面及主机设置管理;终端防病毒管理",
          "B. 终端账号、秘密、漏洞补丁等系统安全管理;桌面及主机设置管理;终端防病毒管理",
          "C. 终端接入和配置管理;桌面及主机设置管理;终端防病毒管理",
          "D. 终端接入和配置管理;终端账号、秘密、漏洞补丁等系统安全管理;桌面及主机设置管理"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 51,
        "type": "single",
        "question": "一台完整的冯·诺依曼型计算机的硬件系统应包含（）。",
        "options": [
          "A. CPU、运算器、存储器、输入设备和输出设备",
          "B. CPU、存储器、输入设备和输出设备",
          "C. CPU、辅助存储器、输入设备和输出设备",
          "D. CPU、辅助存储器、键盘和显示器"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 52,
        "type": "single",
        "question": "在输入输出控制方法中，采用（）可以使得设备与主存间的数据块传送无需CPU干预。",
        "options": [
          "A. 程序控制输入输出",
          "B. 中断",
          "C. DMA",
          "D. 总线控制"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 53,
        "type": "single",
        "question": "网卡的主要功能不包括（）。",
        "options": [
          "A. 将计算机连接到通信介质上",
          "B. 进行电信号匹配",
          "C. 实现数据传输",
          "D. 网络互连"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 54,
        "type": "single",
        "question": "将十进制的整数化为二进制整数的方法是（）。",
        "options": [
          "A. 乘以二取整法",
          "B. 除以二取整法",
          "C. 乘以二取小数法",
          "D. 除以二取余法"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 55,
        "type": "single",
        "question": "下列系统软件与应用软件的相互关系中，正确的是（）。",
        "options": [
          "A. 两者互为基础",
          "B. 两者之间没有任何关系",
          "C. 前者以后者为基础",
          "D. 后者以前者为基础"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 56,
        "type": "single",
        "question": "下列选项中，不属于进程三种基本状态的是（）。",
        "options": [
          "A. 运行态",
          "B. 就绪态",
          "C. 后备态",
          "D. 阻塞态"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 57,
        "type": "single",
        "question": "在Linux系统中，（）命令可以将普通用户转换为超级用户。",
        "options": [
          "A. super",
          "B. passwd",
          "C. tar",
          "D. su"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 58,
        "type": "single",
        "question": "下列选项属于移动操作系统的是（）。",
        "options": [
          "A. Linux",
          "B. Android",
          "C. Windows 10",
          "D. Windows 2016 Server"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 59,
        "type": "single",
        "question": "下列选项中，不属于数据库管理的是（）。",
        "options": [
          "A. 数据库的建立",
          "B. 数据库的调整",
          "C. 数据库的监控",
          "D. 数据库的校对"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 60,
        "type": "single",
        "question": "在SQL数据库中，（）语句能校验整数列i的值不小于1不大于10。",
        "options": [
          "A. i BETWEEN 1 AND 10",
          "B. i BETWEEN 0 AND 11",
          "C. i IN INTERVAL(0,11)",
          "D. i IN INTERVAL(1,10)"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 61,
        "type": "single",
        "question": "在七十年代末，国际标准化组织 ISO 提出了开放系统互连参考模型。协议分层大大简化了网络协议的复杂性，在 OSI7 层模型中，网络层的功能主要是（）。",
        "options": [
          "A. 在信道上传输原始的比特流",
          "B. 加强物理层数据传输原始比特流的功能并且进行流量调控",
          "C. 确定数据包从源端到目的端如何选择路由",
          "D. 确保到达对方的各段信息正确无误"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 62,
        "type": "single",
        "question": "TCP/IP协议是公开发布的，数据包在网络上通常是明码传送，容易被（）。",
        "options": [
          "A. 窃听和欺骗",
          "B. 代码",
          "C. 行为监测法",
          "D. 软件模拟法"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 63,
        "type": "single",
        "question": "RIP协议 是在（）之上的一种路由协议。",
        "options": [
          "A. Ethernet",
          "B. IP",
          "C. TCP",
          "D. UDP"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 64,
        "type": "single",
        "question": "SMTP 协议是工作在（）。",
        "options": [
          "A. 网络层",
          "B. 传输层",
          "C. 会话层",
          "D. 应用层"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 65,
        "type": "single",
        "question": "当路由器接收到报文后，根据其目的 IP 地址在路由表中查询没有对应的表项时，采取的处理方式是（）。",
        "options": [
          "A. 丢掉该分组",
          "B. 将该分组分片",
          "C. 转发该分组",
          "D. 以上答案均不对"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 66,
        "type": "single",
        "question": "AP的主要功能为（）。",
        "options": [
          "A. 提供无线覆盖",
          "B. 鉴权",
          "C. 计费",
          "D. 加密"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 67,
        "type": "single",
        "question": "当无线通信过程中信号强度太弱、错误率较高时，无线客户端会切换到其它无线 AP 的信道，这个过程称为（）。",
        "options": [
          "A. 关联",
          "B. 重关联",
          "C. 漫游",
          "D. 负载平衡"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 68,
        "type": "single",
        "question": "下面关于双链路备份组网中，描述不正确的是（）。",
        "options": [
          "A. 双链路备份技术在网络重要节点提高了网络可靠性，保证了业务稳定",
          "B. 备 AC 要一直处于上电状态",
          "C. 在 AP 与主备 AC 建立主备链路的过程中，先建立的链路一定为主链路",
          "D. 主备 AC 上的网络业务配置要保持一致"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 69,
        "type": "single",
        "question": "链路聚合成员端口应当按照一定要求和配置，以下可以不满足的选项是（）。",
        "options": [
          "A. 端口成员速率一致",
          "B. 端口成员同属一个VLAN",
          "C. 端口成员所用传输介质相同",
          "D. 端口成员协商模式一致"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 70,
        "type": "single",
        "question": "防火墙通过（）来阻塞邮件附件中的病毒。",
        "options": [
          "A. 数据控制",
          "B. 连接控制",
          "C. ACL控制",
          "D. 协议控制"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 71,
        "type": "single",
        "question": "以下措施不能用来避免网络风暴的是（）。",
        "options": [
          "A. 交换机开启stp协议",
          "B. 交换机的端口开启边缘端口功能",
          "C. 仅采用路由器三层接口完成接入",
          "D. 网络设计时避免成环的网络结构"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 72,
        "type": "single",
        "question": "arp命令的格式中（）表示显示地址映射表项。",
        "options": [
          "A. arp",
          "B. arp -a",
          "C. arp -d inet_addr",
          "D. arp -s inet_addr phys_addr"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 73,
        "type": "single",
        "question": "以下对职业的内涵描述中，正确的是?",
        "options": [
          "A. 职业需要专业的知识与技能",
          "B. 职业不一定需要参与社会分工",
          "C. 通过工作获得的财富只包含物质财富",
          "D. 合理的报酬就是通过劳动后每月获得的薪水"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 74,
        "type": "single",
        "question": "职业道德是指从事一定职业劳动的人们，在长期的职业活动中形成的（）。",
        "options": [
          "A. 行为规范",
          "B. 操作程序",
          "C. 劳动技能",
          "D. 思维习惯"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 75,
        "type": "single",
        "question": "下列选项中属于职业道德范畴的是（）。",
        "options": [
          "A. 企业经营业绩",
          "B. 企业发展战略",
          "C. 员工的技术水平",
          "D. 人们的内心信念"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 76,
        "type": "single",
        "question": "市场经济条件下，职业道德最终将对企业起到（）的作用。",
        "options": [
          "A. 决策科学化",
          "B. 提高竞争力",
          "C. 决定经济效益",
          "D. 决定前途于命运"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 77,
        "type": "single",
        "question": "以下哪个选项最准确地描述了职业道德的基本内涵?",
        "options": [
          "A. 遵守法律法规和组织规章制度",
          "B. 追求个人利益和财富积累",
          "C. 维护客户利益和满足其需求",
          "D. 保持良好的道德品质和职业操守"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 78,
        "type": "single",
        "question": "职业道德的核心原则是什么?",
        "options": [
          "A. 个人发展和成就",
          "B. 真诚和诚信",
          "C. 利润最大化",
          "D. 社会责任和公益责任"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 79,
        "type": "single",
        "question": "各种职业集体对从业人员的道德要求，总是从本职业的活动和交往的内容和方式出发，适应于本职业活动的客观环境和具体条件。这说明职业道德具有（）的特点。",
        "options": [
          "A. 实践性",
          "B. 时代性",
          "C. 客观性",
          "D. 多样性"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 80,
        "type": "single",
        "question": "以下关于职业道德的说法中，你认为不正确的是（）。",
        "options": [
          "A. 任何职业道德的适用范围都不是普遍的，而是特定的、有限的",
          "B. 职业道德的形式因行业不同而有所不同",
          "C. 职业道德不具有时代性",
          "D. 职业道德主要适用于走上社会岗位的成年人"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 81,
        "type": "single",
        "question": "职业道德是一种内在的、（）的约束机制。",
        "options": [
          "A. 强制性",
          "B. 非强制性",
          "C. 随意性",
          "D. 自发性"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 82,
        "type": "single",
        "question": "下列关于职业道德的说法中，你认为正确的是（）。",
        "options": [
          "A. 有职业道德的人一定能胜任工作",
          "B. 没有职业道德的人干不好任何工作",
          "C. 职业道德有时起作用，有时不起作用",
          "D. 职业道德无关紧要，可有可无"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 83,
        "type": "single",
        "question": "下列说法中不正确的是（）。",
        "options": [
          "A. 职业道德有利于协调职工与领导之间的关系",
          "B. 职业道德有利于协调职工与企业之间的关系",
          "C. 如果企业职工不遵守企业规章制度，是因为规章制度不合理",
          "D. 职业道德是企业文化的重要组成部分"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 84,
        "type": "single",
        "question": "职业道德修养中，以下哪个方面是至关重要的?",
        "options": [
          "A. 个人利益追求",
          "B. 持续学习和自我提升",
          "C. 管理层的指导",
          "D. 追求权力和地位"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 85,
        "type": "single",
        "question": "要做到遵纪守法，对每个职工来说，必须做到（）。",
        "options": [
          "A. 有法可依",
          "B. 反对“管”“卡”“压”",
          "C. 反对自由主义",
          "D. 努力学法、知法、守法、用法"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 86,
        "type": "single",
        "question": "以下不属于爱岗敬业的具体要求是（）。",
        "options": [
          "A. 树立职业理想",
          "B. 强化职业责任",
          "C. 提高职业技能",
          "D. 抓住择业机遇"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 87,
        "type": "single",
        "question": "遵纪守法是指职业人员应当（）。",
        "options": [
          "A. 追逐个人利益",
          "B. 遵守行业规范和法律法规",
          "C. 追求权力和地位",
          "D. 忽视职业道德要求"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 88,
        "type": "single",
        "question": "下列哪一项没有违反诚实守信的要求?",
        "options": [
          "A. 保守企业秘密",
          "B. 派人打进竞争对手内部，增强竞争优势",
          "C. 根据服务对象来决定是否遵守承诺",
          "D. 凡有利于企业利益的行为"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 89,
        "type": "single",
        "question": "积极参加（）是职业道德修养的根本途径。",
        "options": [
          "A. 职业实践",
          "B. 职业教育",
          "C. 职业评级",
          "D. 职业素养"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 90,
        "type": "single",
        "question": "勤奋进取的基本要求之一是（）。",
        "options": [
          "A. 避免参与工作培训和学习机会",
          "B. 不主动接受新的工作挑战",
          "C. 主动学习和提升自己的专业知识和技能",
          "D. 不愿意与他人分享工作经验和知识"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 91,
        "type": "single",
        "question": "“天时不如地利，地利不如人和”强调的是（）。",
        "options": [
          "A. 地理优势",
          "B. 团结互助",
          "C. 一团和气",
          "D. 领导和群众关系融洽"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 92,
        "type": "single",
        "question": "在日常的工作中，要发挥社会主义市场经济机制的积极作用，必须增强（）。",
        "options": [
          "A. 个人意识、协作意识、效率意识、物质利益观念、改革开放意识",
          "B. 个人意识、竞争意识、公平意识、民主法制意识、开拓创新精神",
          "C. 自立意识、竞争意识、效率意识、民主法制意识、开拓创新精神",
          "D. 自立意识、协作意识、公平意识、物质利益观念、改革开放意识"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 93,
        "type": "single",
        "question": "有效的团队合作需要具备的基本能力之一是（）。",
        "options": [
          "A. 忽视团队目标，只关注个人目标",
          "B. 不积极参与团队讨论和决策",
          "C. 共享工作责任，共同努力完成任务",
          "D. 忽视他人的工作进展和需求"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 94,
        "type": "single",
        "question": "操作者操作设备必须严格遵守设备的（）。",
        "options": [
          "A. 标准操作规程",
          "B. 相关安全制度",
          "C. 公司制度",
          "D. 岗位操作规程"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 95,
        "type": "single",
        "question": "在使用设备时，爱护设备与安全操作的基本要求不包括（）。",
        "options": [
          "A. 重视设备安全规则，规范操作",
          "B. 保持设备清洁和整洁",
          "C. 遵守设备安全规则，正确使用和维护设备",
          "D. 按照个人习惯操作设备"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 96,
        "type": "single",
        "question": "某机械厂的一位领导说:机械工业工艺复杂，技术密集，工程师在图纸上画得再好、再精确，工人操作中如果差那么一毫米，最终出来的就可能是废品。这段话主要强调（）素质的重要性。",
        "options": [
          "A. 专业技能",
          "B. 思想政治",
          "C. 职业道德",
          "D. 身心素质"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 97,
        "type": "single",
        "question": "勇于创新的基本含义包括（）。",
        "options": [
          "A. 不接受任何改变和创新",
          "B. 不关注工作质量的提升和创新",
          "C. 提出新的想法和方法，推动进步",
          "D. 遵循传统工作模式，为稳妥尽量不改变"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 98,
        "type": "single",
        "question": "在工作中，勇于创新与精益求精的基本要求不包括（）。",
        "options": [
          "A. 关注工作效率和质量的提升",
          "B. 愿意尝试新的工作方法和技术",
          "C. 推动工作流程改进和质量提升",
          "D. 忽视个人职责，不关注工作成果"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 99,
        "type": "single",
        "question": "国际规定，电压（）伏以下不必考虑防止电击的危险。",
        "options": [
          "A. 36伏",
          "B. 65伏",
          "C. 25伏",
          "D. 220伏"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 100,
        "type": "single",
        "question": "漏电保护器的使用是防止（）。",
        "options": [
          "A. 触电事故",
          "B. 电压波动",
          "C. 电荷超负荷",
          "D. 温度过高"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 101,
        "type": "single",
        "question": "电器漏电时的处理方法是?",
        "options": [
          "A. 用绝缘手套将插头拔下来",
          "B. 用棉布包裹住电线",
          "C. 用湿毛巾擦拭漏电部分",
          "D. 设备断电并修理电器"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 102,
        "type": "single",
        "question": "操作系统的基本类型主要有（）。",
        "options": [
          "A. 批处理系统、分时系统及多任务系统",
          "B. 实时操作系统、批处理操作系统及分时操作系统",
          "C. 单用户系统、多用户系统及批处理系统",
          "D. 实时系统、分时系统和多用户系统"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 103,
        "type": "single",
        "question": "下操作系统中属于网络操作系统的是（）。",
        "options": [
          "A. MS-DOS",
          "B. Windows98",
          "C. UNIX",
          "D. Windows Server"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 104,
        "type": "single",
        "question": "中断处理的4个阶段为（）。",
        "options": [
          "A. 保存现场、执行中断处理程序、分析中断源、恢复现场",
          "B. 保存现场、恢复现场、执行中断处理程序、分析中断源",
          "C. 保存现场、分析中断源、执行中断处理程序、恢复现场",
          "D. 分析中断源、保存现场、执行中断处理程序、恢复现场"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 105,
        "type": "single",
        "question": "现代操作系统的两个基本特征是（）和资源共享。",
        "options": [
          "A. 多道程序设计",
          "B. 中断处理",
          "C. 程序的并发执行",
          "D. 实现分时与实时处理"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 106,
        "type": "single",
        "question": "计算机系统的组成包括（）。",
        "options": [
          "A. 程序和数据",
          "B. 计算机硬件和计算机软件",
          "C. 处理器和内存",
          "D. 处理器，存储器和外围设备"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 107,
        "type": "single",
        "question": "计算机中，负责指挥计算机各部分自动协调一致地进行工作的部件是（）。",
        "options": [
          "A. 运算器",
          "B. 控制器",
          "C. 存储器",
          "D. 总线"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 108,
        "type": "single",
        "question": "下面关于cache的叙述，错误的是（）。",
        "options": [
          "A. 高速缓冲存储器简称cache",
          "B. cache处于主存与CPU之间",
          "C. 程序访问的局部性为cache的引入提供了理论依据",
          "D. cache的速度远比CPU的速度慢"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 109,
        "type": "single",
        "question": "当代计算机的最主要的体系结构称为是（）。",
        "options": [
          "A. 冯·诺依曼机",
          "B. 非冯·诺依曼机",
          "C. 图灵机",
          "D. PASCAL机"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 110,
        "type": "multiple",
        "question": "加密的强度主要取决于（）。",
        "options": [
          "A. 算法的强度",
          "B. B、密钥的保密性",
          "C. C、明文的长度",
          "D. D、密钥的强度"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          3
        ]
      },
      {
        "id": 111,
        "type": "multiple",
        "question": "AIX中采用没有警告的快速关机可以用（）或（）命令。",
        "options": [
          "A. #shutdown -F",
          "B. B、#halt",
          "C. C、backup",
          "D. D、restore"
        ],
        "analysis": "",
        "answer": [
          0,
          1
        ]
      },
      {
        "id": 112,
        "type": "multiple",
        "question": "以下是按照计算机规模分类的是（）。",
        "options": [
          "A. 巨型机",
          "B. B、移动电脑",
          "C. C、大型机",
          "D. D、小型机",
          "E. E、微型机"
        ],
        "analysis": "",
        "answer": [
          0,
          2,
          3,
          4
        ]
      },
      {
        "id": 113,
        "type": "multiple",
        "question": "电力监控系统安全防护的总体原则是（）。",
        "options": [
          "A. 安全分区",
          "B. B、网络专用",
          "C. C、横向隔离",
          "D. D、纵向认证"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 114,
        "type": "multiple",
        "question": "以下哪些属于IX1500的RAID特性?（）",
        "options": [
          "A. RAID级别转换",
          "B. B、RAID容量扩展",
          "C. C、RAID缓存掉电72小时保护",
          "D. D、RAID6支持"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 115,
        "type": "multiple",
        "question": "元数据的来源包括（）。",
        "options": [
          "A. 通过用户交互、定义和数据分析定义业务元数据",
          "B. B、通过某些维护支持活动可以将有关数据的质量描述和其他发现添加到源数据储存库中，或从IT系统中获取元数据",
          "C. C、可以在汇总层面或者细节层面识别元数据",
          "D. D、对相关元数据的适当管理和在元数据之间导航是重要的使用需求"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 116,
        "type": "multiple",
        "question": "下列一组数中，比八进制37大的有（）。",
        "options": [
          "A. 11011001B",
          "B. B、75D",
          "C. C、37D",
          "D. D、2A7H",
          "E. E、50D"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      {
        "id": 117,
        "type": "multiple",
        "question": "计算机后门的作用包括（）。",
        "options": [
          "A. 方便下次直接进入",
          "B. B、监视用户所有隐私",
          "C. C、监视用户所有行为",
          "D. D、完全控制用户主机"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 118,
        "type": "multiple",
        "question": "由于跨站脚本攻击漏洞而造成的危害的是（）。",
        "options": [
          "A. 网站挂马",
          "B. B、盗窃企业重要的具有商业价值的资料",
          "C. C、访问未授权的页面和资源",
          "D. D、盗取各类用户账号"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          3
        ]
      },
      {
        "id": 119,
        "type": "multiple",
        "question": "拒绝服务攻击方式包括（）。",
        "options": [
          "A. 利用大量数据挤占网络带宽",
          "B. B、利用大量请求消耗系统性能",
          "C. C、利用协议实现缺陷",
          "D. D、利用系统处理方式缺陷"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 120,
        "type": "multiple",
        "question": "社会工程学利用的人性弱点包括（）。",
        "options": [
          "A. 信任权威",
          "B. B、信任共同爱好",
          "C. C、期望守信",
          "D. D、期望社会认可"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 121,
        "type": "multiple",
        "question": "以下哪些是IPSAN的优点:（）。",
        "options": [
          "A. 实现弹性扩展的存储网络，能自适应应用的改变",
          "B. B、已经验证的传输设备保证运行的可靠性",
          "C. C、以太网从1G向10G及更高速过渡，只需通过简单的升级便可得到极大的性能提升，并保护投资",
          "D. D、大量熟悉的网络技术和管理的人才减少培训和人力成本",
          "E. E、IP跨长距离扩展能力，轻松实现远程数据复制和灾难恢复"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      {
        "id": 122,
        "type": "multiple",
        "question": "异常信息包含了针对开发和维护人员调试使用的系统信息，为了避免攻击者发现潜在缺陷并进行攻击的情况，在设计异常信息时应注意（）。",
        "options": [
          "A. 使用结构化异常处理机制",
          "B. B、程序发生异常时，应终止当前业务，并对当前业务进行回滚操作",
          "C. C、通信双方中一方在一段时间内未作反应，另一方自动结束会话",
          "D. D、程序发生异常时，应在日志中记录详细的错误消息"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 123,
        "type": "multiple",
        "question": "服务台人员在为用户提供支持服务时，（）。",
        "options": [
          "A. 必须礼貌、真诚的提供服务",
          "B. B、对待用户应耐心",
          "C. C、仔细倾听用户的描述",
          "D. D、提出积极的建议"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 124,
        "type": "judge",
        "question": "IP地址219.25.23.56的缺省子网掩码有16位。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 125,
        "type": "judge",
        "question": "ipv6 地址 1070:0:0:0:8:0:0:417a 可以简写为 1070::8::417a。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 126,
        "type": "judge",
        "question": "TCP 连接的建立是一个三次握手的过程，而 TCP 连接的终止则要经过四次握手。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 127,
        "type": "judge",
        "question": "Ping命令的输出信息中包括目的地址、ICMP报文长度、序号、TTL值、以及往返时间。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 128,
        "type": "judge",
        "question": "网络规划设计的时候，应充分考虑用户功能需求、物理布局、设备类型、网络负载等综合情况。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 129,
        "type": "judge",
        "question": "养成职业道德习惯是职业道德教育的内容之一。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 130,
        "type": "judge",
        "question": "服从管理，不问对属于职业守则。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 131,
        "type": "judge",
        "question": "微型计算机的CPU主要由运算器和控制器组成。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 132,
        "type": "judge",
        "question": "文件误删除之后不要重启或者关闭系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 133,
        "type": "judge",
        "question": "计算机的软件是指计算机中的指令的集合。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 134,
        "type": "judge",
        "question": "计算机能直接执行机器语言程序。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 135,
        "type": "judge",
        "question": "一个完整的多媒体计算机系统，应包含三个组成部分，它们分别是文字处理系统、声音处理系统和图像处理系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 136,
        "type": "judge",
        "question": "在Windows系统中，对话框的形状是一个矩形框，在默认状态下，其大小是不能改变的。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 137,
        "type": "judge",
        "question": "DNS 工作于OSI 参考模型的网络层，在信道上传输原始的比特流。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 138,
        "type": "judge",
        "question": "IP报文中的部分字段的含义包含源mac地址。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 139,
        "type": "judge",
        "question": "220.0.9是B类IP地址。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 140,
        "type": "judge",
        "question": "由于 TCP 协议在建立连接和关闭连接时都采用三次握手制，所以 TCP 支持可靠传输。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 141,
        "type": "judge",
        "question": "UDP协议并不去处理报文的丢失、重复、时延、乱序等各种问题，而是让应用层来保证信息的可靠性传输。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 142,
        "type": "judge",
        "question": "DNS用来把具有可读性的MAC地址映射成IP地址。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 143,
        "type": "judge",
        "question": "二层交换机属于数据链路层设备，可以识别数据帧中的 mac 地址信息，根据 mac 地址转发数据，并将这些 mac 地址与对应的端口信息记录在自己的 mac 地址表中。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 144,
        "type": "judge",
        "question": "功率较小的室内分布系统需环境评估通过后方能建设。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 145,
        "type": "judge",
        "question": "输出功率等于和小于15W的移动式无线电通讯设备，其电磁辐射可以免于管理，如陆上、海上移动通讯设备以及步话机等。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 146,
        "type": "judge",
        "question": "操作系统的基本类型主要有实时操作系统、批处理操作系统及分时操作系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 147,
        "type": "judge",
        "question": "主要由于linux小部分由汇编大部分用C语言编写原因，使linux易于移植。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 148,
        "type": "judge",
        "question": "打印机，键盘，鼠标器都属于输入设备的。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 149,
        "type": "judge",
        "question": "可回溯性是网络协议的特点。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 150,
        "type": "judge",
        "question": "用于描述DNS数据库段的数据是一种ASCII文本数据。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 151,
        "type": "judge",
        "question": "错误检测和纠正网络协议实现可靠传输的方法之一。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 152,
        "type": "judge",
        "question": "根据网络故障的性质，可将网络故障分为路由故障和线路故障。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 153,
        "type": "judge",
        "question": "如果无法通过域名访问特定网站，nslookup命令可用于检查域名解析是否正常。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 154,
        "type": "judge",
        "question": "用人单位在试用期解除劳动合同的，可以随时解除，无需向劳动者说明理由。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 155,
        "type": "judge",
        "question": "根据《中华人民共和国劳动法》，劳动者每日工作时间标准是8小时。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 156,
        "type": "judge",
        "question": "依当事人一方的意思表示即可发生抵销效力的权利，称为抵销权。该权利属于形成权。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 157,
        "type": "judge",
        "question": "《民法典》自2021年1月1日起施行。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 158,
        "type": "judge",
        "question": "侵害他财产的，财产的损失应当按照财产生成时财产的市场价值或其他方式计算。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 159,
        "type": "judge",
        "question": "民法典首次明确禁止性骚扰，违背他人意愿，以言语、肢体行为等方式对他人实施性骚扰的，受害人有权依法请求行为人承担民事责任。机关、企业、学校等单位应当采取合理的预防、受理投诉调查处置等措施，防止和制止利用职权、从属关系等实施性骚扰。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 160,
        "type": "judge",
        "question": "根据《民法典》的规定，民事主体可以依法查询自己的信用评价，发现信用评价不当的，可以自行采取删除这一必要措施。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 161,
        "type": "judge",
        "question": "当网络拓扑发生变化时，交换机不会自动启用备份链路。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 162,
        "type": "judge",
        "question": "STP通过在交换机之间传递一种特殊的协议报文（BPDU）来确定网络的拓扑结构。BPDU中包含了足够的信息来保证交换机完成生成树计算。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 163,
        "type": "judge",
        "question": "默认路由通常会在出口网络中使用。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      }
    ]
  },
  {
    "set_name": "2026考证顺序刷题3-B",
    "items": [
      {
        "id": 1,
        "type": "single",
        "question": "如果在具有层次结构的一组元素中，存在着一对一的关系，我们可以认为这样的数据的逻辑类型就是（）。",
        "options": [
          "A. 集合",
          "B. 线性结构",
          "C. 树型结构",
          "D. 图型结构"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 2,
        "type": "single",
        "question": "结构化程序设计强调将程序分解为（）。",
        "options": [
          "A. 子程序",
          "B. 对象",
          "C. 类",
          "D. 方法"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 3,
        "type": "single",
        "question": "数据管理技术的发展过程中，经历了人工管理阶段、文件系统阶段和数据库系统阶段。在这几个阶段中，数据独立性最高的是（）阶段。",
        "options": [
          "A. 数据库系统",
          "B. 文件系统",
          "C. 人工管理",
          "D. 数据项管理"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 4,
        "type": "single",
        "question": "关系数据模型（）。",
        "options": [
          "A. 只能表示实体间的1:1联系",
          "B. 只能表示实体间的1:n",
          "C. 只能表示实体间的 m:n",
          "D. 可以表示实体间的上述三种联系"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 5,
        "type": "single",
        "question": "（）是指进程或程序正常运行时周期性记录进程或程序有关信息的点，目的是当系统发生故障或错误时，从最新检测点恢复。",
        "options": [
          "A. 还原点",
          "B. 检验点",
          "C. 检查点",
          "D. 失真点"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 6,
        "type": "single",
        "question": "Internet 的前身是（）。",
        "options": [
          "A. IPXNET",
          "B. ARPANET",
          "C. Ethernet",
          "D. IPNET"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 7,
        "type": "single",
        "question": "IP地址10.10.10.256属于（）类IP地址。",
        "options": [
          "A. A",
          "B. B",
          "C. C",
          "D. IP地址格式错误"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 8,
        "type": "single",
        "question": "网桥及一般的二层交换机在进行数据包转发时，识别的数据包包头中的（）进行数据包的转发。",
        "options": [
          "A. 下一跳地址",
          "B. IP地址",
          "C. MAC地址",
          "D. 网络地址"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 9,
        "type": "single",
        "question": "以下哪个协议不属于TCP/IP模型中网络层（）。",
        "options": [
          "A. ICMP",
          "B. RARP",
          "C. IGMP",
          "D. RIP"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 10,
        "type": "single",
        "question": "根据作用范围分类，网络协议可以分为几种类型?",
        "options": [
          "A. 2",
          "B. 3",
          "C. 4",
          "D. 5"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 11,
        "type": "single",
        "question": "以下哪种网络适用于跨越城市或国家的通信?",
        "options": [
          "A. 局域网",
          "B. 广域网",
          "C. 互联网",
          "D. 无线网"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 12,
        "type": "single",
        "question": "下列哪些是对计算机网络不正确的定义?",
        "options": [
          "A. 计算机网络是计算机的集合",
          "B. 计算机网络的目的是相互共享资源",
          "C. 计算机网络是在协议控制下通过通信系统来实现计算机之间的连接",
          "D. 计算机网络中的一台计算机可以干预另一台计算机的工作"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 13,
        "type": "single",
        "question": "如下网络拓扑结构中，具有一定集中控制功能的网络是（）。",
        "options": [
          "A. 总线型网络",
          "B. 星型网络",
          "C. 环形网络",
          "D. 全连接型网络"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 14,
        "type": "single",
        "question": "星形、总线型、环形和网状形是按照（）分类。",
        "options": [
          "A. 网络功能",
          "B. 管理性质",
          "C. 网络跨度",
          "D. 网络拓扑"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 15,
        "type": "single",
        "question": "VLAN（Virtual Local Area Network）是指（）。",
        "options": [
          "A. 一种物理隔离网络的方法",
          "B. 一种用于连接远程办公室的网络设备",
          "C. 一种逻辑上划分的虚拟局域网",
          "D. 一种用于提高网络带宽的技术"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 16,
        "type": "single",
        "question": "在命令行中使用ping命令可以执行什么操作（）。",
        "options": [
          "A. 发送网络请求并显示响应时间",
          "B. 查看网络设备的配置信息",
          "C. 在网络上查找可用的设备",
          "D. 建立安全的远程连接"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 17,
        "type": "single",
        "question": "下列静态路由器配置正确的是（）。",
        "options": [
          "A. ip route-static 129.1.0.0 16 serial 0",
          "B. ip route-static 10.0.0.2 16 129.1.0.0",
          "C. ip route-static 129.1.0.0 16 10.0.0.2",
          "D. ip route-static 129.1.0.0 255.255.0.0 10.0.0.2"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 18,
        "type": "single",
        "question": "在Linux操作系统中，（）配置文件用于存放本机主机名及经常访问IP地址的主机名，在对IP进行域名解析时，可以设定为先访问该文件，再访问DNS，最后访问NIS。",
        "options": [
          "A. /etc/hosts",
          "B. /etc/resolv.conf",
          "C. /etc/inted.conf",
          "D. /etc/host.conf"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 19,
        "type": "single",
        "question": "《中华人民共和国网络安全法》自（）起施行。",
        "options": [
          "A. 2018年1月1日",
          "B. 2017年6月1日",
          "C. 2025年1月1日",
          "D. 2019年6月1日"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 20,
        "type": "single",
        "question": "网络运营者应当对其收集的用户信息严格保密，并建立健全（）。",
        "options": [
          "A. 用户信息保密制度",
          "B. 用户信息保护制度",
          "C. 用户信息加密制度",
          "D. 用户信息保全制度"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 21,
        "type": "single",
        "question": "依法负有网络安全监督管理职责的部门及其工作人员，必须对在履行职责中知悉的（）严格保密，不得泄露、出售或者非法向他人提供。",
        "options": [
          "A. 个人信息",
          "B. 隐私",
          "C. 商业秘密",
          "D. 以上全是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 22,
        "type": "single",
        "question": "国家倡导诚实守信、（）的网络行为，推动传播社会主义核心价值观，采取措施提高全社会的网络安全意识和水平，形成全社会共同参与促进网络安全的良好环境。",
        "options": [
          "A. 自由平等",
          "B. 团结互助",
          "C. 健康文明",
          "D. 和平友爱"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 23,
        "type": "single",
        "question": "《中华人民共和国网络安全法》规定，网络运营者应当制定（），及时处置系统漏洞、计算机病毒、网络攻击、网络侵入等安全风险。",
        "options": [
          "A. 网络安全事件应急预案",
          "B. 网络安全事件补救措施",
          "C. 网络安全事件应急演练方案",
          "D. 网站安全规章制度"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 24,
        "type": "single",
        "question": "《中华人民共和国网络安全法》规定，（）应当为公安机关、国家安全机关依法维护国家安全和侦查犯罪的活动提供技术支持和协助。",
        "options": [
          "A. 电信科研机构",
          "B. 电信企业",
          "C. 网络合作商",
          "D. 网络运营者"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 25,
        "type": "single",
        "question": "计算机信息系统安全保护等级根据计算机信息系统在国家安全、经济建设、社会生活中的（），计算机信息系统受到破坏后对国家安全、社会秩序、公共利益以及公民、法人和其他组织的合法权益的（）等因素确定。",
        "options": [
          "A. 经济价值 经济损失",
          "B. 重要程度 危害程度",
          "C. 经济价值 危害程度",
          "D. 重要程度 经济损失"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 26,
        "type": "single",
        "question": "安全测评报告由（）报地级以上市公安机关公共信息网络安全监察部门。",
        "options": [
          "A. 安全服务机构",
          "B. 县级公安机关公共信息网络安全监察部门",
          "C. 测评机构",
          "D. 计算机信息系统运营、使用单位"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 27,
        "type": "single",
        "question": "根据《广东省计算机信息系统安全保护条例》规定，计算机信息系统的运营、使用单位没有向地级市以上人民政府公安机关备案的，由公安机关处以（）。",
        "options": [
          "A. 警告",
          "B. 拘留15",
          "C. 罚款1500元",
          "D. 警告或者停机整顿"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 28,
        "type": "single",
        "question": "根据网络安全等级保护分级管理标准，信息系统网络安全保护等级分为（）级?",
        "options": [
          "A. 3",
          "B. 4",
          "C. 5",
          "D. 6"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 29,
        "type": "single",
        "question": "计算机信息系统的（），应当遵守法律、行政法规和国家其他有关规定。",
        "options": [
          "A. 建设",
          "B. 应用",
          "C. 建设和应用",
          "D. 运行"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 30,
        "type": "single",
        "question": "运输、携带、邮寄计算机信息媒体进出境的，应当如实向（）申报。",
        "options": [
          "A. 公安部",
          "B. 新闻出版局",
          "C. 海关",
          "D. 本地人民政府"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 31,
        "type": "single",
        "question": "根据《中华人民共和国计算机信息系统安全保护条例》，以下属于计算机信息系统安全风险的是?",
        "options": [
          "A. 高速互联网连接",
          "B. 安装最新的操作系统",
          "C. 未经授权访问",
          "D. 定期备份数据"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 32,
        "type": "single",
        "question": "根据《中华人民共和国计算机信息系统安全保护条例》，以下哪种行为属于对计算机病毒的防范措施?",
        "options": [
          "A. 成功的网络攻击",
          "B. 及时的安全漏洞修复",
          "C. 安装未经验证的软件",
          "D. 数据的大规模传输"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 33,
        "type": "single",
        "question": "以下（）设备可以看作一种多端口的网桥设备。",
        "options": [
          "A. 中继器",
          "B. 交换机",
          "C. 路由器",
          "D. 集线器"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 34,
        "type": "single",
        "question": "STP桥优先级占（）位。",
        "options": [
          "A. 8",
          "B. 16",
          "C. 32",
          "D. 64"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 35,
        "type": "single",
        "question": "以下关于生成树协议中Forwarding状态描述错误的是（）。",
        "options": [
          "A. Forwarding状态的端口可以接收BPDU报文",
          "B. Forwarding状态的端口不学习报文MAC地址",
          "C. Forwarding状态的端口可以转发数据报文",
          "D. Forwarding状态的端口可以发送BPDU报文"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 36,
        "type": "single",
        "question": "RSTP协议增加了边缘端口的概念，使得连接终端设备的端口（）。",
        "options": [
          "A. 不参与STP计算，无需等待计时器超时",
          "B. 无法接收BPDU报文",
          "C. 无法接入交换机",
          "D. 简化配置"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 37,
        "type": "single",
        "question": "链路聚合端口成员应保证，除了（）。",
        "options": [
          "A. 端口成员速率一致",
          "B. 端口成员同属一个VLAN",
          "C. 端口成员所用传输介质相同",
          "D. 端口成员协商模式一致"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 38,
        "type": "single",
        "question": "路由器是根据（）来进行数据的转发。",
        "options": [
          "A. MAC地址",
          "B. IP地址",
          "C. 比特",
          "D. 数据段"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 39,
        "type": "single",
        "question": "以下关于默认路由的描述正确的是（）。",
        "options": [
          "A. 默认路由是一种特殊的静态路由",
          "B. 所有数据包都会按照默认路由进行转发",
          "C. 默认路由是路由表中的第一条路由",
          "D. 默认路由是路由表中的最后一条路由"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 40,
        "type": "single",
        "question": "以下哪个组播地址是OSPF路由协议所使用的（）。",
        "options": [
          "A. 224.0.0.6",
          "B. 224.0.0.7",
          "C. 224.0.0.9",
          "D. 224.0.0.10"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 41,
        "type": "single",
        "question": "运行OSPF协议的两台路由器无法正常建立邻居，不可能是以下那种因素（）。",
        "options": [
          "A. 验证不一致",
          "B. Hello计时器或dead计时器不一致",
          "C. 修改其中一台路由器的dr-priorty为0",
          "D. 区域设置不一致"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 42,
        "type": "single",
        "question": "（）标准引入正交频分复用技术，定义了5GHz频段高速物理层规范。",
        "options": [
          "A. IEEE 802.11c",
          "B. IEEE 802.11b",
          "C. IEEE 802.11a",
          "D. IEEE 802.11g"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 43,
        "type": "single",
        "question": "以下（）项不属于“胖”“瘦”AP两种技术的区别。",
        "options": [
          "A. 安全策略控制",
          "B. 灵活性",
          "C. 信道间干扰",
          "D. 集中管理配置"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 44,
        "type": "single",
        "question": "无线局域网的最初协议是（）。",
        "options": [
          "A. IEEE802.11",
          "B. IEEE802.5",
          "C. IEEE802.3",
          "D. IEEE802.1"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 45,
        "type": "single",
        "question": "IEEE802.11b标准采用了（）调制方式。",
        "options": [
          "A. FHSS",
          "B. DSSS",
          "C. OFDM",
          "D. MIMO"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 46,
        "type": "single",
        "question": "下面那个属于射频范围2.4GHz的物理层规范（）。",
        "options": [
          "A. 802.11g",
          "B. 802.11a",
          "C. 802.11e",
          "D. 802.11i"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 47,
        "type": "single",
        "question": "MIMO是以下哪种协议中支持的技术（）。",
        "options": [
          "A. 802.11n",
          "B. 802.11g",
          "C. 802.11ac",
          "D. 802.11a"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 48,
        "type": "single",
        "question": "同时支持2.4G和5G频段的802.11协议是以下哪一种（）。",
        "options": [
          "A. 802.11ac",
          "B. 802.11n",
          "C. 802.11B",
          "D. 802.11a"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 49,
        "type": "single",
        "question": "以下（）项不属于基于OFDM的调制方式。",
        "options": [
          "A. BPSK",
          "B. DBPSK",
          "C. QPSK",
          "D. QAM"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 50,
        "type": "single",
        "question": "关于“密码复杂性要求策略”的描述正确的是（）。",
        "options": [
          "A. 密码长度要求至少7位",
          "B. 在密码中至少要同时包括大/小写字母，数字和非字母符号的三种类型",
          "C. 不能包括全部的账户包，但可以包括账户名种的部分连续部分",
          "D. 不能是上次已使用过的密码"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 51,
        "type": "single",
        "question": "密码策略中的密码复杂性要求密码的长度至少几个字符（）。",
        "options": [
          "A. 6",
          "B. 7",
          "C. 8",
          "D. 9"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 52,
        "type": "single",
        "question": "密码策略中，关于密码复杂性的说法不正确的是（）。",
        "options": [
          "A. 建议使用大小写字母、数字和特殊字符组成密码",
          "B. 密码复杂性要求在创建新密码或更改密码时强制执行",
          "C. 复杂密码可以长期使用",
          "D. 要求密码有最小的长度，如六个字符"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 53,
        "type": "single",
        "question": "防止非法授权访问网络设备的方法不包括（）。",
        "options": [
          "A. 强制使用Telnet远程登录",
          "B. 使用基于用户名和加密密码的强认证方法",
          "C. 使用基于用户名的权限分配",
          "D. 使用ACL限制非法IP"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 54,
        "type": "single",
        "question": "等保2.0标准对集中管控提出明确要求:“应能够建立一条安全的信息传输路径”，即要求远程网管终端应通过（）方式连接，防止远程管理中信息泄露。",
        "options": [
          "A. HTTP",
          "B. HTTPS",
          "C. SSL",
          "D. SSH"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 55,
        "type": "single",
        "question": "等保2.0标准对集中管控提出明确要求:“应对网络链路、安全设备、网络设备和服务器等的运行状况进行集中检测”，即要求路由交换设备应配置（）服务。",
        "options": [
          "A. SMTP",
          "B. AAA",
          "C. SNMP",
          "D. SSH"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 56,
        "type": "single",
        "question": "网络互联设备系统命令采用分级保护方式，最高级别是（）。",
        "options": [
          "A. 0",
          "B. 1",
          "C. 10",
          "D. 15"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 57,
        "type": "single",
        "question": "网络互联设备系统命令采用分级保护方式，默认情况下2级可以（）。",
        "options": [
          "A. 使用网络诊断工具命令（ping、tracert）",
          "B. 用于系统维护，查看配置",
          "C. 进行业务操作，使用各个网络层次的配置命令",
          "D. 修改系统内部参数"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 58,
        "type": "single",
        "question": "对于路由器的用户可以设置两种用户权限。可赋予其哪两种访问权限?",
        "options": [
          "A. 非特权和特权",
          "B. 特权及普通用户",
          "C. 管理员及系统管理员",
          "D. 普通用户和系统管理员"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 59,
        "type": "single",
        "question": "在交换机配置mac地址和端口绑定的好处不包括（）。",
        "options": [
          "A. 解决IP地址盗用",
          "B. 防止ARP攻击",
          "C. 管理接入设备数量",
          "D. 进行流量审计"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 60,
        "type": "single",
        "question": "为防止员工随意更换工位上网以及冒用他人IP地址上网，建议在交换机配置（）。",
        "options": [
          "A. IP + PORT 绑定",
          "B. MAC + PORT 绑定",
          "C. IP + MAC绑定",
          "D. IP + MAC + PORT 绑定"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 61,
        "type": "single",
        "question": "交换机端口安全违规处理动作不包括（）。",
        "options": [
          "A. 丢弃数据帧，不产生警告",
          "B. 丢弃数据帧，产生警告",
          "C. 丢弃数据帧，将端口shutdown",
          "D. 转发数据帧，并产生警告"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 62,
        "type": "single",
        "question": "当交换机端口违规处理方式配置为protect时，在收到其他非安全mac地址数据帧时，交换机会（）。",
        "options": [
          "A. 继续转发数据帧",
          "B. 丢弃，不产生警告",
          "C. 丢弃，同时产生警告",
          "D. 丢弃，并将端口shutdown"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 63,
        "type": "single",
        "question": "以下关于WLAN安全机制的叙述中，（）是正确的。",
        "options": [
          "A. WPA是为建立无线网络安全环境提供的第一个安全机制",
          "B. WEP和IPSec协议一样，其目标都是通过加密无线电波来提供安全保证",
          "C. WEP2的初始化向量（IV）空间为64位",
          "D. WPA提供了比WEP更为安全的无线局域网接入方案"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 64,
        "type": "single",
        "question": "哪个WLAN的安全机制可以实现无线AP和认证服务器AS之间的双向认证。（）",
        "options": [
          "A. WPA",
          "B. WPA2",
          "C. WAPI",
          "D. EAP"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 65,
        "type": "single",
        "question": "WEP协议通过对无线帧的加密部分加入（）来提供数据完整性的验证。",
        "options": [
          "A. ICV",
          "B. IV",
          "C. MIC",
          "D. CRC"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 66,
        "type": "single",
        "question": "1x用于WLAN的安全认证，在无线客户端与（）之间进行身份的认证。",
        "options": [
          "A. AP",
          "B. AC",
          "C. AS",
          "D. WLAN交换机"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 67,
        "type": "single",
        "question": "在无线网络安全机制WAPI中，（）实现通信数据的加密传输。",
        "options": [
          "A. WAI",
          "B. WPI",
          "C. ASU",
          "D. AAA"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 68,
        "type": "single",
        "question": "使用WEP加密机制，64位和128位的加密算法分别对于输入（）的16进制字符作为密钥。",
        "options": [
          "A. 5位、16位",
          "B. 5位、26位",
          "C. 10位、16位",
          "D. 10位、26位"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 69,
        "type": "single",
        "question": "关于入侵检测系统（IDS），下面说法不正确的是（）。",
        "options": [
          "A. IDS的主要功能是对计算机和网络资源上的恶意使用行为进行识别和响应",
          "B. IDS需要配合安全审计系统才能应用，后者为前者提供审计分析资料",
          "C. IDS主要用于检测来自外部的入侵行为",
          "D. IDS可用于发现合法用户是否滥用特权"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 70,
        "type": "single",
        "question": "以下哪个属于IPS的功能?（）",
        "options": [
          "A. 检测网络攻击",
          "B. 网络流量检测",
          "C. 实时异常告警",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 71,
        "type": "single",
        "question": "IPS是指（）。",
        "options": [
          "A. 入侵检测系统",
          "B. 入侵保护系统",
          "C. 网络入侵系统",
          "D. 网络保护系统"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 72,
        "type": "single",
        "question": "以下关于入侵防御系统(IPS)的描述中，错误的是（）。",
        "options": [
          "A. IPS产品在网络中是在线旁路式工作，能保证处理方法适当而且可预知",
          "B. IPS能对流量进行逐字节检查，且可将经过的数据包还原为完整的数据流",
          "C. IPS提供主动、实时的防护，能检测网络层、传输层和应用层的内容",
          "D. 如果检测到攻击企图，IPS就会自动将攻击包丢掉或采取措施阻断攻击源"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 73,
        "type": "single",
        "question": "在Windows Server用户“密码策略”设置中，“密码必须符合复杂性要求”策略启用后，用户设置密码时必须满足（）要求。",
        "options": [
          "A. 必须使用大写字母、数字、小写字母和符号中的3种",
          "B. 密码最小长度为6位",
          "C. 必须使用大写字母、数字、小写字母和符号",
          "D. 密码长度没有限制"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 74,
        "type": "single",
        "question": "为组织创建适当的密码策略，每个用户必须遵守这个密码策略，下列正确的是（）。",
        "options": [
          "A. 定义“强制密码历史”可以使系统记忆几个以前使用过的密码，当用户密码到期时，用户将可重复使用以前的密码",
          "B. “密码最长期限”通常的时间间隔为30到60天",
          "C. “最短密码长度”可以使密码至少包含指定个数的字符",
          "D. 七位以上的短密码比长密码具有更强的安全性"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 75,
        "type": "single",
        "question": "下面不属于本地用户组密码安全策略的内容是（）。",
        "options": [
          "A. 密码必须符合复杂性要求",
          "B. 设定密码长度最小值",
          "C. 设定用户不能更改密码",
          "D. 强制密码历史"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 76,
        "type": "single",
        "question": "在Windows server中，账户策略中的（）对于域或本地用户账户，决定系统锁定账户的时间，以及锁定谁的账户。",
        "options": [
          "A. 审核策略",
          "B. Kerberos策略",
          "C. 密码策略",
          "D. 账户锁定策略"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 77,
        "type": "single",
        "question": "在“本地安全设置”中，用户账户锁定策略，当3次无效登录后，用户账户被锁定的实际时间是（）。",
        "options": [
          "A. 账户将一直被锁定，直到管理员明确解除对它的锁定",
          "B. 30分钟",
          "C. 账户锁定时间无效",
          "D. 10分钟"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 78,
        "type": "single",
        "question": "用户帐户被锁定，是因为（）。",
        "options": [
          "A. 帐户长时间没有被使用",
          "B. 帐户超过了帐户锁定阈值",
          "C. 系统管理员禁止该用户帐户",
          "D. 帐户超过使用期限"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 79,
        "type": "single",
        "question": "如果windows中帐户锁定阈值设置为0，表示（）。",
        "options": [
          "A. 用户帐户不会被锁定",
          "B. 用户帐户永久锁定",
          "C. 用户帐户密码输错一次以上永久锁定",
          "D. 用户帐户不能修改密码"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 80,
        "type": "single",
        "question": "您的网络包含一个active directory域。你有一个成员服务器运行域。你有一个成员服务器运行Windows Server 2008 R2。你需要立即停用到服务器的所有传入连接。你应该怎么做?",
        "options": [
          "A. 从服务管理单元中，禁用IP 助手",
          "B. 从服务管理单元中，禁用Netlogon 服务",
          "C. 从Windows防火墙，启用公共配置文件中“阻止所有连接选项”",
          "D. 从Windows防火墙，启用域配置文件中“阻止所有连接选项”"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 81,
        "type": "single",
        "question": "你的公司有一个单一的活动目录域。该公司通过网络防火墙保护。远程用户通过使用PPTP VPN服务器连接到网络。当用户尝试连接到VPN服务器，他们会收到以下错误信息:远程计算机没有响应?你需要确保用户能够建立VPN连接。你应该怎么做?",
        "options": [
          "A. 打开防火墙上的1423端口",
          "B. 打开防火墙上的1723端口",
          "C. 打开防火墙上的3389端口",
          "D. 打开防火墙上的6000端口"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 82,
        "type": "single",
        "question": "你的网络中有两台服务器分别名为Server1和Server2，两台服务器都运行Windows Server 2008 R2。Server1上有几条自定义入站规则和安全连接规则。你要将Server1上的这几条防火墙规则覆盖到Server2上，你该怎么做?",
        "options": [
          "A. 在命令提示符下，运行netsh.exe firewall dump",
          "B. 在命令提示符下，运行netsh.exe firewall show > firewall.txt",
          "C. 在高级安全Windows防火墙控制台，单击“导出策略”",
          "D. 在高级安全Windows防火墙控制台，单击“安全连接规则”，然后单击“导出列表”"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 83,
        "type": "single",
        "question": "要审核每个用户帐户登录或注销成功还是失败，需要在审核策略的（）中勾选“成功”和“失败”。",
        "options": [
          "A. 审核登录事件",
          "B. 审核帐户管理",
          "C. 审核系统事件",
          "D. 审核特权使用"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 84,
        "type": "single",
        "question": "下列哪个命令是将用户密码的最大天数设为30天?（）",
        "options": [
          "A. chage -W 30 testuser",
          "B. chage -M 30 testuser",
          "C. chage -D 30 testuser",
          "D. chage -E 30 testuser"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 85,
        "type": "single",
        "question": "以下不属于防火墙能够实现的功能是（）。",
        "options": [
          "A. 网络地址转换",
          "B. 差错控制",
          "C. 数据包过滤",
          "D. 数据转发"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 86,
        "type": "single",
        "question": "rule permit ip source 210.78.1.1 0.0.255.255 destination202.38.5.2 0.0.0.0的含义是（）。",
        "options": [
          "A. 允许主机210.78.1.1访问主机202.38.5.2",
          "B. 允许210.78.0.0的网络访问202.38.0.0的网络",
          "C. 允许主机202.38.5.2访问网络210.78.0.0",
          "D. 允许210.78.0.0的网络访问主机202.38.5.2"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 87,
        "type": "single",
        "question": "以下关于终端安全保护系统的功能，描述不正确的是（）。",
        "options": [
          "A. 能自动发现和收集终端计算机资产，使企业清楚知道并统一管理IT资产",
          "B. 支持可信软件统一分发",
          "C. 被动防御",
          "D. 终端接入受控"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 88,
        "type": "single",
        "question": "以下关于终端安全的防御措施的描述，不正确的是（）。",
        "options": [
          "A. 进行终端上的用户上网行为管控",
          "B. 所有终端必须安装最新版的杀毒软件，至少windows的客户端是必须安装的，并且制定定期更新病毒库策略",
          "C. 所有办公终端、生产终端禁止外接USB、串口等设备",
          "D. 保障终端安全，只要有必要的技术手段支持就行，其他的因素没什么影响"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 89,
        "type": "single",
        "question": "以下关于终端安全的描述，不正确的是（）。",
        "options": [
          "A. 所有办公终端（Windows系统）必须加入活动目录，开启密码复杂度要求，最小化用户权限，利用组策略下发终端安全策略，如审计、最小化授权等措施",
          "B. 一般打印终端都不存在安全风险，为提高工作效率，均不采用集中打印模式",
          "C. 所有办公终端、生产终端禁止随意安装软件，须制定软件白名单，未在其中的软件直接拒绝安装或者运行，防止恶意软件、木马等程序被有意无意的调用",
          "D. 终端安全中审计有着至关重要的作用，利用ad开启所有办公终端的audit功能，针对登陆失败、成功等关键动作进行记录是最基本的策略之一"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 90,
        "type": "single",
        "question": "与传统端点安全防护采用预设安全策略的静态防御技术相比，下列有关EDR描述的说法中，错误的是（）。",
        "options": [
          "A. EDR加强了威胁检测的能力",
          "B. EDR加强了响应取证的能力",
          "C. EDR可以在威胁造成危害后立即进行检测和阻止",
          "D. EDR具有能够快速检测、识别、监控和处理端点事件的能力"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 91,
        "type": "single",
        "question": "目前主流的EDR通常采用B/S部署架构，通过控制中心的管理平台即可实现桌面资产、服务器资产的（）管理。",
        "options": [
          "A. 独立",
          "B. 分散",
          "C. 统一",
          "D. 周期"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 92,
        "type": "single",
        "question": "EDR安全模型中的系统加固是指定期进行漏洞扫描、补丁修复、（）和更新端点软件清单，通过软件白名单限制未经授权的软件运行，通过主机防火墙限制未经授权的服务端口开放，并定期检查和清理内部人员的账号和授权信息。",
        "options": [
          "A. 异常行为分析",
          "B. 攻击指示器",
          "C. 安全策略设置",
          "D. 主动扫描资产"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 93,
        "type": "single",
        "question": "使用的防病毒软件可以（）。",
        "options": [
          "A. 查出易感染的任何病毒",
          "B. 查出已知名的病毒，清除一部分病毒",
          "C. 清除任何已感染的病毒",
          "D. 查出并清除任何病毒"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 94,
        "type": "single",
        "question": "防病毒软件的工作原理不包含（）。",
        "options": [
          "A. 防病毒软件会定期更新病毒特征数据库，在计算机上扫描文件和程序，检测是否存在已知的病毒",
          "B. 防病毒软件会运行在后台监控计算机的活动，并实时检测潜在的威胁",
          "C. 防病毒软件能在接收和发送电子邮件时扫描附件，过滤掉包含病毒的邮件",
          "D. 安装防病毒软件后就再也不用担心计算机病毒的威胁了，无须定时升级"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 95,
        "type": "single",
        "question": "对于杀毒软件扫描到的病毒文件，一般采取的杀毒方式是（）。",
        "options": [
          "A. 清除",
          "B. 删除",
          "C. 禁止访问",
          "D. 不处理"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 96,
        "type": "single",
        "question": "杀毒软件中的网络防护主要保护计算机在使用过程中，对网络危险行为的防御。（）不属于网络防护的范围。",
        "options": [
          "A. 僵尸网络防护",
          "B. Web服务保护",
          "C. 恶意网址拦截",
          "D. 软件安装拦截"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 97,
        "type": "single",
        "question": "（）不属于防病毒软件病毒查杀的方法。",
        "options": [
          "A. 检测可疑文件的签名并进行比对",
          "B. 基于启发式的侦测技术的查杀方法",
          "C. 基于行为侦测技术的查杀方法",
          "D. 基于结果侦测技术的查杀方法"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 98,
        "type": "single",
        "question": "防病毒软件中经常自带（）工具，可以清理不必要的系统垃圾、缓存文件、无效注册表等，节省电脑使用空间。",
        "options": [
          "A. 弹窗拦截",
          "B. 文件粉碎",
          "C. 垃圾清理",
          "D. 右键管理"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 99,
        "type": "single",
        "question": "防病毒软件中的（）功能是根据您设定的上网时间来对电脑联网功能进行控制。",
        "options": [
          "A. 上网行为控制",
          "B. 上网时段控制",
          "C. 网站内容控制",
          "D. 程序执行控制"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 100,
        "type": "single",
        "question": "关于防病毒软件防护中心配置的方法，下列说法有误的是（）。",
        "options": [
          "A. 查杀病毒的处理方式一般有“自动处理”和“询问”两种方式供用户选择",
          "B. 查杀病毒的处理方式，通常默认设置是“清除病毒时先备份至隔离区”",
          "C. 主流的防病毒软件防护中心配置中，通常都会有类似“信任区”和“隔离区”的配置选项",
          "D. 配置为全盘查杀模式杀毒速度快，杀毒更彻底"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 101,
        "type": "single",
        "question": "IIS即Internet（）服务，是微软公司开发的Web服务器应用程序。",
        "options": [
          "A. 邮件",
          "B. 信息",
          "C. 网络",
          "D. 域名"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 102,
        "type": "single",
        "question": "下列（）服务可以由IIS提供。1 www 2 ftp 3 smtp 4 nntp",
        "options": [
          "A. 1、2",
          "B. 1、2、3",
          "C. 1、3、4",
          "D. 1、2、3、4"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 103,
        "type": "single",
        "question": "在Web服务中，客户端验证方法的顺序是（）。",
        "options": [
          "A. 匿名身份验证、Windows验证、摘要式身份验证、基本身份验证",
          "B. 摘要式身份验证、基本身份验证、匿名身份验证、Windows验证",
          "C. Windows验证、匿名身份验证、摘要式身份验证、基本身份验证",
          "D. Windows验证、摘要式身份验证、基本身份验证、匿名身份验证"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 104,
        "type": "single",
        "question": "在使用IIS发布Web服务时，可通过勾选“控制面板→程序→启用或关闭Windows功能”中的（）选项来安装IIS服务。",
        "options": [
          "A. .NET Framework 3.5（包含.NET 2.0和3.0）",
          "B. Internet Explorer 11",
          "C. Internet Information Services",
          "D. NFS服务"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 105,
        "type": "single",
        "question": "IIS服务器配置中，FTP站点进行数据传输默认使用TCP端口（）。",
        "options": [
          "A. 1024",
          "B. 21",
          "C. 20",
          "D. 53"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 106,
        "type": "single",
        "question": "有关FTP服务概述，下列说法有误的是（）。",
        "options": [
          "A. FTP是File Transfer Protocol（文件传输协议）的缩写",
          "B. 相比于HTTP，FTP协议要复杂得多。因为FTP协议要用到两个TCP连接，一个是命令链路，用来在FTP客户端与服务器之间传递命令;另一个是数据链路，用来上传或下载数据",
          "C. FTP协议有两种工作方式:PORT方式和PASV方式，中文意思为主动式和被动式",
          "D. 传统的FTP实现(active Mode)用21作为数据端口，20作为命令端口;而被动模式(Passive Mode)会随机启用本机的一个端口作为数据监听端口"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 107,
        "type": "single",
        "question": "DHCP在网络中起着重要作用，它可以为网络中的计算机自动分配 TCP/IP 地址、子网掩码、（）、DNS 地址、WINS 服务器地址等参数，使用DHCP服务器，可以极大地减轻网管的负担。",
        "options": [
          "A. FTP地址",
          "B. 域名",
          "C. 网关地址",
          "D. 服务端口"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 108,
        "type": "single",
        "question": "DHCP服务器向DHCP客户机出租的IP地址一般都有一个租借期限。DHCP客户机启动时和IP租约期限到达租约的（）时，DHCP客户机都会自动向DHCP服务器发送更新其IP租约的信息。",
        "options": [
          "A. 0.25",
          "B. 0.5",
          "C. 0.7",
          "D. 0.9"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 109,
        "type": "multiple",
        "question": "鼠标是一种新型的（）设备。",
        "options": [
          "A. 输入设备",
          "B. B、通信设备",
          "C. C、控制设备",
          "D. D、输出设备"
        ],
        "analysis": "",
        "answer": [
          0,
          2
        ]
      },
      {
        "id": 110,
        "type": "multiple",
        "question": "国家实行网络安全等级保护制度。网络运营者应当按照网络安全等级保护制度的要求，履行下列安全保护义务，保障网络免受干扰、破坏或者未经授权的访问，防止网络数据泄露或者被窃取、篡改:（）。",
        "options": [
          "A. 制定内部安全管理制度和操作规程，确定网络安全负责人，落实网络安全保护责任",
          "B. B、采取防范计算机病毒和网络攻击、网络侵入等危害网络安全行为的技术措施",
          "C. C、采取监测、记录网络运行状态、网络安全事件的技术措施，并按照规定留存相关的网络日志不少于六个月",
          "D. D、采取数据分类、重要数据备份和加密等措施"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 111,
        "type": "multiple",
        "question": "《网络安全法》规定，网络空间主权的内容包括（）。",
        "options": [
          "A. 国内主权",
          "B. B、依赖性主权",
          "C. C、独立权",
          "D. D、自卫权"
        ],
        "analysis": "",
        "answer": [
          0,
          2,
          3
        ]
      },
      {
        "id": 112,
        "type": "multiple",
        "question": "OSI安全体系为异构计算机的进程与进程之间的通信安全性，定义了五类安全服务，以下属于这五类安全服务的是（）。",
        "options": [
          "A. 机密性",
          "B. B、完整性",
          "C. C、鉴别",
          "D. D、防抵赖"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 113,
        "type": "multiple",
        "question": "在系统投运前，应对系统运行的稳定性、安全性进行严格测试，包括检查（）等。",
        "options": [
          "A. 应用系统是否存在安全漏洞和隐患",
          "B. B、安装最新的补丁软件",
          "C. C、关闭不必要的服务端口和不必要的服务进程",
          "D. D、删除不必要的用户"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 114,
        "type": "multiple",
        "question": "信息机房各出入口应安排专人值守或配置电子门禁系统，（）、（）和（）进入的人员。",
        "options": [
          "A. 控制",
          "B. B、封闭",
          "C. C、识别",
          "D. D、记录"
        ],
        "analysis": "",
        "answer": [
          0,
          2,
          3
        ]
      },
      {
        "id": 115,
        "type": "multiple",
        "question": "木马的常见传播途径有（）。",
        "options": [
          "A. 邮件附件",
          "B. B、下载文件",
          "C. C、网页",
          "D. D、聊天工具"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 116,
        "type": "multiple",
        "question": "关于交换机帧转发的描述中，正确的是（）。",
        "options": [
          "A. 直接交换是指交换机接到帧就直接转发",
          "B. B、存储转发交换是指交换机接收到帧，先校验整个帧，然后再转发",
          "C. C、改进的直接交换是指交换机接收到帧，先校验帧的目的地址，然后再转发",
          "D. D、改进的直接交换是指交换机接收到帧，先校验帧的前64B，然后再转发"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          3
        ]
      },
      {
        "id": 117,
        "type": "multiple",
        "question": "软件盗版是指未经授权对软件进行复制、仿制、使用或生产。下面属于软件盗版的形式是（）。",
        "options": [
          "A. 使用的是计算机销售公司安装的非正版软件",
          "B. B、网上下载的非正版软件——“非正版软件”是指使用没花钱的软件",
          "C. C、自己解密的非正版软件",
          "D. D、使用试用版的软件"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 118,
        "type": "multiple",
        "question": "网络运营者建立企业的管理制度和操作流程，以满足法律合规性的要求，避免法律风险，主要包括（）。",
        "options": [
          "A. 健全用户信息保护制度",
          "B. B、落实网络实名制",
          "C. C、网络安全事件应急预案",
          "D. D、关键信息基础设施的安全保护义务"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 119,
        "type": "multiple",
        "question": "狠抓网络安全责任落实和绩效考核。构建（）的网络安全管理体系、（）。",
        "options": [
          "A. 管理统一、职责明确、工作界面清晰",
          "B. B、管理有效、权责明确、工作界面清楚",
          "C. C、技术体系、监督体系和保障体系",
          "D. D、技术体系、稽查体系和保障体系"
        ],
        "analysis": "",
        "answer": [
          0,
          2
        ]
      },
      {
        "id": 120,
        "type": "multiple",
        "question": "下列关于内外网邮件系统说法正确的有（）。",
        "options": [
          "A. 严禁使用未进行内容审计的信息内外网邮件系统",
          "B. B、严禁用户使用默认口令作为邮箱密码",
          "C. C、严禁内外网邮件系统开启自动转发功能",
          "D. D、严禁用户使用互联网邮箱处理公司办公业务"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 121,
        "type": "multiple",
        "question": "下列哪些属于服务器硬件的冗余?（）",
        "options": [
          "A. 磁盘冗余",
          "B. B、电源冗余",
          "C. C、网卡冗余",
          "D. D、双机冗余"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 122,
        "type": "multiple",
        "question": "下述描述中，正确的是（）。",
        "options": [
          "A. 设置了交换机的管理地址后，就可使用Telnet方式来登录连接交换机，并实现对交换机的管理与配置",
          "B. B、首次配置交换机时，必须采用Console口登录配置",
          "C. C、默认情况下，交换机的所有端口均属于VLAN1，设置管理地址，实际上就是设置VLAN1接口的地址",
          "D. D、交换机允许同时建立多个Telnet登录连接"
        ],
        "analysis": "",
        "answer": [
          1,
          2,
          3
        ]
      },
      {
        "id": 123,
        "type": "judge",
        "question": "无线网络设备安装繁琐，成本高。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 124,
        "type": "judge",
        "question": "LTE系统采用了正交频分复用和多入多出等关键技术，在网络架构和多址接入技术方面有了革命性的变化，被业界通俗称为3G。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 125,
        "type": "judge",
        "question": "交换机端口安全默认是打开的。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 126,
        "type": "judge",
        "question": "安全MAC地址的最大数量是默认是2。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 127,
        "type": "judge",
        "question": "端口安全功能是通过对MAC地址表的配置，来实现在某一端口只允许一台或者几台确定的设备访问此台交换机端口。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 128,
        "type": "judge",
        "question": "1x是一种基于端口的网络接入控制协议。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 129,
        "type": "judge",
        "question": "目前无线路由器里带有的加密模式主要有:WEP，WPA-PSK（TKIP），WPA2-PSK（AES）。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 130,
        "type": "judge",
        "question": "WPA全名为Wi-Fi Protected access，有WPWPA2和WPA3三个标准，是一种保护无线电脑网络（Wi-Fi）安全的系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 131,
        "type": "judge",
        "question": "白名单列表:拒绝接入WLAN网络客户端的MAC地址列表，只有存在该列表的用户才能接入。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 132,
        "type": "judge",
        "question": "黑白名单的配置方式有基于VAP（服务集）:该配置只对某些SSID启用。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 133,
        "type": "judge",
        "question": "在windows操作系统中，安全审计功能包括:注册表维护设置信息、日志系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 134,
        "type": "judge",
        "question": "域的审核策略确保所有账户登录事件都被审核。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 135,
        "type": "judge",
        "question": "Linux在secure日志中登陆成功日志和审计日志是一个文件。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 136,
        "type": "judge",
        "question": "当发生了定义的规则中的动作时，如果有一个规则在/etc/audit/auditd.conf中定义则它会通过调度程序发送，然后会有一条日志消息写到/var/log/audit/audit.log中。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 137,
        "type": "judge",
        "question": "防病毒软件的漏洞修复功能，能第一时间获取补丁相关信息，及时修复未被发现的漏洞。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 138,
        "type": "judge",
        "question": "PS C:\\Users\\administrator> Get-WindowsFeature Web-DAV-Publishing display Name Name []WebDAV发布 --- Web-DAV-Publishing 是用来检查WebDAV功能开启的状态。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 139,
        "type": "judge",
        "question": "IIS管理器的FTP站点中，选中你要授权的文件夹，并切换到“内容视图”，选中“FTP授权规则”，双击“FTP授权规则”，可进入“授权规则”管理界面，为指定的用户设置权限。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 140,
        "type": "judge",
        "question": "以 Windows server 2008 中自带的 FTP 服务为例，进行FTP站点加固时，启用FTP授权规则一般会允许所有匿名用户访问站点，并设置允许“读取和写入”权限。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 141,
        "type": "judge",
        "question": "DHCP IP地址耗尽攻击是指攻击者不断变换物理地址，尝试申请DHCP域中的IP地址，直到耗尽 DHCP Server地址池中的所有地址，导致其他正常用户无法获取IP地址的行为。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 142,
        "type": "judge",
        "question": "为了应对DHCP Server仿冒者攻击，可引入DHCP Snooping技术，在DHCP客户端和DHCP 服务器之间建立一道虚拟防火墙。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 143,
        "type": "judge",
        "question": "在配置跨交换机VLAN交互信息时，Trunk端口能够实现多个VLAN间通信。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 144,
        "type": "judge",
        "question": "在配置跨交换机VLAN通信时，不需要对VLAN进行划分。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 145,
        "type": "judge",
        "question": "配置ssh登录时的认证包括口令认证和管理认证。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 146,
        "type": "judge",
        "question": "为了SSH登录安全，一般会将 SSH 的端口设置为默认的22以外的端口，或者禁用Root账户登录。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 147,
        "type": "judge",
        "question": "限制SNMP管理主机的IP地址范围不是一种SNMP设备安全管理方法。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 148,
        "type": "judge",
        "question": "通过设置文件共享的权限只能控制网络访问，不能控制本机访问。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 149,
        "type": "judge",
        "question": "若要同时修改文件或目录的属组，可以使用Chown来设置。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 150,
        "type": "judge",
        "question": "给系统打补丁时，只要为系统打上最新的补丁包就可以。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 151,
        "type": "judge",
        "question": "在给系统下载补丁包升级时，不需要对应其版本及兼容性。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 152,
        "type": "judge",
        "question": "域名备案网站的内容不能带有中国、中华等字样。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 153,
        "type": "judge",
        "question": "AAA上对DNS的配置的要求为配置一个DNS。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 154,
        "type": "judge",
        "question": "在配置本地DNS服务器时，一般需要指定至少一个上游DNS服务器，以便在本地服务器无法解析时进行查询。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 155,
        "type": "judge",
        "question": "备份应用数据需要考虑数据恢复的问题，包括采用磁盘镜像或容错、备份磁带异地存放、等多种灾难预防措施。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 156,
        "type": "judge",
        "question": "暴力破解属于口令破解的一种方式。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 157,
        "type": "judge",
        "question": "FIDO本质是采用公私钥签名/验签的方式，实现用户身份认证，通过生物识别的方式获得私钥授权;因此FIDO在安全原理上与PKI体系是同属一个安全级别，远远高于静态口令、短信验证码、OTP令牌等传统安全认证方式。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 158,
        "type": "judge",
        "question": "最简单和常见的缓冲区溢出攻击类型就是在一个字符串里综合了代码植入和活动纪录技术。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 159,
        "type": "judge",
        "question": "漏洞扫描的主要功能是扫描目标主机的漏洞。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 160,
        "type": "judge",
        "question": "漏洞扫描工具不能实时监视网络上的入侵，所以对保护系统安全方面很是有限。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 161,
        "type": "judge",
        "question": "主机及系统信息收集是黑客在入侵踩点（信息搜集）阶段使用到的技术。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 162,
        "type": "judge",
        "question": "生成相同网络的接入点都会拥有高度同步的内部时钟，接入点会不断地交换时间戳以实现同步，同步增量为25微秒，大多数流氓热点在尝试进行时间戳同步时往往会出现各种各样的错误，通过检测这种错误来发现流氓热点。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      }
    ]
  },
  {
    "set_name": "2026考证顺序刷题4-B-2",
    "items": [
      {
        "id": 1,
        "type": "single",
        "question": "Windows server 2016添加DHCP服务器角色时，系统会提示（）是服务器安装的先决的条件之一。",
        "options": [
          "A. 管理员帐户使用了弱密码",
          "B. 管理员帐户使用了强密码",
          "C. guest帐户使用了弱密码",
          "D. guest帐户使用了强密码"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 2,
        "type": "single",
        "question": "成功安装 DHCP 服务器角色后，需要对 DHCP 服务器进行授权和配置，以下描述不正确的是（）。",
        "options": [
          "A. 如果在域环境中安装DHCP，则必须执行授权步骤使 DHCP 服务器在域中运行",
          "B. 使用 DHCP控制台创建新 DHCP 作用域时，在“添加排除和延迟”页面上，可以指定希望服务器分配的地址池范围",
          "C. 安装在 active directory 域中未经授权的 DHCP 服务器无法正常工作，并且不会将 IP 地址租给 DHCP 客户端",
          "D. 在 Windows 桌面上，打开“开始”菜单并选择“Windows管理工具”>“DHCP”，可以进入DHCP控制台界面"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 3,
        "type": "single",
        "question": "Windows Server 2012系统中，可以在cmd窗口中使用appcmd命令检查IIS中是否启用了“目录浏览”功能。appcmd工具的所在目录是（）。",
        "options": [
          "A. C:\\Windows32\\System\\inetsrv\\",
          "B. C:\\Windows\\System32\\inetsrv\\",
          "C. C:\\Windows\\System\\inetsrv\\",
          "D. C:\\Windows\\System32\\InputMethod\\"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 4,
        "type": "single",
        "question": "Windows Server 2012系统中，检查IIS中是否禁用了“目录浏览”功能，可以在cmd窗口中使用命令（）进行检查。",
        "options": [
          "A. C:\\Windows\\system32\\inetsrv目录下的appcmd.exe",
          "B. C:\\Windows32\\System\\inetsrv目录下的cmd.exe",
          "C. C:\\Windows\\System32\\configuration目录下的appcmd.exe",
          "D. C:\\Windows\\system32\\inetsrv目录下的cmd.exe"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 5,
        "type": "single",
        "question": "IIS在默认情况下产生错误的时候，会给客户端反馈详细的错误信息，这将导致服务器一些敏感信息或文件被泄露，我们可以通过点击功能视图中的（）图标，对服务器进行加固。",
        "options": [
          "A. 错误页",
          "B. WebDAV",
          "C. 处理程序映射",
          "D. .NET错误页"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 6,
        "type": "single",
        "question": "默认情况下，IIS管理中错误页功能，对不同的错误状态设置了（）。",
        "options": [
          "A. 不同的响应页面",
          "B. 相同的响应页面",
          "C. 没有响应页面",
          "D. 用户定义的响应页面"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 7,
        "type": "single",
        "question": "安全加固管理中，IIS错误页配置方法正确的是（）。",
        "options": [
          "A. 设置自定义错误页中如含有中文字符，不建议使用GB2312编码",
          "B. 在IIS错误页功能页中，对不同的错误状态设置自定义相应页面，避免网站敏感信息泄露",
          "C. 可以通过修改.NET错误页功能来实现",
          "D. 错误页设置不可以通过直接修改原有的报错页面文件路径或错误页内容来实现"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 8,
        "type": "single",
        "question": "Windows server 2008 中自带的 FTP 服务中，加固FTP匿名登录漏洞时，我们必须在FTP身份验证中（）。",
        "options": [
          "A. 启用匿名身份验证",
          "B. 禁用匿名身份验证",
          "C. 启用基本身份验证",
          "D. 禁用基本身份验证"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 9,
        "type": "single",
        "question": "以 Windows server 2008 中自带的 FTP 服务为例，（）功能可以禁用匿名用户登录。",
        "options": [
          "A. FTP身份验证",
          "B. FTP授权规则",
          "C. FTP请求筛选",
          "D. FTP IPv4地址和域限制"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 10,
        "type": "single",
        "question": "Windows server 2012 IIS中“添加FTP站点”页面，在“身份验证和授权信息”身份验证（），授权允许访问选择“所有用户”，权限勾选“读取”，则FTP匿名登录会被禁用。",
        "options": [
          "A. 匿名和基本都勾选",
          "B. 只勾选基本",
          "C. 匿名和基本都不勾选",
          "D. 只勾选匿名"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 11,
        "type": "single",
        "question": "已经新建了两个用于登录FTP的账户，在IIS配置FTP用户隔离时，FTP服务器根目录下LocalUser目录中，新建的隔离用户目录必须（），否则无法实现用户隔离。",
        "options": [
          "A. 名称和FTP账户用户名称必须保持一致",
          "B. 随便定义名称",
          "C. 定义为ftp1和ftp2",
          "D. 定义为Local和User"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 12,
        "type": "single",
        "question": "以 Windows server 2008 中自带的 FTP 服务为例，通过点击功能视图中的“FTP IPv4地址和域限制”图标，可以指定允许访问FTP站点的（）。",
        "options": [
          "A. 源IP地址",
          "B. 目标IP地址",
          "C. 源端口",
          "D. 目标端口"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 13,
        "type": "single",
        "question": "FTP 服务进行安全加固时，可以使用 VPN 等安全接入手段连接到 FTP 服务器端，同时使用安全组来控制访问源（）。",
        "options": [
          "A. 端口",
          "B. 用户",
          "C. 文档",
          "D. IP"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 14,
        "type": "single",
        "question": "VLAN是将一个物理局域网进行（）划分，所有同一个VLAN内的各个工作站无需放置在同一个物理空间。",
        "options": [
          "A. 虚拟",
          "B. 物理",
          "C. 逻辑",
          "D. 交换"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 15,
        "type": "single",
        "question": "VLAN采用的主要协议为（）。",
        "options": [
          "A. 802.1q",
          "B. 802.11",
          "C. 802.3",
          "D. 802.15"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 16,
        "type": "single",
        "question": "以下关于VLAN的主要用途描述错误的是（）。",
        "options": [
          "A. 合并广播域",
          "B. 合并冲突域",
          "C. 隔离广播域",
          "D. 隔离用户"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 17,
        "type": "single",
        "question": "以下不是VLAN的作用的是（）。",
        "options": [
          "A. 便于逻辑工作组的管理与通信",
          "B. 隔离广播域，防止广播风暴",
          "C. 提供更高的安全性",
          "D. 增加网络传输速度"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 18,
        "type": "single",
        "question": "以下哪个选项不是VLAN的常见用途?（）",
        "options": [
          "A. 提供网络安全隔离",
          "B. 优化网络传输性能",
          "C. 简化网络管理和配置",
          "D. 支持多个无线网络的覆盖"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 19,
        "type": "single",
        "question": "以下关于VLAN的叙述中，属于其优点的是（）。",
        "options": [
          "A. 允许逻辑地划分网段",
          "B. 减少了冲突域的数量",
          "C. 增加了冲突域的大小",
          "D. 减少了广播域的数量"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 20,
        "type": "single",
        "question": "VLAN的优点之一是（）。",
        "options": [
          "A. 提高网络安全性",
          "B. 扩展物理网络范围",
          "C. 增加网络带宽",
          "D. 提供无线网络安全"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 21,
        "type": "single",
        "question": "在下面关于VLAN的定义中，不正确的是（）。",
        "options": [
          "A. native vlan",
          "B. tag vlan",
          "C. port vlan",
          "D. IEEE802.1Q vlan"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 22,
        "type": "single",
        "question": "在IEEE 802.1Q标准中，VLAN的定义方法使用的是（）。",
        "options": [
          "A. MAC地址",
          "B. IP地址",
          "C. VLAN标签",
          "D. 端口号"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 23,
        "type": "single",
        "question": "以下哪种模式用于将单个VLAN分配给交换机接口?（）",
        "options": [
          "A. access模式",
          "B. Trunk模式",
          "C. Hybrid模式",
          "D. High模式"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 24,
        "type": "single",
        "question": "当多个VLAN需要跨越两台物理交换机时，需要（）。",
        "options": [
          "A. 用三层端口连接两台交换机",
          "B. 用Trunk端口连接两台交换机",
          "C. 用路由器来连接两台交换机",
          "D. 在两台交换机上配置VLAN即可"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 25,
        "type": "single",
        "question": "单臂路由是指（）。",
        "options": [
          "A. 路由器和交换机在一起",
          "B. 路由器接在主干网上的一个交换设备上",
          "C. 路由器和工作站连在一起",
          "D. 单独的一个分支路由器"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 26,
        "type": "single",
        "question": "下列关于配置单臂路由的方法错误的是?（）",
        "options": [
          "A. 每个VLAN一个物理连接",
          "B. 交换机上，把连接到路由器的端口配置成Trunk类型的端口，并允许相关VLAN的帧通过",
          "C. 在路由器上需要创建子接口",
          "D. 交换机和路由器之间仅使用一条物理链路连接"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 27,
        "type": "single",
        "question": "当PC串口和交换机console口连接时，应使用（）。",
        "options": [
          "A. 直通线",
          "B. 反转线",
          "C. 交叉线",
          "D. 双绞线"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 28,
        "type": "single",
        "question": "Telnet协议工作在OSI七层结构中的（）。",
        "options": [
          "A. 网络层",
          "B. 传输层",
          "C. 表示层",
          "D. 应用层"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 29,
        "type": "single",
        "question": "用户可以通过修改HTTPS服务器的（），能有效地防止攻击者通过HTTPS服务标准端口号攻击设备，从而进一步增加设备的安全性。",
        "options": [
          "A. 证书文件",
          "B. 公钥文件",
          "C. 私钥文件",
          "D. 端口号"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 30,
        "type": "single",
        "question": "本地组账户被赋予了一定的权限，以便让它们具备（）计算机或访问本机资源的能力。",
        "options": [
          "A. 管理本地",
          "B. 管理远程",
          "C. 管理数据库",
          "D. 管理现实"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 31,
        "type": "single",
        "question": "Windows本地组账户可以包含（）。",
        "options": [
          "A. 本地用户账户",
          "B. 域用户账户",
          "C. 本地用户账户和域用户账户",
          "D. 只能包含本地计算机的内置账户"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 32,
        "type": "single",
        "question": "在设置账户密码时，默认要求用户的密码必须至少（）个字符，且不可包含用户账户名称或全名。",
        "options": [
          "A. 2",
          "B. 4",
          "C. 6",
          "D. 8"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 33,
        "type": "single",
        "question": "若要新建Test组，需要在（）对话框输入新建的组名Test。",
        "options": [
          "A. 组",
          "B. 计算机管理",
          "C. 本地用户和组",
          "D. 新建组"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 34,
        "type": "single",
        "question": "在Windows本地计算机上将本地用户添加到本地用户组的命令是（）。",
        "options": [
          "A. net user /add",
          "B. net user /delete",
          "C. net localgroup /add",
          "D. net localgroup /delete"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 35,
        "type": "single",
        "question": "Windows文件访问控制是用于（）的安全机制。",
        "options": [
          "A. 控制网络访问速度",
          "B. 控制文件传输协议",
          "C. 控制文件的访问和权限",
          "D. 控制网络设备配置"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 36,
        "type": "single",
        "question": "在Linux系统中，可以使用（）命令为创建账户。",
        "options": [
          "A. useradd",
          "B. userdel",
          "C. usermod",
          "D. groupadd"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 37,
        "type": "single",
        "question": "Linux文件权限中保存的信息不包括（）。",
        "options": [
          "A. 文件所有者的权限",
          "B. 文件所有者所在组的权限",
          "C. 其他用户的权限",
          "D. 文件失效时间"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 38,
        "type": "single",
        "question": "在Linux中，可以通过配置（）目录来存放硬件设备的特殊文件。",
        "options": [
          "A. /dev",
          "B. /bin",
          "C. /etc",
          "D. /home"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 39,
        "type": "single",
        "question": "在整个树状目录结构中，最顶层有（）个根目录。",
        "options": [
          "A. 一",
          "B. 二",
          "C. 三",
          "D. 四"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 40,
        "type": "single",
        "question": "在Linux中，可使用（）命令移动一个目录。",
        "options": [
          "A. mkdir",
          "B. rm",
          "C. mv",
          "D. cd"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 41,
        "type": "single",
        "question": "在Linux中，对于较多的文件适合使用（）或less命令查看。",
        "options": [
          "A. more",
          "B. many",
          "C. much",
          "D. big"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 42,
        "type": "single",
        "question": "在Linux中，创建的文件默认作为不可执行文件，因此没有（）权限。",
        "options": [
          "A. w",
          "B. x",
          "C. r",
          "D. b"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 43,
        "type": "single",
        "question": "Linux系统对普通文件默认的访问权限是（）。",
        "options": [
          "A. -rwxrwx---",
          "B. -rw-rw-r--",
          "C. wx------",
          "D. -rw-r--r--"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 44,
        "type": "single",
        "question": "文件隐藏属性chattr命令最常使用的属性是a和i，其中a属性表示文件的内容只能（），不能修改或删除。",
        "options": [
          "A. 减少",
          "B. 管理",
          "C. 访问",
          "D. 增加"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 45,
        "type": "single",
        "question": "补丁管理这一流程使企业可以对系统环境中的内部软件部署和（）进行控制。",
        "options": [
          "A. 维护",
          "B. 规划",
          "C. 修改",
          "D. 设置"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 46,
        "type": "single",
        "question": "以下哪个术语通常用于指代未经修复的已知漏洞?（）",
        "options": [
          "A. 错误",
          "B. 补丁",
          "C. 恶意软件",
          "D. 漏洞"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 47,
        "type": "single",
        "question": "防病毒软件升级的一个重要原因是（）。",
        "options": [
          "A. 增加系统的电源效率",
          "B. 提高网络连接速度",
          "C. 修复已知的病毒",
          "D. 添加新的游戏功能"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 48,
        "type": "single",
        "question": "在域名类型中，.edu表示的是（）。",
        "options": [
          "A. 工商企业",
          "B. 教育机构",
          "C. 非盈利组织",
          "D. 政府部门"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 49,
        "type": "single",
        "question": "域名中的顶级域（TLD）是指（）。",
        "options": [
          "A. 域名的第一个部分，用于标识网站所属的国家或地区",
          "B. 域名的最后一部分，通常表示域名的类型或性质",
          "C. 域名的中间部分，用于指定特定的网站",
          "D. 域名中的任意部分，可以是字母、数字或其他字符的组合"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 50,
        "type": "single",
        "question": "域名解析就是将好记的域名解析成（），然后在此地址的主机上将一个子目录与域名绑定。",
        "options": [
          "A. MAC地址",
          "B. 物理地址",
          "C. 逻辑地址",
          "D. IP地址"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 51,
        "type": "single",
        "question": "在域名解析中，DNS缓存是（）。",
        "options": [
          "A. 域名服务器的备份副本",
          "B. 域名的注册记录",
          "C. 临时存储的域名解析结果",
          "D. 域名的所有者信息"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 52,
        "type": "single",
        "question": "域名的注册步骤不包括（）。",
        "options": [
          "A. 选择注册商网站",
          "B. 选域名",
          "C. 准备身份证或企业营业执照",
          "D. 向客户收款"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 53,
        "type": "single",
        "question": "DNS服务包含了正向解析和（）解析。",
        "options": [
          "A. 网页",
          "B. 反向",
          "C. 同步",
          "D. 异步"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 54,
        "type": "single",
        "question": "对数据进行备份是为了保证数据的一致性和（）性，消除系统使用者和操作者的后顾之忧。",
        "options": [
          "A. 异步",
          "B. 破坏",
          "C. 完整",
          "D. 零碎"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 55,
        "type": "single",
        "question": "常用的数据备份方式包括完全备份、增量备份和（）备份。",
        "options": [
          "A. 差异",
          "B. 正常",
          "C. 减量",
          "D. 零碎"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 56,
        "type": "single",
        "question": "Windows数据备份通过Windows服务器系统内置的（）功能来对服务器中的重要数据信息进行自动备份的。",
        "options": [
          "A. 任务计划",
          "B. 计算机管理",
          "C. 计算机计划",
          "D. 电池计划"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 57,
        "type": "single",
        "question": "增量备份和差异备份的主要区别在于（）。",
        "options": [
          "A. 增量备份备份的数据更多",
          "B. 差异备份备份的数据更多",
          "C. 增量备份只备份与上次完全备份之后更改的数据",
          "D. 差异备份只备份与上次完全备份之后新增的数据"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 58,
        "type": "single",
        "question": "常用数据备份软件不包括（）。",
        "options": [
          "A. Ghost",
          "B. driveimage",
          "C. driver2driver",
          "D. Winstone"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 59,
        "type": "single",
        "question": "以下哪个工具可以用于在Linux系统中进行数据备份和恢复操作?（）",
        "options": [
          "A. Time Machine",
          "B. acronis True Image",
          "C. rsync",
          "D. Windows backup and Restore"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 60,
        "type": "single",
        "question": "网络管理的5大功能域是（）。",
        "options": [
          "A. 配置管理、故障管理、计费管理、性能管理和安全管理",
          "B. 配置管理、故障管理、计费管理、带宽管理和安全管理",
          "C. 配置管理、故障管理、成本管理、性能管理和安全管理",
          "D. 配置管理、用户管理、计费管理、性能管理和安全管理"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 61,
        "type": "single",
        "question": "ICMP协议属于 TCP/IP 网络中的网络层协议，ICMP报文封装在（）协议数据单元中传送，在网络中起着差错和拥塞控制的作用。",
        "options": [
          "A. IP",
          "B. TCP",
          "C. UDP",
          "D. PPP"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 62,
        "type": "single",
        "question": "ICMP测试的目的是什么（）。",
        "options": [
          "A. 确定消息是否能够到达目的地，如果不能，则确定可能的原因",
          "B. 保证网络中的所有活动都是受检测的",
          "C. 确定网络是否是跟据模型建立的",
          "D. 确定网络是处于控制模型还是用户模型"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 63,
        "type": "single",
        "question": "在（）输入“ping”命令，可进行网络连通测试。",
        "options": [
          "A. 资源管理器中",
          "B. 命令提示符后",
          "C. VB编辑器中",
          "D. Word文档中"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 64,
        "type": "single",
        "question": "在 Windows 中，tracert 命令的-h 选项表示（）。",
        "options": [
          "A. 指定主机名",
          "B. 指定最大跳步数",
          "C. 指定到达目标主机的时间",
          "D. 指定源路由"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 65,
        "type": "single",
        "question": "ISO定义的网络管理功能中，（）包括的功能有风险分析、网管系统保护等。",
        "options": [
          "A. 配置管理",
          "B. 故障管理",
          "C. 性能管理",
          "D. 安全管理"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 66,
        "type": "single",
        "question": "某客户端采用 ping 命令检测网络连接故障时，发现可以 ping 通 127.0.0.1 及本机的IP地址，但无法 ping 通同一网段内其他工作正常的计算机的 IP 地址。该客户端的故障可能是（）。",
        "options": [
          "A. TCP/IP 协议不能正常工作",
          "B. 本机网卡不能正常工作",
          "C. 本机网络接口故障",
          "D. DNS 服务器地址设置错误"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 67,
        "type": "single",
        "question": "下列哪项是物理层故障的例子?（）。",
        "options": [
          "A. 封装不正确",
          "B. STP 配置不正确",
          "C. ARP 映射不正确",
          "D. 时钟频率不正确"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 68,
        "type": "single",
        "question": "广播流量过多一般表明（）出了问题。",
        "options": [
          "A. 物理层",
          "B. 数据链路层",
          "C. 网络层",
          "D. 传输层"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 69,
        "type": "single",
        "question": "流量控制实际上是对（）的控制。",
        "options": [
          "A. 发送方的数据流量",
          "B. 接收方的数据流量",
          "C. 发送、接收方的数据流量",
          "D. 链路上任意两结点的数据流量"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 70,
        "type": "single",
        "question": "会话劫持的这种攻击形式破坏了下列哪一项内容（）。",
        "options": [
          "A. 网络信息的抗抵赖性",
          "B. 网络信息的保密性",
          "C. 网络服务的可用性",
          "D. 网络信息的完整性"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 71,
        "type": "single",
        "question": "在下列这些网络攻击模型的攻击过程中，端口扫描攻击一般属于哪一项（）。",
        "options": [
          "A. 信息收集",
          "B. 弱点挖掘",
          "C. 攻击实施",
          "D. 痕迹清除"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 72,
        "type": "single",
        "question": "在网络攻击模型中，下列哪种攻击过程不属于预攻击阶段（）。",
        "options": [
          "A. 身份隐藏",
          "B. 开辟后门",
          "C. 弱点挖掘",
          "D. 信息收集"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 73,
        "type": "single",
        "question": "网络中存在各种各样的安全威胁，一个安全的系统不仅要从检测网络攻击行为出发，更应该设计一定的防御措施以抵抗入侵行为。防火墙属于网络安全技术中的静态安全技术，对于动态发展的网络中的安全问题无法彻底解决。这就需要引入（）。",
        "options": [
          "A. 身份验证系统",
          "B. 智能识别系统",
          "C. 入侵检测系统",
          "D. 网络防御系统"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 74,
        "type": "single",
        "question": "下列关于端口扫描器功能叙述错误的是（）。",
        "options": [
          "A. 发现一个主机或网络的能力",
          "B. 一旦发现一台主机，有发现什么服务正运行在这台主机上的能力",
          "C. 通过测试这些服务，发现漏洞的能力",
          "D. 能够扫描且不被发现的能力"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 75,
        "type": "single",
        "question": "下面软件产品中，（）是属于漏洞扫描器。",
        "options": [
          "A. X-Scan",
          "B. Norton antiVirus",
          "C. Snort",
          "D. WEB"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 76,
        "type": "single",
        "question": "如果一个网站存在CSRF漏洞，可以通过CSRF漏洞做下面哪些事情（）。",
        "options": [
          "A. 获取网站用户注册的个人资料信息",
          "B. 修改网站用户注册的个人资料信息",
          "C. 冒用网站用户的身份发布信息",
          "D. 以上都可以"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 77,
        "type": "single",
        "question": "John the Ripper工具的Incremental crack Mode模式是（）。",
        "options": [
          "A. 可以选择使用规则及不使用不规则的字典档破解模式",
          "B. 用最简单的变形来进行破解的工作，速度最快",
          "C. 暴力破解，尝试所有可能的字符组合",
          "D. 可以定义用户自己的破解模式"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 78,
        "type": "single",
        "question": "关于缓冲区溢出的原理错误的是（）。",
        "options": [
          "A. 缓冲区溢出通常是由编程疏忽引起的",
          "B. 如果缓冲区被写满，而程序没有去检查缓冲区边界，也没有停止接收数据，这时缓冲区溢出就会发生",
          "C. 一小部分数据或者一套指令的溢出就可能导致一个程序或者操作系统崩溃",
          "D. C语言具有检查边界的功能"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 79,
        "type": "single",
        "question": "下列关于拒绝服务攻击说法错误的是（）。",
        "options": [
          "A. 来自网络的拒绝服务攻击可以分为停止服务和消耗资源两类",
          "B. 拒绝服务攻击的目的是利用各种攻击技术使服务器或者主机等拒绝为合法用户提供服务",
          "C. 停止服务意味着毁坏或者关闭用户想访问的特定的服务",
          "D. 停止服务是目前最流行的拒绝服务攻击方式"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 80,
        "type": "single",
        "question": "针对软件的拒绝服务攻击是通过消耗系统资源使软件无法响应正常请求的一种攻击方式，在软件开发时分析拒绝服务攻击的威胁，以下哪个不是需要考虑的攻击方式（）。",
        "options": [
          "A. 攻击者利用软件存在逻辑错误，通过发送某种类型数据导致运算进入死循环，CPU资源占用始终100%",
          "B. 攻击者利用软件脚本使用多重嵌套查询，在数据量大时会导致查询效率低，通过发送大量的查询导致数据库响应缓慢",
          "C. 攻击者利用软件不自动释放连接的问题，通过发送大量连接消耗软件并发连接数，导致并发连接数耗尽而无法访问",
          "D. 攻击者买通了IDC人员，将某软件运行服务器的网线拔掉导致无法访问"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 81,
        "type": "single",
        "question": "关于web安全及其威胁防护技术的描述，不正确的是（）。",
        "options": [
          "A. 当前web面临的主要威胁有可信任站点的漏洞、浏览器及其插件的漏洞、网络钓鱼、僵尸网络等",
          "B. web防篡改技术包括单点登录、时间轮询、事件触发等",
          "C. web内容安全管理技术包括电子邮件过滤、网页过滤、反间谍软件等",
          "D. web访问控制的主要任务是保证网络资源不被非法访问者访问"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 82,
        "type": "single",
        "question": "N-Stealth不包含哪个插件（）。",
        "options": [
          "A. dara",
          "B. Retina",
          "C. SAINT",
          "D. ISS Internet Scanner"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 83,
        "type": "single",
        "question": "关于恶意代码，以下说法错误的是（）。",
        "options": [
          "A. 从传播范围来看，恶意代码呈现多平台传播的特征",
          "B. 按照运行平台，恶意代码可以分为网络传播型病毒、文件传播型病毒",
          "C. 不感染的依附性恶意代码无法单独执行",
          "D. 为了对目标系统实施攻击和破坏活动，传播途径是恶意代码赖以生存和繁殖的基本条件"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 84,
        "type": "single",
        "question": "以下关于软件逆向工程说法错误的是（）。",
        "options": [
          "A. 恶意软件开发者利用逆向工程定位操作系统和应用程序的漏洞，并利用该漏洞开发恶意软件",
          "B. 防病毒软件开发者利用逆向工程分析恶意软件的步骤、行为和对系统造成的破坏，进而提出防范机制",
          "C. 很多应用程序使用公有加解密算法，可利用逆向工程分析其算法的实现细节和缺陷",
          "D. 如果某些软件进行了特殊的设计或具备难以实现的功能，其竞争者可能通过对组件的逆向"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 85,
        "type": "single",
        "question": "恶意代码的攻击模型中（）是恶意代码实现其恶意目的的必要条件。",
        "options": [
          "A. 潜伏",
          "B. 维持或提升现有特权",
          "C. 破坏",
          "D. 侵入系统"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 86,
        "type": "single",
        "question": "恶意代码的生存技术中的模糊变换技术是（）。",
        "options": [
          "A. 自身保护",
          "B. 多态，难以进行基于特征的识别",
          "C. 简单实现恶意代码的组合和变化",
          "D. 提高自身的伪装能力和防破译能力，增加检测和清除的难度"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 87,
        "type": "single",
        "question": "哪一项不是特洛伊木马所窃取的信息（）。",
        "options": [
          "A. 计算机名字",
          "B. 硬件信息",
          "C. QQ用户密码",
          "D. 系统文件"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 88,
        "type": "single",
        "question": "当进行分析校验的时候，你通常会在什么情况下发现一个被木马感染了的文件?（）",
        "options": [
          "A. 在可执行文件的末尾有扩展名为.TRJ的文件",
          "B. 文件的尺寸变大或者变小，或者时间戳错误",
          "C. 文件被删除",
          "D. 文件已经具备了一个.SRC扩展名"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 89,
        "type": "single",
        "question": "下列关于“特洛伊木马”病毒的叙述中不正确的是（）。",
        "options": [
          "A. 特洛伊木马程序一般分为服务端和客户端",
          "B. 特洛伊木马的隐蔽性是其最重要的特征",
          "C. 特洛伊木马必须是自动启动和运行的程序",
          "D. 特洛伊木马以感染其它程序为目的，通过网络进行主动复制传播"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 90,
        "type": "single",
        "question": "特洛伊木马有两大类型，以下哪一种是属于可以控制?（）",
        "options": [
          "A. universale",
          "B. transitive",
          "C. 两种都是",
          "D. 两种都不是"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 91,
        "type": "single",
        "question": "按计算机病毒入侵系统途径可将计算机病毒分为（）。",
        "options": [
          "A. 蠕虫病毒、脚本病毒、外壳病毒、入侵病毒",
          "B. 源码病毒、入侵病毒、操作系统和外壳病毒",
          "C. 操作系统病毒、木马病毒、脚本病毒、图片病毒",
          "D. 入侵病毒、脚本病毒、操作系统病毒、蠕虫病毒"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 92,
        "type": "single",
        "question": "僵尸网络botnet有（）地执行相同的恶意行为的特点。",
        "options": [
          "A. 一对多",
          "B. 多对一",
          "C. 多对多",
          "D. 一对一"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 93,
        "type": "single",
        "question": "僵尸网络 botnet 概念中的bot程序是 robot 的缩写，是指（）。",
        "options": [
          "A. 提供攻击的应用",
          "B. 提供IRC聊天服务的服务器",
          "C. 实现恶意控制功能的程序代码",
          "D. 控制和通信的中心服务器"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 94,
        "type": "single",
        "question": "不属于教唆犯罪、传授犯罪手段和方法信息的是（）。",
        "options": [
          "A. 利用僵尸网络进行DDoS攻击",
          "B. 教授制作钓鱼网站",
          "C. 教授利用感冒药制造冰毒",
          "D. 在微信群内发信教唆去市政府请愿"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 95,
        "type": "single",
        "question": "网络安全事件的分类有（）。",
        "options": [
          "A. 5种",
          "B. 6种",
          "C. 7种",
          "D. 8种"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 96,
        "type": "single",
        "question": "对于网络安全事件分类中，错误的是（）。",
        "options": [
          "A. 有害程序事件",
          "B. 网络攻击事件",
          "C. 信息破坏事件",
          "D. 物理攻击事件"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 97,
        "type": "single",
        "question": "网络安全事件分类中的网络攻击事件中有（）。",
        "options": [
          "A. 后门攻击事件、漏洞攻击事件",
          "B. 蠕虫事件、特洛伊事件",
          "C. 信息假冒事件、信息泄露事件",
          "D. 混合程序攻击事件、网页内嵌事件"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 98,
        "type": "single",
        "question": "网络安全事件中的特洛伊事件属于（）。",
        "options": [
          "A. 信息内容安全事件",
          "B. 有害程序事件",
          "C. 灾害性事件",
          "D. 其他事件"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 99,
        "type": "single",
        "question": "信息篡改事件、信息假冒事件、信息泄露事件、信息窃取事件、信息丢失事件和其他信息破坏事件是属于（）。",
        "options": [
          "A. 信息内容安全事件",
          "B. 信息破坏事件",
          "C. 灾害性事件",
          "D. 其他事件"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 100,
        "type": "single",
        "question": "信息内容安全事件是指（）。",
        "options": [
          "A. 指蓄意制造、传播计算机病毒，或是因受到计算机病毒影响而导致的事件",
          "B. 不能归类的网络安全事件",
          "C. 通过网络传播法律法规禁止信息，组织非法串联、煽动集会游行或炒作敏感问题并危害国家安全、社会稳定和公众利益的事件",
          "D. 信息篡改事件、信息假冒事件、信息泄露事件、信息窃取事件、信息丢失事件和其他信息破坏事件"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 101,
        "type": "single",
        "question": "网络运营者采取监测、记录网络运行状态和网络安全事件的日志信息不少于（）。",
        "options": [
          "A. 1个月",
          "B. 3个月",
          "C. 6个月",
          "D. 1年"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 102,
        "type": "single",
        "question": "发生网络安全事件(事故)在第一时间报告公安机关的同时，立即启动应急处置方案，开展（）工作。",
        "options": [
          "A. 保护对象重要性评估",
          "B. 应急处置",
          "C. 预警分级评估",
          "D. 损害程度评估"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 103,
        "type": "single",
        "question": "网络安全事件分级总共有（）。",
        "options": [
          "A. 1级",
          "B. 2级",
          "C. 3级",
          "D. 4级"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 104,
        "type": "single",
        "question": "网络安全事件分级中的特别重大事件为（）。",
        "options": [
          "A. Ⅰ级",
          "B. Ⅱ级",
          "C. Ⅲ级",
          "D. Ⅳ级"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 105,
        "type": "single",
        "question": "下列为较大网络安全事件的是（）。",
        "options": [
          "A. 其他对社会秩序、经济建设和公众利益构成严重威胁、造成严重影响的",
          "B. 国家秘密信息、重要敏感信息和关键数据丢失或被窃取、篡改、假冒，对国家安全和社会稳定构成严重威胁",
          "C. 其他对社会秩序、经济建设和公众利益构成较严重威胁、造成较严重影响的",
          "D. 重要网络和信息系统遭受严重的系统损失，造成系统长时间中断或局部瘫痪，业务处理能力受到极大影响"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 106,
        "type": "single",
        "question": "信息安全事件对社会所造成影响的范围和程度称社会影响，可以划分为（）。",
        "options": [
          "A. 特别重大的社会影响",
          "B. 重大的社会影响",
          "C. 较大的社会影响",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 107,
        "type": "single",
        "question": "关于信息安全事件分级，对于事发组织是可承受的事件属于（）。",
        "options": [
          "A. 特别重大事件",
          "B. 一般事件",
          "C. 较大事件",
          "D. 重大事件"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 108,
        "type": "single",
        "question": "关于预警的响应与处置，下列说法错误的是（）。",
        "options": [
          "A. 当网络安全威胁情况消除或威胁达不到黄色预警级别，预警发布机构应及时解除预警",
          "B. 预警发布机构根据网络安全事件或威胁的动态变化，及时发布预警的升级或降级信息",
          "C. 当可能对网络与信息系统保护对象产生特别严重的损害时，网络与信息系统的主管和运营部门应及时向单位负责人和信息安全第一责任人汇报",
          "D. 网络与信息系统的主管和运营部门接到网络安全预警后，应分析、研判相关事件或威胁对自身网络安全保护对象可能造成损害的程度"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 109,
        "type": "single",
        "question": "网络运营者应当制定（），及时处置系统漏洞、计算机病毒、网络攻击、网络侵入等安全风险。",
        "options": [
          "A. 网络安全事件应急演练方案",
          "B. 网络安全事件应急预案",
          "C. 网络安全事件补救措施",
          "D. 网络安全事件应急处置措施"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 110,
        "type": "multiple",
        "question": "国家采取措施，（）来源于中华人民共和国境内外的网络安全风险和威胁，保护关键信息基础设施免受攻击、侵入、干扰和破坏。",
        "options": [
          "A. 监测",
          "B. B、防御",
          "C. C、处置",
          "D. D、隔离"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 111,
        "type": "multiple",
        "question": "属于安全闭环组成部分的是（）。",
        "options": [
          "A. 检测",
          "B. B、响应",
          "C. C、防护",
          "D. D、预警"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 112,
        "type": "multiple",
        "question": "系统等保定级主要包括以下几个步骤:（）。",
        "options": [
          "A. 系统识别和描述",
          "B. B、信息系统划分",
          "C. C、系统的运行维护",
          "D. D、安全等级确定"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          3
        ]
      },
      {
        "id": 113,
        "type": "multiple",
        "question": "《危险化学品安全管理条例》（国务院令第491号）的目标:（）。",
        "options": [
          "A. 加强危险化学品的安全管理",
          "B. B、预防和减少危险化学品事故",
          "C. C、保障人民群众生命财产安全",
          "D. D、保护环境"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 114,
        "type": "multiple",
        "question": "根据《中国南方电网有限责任公司IT服务管理办法（2014年）》，IT服务管理事件经理职责:（）。",
        "options": [
          "A. 负责事件解决过程中的协调和监控",
          "B. B、负责事件升级的判断与执行",
          "C. C、负责与其它流程经理的沟通与协调",
          "D. D、负责收集、分析事件数据，发现潜在问题"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 115,
        "type": "multiple",
        "question": "逻辑强隔离装置部署在应用服务器与数据库服务器之间，实现（）功能。",
        "options": [
          "A. 访问控制",
          "B. B、网络强隔离",
          "C. C、地址绑定",
          "D. D、防SQL注入攻击"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 116,
        "type": "multiple",
        "question": "物联网工程师证书是根据国家工信部门要求颁发的一类物联网专业领域下工业和信息化领域人才证书，除物联网工程师外，还有哪些方向（）。",
        "options": [
          "A. 节能环保工程师",
          "B. B、物联网系统工程师",
          "C. C、智能电网工程师",
          "D. D、智能物流工程师"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 117,
        "type": "multiple",
        "question": "数据备份系统由哪几部分组成:（）。",
        "options": [
          "A. 备份服务器",
          "B. B、备份网络",
          "C. C、备份设备",
          "D. D、备份软件",
          "E. E、磁盘阵列"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 118,
        "type": "multiple",
        "question": "计算机中通常使用的三种数据单位包括（）。",
        "options": [
          "A. 位",
          "B. B、编码",
          "C. C、字",
          "D. D、字节",
          "E. E、字段"
        ],
        "analysis": "",
        "answer": [
          0,
          2,
          3
        ]
      },
      {
        "id": 119,
        "type": "multiple",
        "question": "关于“心脏出血”漏洞的阐述正确的是（）。",
        "options": [
          "A. 通过读取网络服务器内存，攻击者可以访问敏感数据",
          "B. B、该病毒可使用户心脏出血",
          "C. C、心脏出血漏洞是“灾难性的”",
          "D. D、“心脏出血”漏洞的危险性在于，它要比一般的漏洞潜伏得更深"
        ],
        "analysis": "",
        "answer": [
          0,
          2,
          3
        ]
      },
      {
        "id": 120,
        "type": "multiple",
        "question": "中间件的优势特点是（）。",
        "options": [
          "A. 面向程序设计人员",
          "B. B、缩短应用程序开发周期",
          "C. C、节约开发成本",
          "D. D、减少系统初期建设成本"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 121,
        "type": "judge",
        "question": "TCP代理是指我们的FW部署在客户端和服务器中间，当客户端向服务器发送的SYN报文经过FW时，FW代替服务器与客户端建立三次握手，它可以对SYN报文进行拦截。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 122,
        "type": "judge",
        "question": "UDP分片分为首分片和后续分片，Anti-DDoS设备只对首分片执行防御动作，如果首分片异常被丢弃了，后续分片因找不到首分片的会话会直接被后续转发流程丢弃。UDP首分片防御方法和UDP flood防御方法一致。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 123,
        "type": "judge",
        "question": "为保证数据库是可恢复的，登记日志文件时必须遵循两条规则:（1）登记的次序严格按照并发事务执行的时间次序。（2）必须先写日志文件，后写数据库。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 124,
        "type": "judge",
        "question": "增量备份在数据恢复时必须依赖上一次完全备份和上一次的增量备份才能对数据进行完整恢复，恢复时数据重构较完全备份慢，恢复窗口更大。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 125,
        "type": "judge",
        "question": "网络安全事件的应急响应流程中，首先应进行的是事件检测与报告，而非直接关闭受影响系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 126,
        "type": "judge",
        "question": "零信任架构的核心思想是“永不信任，始终验证”，因此不需要区分内网和外网资源的访问控制策略。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 127,
        "type": "judge",
        "question": "区块链技术的去中心化特性使其无法被篡改，因此基于区块链存储的敏感数据无需额外加密保护。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 128,
        "type": "judge",
        "question": "物联网设备由于资源受限，通常无法运行复杂的安全软件，因此更容易成为网络攻击的目标。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 129,
        "type": "judge",
        "question": "跨站请求伪造（CSRF）攻击的核心是利用用户已认证的会话，因此关闭浏览器会话即可完全防范该类攻击。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 130,
        "type": "judge",
        "question": "安全审计日志应至少保留6个月，以便在发生安全事件时进行溯源分析。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 131,
        "type": "judge",
        "question": "采用HTTPS协议传输数据后，所有传输内容均无法被截取，因此无需担心数据泄露风险。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 132,
        "type": "judge",
        "question": "服务器虚拟化技术会增加网络攻击面，因为多个虚拟机共享同一物理硬件资源，一个虚拟机被攻破可能影响其他虚拟机。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 133,
        "type": "judge",
        "question": "弱口令攻击属于暴力破解的一种，因此启用账户锁定策略（如输错5次锁定）可有效防范。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 134,
        "type": "judge",
        "question": "数据库加密仅需对敏感字段（如密码、身份证号）进行加密，普通字段无需加密，以提高查询效率。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 135,
        "type": "judge",
        "question": "无线局域网的WPS功能虽然方便用户快速连接，但存在安全漏洞，可能导致密码被破解，因此不建议启用。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 136,
        "type": "judge",
        "question": "入侵防御系统（IPS）工作在串联模式，能够实时阻断攻击流量，而入侵检测系统（IDS）工作在旁路模式，仅能报警无法阻断。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 137,
        "type": "judge",
        "question": "系统漏洞分为高危、中危、低危三个级别，仅需修复高危漏洞即可保证系统安全。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 138,
        "type": "judge",
        "question": "电子邮件的DKIM签名机制可验证邮件发送者的身份，防止邮件被伪造，因此无需再启用SPF机制。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 139,
        "type": "judge",
        "question": "终端安全管理中，禁止外接USB设备可完全防范移动存储介质带来的病毒传播风险。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 140,
        "type": "judge",
        "question": "网络地址转换（NAT）不仅能实现私网地址与公网地址的转换，还能隐藏内部网络结构，提高网络安全性。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 141,
        "type": "judge",
        "question": "云计算环境中，租户的数据存储在共享的云服务器上，因此云服务商的管理员可以随意访问租户数据。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 142,
        "type": "judge",
        "question": "数字证书的有效期届满后，仍可继续使用，只需重新下载安装即可。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 143,
        "type": "judge",
        "question": "脚本病毒主要通过网页脚本、邮件脚本等方式传播，因此禁用浏览器的JavaScript功能可有效防范。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 144,
        "type": "judge",
        "question": "网络安全等级保护二级以上的信息系统，必须每年进行一次等级测评。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 145,
        "type": "judge",
        "question": "访问控制列表（ACL）仅能基于IP地址、端口号进行访问控制，无法基于用户身份进行权限限制。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 146,
        "type": "judge",
        "question": "数据脱敏技术通过对敏感数据进行替换、加密等处理，使其在不影响业务使用的前提下无法识别原始信息，因此脱敏后的数据可直接用于测试环境。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 147,
        "type": "judge",
        "question": "僵尸网络攻击的主要目的是利用大量受控主机发起DDoS攻击，因此关闭主机的网络连接即可清除僵尸程序。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 148,
        "type": "judge",
        "question": "操作系统的默认账户（如Windows的administrator、Linux的root）如果不修改默认密码，会成为黑客攻击的重要突破口。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 149,
        "type": "judge",
        "question": "网页防篡改技术中的事件触发模式，是指实时监控网页文件的变化，一旦发现篡改立即恢复，比时间轮询模式更及时。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 150,
        "type": "judge",
        "question": "网络安全策略的制定无需考虑业务可用性，只需优先保证安全性。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 151,
        "type": "judge",
        "question": "移动设备的越狱（iOS）或root（Android）操作会破坏系统的安全机制，导致设备更容易被植入恶意软件。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 152,
        "type": "judge",
        "question": "安全漏洞扫描工具的扫描结果100%准确，因此扫描结果显示无漏洞的系统即为安全系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 153,
        "type": "judge",
        "question": "分布式拒绝服务（DDoS）攻击的流量通常来自大量合法的网络设备，因此难以通过防火墙直接阻断。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 154,
        "type": "judge",
        "question": "企业的网络安全培训仅需对技术人员进行，普通员工无需参与，因为他们不会接触核心系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 155,
        "type": "judge",
        "question": "数据备份的“3-2-1原则”是指:至少3份备份、2种不同介质、1份异地存放，该原则可有效防范数据丢失风险。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 156,
        "type": "judge",
        "question": "域名系统（DNS）的缓存中毒攻击是指攻击者篡改DNS服务器的缓存记录，将域名解析到恶意IP地址，因此定期清理DNS缓存可防范该攻击。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 157,
        "type": "judge",
        "question": "防火墙的默认策略应设置为“deny all”，即拒绝所有流量，再根据业务需求开放必要的端口和服务，这是更安全的配置方式。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 158,
        "type": "judge",
        "question": "计算机病毒必须依附于可执行文件才能传播，因此文本文件（如TXT）不会携带病毒。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 159,
        "type": "judge",
        "question": "身份认证中的双因素认证（2FA）结合了两种不同类型的认证因素（如密码+验证码），其安全性高于单因素认证。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 160,
        "type": "judge",
        "question": "网络安全事件发生后，应优先恢复业务运行，再进行事件溯源和原因分析，避免造成更大的业务损失。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      }
    ]
  },
  {
    "set_name": "2026考证顺序刷题1-S",
    "items": [
      {
        "id": 1,
        "type": "single",
        "question": "道德中所谓“应该”的意思是（）。",
        "options": [
          "A. 基于社会利益，按照社会公认的价值取向行事",
          "B. 考虑自己的利益需求，按照自己的想法行事",
          "C. 根据实际情况，不断对办事方式做出调整",
          "D. 从人际关系出发，凡是合乎人情的，就是应该的"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 2,
        "type": "single",
        "question": "道德中所谓“应该”的意思是（）。",
        "options": [
          "A. 基于社会利益，按照社会公认的价值取向行事",
          "B. 考虑自己的利益需求，按照自己的想法行事",
          "C. 根据实际情况，不断对办事方式做出调整",
          "D. 从人际关系出发，凡是合乎人情的，就是应该的"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 3,
        "type": "single",
        "question": "职业道德是（）。",
        "options": [
          "A. 从业人员的特定行为规范",
          "B. 企业上司的指导性要求",
          "C. 从业人员的自我约束",
          "D. 职业纪律方面的最低要求"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 4,
        "type": "single",
        "question": "下列关于为事公道的说法中，你认为错误的是（）。",
        "options": [
          "A. 为事公道就是要站在公正的立场上，按标准为事",
          "B. 为事公道不可能有明确的标准，只能因人而异",
          "C. 工作人员接待顾客时不以貌取人属于办事公道",
          "D. 办事公道不排斥折中处理的方式"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 5,
        "type": "single",
        "question": "下列关于职业道德的说法中，你认为正确的是（）。",
        "options": [
          "A. 没有职业道德的人干不好任何工作",
          "B. 有职业道德的人一定能够胜任工作",
          "C. 职业道德有时起作用，有时不起作用",
          "D. 职业道德无关紧要，可有可无"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 6,
        "type": "single",
        "question": "以下关于人员与职业道德关系的说法中，你认为正确的是（）。",
        "options": [
          "A. 每个从业人员都应该以德为先，做有职业道德的人",
          "B. 只有每个人都遵守职业道德，职业道德才会起作用",
          "C. 遵守职业道德与否，应该视具体情况而定",
          "D. 知识和技能是第一位的，职业道德则是第二位的"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 7,
        "type": "single",
        "question": "遵纪守法是指（）。",
        "options": [
          "A. 每个从业人员都要遵守纪律和法律，尤其要遵守职业纪律和与职业活动相关的法律法规",
          "B. 只遵守与所从事职业相关的法律法规",
          "C. 只遵守计量法",
          "D. 只遵守标准化法"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 8,
        "type": "single",
        "question": "要做到遵纪守法，对每个职工来说，必须做到（）。",
        "options": [
          "A. 有法可依",
          "B. 反对“管”“卡”“压”",
          "C. 反对自由主义",
          "D. 努力学法、知法、守法、用法"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 9,
        "type": "single",
        "question": "遵守职业纪律，不要求从业人员（）。",
        "options": [
          "A. 履行岗位职责",
          "B. 执行操作规程",
          "C. 可不遵守那些自己认为不合理的制度",
          "D. 处理好上下级关系"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 10,
        "type": "single",
        "question": "在程序的执行过程中，Cache和主存的地址映射是由（）完成的。",
        "options": [
          "A. 操作系统",
          "B. 程序员调度",
          "C. 硬件自动",
          "D. 用户软件"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 11,
        "type": "single",
        "question": "关于在I/O设备与主机间交换数据的叙述，（）是错误的。",
        "options": [
          "A. 中断方式下，CPU需要执行程序来实现数据传送任务",
          "B. 中断方式和DMA方式下，CPU与I/O设备都可同步工作",
          "C. 中断方式和DMA方式中，快速I/O设备更适合采用中断方式传递数据",
          "D. 若同时接到DMA请求和中断请求，CPU优先响应DMA请求"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 12,
        "type": "single",
        "question": "路由器是一种用于网络互连的计算机设备，但作为路由器，并不具备的是（）。",
        "options": [
          "A. 路由功能",
          "B. 多层交换",
          "C. 支持两种以上的子网协议",
          "D. 具有存储、转发、寻径功能"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 13,
        "type": "single",
        "question": "将二进制数11000001B转换为十进制数应该是（）。",
        "options": [
          "A. 193",
          "B. 189",
          "C. 187",
          "D. 195"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 14,
        "type": "single",
        "question": "下列软件中，属于应用软件的是（）。",
        "options": [
          "A. UNIX",
          "B. OFFICE",
          "C. LINUX",
          "D. WINDOWS"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 15,
        "type": "single",
        "question": "因争用资源产生死锁的必要条件是互斥、循环等待、不可抢占和（）。",
        "options": [
          "A. 请求与释放",
          "B. 释放与等待",
          "C. 释放与阻塞",
          "D. 保持与等待"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 16,
        "type": "single",
        "question": "在Linux系统中，（）目录用来存放用户密码信息。",
        "options": [
          "A. /boot",
          "B. /var",
          "C. /etc",
          "D. /dev"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 17,
        "type": "single",
        "question": "以下选项中，不属于Android系统的缺点的是（）。",
        "options": [
          "A. 版本过多，升级频繁",
          "B. 显著的开放性可以使其拥有更多的开发者",
          "C. 过分依赖开发商，缺少标准配置",
          "D. Android的开放性容易带来隐私危机"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 18,
        "type": "single",
        "question": "下列模式中，能够给出数据库物理存储结构与物理存取方法的是（）。",
        "options": [
          "A. 内模式",
          "B. 外模式",
          "C. 概念模式",
          "D. 逻辑模式"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 19,
        "type": "single",
        "question": "下列关于视图的说法错误的是（）。",
        "options": [
          "A. 视图是从一个或多个基本表导出的表，它是虚表",
          "B. 视图一经定义就可以和基本表一样被查询、删除和更新",
          "C. 某一用户可以定义若干个视图",
          "D. 视图可以用来定义新的视图"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 20,
        "type": "single",
        "question": "交换机工作在 OSI 七层中的 （）。",
        "options": [
          "A. 一层",
          "B. 二层",
          "C. 三层",
          "D. 三层以上"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 21,
        "type": "single",
        "question": "在 TCP/IP 协议中，A 类地址可用的网络地址是多少个（）。",
        "options": [
          "A. 125",
          "B. 126",
          "C. 127",
          "D. 128"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 22,
        "type": "single",
        "question": "应用程序 PING 发出的是（）报文。",
        "options": [
          "A. TCP 请求报文",
          "B. TCP 应答报文",
          "C. ICMP 请求报文",
          "D. ICMP 应答报文"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 23,
        "type": "single",
        "question": "如果要用电脑远程登录到另一台路由器，使用的应用程序为（）。",
        "options": [
          "A. HTTP",
          "B. PING",
          "C. TELNET",
          "D. TRACERT"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 24,
        "type": "single",
        "question": "当路由器的数据链路层收到报文的 MTU 大于该路由器将要发出接口的最大 MTU 时，采取的应对措施是（）。",
        "options": [
          "A. 丢掉该分组",
          "B. 将该分组分片",
          "C. 向源路由器发出请求，减小其分组大小",
          "D. 直接转发该分组"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 25,
        "type": "single",
        "question": "在以太网网络中（）可以将网络分成多个冲突域，但不能将网络分成多个广播域。",
        "options": [
          "A. 网桥",
          "B. 交换机",
          "C. 路由器",
          "D. 集线器"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 26,
        "type": "single",
        "question": "以下在局域网中进行网段分割时最好用的设备是（）。",
        "options": [
          "A. 路由器",
          "B. 交换机",
          "C. 网桥",
          "D. 集线器"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 27,
        "type": "single",
        "question": "下列关于 SSID 的说法错误的是（）。",
        "options": [
          "A. 一个 AP 上可以释放多个不同的 SSID",
          "B. 多个 AP 上可以释放相同的一个 SSID",
          "C. 一个 AP 上可以配置的 SSID 数目没有数量的限制",
          "D. 一个 AP 的两组天线上可以释放相同的 SSID 信号"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 28,
        "type": "single",
        "question": "以下关于静态路由说法错误的是（）。",
        "options": [
          "A. 通过网络管理员手动配置",
          "B. 路由器之间需要交互路由信息",
          "C. 不能自动适应网络拓扑的变化",
          "D. 对系统性能要求低"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 29,
        "type": "single",
        "question": "目前无线局域网主要以（）作传输媒介。",
        "options": [
          "A. 短波",
          "B. 微波",
          "C. 激光",
          "D. 红外线"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 30,
        "type": "single",
        "question": "对于利用软件缺陷进行的网络攻击，最有效的措施是（）。",
        "options": [
          "A. 及时更新补丁程序",
          "B. 安装防病毒软件并及时更新病毒库",
          "C. 安装防火墙",
          "D. 安装漏洞扫描软件"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 31,
        "type": "single",
        "question": "源主机ping 目的设备时，如果网络工作正常，则目的设备在接收到该报文后，将会向源主机回应 ICMP（）报文。",
        "options": [
          "A. Echo Request",
          "B. Echo Reply",
          "C. TTL-Exceeded",
          "D. Port-Unreachable"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 32,
        "type": "single",
        "question": "根据等级保护相关管理文件，等级保护对象的安全保护等级分为（）。",
        "options": [
          "A. 三级",
          "B. 四级",
          "C. 五级",
          "D. 六级"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 33,
        "type": "single",
        "question": "关于我国加强信息安全保障工作的主要原则，以下说法错误的是（）。",
        "options": [
          "A. 立足国情，以我为主，坚持技术与管理并重",
          "B. 正确处理安全和发展的关系，以安全保发展，在发展中求安全",
          "C. 统筹规划，突出重点，强化基础工作",
          "D. 全面提高信息安全防护能力，保护公众利益，维护国家安全"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 34,
        "type": "single",
        "question": "下面关于OSI 参考模型各层功能的说法错误的是（）。",
        "options": [
          "A. 物理层涉及在通信信道上传输的原始比特流，它定义了传输数据所需要的机械、电气功能及规程等特性",
          "B. 网络层决定传输报文的最佳路由，其关键问题是确定数据包从源端到目的端如何选择路由",
          "C. 传输层的基本功能是建立、维护虚电路，进行差错校验和流量控制",
          "D. 会话层负责数据格式处理、数据加密等"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 35,
        "type": "single",
        "question": "下面哪个协议不是 TCP/IP 中的网络层协议（）。",
        "options": [
          "A. IP",
          "B. RARP",
          "C. ARP",
          "D. UDP"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 36,
        "type": "single",
        "question": "将一个B类地址网段精确的分为512个子网那么子网掩码是（）。",
        "options": [
          "A. 255.255.255.252",
          "B. 255.255.255.128",
          "C. 255.255.0.0",
          "D. 255.255.255.192"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 37,
        "type": "single",
        "question": "IPv6的基本报头长度为（）Byte。",
        "options": [
          "A. 40",
          "B. 48",
          "C. 32",
          "D. 64"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 38,
        "type": "single",
        "question": "下列哪项最恰当地描述了建立 TCP 连接时“第一次握手”所做的工作（）。",
        "options": [
          "A. “连接发起方”向“接收方”发送一个 SYN-ACK 段",
          "B. “接收方”向“连接发起方”发送一个 SYN-ACK 段",
          "C. “连接发起方”向目标主机的 TCP 进程发送一个 SYN 段",
          "D. “接收方”向源主机的 TCP 进程发送一个 SYN 段作为应答"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 39,
        "type": "single",
        "question": "下列所述的哪个不是 ICMP 协议的功能（）。",
        "options": [
          "A. 报告 TCP 连接超时信息",
          "B. 重定向 UDP 消息",
          "C. 转发 SNMP 数据",
          "D. 查找子网掩码"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 40,
        "type": "single",
        "question": "当一台主机的IP地址是192.168.0.19，子网掩码是255.255.255.224，那么主机所在网络的网络号占ip地址的（）位。",
        "options": [
          "A. 24",
          "B. 25",
          "C. 27",
          "D. 28"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 41,
        "type": "single",
        "question": "企业在管理交换机配置权限时，对不同的账户权限进行分级管理，对于S5700以下选项中（）级权限的账户可以查看交换机的配置信息。",
        "options": [
          "A. 0",
          "B. 1",
          "C. 2",
          "D. 3"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 42,
        "type": "single",
        "question": "第一次对路由器进行配置的时候，一般使用（）登录路由器进行配置。",
        "options": [
          "A. 以太网口",
          "B. console口",
          "C. 环回口",
          "D. 串行端口"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 43,
        "type": "single",
        "question": "以下哪一项不是胖 AP 入网需要配置的参数（）。",
        "options": [
          "A. IP 地址",
          "B. DNS 服务器地址",
          "C. 默认网关地址",
          "D. 子网掩码"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 44,
        "type": "single",
        "question": "以下操作系统中，不属于网络操作系统的是（）。",
        "options": [
          "A. Linux",
          "B. UNIX",
          "C. Windows Server 2016",
          "D. DOS"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 45,
        "type": "single",
        "question": "Windows Server 2016操作系统的版本主要包括:Essentials、（）和Datacenter。",
        "options": [
          "A. 精简版",
          "B. Enterprise",
          "C. Standard",
          "D. Student"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 46,
        "type": "single",
        "question": "以下（）不是安全模型的实例。",
        "options": [
          "A. BLP模型",
          "B. US Wall模型",
          "C. Chinese Wall模型",
          "D. Biba模型"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 47,
        "type": "single",
        "question": "TCSEC（可信计算机系统评估标准）将网络安全分为（）个等级。",
        "options": [
          "A. 三",
          "B. 五",
          "C. 七",
          "D. 九"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 48,
        "type": "single",
        "question": "零信任网络（亦称零信任架构）模型对于企业网（）。",
        "options": [
          "A. 严格区分内外网",
          "B. 内外网有条件转换",
          "C. 无内网外网之分",
          "D. 内网优先外网"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 49,
        "type": "single",
        "question": "硬件安全技术，是指用硬件的手段保障计算机系统或网络系统中的信息安全的各种技术，以下哪种不属于硬件安全技术的有（）。",
        "options": [
          "A. 侧信道技术",
          "B. 硬件固件安全技术",
          "C. 无线传感器网络安全技术",
          "D. 数据备份技术"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 50,
        "type": "single",
        "question": "签名可以解决的鉴别问题包括（）、接收方篡改、第三方冒充。",
        "options": [
          "A. 发送者伪造",
          "B. 发送者否认",
          "C. 文件窃取",
          "D. 文件丢失"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 51,
        "type": "multiple",
        "question": "我国网络安全法律体系的特点包括（）。",
        "options": [
          "A. 以《网络安全法》为基本法统领，覆盖各个领域",
          "B. B、部门规章及以下文件占多数",
          "C. C、涉及多个管理部门",
          "D. D、内容涵盖网络安全管理、保障、责任各个方面"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 52,
        "type": "multiple",
        "question": "我国网络安全法律体系的特点包括（）。",
        "options": [
          "A. 以《网络安全法》为基本法统领，覆盖各个领域",
          "B. B、部门规章及以下文件占多数",
          "C. C、涉及多个管理部门",
          "D. D、内容涵盖网络安全管理、保障、责任各个方面"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 53,
        "type": "multiple",
        "question": "网络安全，是指通过采取必要措施，防范对网络的攻击、侵入、干扰、破坏和非法使用以及意外事故，使网络处于稳定可靠运行的状态，以及保障网络数据的（）的能力。",
        "options": [
          "A. 真实性",
          "B. B、完整性",
          "C. C、保密性",
          "D. D、可用性"
        ],
        "analysis": "",
        "answer": [
          1,
          2,
          3
        ]
      },
      {
        "id": 54,
        "type": "multiple",
        "question": "实施网络安全管理的关键成功因素包括（）。",
        "options": [
          "A. 向所有管理者和员工有效地推广安全意识",
          "B. B、向所有管理者、员工及其他伙伴方分发信息安全策略、指南和标准",
          "C. C、为网络安全管理活动提供资金支持",
          "D. D、提供适当的培训和教育"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 55,
        "type": "multiple",
        "question": "SQL注入攻击有可能产生（）危害。",
        "options": [
          "A. 网页被挂木马",
          "B. B、恶意篡改网页内容",
          "C. C、未经授权状况下操作数据库中的数据",
          "D. D、私自添加系统账号"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 56,
        "type": "multiple",
        "question": "以下属于弥补openSSL安全漏洞措施的是（）。",
        "options": [
          "A. 更新补丁",
          "B. B、更新X.509证书",
          "C. C、更换泄露的密钥",
          "D. D、杀毒"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 57,
        "type": "multiple",
        "question": "降低计算机病毒的影响范围就必须有效的控制计算机病毒的传播途径，下列属于计算机病毒传播途径的是（）。",
        "options": [
          "A. 通过文件共享传播",
          "B. B、通过电子邮件传播",
          "C. C、通过WEB网页传播",
          "D. D、通过系统漏洞传播"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 58,
        "type": "multiple",
        "question": "下列有关计算机病毒的说法中，正确的是（）。",
        "options": [
          "A. 计算机病毒可以通过WORD文档进行传播",
          "B. B、用杀毒软件将存储介质杀毒之后，该存储介质仍会再染病毒",
          "C. C、计算机病毒可以自动生成",
          "D. D、计算机病毒在某些条件下被激活之后，才开始起干扰和破坏作用"
        ],
        "analysis": "",
        "answer": [
          0,
          2,
          3
        ]
      },
      {
        "id": 59,
        "type": "multiple",
        "question": "对社会工程学攻击解释中意思贴近的是（）。",
        "options": [
          "A. 计算机存在逻辑错误",
          "B. B、人做出错误判断",
          "C. C、攻击者的计算机知识",
          "D. D、多种攻击技术复合"
        ],
        "analysis": "",
        "answer": [
          1,
          3
        ]
      },
      {
        "id": 60,
        "type": "multiple",
        "question": "在地址翻译原理中，防火墙根据什么来使用传输到相同的IP发送给内部不同的主机上（）。",
        "options": [
          "A. 防火墙记录的目的端口",
          "B. B、防火墙使用广播的方式发送",
          "C. C、防火墙根据每个包的时间顺序",
          "D. D、防火墙根据每个包的TCP序列号"
        ],
        "analysis": "",
        "answer": [
          0,
          3
        ]
      },
      {
        "id": 61,
        "type": "judge",
        "question": "国家鼓励开发网络数据安全保护和利用技术，促进公共图书馆资源开放，推动技术创新和经济社会发展。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 62,
        "type": "judge",
        "question": "国家鼓励开发网络数据安全保护和利用技术，促进公共图书馆资源开放，推动技术创新和经济社会发展。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 63,
        "type": "judge",
        "question": "任意翻阅同事文件资料的行为违反职业行为规范。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 64,
        "type": "judge",
        "question": "运算器是计算机对数据进行加工处理的部件，主要执行加、减、乘、除等算术运算。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 65,
        "type": "judge",
        "question": "快速格式化会检测是否有坏扇区。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 66,
        "type": "judge",
        "question": "计算机软件按其用途及实现的功能不同可分为系统软件和应用软件两大类。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 67,
        "type": "judge",
        "question": "计算机能直接识别汇编语言程序。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 68,
        "type": "judge",
        "question": "利用多媒体计算机可以进行观看VCD、听音乐、玩游戏、录放音等操作。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 69,
        "type": "judge",
        "question": "在Windows系统中，对于C盘上被删除的文件均在回收站中。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 70,
        "type": "judge",
        "question": "开放系统互连参考模型（OSI）中，网络层以数据包的形式传输数据流。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 71,
        "type": "judge",
        "question": "当IP报文在internet中运动的时候，每经过一台路由器，IP报文的TTL字段的值就被路由器减1，如果该字段的值被减为0，则这个报文就会被设备丢弃。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 72,
        "type": "judge",
        "question": "30.0.1是B类IP地址。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 73,
        "type": "judge",
        "question": "TCP分段中，有字段被称为序号sequence number，它代表着该TCP分段自身的序号，接受该分段的一方可以根据这个序号判断是否存在分段重收，或者漏收的情况。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 74,
        "type": "judge",
        "question": "UDP报文没有数据报文和控制报文之分，所有UDP报文都是UDP数据报文。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 75,
        "type": "judge",
        "question": "目前Internet上基于以太网的网络设备多数使用长地址类型的物理地址。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 76,
        "type": "judge",
        "question": "配置同一台交换机 VLANIF 接口的 IP 地址可以相同。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 77,
        "type": "judge",
        "question": "网络地址转换技术又称为NAT技术，它的基本作用是实现私网地址转换成公网地址，不能将公网地址转换成私网地址。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 78,
        "type": "judge",
        "question": "如果更改了 AP 射频的配置参数，必须重启 AP 后命令才能生效。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 79,
        "type": "judge",
        "question": "当客户端出现可以连接到无线网络，也可以访问外网，但网络速度较慢的情况时，可能是此位置的信号强度不够或者当前 AP 设备断电。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 80,
        "type": "judge",
        "question": "Linux 没有像 Windows那样的桌面系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      }
    ]
  },
  {
    "set_name": "2026考证单选题1-80",
    "items": [
      {
        "id": 1,
        "type": "single",
        "question": "道德中所谓“应该”的意思是（）。",
        "options": [
          "A. 基于社会利益，按照社会公认的价值取向行事",
          "B. 考虑自己的利益需求，按照自己的想法行事",
          "C. 根据实际情况，不断对办事方式做出调整",
          "D. 从人际关系出发，凡是合乎人情的，就是应该的"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 2,
        "type": "single",
        "question": "道德中所谓“应该”的意思是（）。",
        "options": [
          "A. 基于社会利益，按照社会公认的价值取向行事",
          "B. 考虑自己的利益需求，按照自己的想法行事",
          "C. 根据实际情况，不断对办事方式做出调整",
          "D. 从人际关系出发，凡是合乎人情的，就是应该的"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 3,
        "type": "single",
        "question": "职业道德是（）。",
        "options": [
          "A. 从业人员的特定行为规范",
          "B. 企业上司的指导性要求",
          "C. 从业人员的自我约束",
          "D. 职业纪律方面的最低要求"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 4,
        "type": "single",
        "question": "下列关于为事公道的说法中，你认为错误的是（）。",
        "options": [
          "A. 为事公道就是要站在公正的立场上，按标准为事",
          "B. 为事公道不可能有明确的标准，只能因人而异",
          "C. 工作人员接待顾客时不以貌取人属于办事公道",
          "D. 办事公道不排斥折中处理的方式"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 5,
        "type": "single",
        "question": "下列关于职业道德的说法中，你认为正确的是（）。",
        "options": [
          "A. 没有职业道德的人干不好任何工作",
          "B. 有职业道德的人一定能够胜任工作",
          "C. 职业道德有时起作用，有时不起作用",
          "D. 职业道德无关紧要，可有可无"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 6,
        "type": "single",
        "question": "以下关于人员与职业道德关系的说法中，你认为正确的是（）。",
        "options": [
          "A. 每个从业人员都应该以德为先，做有职业道德的人",
          "B. 只有每个人都遵守职业道德，职业道德才会起作用",
          "C. 遵守职业道德与否，应该视具体情况而定",
          "D. 知识和技能是第一位的，职业道德则是第二位的"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 7,
        "type": "single",
        "question": "遵纪守法是指（）。",
        "options": [
          "A. 每个从业人员都要遵守纪律和法律，尤其要遵守职业纪律和与职业活动相关的法律法规",
          "B. 只遵守与所从事职业相关的法律法规",
          "C. 只遵守计量法",
          "D. 只遵守标准化法"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 8,
        "type": "single",
        "question": "要做到遵纪守法，对每个职工来说，必须做到（）。",
        "options": [
          "A. 有法可依",
          "B. 反对“管”“卡”“压”",
          "C. 反对自由主义",
          "D. 努力学法、知法、守法、用法"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 9,
        "type": "single",
        "question": "遵守职业纪律，不要求从业人员（）。",
        "options": [
          "A. 履行岗位职责",
          "B. 执行操作规程",
          "C. 可不遵守那些自己认为不合理的制度",
          "D. 处理好上下级关系"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 10,
        "type": "single",
        "question": "在程序的执行过程中，Cache和主存的地址映射是由（）完成的。",
        "options": [
          "A. 操作系统",
          "B. 程序员调度",
          "C. 硬件自动",
          "D. 用户软件"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 11,
        "type": "single",
        "question": "关于在I/O设备与主机间交换数据的叙述，（）是错误的。",
        "options": [
          "A. 中断方式下，CPU需要执行程序来实现数据传送任务",
          "B. 中断方式和DMA方式下，CPU与I/O设备都可同步工作",
          "C. 中断方式和DMA方式中，快速I/O设备更适合采用中断方式传递数据",
          "D. 若同时接到DMA请求和中断请求，CPU优先响应DMA请求"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 12,
        "type": "single",
        "question": "路由器是一种用于网络互连的计算机设备，但作为路由器，并不具备的是（）。",
        "options": [
          "A. 路由功能",
          "B. 多层交换",
          "C. 支持两种以上的子网协议",
          "D. 具有存储、转发、寻径功能"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 13,
        "type": "single",
        "question": "将二进制数11000001B转换为十进制数应该是（）。",
        "options": [
          "A. 193",
          "B. 189",
          "C. 187",
          "D. 195"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 14,
        "type": "single",
        "question": "下列软件中，属于应用软件的是（）。",
        "options": [
          "A. UNIX",
          "B. OFFICE",
          "C. LINUX",
          "D. WINDOWS"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 15,
        "type": "single",
        "question": "因争用资源产生死锁的必要条件是互斥、循环等待、不可抢占和（）。",
        "options": [
          "A. 请求与释放",
          "B. 释放与等待",
          "C. 释放与阻塞",
          "D. 保持与等待"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 16,
        "type": "single",
        "question": "在Linux系统中，（）目录用来存放用户密码信息。",
        "options": [
          "A. /boot",
          "B. /var",
          "C. /etc",
          "D. /dev"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 17,
        "type": "single",
        "question": "以下选项中，不属于Android系统的缺点的是（）。",
        "options": [
          "A. 版本过多，升级频繁",
          "B. 显著的开放性可以使其拥有更多的开发者",
          "C. 过分依赖开发商，缺少标准配置",
          "D. Android的开放性容易带来隐私危机"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 18,
        "type": "single",
        "question": "下列模式中，能够给出数据库物理存储结构与物理存取方法的是（）。",
        "options": [
          "A. 内模式",
          "B. 外模式",
          "C. 概念模式",
          "D. 逻辑模式"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 19,
        "type": "single",
        "question": "下列关于视图的说法错误的是（）。",
        "options": [
          "A. 视图是从一个或多个基本表导出的表，它是虚表",
          "B. 视图一经定义就可以和基本表一样被查询、删除和更新",
          "C. 某一用户可以定义若干个视图",
          "D. 视图可以用来定义新的视图"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 20,
        "type": "single",
        "question": "交换机工作在 OSI 七层中的 （）。",
        "options": [
          "A. 一层",
          "B. 二层",
          "C. 三层",
          "D. 三层以上"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 21,
        "type": "single",
        "question": "在 TCP/IP 协议中，A 类地址可用的网络地址是多少个（）。",
        "options": [
          "A. 125",
          "B. 126",
          "C. 127",
          "D. 128"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 22,
        "type": "single",
        "question": "应用程序 PING 发出的是（）报文。",
        "options": [
          "A. TCP 请求报文",
          "B. TCP 应答报文",
          "C. ICMP 请求报文",
          "D. ICMP 应答报文"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 23,
        "type": "single",
        "question": "如果要用电脑远程登录到另一台路由器，使用的应用程序为（）。",
        "options": [
          "A. HTTP",
          "B. PING",
          "C. TELNET",
          "D. TRACERT"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 24,
        "type": "single",
        "question": "当路由器的数据链路层收到报文的 MTU 大于该路由器将要发出接口的最大 MTU 时，采取的应对措施是（）。",
        "options": [
          "A. 丢掉该分组",
          "B. 将该分组分片",
          "C. 向源路由器发出请求，减小其分组大小",
          "D. 直接转发该分组"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 25,
        "type": "single",
        "question": "在以太网网络中（）可以将网络分成多个冲突域，但不能将网络分成多个广播域。",
        "options": [
          "A. 网桥",
          "B. 交换机",
          "C. 路由器",
          "D. 集线器"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 26,
        "type": "single",
        "question": "以下在局域网中进行网段分割时最好用的设备是（）。",
        "options": [
          "A. 路由器",
          "B. 交换机",
          "C. 网桥",
          "D. 集线器"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 27,
        "type": "single",
        "question": "下列关于 SSID 的说法错误的是（）。",
        "options": [
          "A. 一个 AP 上可以释放多个不同的 SSID",
          "B. 多个 AP 上可以释放相同的一个 SSID",
          "C. 一个 AP 上可以配置的 SSID 数目没有数量的限制",
          "D. 一个 AP 的两组天线上可以释放相同的 SSID 信号"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 28,
        "type": "single",
        "question": "以下关于静态路由说法错误的是（）。",
        "options": [
          "A. 通过网络管理员手动配置",
          "B. 路由器之间需要交互路由信息",
          "C. 不能自动适应网络拓扑的变化",
          "D. 对系统性能要求低"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 29,
        "type": "single",
        "question": "目前无线局域网主要以（）作传输媒介。",
        "options": [
          "A. 短波",
          "B. 微波",
          "C. 激光",
          "D. 红外线"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 30,
        "type": "single",
        "question": "对于利用软件缺陷进行的网络攻击，最有效的措施是（）。",
        "options": [
          "A. 及时更新补丁程序",
          "B. 安装防病毒软件并及时更新病毒库",
          "C. 安装防火墙",
          "D. 安装漏洞扫描软件"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 31,
        "type": "single",
        "question": "源主机ping 目的设备时，如果网络工作正常，则目的设备在接收到该报文后，将会向源主机回应 ICMP（）报文。",
        "options": [
          "A. Echo Request",
          "B. Echo Reply",
          "C. TTL-Exceeded",
          "D. Port-Unreachable"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 32,
        "type": "single",
        "question": "根据等级保护相关管理文件，等级保护对象的安全保护等级分为（）。",
        "options": [
          "A. 三级",
          "B. 四级",
          "C. 五级",
          "D. 六级"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 33,
        "type": "single",
        "question": "关于我国加强信息安全保障工作的主要原则，以下说法错误的是（）。",
        "options": [
          "A. 立足国情，以我为主，坚持技术与管理并重",
          "B. 正确处理安全和发展的关系，以安全保发展，在发展中求安全",
          "C. 统筹规划，突出重点，强化基础工作",
          "D. 全面提高信息安全防护能力，保护公众利益，维护国家安全"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 34,
        "type": "single",
        "question": "下面关于OSI 参考模型各层功能的说法错误的是（）。",
        "options": [
          "A. 物理层涉及在通信信道上传输的原始比特流，它定义了传输数据所需要的机械、电气功能及规程等特性",
          "B. 网络层决定传输报文的最佳路由，其关键问题是确定数据包从源端到目的端如何选择路由",
          "C. 传输层的基本功能是建立、维护虚电路，进行差错校验和流量控制",
          "D. 会话层负责数据格式处理、数据加密等"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 35,
        "type": "single",
        "question": "下面哪个协议不是 TCP/IP 中的网络层协议（）。",
        "options": [
          "A. IP",
          "B. RARP",
          "C. ARP",
          "D. UDP"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 36,
        "type": "single",
        "question": "将一个B类地址网段精确的分为512个子网那么子网掩码是（）。",
        "options": [
          "A. 255.255.255.252",
          "B. 255.255.255.128",
          "C. 255.255.0.0",
          "D. 255.255.255.192"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 37,
        "type": "single",
        "question": "IPv6的基本报头长度为（）Byte。",
        "options": [
          "A. 40",
          "B. 48",
          "C. 32",
          "D. 64"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 38,
        "type": "single",
        "question": "下列哪项最恰当地描述了建立 TCP 连接时“第一次握手”所做的工作（）。",
        "options": [
          "A. “连接发起方”向“接收方”发送一个 SYN-ACK 段",
          "B. “接收方”向“连接发起方”发送一个 SYN-ACK 段",
          "C. “连接发起方”向目标主机的 TCP 进程发送一个 SYN 段",
          "D. “接收方”向源主机的 TCP 进程发送一个 SYN 段作为应答"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 39,
        "type": "single",
        "question": "下列所述的哪个不是 ICMP 协议的功能（）。",
        "options": [
          "A. 报告 TCP 连接超时信息",
          "B. 重定向 UDP 消息",
          "C. 转发 SNMP 数据",
          "D. 查找子网掩码"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 40,
        "type": "single",
        "question": "当一台主机的IP地址是192.168.0.19，子网掩码是255.255.255.224，那么主机所在网络的网络号占ip地址的（）位。",
        "options": [
          "A. 24",
          "B. 25",
          "C. 27",
          "D. 28"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 41,
        "type": "single",
        "question": "企业在管理交换机配置权限时，对不同的账户权限进行分级管理，对于S5700以下选项中（）级权限的账户可以查看交换机的配置信息。",
        "options": [
          "A. 0",
          "B. 1",
          "C. 2",
          "D. 3"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 42,
        "type": "single",
        "question": "第一次对路由器进行配置的时候，一般使用（）登录路由器进行配置。",
        "options": [
          "A. 以太网口",
          "B. console口",
          "C. 环回口",
          "D. 串行端口"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 43,
        "type": "single",
        "question": "以下哪一项不是胖 AP 入网需要配置的参数（）。",
        "options": [
          "A. IP 地址",
          "B. DNS 服务器地址",
          "C. 默认网关地址",
          "D. 子网掩码"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 44,
        "type": "single",
        "question": "以下操作系统中，不属于网络操作系统的是（）。",
        "options": [
          "A. Linux",
          "B. UNIX",
          "C. Windows Server 2016",
          "D. DOS"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 45,
        "type": "single",
        "question": "Windows Server 2016操作系统的版本主要包括:Essentials、（）和Datacenter。",
        "options": [
          "A. 精简版",
          "B. Enterprise",
          "C. Standard",
          "D. Student"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 46,
        "type": "single",
        "question": "以下（）不是安全模型的实例。",
        "options": [
          "A. BLP模型",
          "B. US Wall模型",
          "C. Chinese Wall模型",
          "D. Biba模型"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 47,
        "type": "single",
        "question": "TCSEC（可信计算机系统评估标准）将网络安全分为（）个等级。",
        "options": [
          "A. 三",
          "B. 五",
          "C. 七",
          "D. 九"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 48,
        "type": "single",
        "question": "零信任网络（亦称零信任架构）模型对于企业网（）。",
        "options": [
          "A. 严格区分内外网",
          "B. 内外网有条件转换",
          "C. 无内网外网之分",
          "D. 内网优先外网"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 49,
        "type": "single",
        "question": "硬件安全技术，是指用硬件的手段保障计算机系统或网络系统中的信息安全的各种技术，以下哪种不属于硬件安全技术的有（）。",
        "options": [
          "A. 侧信道技术",
          "B. 硬件固件安全技术",
          "C. 无线传感器网络安全技术",
          "D. 数据备份技术"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 50,
        "type": "single",
        "question": "签名可以解决的鉴别问题包括（）、接收方篡改、第三方冒充。",
        "options": [
          "A. 发送者伪造",
          "B. 发送者否认",
          "C. 文件窃取",
          "D. 文件丢失"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 51,
        "type": "single",
        "question": "下列关于安全审计的内容说法中错误的是（）。",
        "options": [
          "A. 应对网络系统中的网络设备运行情况、网络流量、用户行为等进行日志记录",
          "B. 审计记录应包括:事件的日期和时间、用户、事件类型、事件是否成功及其他与审计相关的信息",
          "C. 应能根据记录数据进行分析，并生成报表",
          "D. 为了节约存储空间，审计记录可以随意删除、修改或覆盖"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 52,
        "type": "single",
        "question": "最小权限的英文缩写是（）。",
        "options": [
          "A. PSAP",
          "B. PPP",
          "C. PSA",
          "D. POLP"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 53,
        "type": "single",
        "question": "按照通用标准规范，安全审计主要包含数据生成、事件选择、事件存储、自动响应、（）、审计复核6个主要功能模块。",
        "options": [
          "A. 审计选择",
          "B. 事件分析",
          "C. 审计分析",
          "D. 事件处理"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 54,
        "type": "single",
        "question": "合理利用linux的日志文件，可以即时了解系统的安全情况，下面（）不是日志文件。",
        "options": [
          "A. /etc/smb.conf",
          "B. /var/log/lastlog",
          "C. /var/log/secure",
          "D. /var/log/wtmp"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 55,
        "type": "single",
        "question": "在Windows操作系统安全配置中，以下不属于账号安全配置的是（）。",
        "options": [
          "A. 禁用guest账号",
          "B. 更改管理员缺省账号名称",
          "C. 锁定管理员账号",
          "D. 删除与工作无关的账号"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 56,
        "type": "single",
        "question": "关于密码技术，以下（）描述是错误的。",
        "options": [
          "A. 密码学包括密码编码学和密码分析学两门学科",
          "B. 对称密钥密码体制基本特征是发送方和接收方共享相同的密钥",
          "C. 密码体制的安全既依赖于对密钥的保密，又依赖于对算法的保密",
          "D. 对称密钥加密算法不易实现数字签名，限制了它的应用范围"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 57,
        "type": "single",
        "question": "SQL语言分别为交互式SQL和（）。",
        "options": [
          "A. 提示式SQL",
          "B. 多用户SQL",
          "C. 嵌入式SQL",
          "D. 解释式SQL"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 58,
        "type": "single",
        "question": "以下哪一项不是常见的将病毒植入主机的方式（）。",
        "options": [
          "A. 移动媒体",
          "B. 运行正版软件",
          "C. 访问网页",
          "D. 邮件附件"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 59,
        "type": "single",
        "question": "为了防止电子邮件中的恶意代码，应该由（）方式阅读电子邮件。",
        "options": [
          "A. 纯文本",
          "B. 网页",
          "C. 程序",
          "D. 会话"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 60,
        "type": "single",
        "question": "对于病毒，（）可以绕过一些杀毒软件的扫描，从而实现它作为病毒的一些入侵或破坏的一些特性。",
        "options": [
          "A. 压缩",
          "B. 脱壳",
          "C. 加壳",
          "D. 破壳"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 61,
        "type": "single",
        "question": "逆向工程是（）过程。",
        "options": [
          "A. 模型到代码",
          "B. 代码到模型",
          "C. 设计到实现",
          "D. 类图到包图"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 62,
        "type": "single",
        "question": "网络应用服务，是（），包括网站建设、虚拟主机、企业邮箱等服务。",
        "options": [
          "A. 互联网基础服务资讯提供平台",
          "B. 在网络环境中为客户端提供各种服务的专用计算机系统",
          "C. 为客户提供本地服务的程序",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 63,
        "type": "single",
        "question": "能够进行域名和与之相对应的IP地址转换的服务器是（）。",
        "options": [
          "A. VPN服务器",
          "B. WEB服务器",
          "C. DNS服务器",
          "D. DHCP服务器"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 64,
        "type": "single",
        "question": "关于DNS服务，下列说法正确的是（）。",
        "options": [
          "A. 是动态主机配置协议",
          "B. 是域名解析协议",
          "C. 是用于分配域名的",
          "D. 必须配合HTTP协议来使用"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 65,
        "type": "single",
        "question": "如果DNS安装成功，将在%systemroot%\\system32文件夹下自动创建一个名为（）的文件夹。",
        "options": [
          "A. 域名",
          "B. dns",
          "C. dnsmessage",
          "D. dnslog"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 66,
        "type": "single",
        "question": "DNS常见的威胁有（）。",
        "options": [
          "A. DNS放大攻击",
          "B. DNS缓存中毒",
          "C. 僵尸网络反向代理",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 67,
        "type": "single",
        "question": "面对DNS威胁可常用的防御方法有（）。",
        "options": [
          "A. 采用更严格的访问控制",
          "B. 部署零信任方案",
          "C. 检查/验证DNS记录",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 68,
        "type": "single",
        "question": "下面对WEB的说法错误的是（）。",
        "options": [
          "A. 是一种基于超文本和HTTP的、全球性的、静态交互的、跨平台的分布式图形信息系统",
          "B. 即全球广域网，也称为万维网",
          "C. 建立在Internet上的一种网络服务",
          "D. 为浏览者在Internet上查找和浏览信息提供了图形化的、易于访问的直观界面，其中的文档及超级链接将Internet上的信息节点组织成一个互为关联的网状结构"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 69,
        "type": "single",
        "question": "下列（）端口属于WEB服务的默认端口。",
        "options": [
          "A. 21",
          "B. 53",
          "C. 80",
          "D. 110"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 70,
        "type": "single",
        "question": "常见WEB攻击方法，不包括（）。",
        "options": [
          "A. 利用服务器配置漏洞",
          "B. 恶意代码上传下载",
          "C. 构造恶意输入（SQL注入攻击、命令注入攻击、跨站脚本攻击）",
          "D. 业务测试"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 71,
        "type": "single",
        "question": "在访问WEB站点时，为了防止第三方偷看传输的内容，我们可以采取的行动为（）。",
        "options": [
          "A. 将整个Internet划分成Internet、Intranet、可信、受限等不同区域",
          "B. 在主机浏览器中加载自己的证书",
          "C. 浏览站点前索要WEB站点的证书",
          "D. 通信中使用SSL技术"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 72,
        "type": "single",
        "question": "FTP的工作模式分主动模式和被动模式。主要是站在服务器的角度去看问题，被动模式下服务器开放TCP（）端口进行数据传输。",
        "options": [
          "A. 21",
          "B. 随机",
          "C. 80",
          "D. 20"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 73,
        "type": "single",
        "question": "在IIS中搭建FTP网站，下列说法错误的是（）。",
        "options": [
          "A. 基本访问方式是需要账号，但不需要密码登录的",
          "B. FTP的默认端口可以修改",
          "C. 访问FTP的权限可以设置读取和写入方式",
          "D. 身份验证可以采用匿名方式"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 74,
        "type": "single",
        "question": "FTP存在的漏洞不包括（）。",
        "options": [
          "A. 匿名身份验证",
          "B. 明文传输",
          "C. 不验证数据的完整性",
          "D. 基于用户名密码验证"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 75,
        "type": "single",
        "question": "在IIS里配置 FTP 服务，通过配置“FTP IPv4地址和域限制”，可以指定允许访问FTP站点的（）。",
        "options": [
          "A. 源端口号",
          "B. 目的端口号",
          "C. 源IP地址",
          "D. 目的IP地址"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 76,
        "type": "single",
        "question": "DHCP服务是基于（）协议。",
        "options": [
          "A. TCP",
          "B. UDP",
          "C. ICMP",
          "D. HTTP"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 77,
        "type": "single",
        "question": "配置DHCP服务中，下列说法正确的是（）。",
        "options": [
          "A. 可以配置保留的IP地址，与主机的MAC地址对应",
          "B. 分配一个IP地址池，必须配置排除地址",
          "C. 每个作用域可以配置的IP地址范围是256",
          "D. 只能配置一个作用域"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 78,
        "type": "single",
        "question": "DHCP饿死攻击的原理是（）。",
        "options": [
          "A. 当攻击者私自安装并运行DHCP Server 程序后，可以将自己伪装成DHCP Server",
          "B. 攻击者利用ARP机制，欺骗客户端把攻击者当成DHCP服务器，把发向DHCP服务器的流量发给攻击者;同理，攻击者欺骗DHCP服务器，把攻击者当成DHCP客户端，把发向DHCP客户端的流量发给攻击者",
          "C. 攻击者持续大量地向DHCP服务器申请IP地址，直到耗尽DHCP服务器地址池的IP地址，使DHCP服务器无法再给正常的主机分配IP地址",
          "D. 通过拦截正常的网络通信数据，并进行数据篡改和嗅探，而通信的双方却毫不知情"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 79,
        "type": "single",
        "question": "在DHCP服务配置完成后，手动在客户端获得TCP/IP信息，重新获得TCP/IP信息的命令是（）。",
        "options": [
          "A. ipconfig/release",
          "B. ipconfig/renew",
          "C. ipconfig/all",
          "D. nslookup"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 80,
        "type": "single",
        "question": "Linux的文件共享服务是（）。",
        "options": [
          "A. DNS",
          "B. FTP",
          "C. Samba",
          "D. DHCP"
        ],
        "analysis": "",
        "answer": 2
      }
    ]
  },
  {
    "set_name": "2026考证单选题81-160",
    "items": [
      {
        "id": 1,
        "type": "single",
        "question": "配置IPSec VPN实现数据的保密性，需选择安全协议（）。",
        "options": [
          "A. IKE",
          "B. AH",
          "C. ESP",
          "D. SSL"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 2,
        "type": "single",
        "question": "以下对于引入 VLAN 的二层交换机说法错误的是（）。",
        "options": [
          "A. 任何一个帧都不能从自己所属的 VLAN 被转发到其他的 VLAN 中",
          "B. 每一个 VLAN 都是一个独立的广播域",
          "C. 每一个人都不能随意地从网络上的一点，毫无控制地直接访问另一点的网络或监听整个网络上的帧",
          "D. VLAN 隔离了广播域，但并没有隔离各个 VLAN 之间的任何流量"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 3,
        "type": "single",
        "question": "查看以下交换机端口的配置后，选项中说法错误的是（）。",
        "options": [
          "A. interface GigabitEthernet 0/0/2",
          "B. port hybrid pvid vlan 100",
          "C. port hybrid tagged vlan 100",
          "D. port hybrid untagged vlan 200",
          "E. 如果数据帧携带的 vlan tag 为 200，则剥离该 tag 转发",
          "F. 如果收到不带 vlan tag 的数据帧，交换机要添加 vlan tag 100",
          "G. 接口类型为 hybrid",
          "H. 如果数据帧携带的 vlan tag 为 100，则剥离该 tag 转发"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 4,
        "type": "single",
        "question": "支持VLAN的以太网帧格式中，tag标签的长度值是（）字节。",
        "options": [
          "A. 2",
          "B. 8",
          "C. 4",
          "D. 6"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 5,
        "type": "single",
        "question": "以下对于手动负载均衡模式的链路聚合说法正确的是（）。",
        "options": [
          "A. 手工负载分担模式下所有活动接口都参与数据的转发，分担负载流量",
          "B. 手工负载分担模式下最多只能有 4 个活动端口",
          "C. 手工负载分担模式下链路两端的设备相互发送 LACP 报文",
          "D. 手工负载分担模式下可以配置活动端口的数量"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 6,
        "type": "single",
        "question": "配置IP地址和掩码需在VRP（）下进行。",
        "options": [
          "A. 用户视图",
          "B. 系统视图",
          "C. 接口视图",
          "D. 其他视图"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 7,
        "type": "single",
        "question": "标准的SNMP服务使用的端口号是（）。",
        "options": [
          "A. 161、162",
          "B. 160、161",
          "C. 162、163",
          "D. 160、163"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 8,
        "type": "single",
        "question": "某企业新购入路由器，作为网络管理员、初次配置该设备通常通过（）方式。",
        "options": [
          "A. SNMP",
          "B. FTP",
          "C. Console口登录",
          "D. Telnet"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 9,
        "type": "single",
        "question": "VRP 操作系统命令划分为访问级、监控级、配置级、管理级 4 个级别。企业在进行账号分配时，一般给企业见习人员分配什么级别的账号（）。",
        "options": [
          "A. 配置级",
          "B. 访问级",
          "C. 管理级",
          "D. 监控级"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 10,
        "type": "single",
        "question": "当管理员通过 Telnet 登录路由器后，发现无法配置路由器的接口 IP 地址。那么可能的原因是（）。",
        "options": [
          "A. Telnet 用户的认证方式配置错误",
          "B. 管理员使用的 Telnet 终端软件禁止相应操作",
          "C. Telnet 用户的级别配置错误",
          "D. SNMP 参数配置错误"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 11,
        "type": "single",
        "question": "Windows操作系统默认的系统管理员账号为（）。",
        "options": [
          "A. Windows",
          "B. administrator",
          "C. guest",
          "D. root"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 12,
        "type": "single",
        "question": "在Windows Server 2016操作系统中，创建隐藏共享文件夹时，需要在文件夹共享名的后面附加一个（）符号。",
        "options": [
          "A. &",
          "B. #",
          "C. $",
          "D. @"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 13,
        "type": "single",
        "question": "Linux系统账号分为超级用户、普通用户、（）。",
        "options": [
          "A. 特权用户",
          "B. 一般用户",
          "C. 内置用户",
          "D. 来宾用户"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 14,
        "type": "single",
        "question": "在Linux系统中，添加用户组命令是（）。",
        "options": [
          "A. groupadd",
          "B. gpasswd",
          "C. groups",
          "D. groupmod"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 15,
        "type": "single",
        "question": "Linux系统中修改文件的所有者的命令是（）。",
        "options": [
          "A. chgrp",
          "B. chown",
          "C. chpasswd",
          "D. chmod"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 16,
        "type": "single",
        "question": "资源安全管理通常会保护（）和保护文件。",
        "options": [
          "A. 关键用户",
          "B. 关键分区",
          "C. 个人信息",
          "D. 日志系统"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 17,
        "type": "single",
        "question": "在Linux中，以下（）做法不能提升网络安全性。",
        "options": [
          "A. 使用telnet远程登录Linux系统",
          "B. 定期检查系统中的日志",
          "C. 防止ping",
          "D. 使用ssh远程登录Linux系统"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 18,
        "type": "single",
        "question": "Linux系统安全增强技术包括以下（）选项。",
        "options": [
          "A. 启用匿名账户",
          "B. 配置最大权限",
          "C. 限制远程访问",
          "D. 设置容易记有规律的口令"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 19,
        "type": "single",
        "question": "访问控制列表的类型包含扩展访问控制列表和（）。",
        "options": [
          "A. 行为访问控制",
          "B. 标准访问控制列表",
          "C. 限制访问控制列表",
          "D. 用户访问控制列表"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 20,
        "type": "single",
        "question": "常见的访问控制模型有（）、自主访问控制、强制访问控制和基于属性访问控制几种。",
        "options": [
          "A. 基于权限访问控制",
          "B. 基于端口访问控制",
          "C. 基于时间访问控制",
          "D. 基于角色访问控制"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 21,
        "type": "single",
        "question": "在访问控制策略制定防外还是防内是考虑（）。",
        "options": [
          "A. 不同网络应用的安全需求",
          "B. 所有和应用相关的信息的确认",
          "C. 网络信息传播和授权策略",
          "D. 访问权限的更新与维护"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 22,
        "type": "single",
        "question": "系统补丁主要用来修复系统的（）。",
        "options": [
          "A. 美观",
          "B. 顺畅",
          "C. 安全",
          "D. 便捷"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 23,
        "type": "single",
        "question": "windows更新系统补丁的三种方法是:（）、工具软件更新和手动更新。",
        "options": [
          "A. 系统更新",
          "B. 定时更新",
          "C. 最大化更新",
          "D. 有权更新"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 24,
        "type": "single",
        "question": "下列是不感染的独立性恶意代码的是（）。",
        "options": [
          "A. 特洛伊木马",
          "B. 点滴器",
          "C. 计算机病毒",
          "D. 后门"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 25,
        "type": "single",
        "question": "Windows病毒包括宏病毒和（）。",
        "options": [
          "A. 脚本病毒",
          "B. 木马",
          "C. 流感病毒",
          "D. 毒虫病毒"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 26,
        "type": "single",
        "question": "以下（）不属于一个合理的反病毒方法的执行措施。",
        "options": [
          "A. 检测",
          "B. 识别",
          "C. 破坏",
          "D. 清除"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 27,
        "type": "single",
        "question": "杀毒软件扫描到的病毒文件，通常采取的杀毒方式是（）。",
        "options": [
          "A. 禁止访问",
          "B. 删除",
          "C. 保留",
          "D. 不处理"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 28,
        "type": "single",
        "question": "某台主机属于中国电信系统，其域名应以（）结尾。",
        "options": [
          "A. com.cn",
          "B. com",
          "C. net.cn",
          "D. net"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 29,
        "type": "single",
        "question": "以下关于域名和IP地址的说法正确的是（）。",
        "options": [
          "A. 域名和IP地址是相同的",
          "B. 域名与IP地址是对应的，但不是一一对应的",
          "C. 域名与IP地址是一一对应的",
          "D. Internet上的每台计算机都必须有唯一的IP地址和域名"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 30,
        "type": "single",
        "question": "URL的组成格式为（）。",
        "options": [
          "A. 资源类型.存放资源的主机域名.资源文件名",
          "B. 资源类型.资源文件名.存放资源的主机域名",
          "C. 主机域名.资源类型.资源文件名",
          "D. 资源文件名.主机域名.资源类型"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 31,
        "type": "single",
        "question": "用户从CA安全认证中心申请自己的证书，并将该证书安装在浏览器的主要目的是（）。",
        "options": [
          "A. 以防止他人假冒自己",
          "B. 验证Web服务器的真实性",
          "C. 保护自己的计算机免受到病毒的危害",
          "D. 防止第三方偷看传输的信息"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 32,
        "type": "single",
        "question": "下列选项中，（）不是导致Web服务溢出攻击的原因。",
        "options": [
          "A. 服务器使用Windows操作系统",
          "B. 没有能够过滤用户输入中的恶意字符",
          "C. 开发者没有完全考虑Web用户可能的行为",
          "D. 应用服务器处理输入数据时存在缓冲区溢出漏洞"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 33,
        "type": "single",
        "question": "为增强Web应用程序的安全性，某软件开发经理决定加强Web软件安全开发培训，下列哪项内容不在考虑范围内。（）",
        "options": [
          "A. 关于网站身份鉴别技术方面安全知识的培训",
          "B. 针对OpenSSL心脏出血漏洞方面安全知识的培训",
          "C. 针对SQL注入漏洞的安全编程培训",
          "D. 关于ARM系统漏洞挖掘方面安全知识的培训"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 34,
        "type": "single",
        "question": "渗透测试的流程不包含（）。",
        "options": [
          "A. 留后门",
          "B. 信息收集",
          "C. 漏洞挖掘",
          "D. 提权"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 35,
        "type": "single",
        "question": "下列关于域名备案的目的的描述中，不正确的是（）。",
        "options": [
          "A. 为了防止在网上从事非法的网站经营活动",
          "B. 为了打击不良互联网信息的传播",
          "C. 未经备案，不得在中华人民共和国境内从事互联网信息服务",
          "D. 如果网站不备案的话，很有可能被查处以后关停"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 36,
        "type": "single",
        "question": "《互联网域名管理办法》规定，（）是中国的国家顶级域名。",
        "options": [
          "A. .China",
          "B. .CHN",
          "C. .CA",
          "D. .CN"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 37,
        "type": "single",
        "question": "下列选项中，不属于CDN网络中包含的功能实体的是（）。",
        "options": [
          "A. 内容缓存设备",
          "B. 内容交换机",
          "C. 内容路由器",
          "D. 内容服务器"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 38,
        "type": "single",
        "question": "数据备份保护信息系统的安全属性是（）。",
        "options": [
          "A. 可审性",
          "B. 可用性",
          "C. 完整性",
          "D. 保密性"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 39,
        "type": "single",
        "question": "（）是按备份周期对整个系统所有的文件（数据）进行备份，是客服系统数据不安全最简单的方法。",
        "options": [
          "A. 完整备份策略",
          "B. 按需备份策略",
          "C. 差分备份策略",
          "D. 增量备份策略"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 40,
        "type": "single",
        "question": "要设置系统的备份还原，可使用的对话框是（）。",
        "options": [
          "A. 文件夹选项",
          "B. 系统属性",
          "C. 显示属性",
          "D. 设备管理器"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 41,
        "type": "single",
        "question": "关于冷备份的说法正确的是（）。",
        "options": [
          "A. 支持按表和按用户恢复",
          "B. 低度维护，高度安全",
          "C. 单独使用时，只能提供到“某一时间点上”的恢复",
          "D. 非常快速，且容易归档"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 42,
        "type": "single",
        "question": "在职业道德实践中，要求做到公私分明，以下不符合要求的是（）。",
        "options": [
          "A. 正确认识公与私的关系",
          "B. 树立奉献意识",
          "C. 从细微处严格要求自己",
          "D. 从自身利益为主，公私兼顾"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 43,
        "type": "single",
        "question": "公司应明确员工的雇佣条件和考察评价的方法与程序，减少因雇佣不当而产生的安全风险。人员考察的内容不包括（）。",
        "options": [
          "A. 身份考验、来自组织和个人的品格鉴定",
          "B. 家庭背景情况调查",
          "C. 学历和履历的真实性和完整性",
          "D. 学术及专业资格"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 44,
        "type": "single",
        "question": "关于企业文化，你认为正确的是（）。",
        "options": [
          "A. 企业文化是企业管理的重要因素",
          "B. 企业文化是企业的外在表象",
          "C. 企业文化产生于改革开放过程中的中国",
          "D. 企业文化建设的核心内容是文娱和体育活动"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 45,
        "type": "single",
        "question": "下列不属于企业文化功能的是（）。",
        "options": [
          "A. 整合功能",
          "B. 激励功能",
          "C. 强制功能",
          "D. 自律功能"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 46,
        "type": "single",
        "question": "在（）情况下，一个组织应对公众和媒体公告其信息系统中发生的信息安全事件。",
        "options": [
          "A. 当信息安全事件的负面影响扩展到本组织以外时",
          "B. 只要发生了安全事件就应当公告",
          "C. 只有公众的什么财产安全受到巨大危害时才公告",
          "D. 当信息安全事件平息之后"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 47,
        "type": "single",
        "question": "加强职业道德修养的方式不包括（）。",
        "options": [
          "A. 学习职业道德规范",
          "B. 自我放纵",
          "C. 以先进典型为标尺",
          "D. 慎独"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 48,
        "type": "single",
        "question": "在下列做法中，符合举止得体要求的是（）。",
        "options": [
          "A. 态度谦卑",
          "B. 感情热烈",
          "C. 行为适度",
          "D. 举止随意"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 49,
        "type": "single",
        "question": "管理员账号可以（）。",
        "options": [
          "A. 在客户机上使用",
          "B. 在自己的私人电脑上登录",
          "C. 在工作电脑上登录",
          "D. 将账号密码告诉给关系较好的同事"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 50,
        "type": "single",
        "question": "微型计算机中，控制器的基本功能是（）。",
        "options": [
          "A. 实现算术运算和逻辑运算",
          "B. 存储各种控制信息",
          "C. 保持各种控制状态",
          "D. 控制机器各个部件协调一致地工作"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 51,
        "type": "single",
        "question": "使用（）命令可以检查网络适配器是否工作正常等网络问题。",
        "options": [
          "A. tracert",
          "B. netstat",
          "C. ping",
          "D. arp"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 52,
        "type": "single",
        "question": "下列选项列出的计算机系统由低到高分层顺序中，正确的是（）。",
        "options": [
          "A. 硬件-应用软件-操作系统-其他系统软件",
          "B. 硬件-操作系统-其他系统软件-应用软件",
          "C. 硬件-其他系统软件-操作系统-应用软件",
          "D. 硬件-应用软件-其他系统软件-操作系统"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 53,
        "type": "single",
        "question": "对高级语言程序的下列叙述中，正确的是（）。",
        "options": [
          "A. 计算机语言中，只有机器语言属于低级语言",
          "B. 高级语言源程序可以被计算机直接执行",
          "C. C语言属于高级语言",
          "D. 机器语言是与机器硬件是无关的"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 54,
        "type": "single",
        "question": "多媒体计算机的硬件主要体现在配备了（）。",
        "options": [
          "A. 显卡",
          "B. 网卡",
          "C. 声卡",
          "D. 调制解调器"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 55,
        "type": "single",
        "question": "在Windows系统中，默认权限最低的用户组是（）。",
        "options": [
          "A. everyone",
          "B. administrator",
          "C. power user",
          "D. users"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 56,
        "type": "single",
        "question": "在Linux系统中，要列出一个目录下的所有文件需要使用的命令行为（）。",
        "options": [
          "A. ls -l",
          "B. ls",
          "C. ls -a",
          "D. ls -d"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 57,
        "type": "single",
        "question": "下列选项中，属于移动互联网设备主流的操作系统的是（）。",
        "options": [
          "A. 三星、苹果、微软",
          "B. Unix、Linux",
          "C. iOS、Android",
          "D. Windows10、Windows2016 Server"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 58,
        "type": "single",
        "question": "数据库系统在其内部具有3级模式，用来描述数据库中全体数据的全局逻辑结构和特性的是（）。",
        "options": [
          "A. 外模式",
          "B. 概念模式",
          "C. 内模式",
          "D. 存储模式"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 59,
        "type": "single",
        "question": "SQL语句中修改表结构的命令是（）。",
        "options": [
          "A. MODIFY TABLE",
          "B. MODIFY STRUCTURE",
          "C. ALTER TABLE",
          "D. ALTER STRUCTURE"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 60,
        "type": "single",
        "question": "OSI 代表的是以下哪一项（）。",
        "options": [
          "A. Organization for Standards Institute",
          "B. Organization for Internet Standards",
          "C. Open Standards Institute",
          "D. Open Systems Interconnection"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 61,
        "type": "single",
        "question": "TCP/IP协议体系结构中，IP层对应OSI/RM模型的（）。",
        "options": [
          "A. 会话层",
          "B. 网络层",
          "C. 数据链路层",
          "D. 传输层"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 62,
        "type": "single",
        "question": "小于（）的 TCP/UDP 端口号已保留与现有服务所对应，大于此数字的端口号可自由分配。",
        "options": [
          "A. 199",
          "B. 100",
          "C. 1024",
          "D. 2048"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 63,
        "type": "single",
        "question": "以下应用层协议中，可以用做邮件服务的协议有（）。",
        "options": [
          "A. TFTP",
          "B. SMTP",
          "C. SNMP",
          "D. HTTP"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 64,
        "type": "single",
        "question": "当路由器接收的 IP 报文的 TTL 值等于 0 时，采取的处理方式是（）。",
        "options": [
          "A. 将该分组分片",
          "B. 丢掉该分组",
          "C. 转发该分组",
          "D. 以上答案均不对"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 65,
        "type": "single",
        "question": "如果多个局域网要进行网络互连，并且需要它们处于不同的广播域，可以使用的网络互连设备是（）。",
        "options": [
          "A. 交换机",
          "B. 集线器",
          "C. 网桥",
          "D. 路由器"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 66,
        "type": "single",
        "question": "无线局域网 WLAN的传输介质是（）。",
        "options": [
          "A. 无线电波",
          "B. 红外线",
          "C. 载波电流",
          "D. 卫星通信"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 67,
        "type": "single",
        "question": "当 AC 为旁挂式组网时，如果数据是直接转发，则数据流（）AC;如果数据是隧道转发模式，则数据流（）AC。",
        "options": [
          "A. 不经过，经过",
          "B. 不经过，不经过",
          "C. 经过，经过",
          "D. 经过，不经过"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 68,
        "type": "single",
        "question": "在STP网络中，可以通过配置（）来指定根桥。",
        "options": [
          "A. 桥优先级",
          "B. 端口速率",
          "C. 双工模式",
          "D. 管理IP"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 69,
        "type": "single",
        "question": "现代的病毒木马融合了（）这些新技术。",
        "options": [
          "A. 进程注入",
          "B. 注册表隐藏",
          "C. 漏洞扫描",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 70,
        "type": "single",
        "question": "当路由器的主控板发生故障，以下选项中不可能发生的是（）。",
        "options": [
          "A. 路由器自动切换到备用主控板进行工作",
          "B. 转发数据包出现丢包情况",
          "C. 切换备用主控板失败，路由器宕机",
          "D. 路由器正常工作"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 71,
        "type": "single",
        "question": "下列哪个协议可提供“ping”和“traceroute”这样的故障诊断功能（）。",
        "options": [
          "A. ICMP",
          "B. IGMP",
          "C. ARP",
          "D. RARP"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 72,
        "type": "single",
        "question": "职业道德是一种（）的约束机制。",
        "options": [
          "A. 强制性",
          "B. 非强制性",
          "C. 随意性",
          "D. 自发性"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 73,
        "type": "single",
        "question": "关于职业道德的特征，表述不正确的是（）。",
        "options": [
          "A. 鲜明的职业性",
          "B. 适用范围上的广泛性",
          "C. 相对稳定性和连续性",
          "D. 一定的强制性"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 74,
        "type": "single",
        "question": "下列（）属于职业道德的社会功能。",
        "options": [
          "A. 提高社会道德水平",
          "B. 规范职业活动",
          "C. 整合职业活动",
          "D. 引导职业活动向和谐方向发展"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 75,
        "type": "single",
        "question": "社会主义职业道德的核心是（）。",
        "options": [
          "A. 爱岗敬业",
          "B. 诚实守信",
          "C. 为人民服务",
          "D. 忠于革命事业"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 76,
        "type": "single",
        "question": "职业是人们在社会中所从事的作为谋生手段的工作，以下选项不属于职业的特征的是（）。",
        "options": [
          "A. 目的性",
          "B. 社会性",
          "C. 群体性",
          "D. 个体性"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 77,
        "type": "single",
        "question": "（）给公司带来了最大的安全风险。",
        "options": [
          "A. 临时工",
          "B. 咨询人员",
          "C. 离职人员",
          "D. 当前员工"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 78,
        "type": "single",
        "question": "（）负有决定信息分类级别的责任。",
        "options": [
          "A. 用户",
          "B. 数据所有者",
          "C. 审计员",
          "D. 安全官"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 79,
        "type": "single",
        "question": "终端安全管理目标:规范支撑系统中终端用户的行为，降低来自支撑系统终端的安全威胁，可解决（）问题。",
        "options": [
          "A. 终端接入和配置管理;终端账号、秘密、漏洞补丁等系统安全管理;桌面及主机设置管理;终端防病毒管理",
          "B. 终端账号、秘密、漏洞补丁等系统安全管理;桌面及主机设置管理;终端防病毒管理",
          "C. 终端接入和配置管理;桌面及主机设置管理;终端防病毒管理",
          "D. 终端接入和配置管理;终端账号、秘密、漏洞补丁等系统安全管理;桌面及主机设置管理"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 80,
        "type": "single",
        "question": "一台完整的冯·诺依曼型计算机的硬件系统应包含（）。",
        "options": [
          "A. CPU、运算器、存储器、输入设备和输出设备",
          "B. CPU、存储器、输入设备和输出设备",
          "C. CPU、辅助存储器、输入设备和输出设备",
          "D. CPU、辅助存储器、键盘和显示器"
        ],
        "analysis": "",
        "answer": 1
      }
    ]
  },
  {
    "set_name": "2026考证单选题161-240",
    "items": [
      {
        "id": 1,
        "type": "single",
        "question": "在输入输出控制方法中，采用（）可以使得设备与主存间的数据块传送无需CPU干预。",
        "options": [
          "A. 程序控制输入输出",
          "B. 中断",
          "C. DMA",
          "D. 总线控制"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 2,
        "type": "single",
        "question": "网卡的主要功能不包括（）。",
        "options": [
          "A. 将计算机连接到通信介质上",
          "B. 进行电信号匹配",
          "C. 实现数据传输",
          "D. 网络互连"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 3,
        "type": "single",
        "question": "将十进制的整数化为二进制整数的方法是（）。",
        "options": [
          "A. 乘以二取整法",
          "B. 除以二取整法",
          "C. 乘以二取小数法",
          "D. 除以二取余法"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 4,
        "type": "single",
        "question": "下列系统软件与应用软件的相互关系中，正确的是（）。",
        "options": [
          "A. 两者互为基础",
          "B. 两者之间没有任何关系",
          "C. 前者以后者为基础",
          "D. 后者以前者为基础"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 5,
        "type": "single",
        "question": "下列选项中，不属于进程三种基本状态的是（）。",
        "options": [
          "A. 运行态",
          "B. 就绪态",
          "C. 后备态",
          "D. 阻塞态"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 6,
        "type": "single",
        "question": "在Linux系统中，（）命令可以将普通用户转换为超级用户。",
        "options": [
          "A. super",
          "B. passwd",
          "C. tar",
          "D. su"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 7,
        "type": "single",
        "question": "下列选项属于移动操作系统的是（）。",
        "options": [
          "A. Linux",
          "B. Android",
          "C. Windows 10",
          "D. Windows 2016 Server"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 8,
        "type": "single",
        "question": "下列选项中，不属于数据库管理的是（）。",
        "options": [
          "A. 数据库的建立",
          "B. 数据库的调整",
          "C. 数据库的监控",
          "D. 数据库的校对"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 9,
        "type": "single",
        "question": "在SQL数据库中，（）语句能校验整数列i的值不小于1不大于10。",
        "options": [
          "A. i BETWEEN 1 AND 10",
          "B. i BETWEEN 0 AND 11",
          "C. i IN INTERVAL(0,11)",
          "D. i IN INTERVAL(1,10)"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 10,
        "type": "single",
        "question": "在七十年代末，国际标准化组织 ISO 提出了开放系统互连参考模型。协议分层大大简化了网络协议的复杂性，在 OSI7 层模型中，网络层的功能主要是（）。",
        "options": [
          "A. 在信道上传输原始的比特流",
          "B. 加强物理层数据传输原始比特流的功能并且进行流量调控",
          "C. 确定数据包从源端到目的端如何选择路由",
          "D. 确保到达对方的各段信息正确无误"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 11,
        "type": "single",
        "question": "TCP/IP协议是公开发布的，数据包在网络上通常是明码传送，容易被（）。",
        "options": [
          "A. 窃听和欺骗",
          "B. 代码",
          "C. 行为监测法",
          "D. 软件模拟法"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 12,
        "type": "single",
        "question": "RIP协议 是在（）之上的一种路由协议。",
        "options": [
          "A. Ethernet",
          "B. IP",
          "C. TCP",
          "D. UDP"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 13,
        "type": "single",
        "question": "SMTP 协议是工作在（）。",
        "options": [
          "A. 网络层",
          "B. 传输层",
          "C. 会话层",
          "D. 应用层"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 14,
        "type": "single",
        "question": "当路由器接收到报文后，根据其目的 IP 地址在路由表中查询没有对应的表项时，采取的处理方式是（）。",
        "options": [
          "A. 丢掉该分组",
          "B. 将该分组分片",
          "C. 转发该分组",
          "D. 以上答案均不对"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 15,
        "type": "single",
        "question": "AP的主要功能为（）。",
        "options": [
          "A. 提供无线覆盖",
          "B. 鉴权",
          "C. 计费",
          "D. 加密"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 16,
        "type": "single",
        "question": "当无线通信过程中信号强度太弱、错误率较高时，无线客户端会切换到其它无线 AP 的信道，这个过程称为（）。",
        "options": [
          "A. 关联",
          "B. 重关联",
          "C. 漫游",
          "D. 负载平衡"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 17,
        "type": "single",
        "question": "下面关于双链路备份组网中，描述不正确的是（）。",
        "options": [
          "A. 双链路备份技术在网络重要节点提高了网络可靠性，保证了业务稳定",
          "B. 备 AC 要一直处于上电状态",
          "C. 在 AP 与主备 AC 建立主备链路的过程中，先建立的链路一定为主链路",
          "D. 主备 AC 上的网络业务配置要保持一致"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 18,
        "type": "single",
        "question": "链路聚合成员端口应当按照一定要求和配置，以下可以不满足的选项是（）。",
        "options": [
          "A. 端口成员速率一致",
          "B. 端口成员同属一个VLAN",
          "C. 端口成员所用传输介质相同",
          "D. 端口成员协商模式一致"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 19,
        "type": "single",
        "question": "防火墙通过（）来阻塞邮件附件中的病毒。",
        "options": [
          "A. 数据控制",
          "B. 连接控制",
          "C. ACL控制",
          "D. 协议控制"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 20,
        "type": "single",
        "question": "以下措施不能用来避免网络风暴的是（）。",
        "options": [
          "A. 交换机开启stp协议",
          "B. 交换机的端口开启边缘端口功能",
          "C. 仅采用路由器三层接口完成接入",
          "D. 网络设计时避免成环的网络结构"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 21,
        "type": "single",
        "question": "arp命令的格式中（）表示显示地址映射表项。",
        "options": [
          "A. arp",
          "B. arp -a",
          "C. arp -d inet_addr",
          "D. arp -s inet_addr phys_addr"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 22,
        "type": "single",
        "question": "以下对职业的内涵描述中，正确的是?",
        "options": [
          "A. 职业需要专业的知识与技能",
          "B. 职业不一定需要参与社会分工",
          "C. 通过工作获得的财富只包含物质财富",
          "D. 合理的报酬就是通过劳动后每月获得的薪水"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 23,
        "type": "single",
        "question": "职业道德是指从事一定职业劳动的人们，在长期的职业活动中形成的（）。",
        "options": [
          "A. 行为规范",
          "B. 操作程序",
          "C. 劳动技能",
          "D. 思维习惯"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 24,
        "type": "single",
        "question": "下列选项中属于职业道德范畴的是（）。",
        "options": [
          "A. 企业经营业绩",
          "B. 企业发展战略",
          "C. 员工的技术水平",
          "D. 人们的内心信念"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 25,
        "type": "single",
        "question": "市场经济条件下，职业道德最终将对企业起到（）的作用。",
        "options": [
          "A. 决策科学化",
          "B. 提高竞争力",
          "C. 决定经济效益",
          "D. 决定前途于命运"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 26,
        "type": "single",
        "question": "以下哪个选项最准确地描述了职业道德的基本内涵?",
        "options": [
          "A. 遵守法律法规和组织规章制度",
          "B. 追求个人利益和财富积累",
          "C. 维护客户利益和满足其需求",
          "D. 保持良好的道德品质和职业操守"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 27,
        "type": "single",
        "question": "职业道德的核心原则是什么?",
        "options": [
          "A. 个人发展和成就",
          "B. 真诚和诚信",
          "C. 利润最大化",
          "D. 社会责任和公益责任"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 28,
        "type": "single",
        "question": "各种职业集体对从业人员的道德要求，总是从本职业的活动和交往的内容和方式出发，适应于本职业活动的客观环境和具体条件。这说明职业道德具有（）的特点。",
        "options": [
          "A. 实践性",
          "B. 时代性",
          "C. 客观性",
          "D. 多样性"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 29,
        "type": "single",
        "question": "以下关于职业道德的说法中，你认为不正确的是（）。",
        "options": [
          "A. 任何职业道德的适用范围都不是普遍的，而是特定的、有限的",
          "B. 职业道德的形式因行业不同而有所不同",
          "C. 职业道德不具有时代性",
          "D. 职业道德主要适用于走上社会岗位的成年人"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 30,
        "type": "single",
        "question": "职业道德是一种内在的、（）的约束机制。",
        "options": [
          "A. 强制性",
          "B. 非强制性",
          "C. 随意性",
          "D. 自发性"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 31,
        "type": "single",
        "question": "下列关于职业道德的说法中，你认为正确的是（）。",
        "options": [
          "A. 有职业道德的人一定能胜任工作",
          "B. 没有职业道德的人干不好任何工作",
          "C. 职业道德有时起作用，有时不起作用",
          "D. 职业道德无关紧要，可有可无"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 32,
        "type": "single",
        "question": "下列说法中不正确的是（）。",
        "options": [
          "A. 职业道德有利于协调职工与领导之间的关系",
          "B. 职业道德有利于协调职工与企业之间的关系",
          "C. 如果企业职工不遵守企业规章制度，是因为规章制度不合理",
          "D. 职业道德是企业文化的重要组成部分"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 33,
        "type": "single",
        "question": "职业道德修养中，以下哪个方面是至关重要的?",
        "options": [
          "A. 个人利益追求",
          "B. 持续学习和自我提升",
          "C. 管理层的指导",
          "D. 追求权力和地位"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 34,
        "type": "single",
        "question": "要做到遵纪守法，对每个职工来说，必须做到（）。",
        "options": [
          "A. 有法可依",
          "B. 反对“管”“卡”“压”",
          "C. 反对自由主义",
          "D. 努力学法、知法、守法、用法"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 35,
        "type": "single",
        "question": "以下不属于爱岗敬业的具体要求是（）。",
        "options": [
          "A. 树立职业理想",
          "B. 强化职业责任",
          "C. 提高职业技能",
          "D. 抓住择业机遇"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 36,
        "type": "single",
        "question": "遵纪守法是指职业人员应当（）。",
        "options": [
          "A. 追逐个人利益",
          "B. 遵守行业规范和法律法规",
          "C. 追求权力和地位",
          "D. 忽视职业道德要求"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 37,
        "type": "single",
        "question": "下列哪一项没有违反诚实守信的要求?",
        "options": [
          "A. 保守企业秘密",
          "B. 派人打进竞争对手内部，增强竞争优势",
          "C. 根据服务对象来决定是否遵守承诺",
          "D. 凡有利于企业利益的行为"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 38,
        "type": "single",
        "question": "积极参加（）是职业道德修养的根本途径。",
        "options": [
          "A. 职业实践",
          "B. 职业教育",
          "C. 职业评级",
          "D. 职业素养"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 39,
        "type": "single",
        "question": "勤奋进取的基本要求之一是（）。",
        "options": [
          "A. 避免参与工作培训和学习机会",
          "B. 不主动接受新的工作挑战",
          "C. 主动学习和提升自己的专业知识和技能",
          "D. 不愿意与他人分享工作经验和知识"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 40,
        "type": "single",
        "question": "“天时不如地利，地利不如人和”强调的是（）。",
        "options": [
          "A. 地理优势",
          "B. 团结互助",
          "C. 一团和气",
          "D. 领导和群众关系融洽"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 41,
        "type": "single",
        "question": "在日常的工作中，要发挥社会主义市场经济机制的积极作用，必须增强（）。",
        "options": [
          "A. 个人意识、协作意识、效率意识、物质利益观念、改革开放意识",
          "B. 个人意识、竞争意识、公平意识、民主法制意识、开拓创新精神",
          "C. 自立意识、竞争意识、效率意识、民主法制意识、开拓创新精神",
          "D. 自立意识、协作意识、公平意识、物质利益观念、改革开放意识"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 42,
        "type": "single",
        "question": "有效的团队合作需要具备的基本能力之一是（）。",
        "options": [
          "A. 忽视团队目标，只关注个人目标",
          "B. 不积极参与团队讨论和决策",
          "C. 共享工作责任，共同努力完成任务",
          "D. 忽视他人的工作进展和需求"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 43,
        "type": "single",
        "question": "操作者操作设备必须严格遵守设备的（）。",
        "options": [
          "A. 标准操作规程",
          "B. 相关安全制度",
          "C. 公司制度",
          "D. 岗位操作规程"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 44,
        "type": "single",
        "question": "在使用设备时，爱护设备与安全操作的基本要求不包括（）。",
        "options": [
          "A. 重视设备安全规则，规范操作",
          "B. 保持设备清洁和整洁",
          "C. 遵守设备安全规则，正确使用和维护设备",
          "D. 按照个人习惯操作设备"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 45,
        "type": "single",
        "question": "某机械厂的一位领导说:机械工业工艺复杂，技术密集，工程师在图纸上画得再好、再精确，工人操作中如果差那么一毫米，最终出来的就可能是废品。这段话主要强调（）素质的重要性。",
        "options": [
          "A. 专业技能",
          "B. 思想政治",
          "C. 职业道德",
          "D. 身心素质"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 46,
        "type": "single",
        "question": "勇于创新的基本含义包括（）。",
        "options": [
          "A. 不接受任何改变和创新",
          "B. 不关注工作质量的提升和创新",
          "C. 提出新的想法和方法，推动进步",
          "D. 遵循传统工作模式，为稳妥尽量不改变"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 47,
        "type": "single",
        "question": "在工作中，勇于创新与精益求精的基本要求不包括（）。",
        "options": [
          "A. 关注工作效率和质量的提升",
          "B. 愿意尝试新的工作方法和技术",
          "C. 推动工作流程改进和质量提升",
          "D. 忽视个人职责，不关注工作成果"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 48,
        "type": "single",
        "question": "国际规定，电压（）伏以下不必考虑防止电击的危险。",
        "options": [
          "A. 36伏",
          "B. 65伏",
          "C. 25伏",
          "D. 220伏"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 49,
        "type": "single",
        "question": "漏电保护器的使用是防止（）。",
        "options": [
          "A. 触电事故",
          "B. 电压波动",
          "C. 电荷超负荷",
          "D. 温度过高"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 50,
        "type": "single",
        "question": "电器漏电时的处理方法是?",
        "options": [
          "A. 用绝缘手套将插头拔下来",
          "B. 用棉布包裹住电线",
          "C. 用湿毛巾擦拭漏电部分",
          "D. 设备断电并修理电器"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 51,
        "type": "single",
        "question": "操作系统的基本类型主要有（）。",
        "options": [
          "A. 批处理系统、分时系统及多任务系统",
          "B. 实时操作系统、批处理操作系统及分时操作系统",
          "C. 单用户系统、多用户系统及批处理系统",
          "D. 实时系统、分时系统和多用户系统"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 52,
        "type": "single",
        "question": "下操作系统中属于网络操作系统的是（）。",
        "options": [
          "A. MS-DOS",
          "B. Windows98",
          "C. UNIX",
          "D. Windows Server"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 53,
        "type": "single",
        "question": "中断处理的4个阶段为（）。",
        "options": [
          "A. 保存现场、执行中断处理程序、分析中断源、恢复现场",
          "B. 保存现场、恢复现场、执行中断处理程序、分析中断源",
          "C. 保存现场、分析中断源、执行中断处理程序、恢复现场",
          "D. 分析中断源、保存现场、执行中断处理程序、恢复现场"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 54,
        "type": "single",
        "question": "现代操作系统的两个基本特征是（）和资源共享。",
        "options": [
          "A. 多道程序设计",
          "B. 中断处理",
          "C. 程序的并发执行",
          "D. 实现分时与实时处理"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 55,
        "type": "single",
        "question": "计算机系统的组成包括（）。",
        "options": [
          "A. 程序和数据",
          "B. 计算机硬件和计算机软件",
          "C. 处理器和内存",
          "D. 处理器，存储器和外围设备"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 56,
        "type": "single",
        "question": "计算机中，负责指挥计算机各部分自动协调一致地进行工作的部件是（）。",
        "options": [
          "A. 运算器",
          "B. 控制器",
          "C. 存储器",
          "D. 总线"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 57,
        "type": "single",
        "question": "下面关于cache的叙述，错误的是（）。",
        "options": [
          "A. 高速缓冲存储器简称cache",
          "B. cache处于主存与CPU之间",
          "C. 程序访问的局部性为cache的引入提供了理论依据",
          "D. cache的速度远比CPU的速度慢"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 58,
        "type": "single",
        "question": "当代计算机的最主要的体系结构称为是（）。",
        "options": [
          "A. 冯·诺依曼机",
          "B. 非冯·诺依曼机",
          "C. 图灵机",
          "D. PASCAL机"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 59,
        "type": "single",
        "question": "如果在具有层次结构的一组元素中，存在着一对一的关系，我们可以认为这样的数据的逻辑类型就是（）。",
        "options": [
          "A. 集合",
          "B. 线性结构",
          "C. 树型结构",
          "D. 图型结构"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 60,
        "type": "single",
        "question": "结构化程序设计强调将程序分解为（）。",
        "options": [
          "A. 子程序",
          "B. 对象",
          "C. 类",
          "D. 方法"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 61,
        "type": "single",
        "question": "数据管理技术的发展过程中，经历了人工管理阶段、文件系统阶段和数据库系统阶段。在这几个阶段中，数据独立性最高的是（）阶段。",
        "options": [
          "A. 数据库系统",
          "B. 文件系统",
          "C. 人工管理",
          "D. 数据项管理"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 62,
        "type": "single",
        "question": "关系数据模型（）。",
        "options": [
          "A. 只能表示实体间的1:1联系",
          "B. 只能表示实体间的1:n",
          "C. 只能表示实体间的 m:n",
          "D. 可以表示实体间的上述三种联系"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 63,
        "type": "single",
        "question": "（）是指进程或程序正常运行时周期性记录进程或程序有关信息的点，目的是当系统发生故障或错误时，从最新检测点恢复。",
        "options": [
          "A. 还原点",
          "B. 检验点",
          "C. 检查点",
          "D. 失真点"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 64,
        "type": "single",
        "question": "Internet 的前身是（）。",
        "options": [
          "A. IPXNET",
          "B. ARPANET",
          "C. Ethernet",
          "D. IPNET"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 65,
        "type": "single",
        "question": "IP地址10.10.10.256属于（）类IP地址。",
        "options": [
          "A. A",
          "B. B",
          "C. C",
          "D. IP地址格式错误"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 66,
        "type": "single",
        "question": "网桥及一般的二层交换机在进行数据包转发时，识别的数据包包头中的（）进行数据包的转发。",
        "options": [
          "A. 下一跳地址",
          "B. IP地址",
          "C. MAC地址",
          "D. 网络地址"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 67,
        "type": "single",
        "question": "以下哪个协议不属于TCP/IP模型中网络层（）。",
        "options": [
          "A. ICMP",
          "B. RARP",
          "C. IGMP",
          "D. RIP"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 68,
        "type": "single",
        "question": "根据作用范围分类，网络协议可以分为几种类型?",
        "options": [
          "A. 2",
          "B. 3",
          "C. 4",
          "D. 5"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 69,
        "type": "single",
        "question": "以下哪种网络适用于跨越城市或国家的通信?",
        "options": [
          "A. 局域网",
          "B. 广域网",
          "C. 互联网",
          "D. 无线网"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 70,
        "type": "single",
        "question": "下列哪些是对计算机网络不正确的定义?",
        "options": [
          "A. 计算机网络是计算机的集合",
          "B. 计算机网络的目的是相互共享资源",
          "C. 计算机网络是在协议控制下通过通信系统来实现计算机之间的连接",
          "D. 计算机网络中的一台计算机可以干预另一台计算机的工作"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 71,
        "type": "single",
        "question": "如下网络拓扑结构中，具有一定集中控制功能的网络是（）。",
        "options": [
          "A. 总线型网络",
          "B. 星型网络",
          "C. 环形网络",
          "D. 全连接型网络"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 72,
        "type": "single",
        "question": "星形、总线型、环形和网状形是按照（）分类。",
        "options": [
          "A. 网络功能",
          "B. 管理性质",
          "C. 网络跨度",
          "D. 网络拓扑"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 73,
        "type": "single",
        "question": "VLAN（Virtual Local Area Network）是指（）。",
        "options": [
          "A. 一种物理隔离网络的方法",
          "B. 一种用于连接远程办公室的网络设备",
          "C. 一种逻辑上划分的虚拟局域网",
          "D. 一种用于提高网络带宽的技术"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 74,
        "type": "single",
        "question": "在命令行中使用ping命令可以执行什么操作（）。",
        "options": [
          "A. 发送网络请求并显示响应时间",
          "B. 查看网络设备的配置信息",
          "C. 在网络上查找可用的设备",
          "D. 建立安全的远程连接"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 75,
        "type": "single",
        "question": "下列静态路由器配置正确的是（）。",
        "options": [
          "A. ip route-static 129.1.0.0 16 serial 0",
          "B. ip route-static 10.0.0.2 16 129.1.0.0",
          "C. ip route-static 129.1.0.0 16 10.0.0.2",
          "D. ip route-static 129.1.0.0 255.255.0.0 10.0.0.2"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 76,
        "type": "single",
        "question": "在Linux操作系统中，（）配置文件用于存放本机主机名及经常访问IP地址的主机名，在对IP进行域名解析时，可以设定为先访问该文件，再访问DNS，最后访问NIS。",
        "options": [
          "A. /etc/hosts",
          "B. /etc/resolv.conf",
          "C. /etc/inted.conf",
          "D. /etc/host.conf"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 77,
        "type": "single",
        "question": "《中华人民共和国网络安全法》自（）起施行。",
        "options": [
          "A. 2018年1月1日",
          "B. 2017年6月1日",
          "C. 2025年1月1日",
          "D. 2019年6月1日"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 78,
        "type": "single",
        "question": "网络运营者应当对其收集的用户信息严格保密，并建立健全（）。",
        "options": [
          "A. 用户信息保密制度",
          "B. 用户信息保护制度",
          "C. 用户信息加密制度",
          "D. 用户信息保全制度"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 79,
        "type": "single",
        "question": "依法负有网络安全监督管理职责的部门及其工作人员，必须对在履行职责中知悉的（）严格保密，不得泄露、出售或者非法向他人提供。",
        "options": [
          "A. 个人信息",
          "B. 隐私",
          "C. 商业秘密",
          "D. 以上全是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 80,
        "type": "single",
        "question": "国家倡导诚实守信、（）的网络行为，推动传播社会主义核心价值观，采取措施提高全社会的网络安全意识和水平，形成全社会共同参与促进网络安全的良好环境。",
        "options": [
          "A. 自由平等",
          "B. 团结互助",
          "C. 健康文明",
          "D. 和平友爱"
        ],
        "analysis": "",
        "answer": 2
      }
    ]
  },
  {
    "set_name": "2026考证单选题241-320",
    "items": [
      {
        "id": 1,
        "type": "single",
        "question": "《中华人民共和国网络安全法》规定，网络运营者应当制定（），及时处置系统漏洞、计算机病毒、网络攻击、网络侵入等安全风险。",
        "options": [
          "A. 网络安全事件应急预案",
          "B. 网络安全事件补救措施",
          "C. 网络安全事件应急演练方案",
          "D. 网站安全规章制度"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 2,
        "type": "single",
        "question": "《中华人民共和国网络安全法》规定，（）应当为公安机关、国家安全机关依法维护国家安全和侦查犯罪的活动提供技术支持和协助。",
        "options": [
          "A. 电信科研机构",
          "B. 电信企业",
          "C. 网络合作商",
          "D. 网络运营者"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 3,
        "type": "single",
        "question": "计算机信息系统安全保护等级根据计算机信息系统在国家安全、经济建设、社会生活中的（），计算机信息系统受到破坏后对国家安全、社会秩序、公共利益以及公民、法人和其他组织的合法权益的（）等因素确定。",
        "options": [
          "A. 经济价值 经济损失",
          "B. 重要程度 危害程度",
          "C. 经济价值 危害程度",
          "D. 重要程度 经济损失"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 4,
        "type": "single",
        "question": "安全测评报告由（）报地级以上市公安机关公共信息网络安全监察部门。",
        "options": [
          "A. 安全服务机构",
          "B. 县级公安机关公共信息网络安全监察部门",
          "C. 测评机构",
          "D. 计算机信息系统运营、使用单位"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 5,
        "type": "single",
        "question": "根据《广东省计算机信息系统安全保护条例》规定，计算机信息系统的运营、使用单位没有向地级市以上人民政府公安机关备案的，由公安机关处以（）。",
        "options": [
          "A. 警告",
          "B. 拘留15",
          "C. 罚款1500元",
          "D. 警告或者停机整顿"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 6,
        "type": "single",
        "question": "根据网络安全等级保护分级管理标准，信息系统网络安全保护等级分为（）级?",
        "options": [
          "A. 3",
          "B. 4",
          "C. 5",
          "D. 6"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 7,
        "type": "single",
        "question": "计算机信息系统的（），应当遵守法律、行政法规和国家其他有关规定。",
        "options": [
          "A. 建设",
          "B. 应用",
          "C. 建设和应用",
          "D. 运行"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 8,
        "type": "single",
        "question": "运输、携带、邮寄计算机信息媒体进出境的，应当如实向（）申报。",
        "options": [
          "A. 公安部",
          "B. 新闻出版局",
          "C. 海关",
          "D. 本地人民政府"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 9,
        "type": "single",
        "question": "根据《中华人民共和国计算机信息系统安全保护条例》，以下属于计算机信息系统安全风险的是?",
        "options": [
          "A. 高速互联网连接",
          "B. 安装最新的操作系统",
          "C. 未经授权访问",
          "D. 定期备份数据"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 10,
        "type": "single",
        "question": "根据《中华人民共和国计算机信息系统安全保护条例》，以下哪种行为属于对计算机病毒的防范措施?",
        "options": [
          "A. 成功的网络攻击",
          "B. 及时的安全漏洞修复",
          "C. 安装未经验证的软件",
          "D. 数据的大规模传输"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 11,
        "type": "single",
        "question": "以下（）设备可以看作一种多端口的网桥设备。",
        "options": [
          "A. 中继器",
          "B. 交换机",
          "C. 路由器",
          "D. 集线器"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 12,
        "type": "single",
        "question": "STP桥优先级占（）位。",
        "options": [
          "A. 8",
          "B. 16",
          "C. 32",
          "D. 64"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 13,
        "type": "single",
        "question": "以下关于生成树协议中Forwarding状态描述错误的是（）。",
        "options": [
          "A. Forwarding状态的端口可以接收BPDU报文",
          "B. Forwarding状态的端口不学习报文MAC地址",
          "C. Forwarding状态的端口可以转发数据报文",
          "D. Forwarding状态的端口可以发送BPDU报文"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 14,
        "type": "single",
        "question": "RSTP协议增加了边缘端口的概念，使得连接终端设备的端口（）。",
        "options": [
          "A. 不参与STP计算，无需等待计时器超时",
          "B. 无法接收BPDU报文",
          "C. 无法接入交换机",
          "D. 简化配置"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 15,
        "type": "single",
        "question": "链路聚合端口成员应保证，除了（）。",
        "options": [
          "A. 端口成员速率一致",
          "B. 端口成员同属一个VLAN",
          "C. 端口成员所用传输介质相同",
          "D. 端口成员协商模式一致"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 16,
        "type": "single",
        "question": "路由器是根据（）来进行数据的转发。",
        "options": [
          "A. MAC地址",
          "B. IP地址",
          "C. 比特",
          "D. 数据段"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 17,
        "type": "single",
        "question": "以下关于默认路由的描述正确的是（）。",
        "options": [
          "A. 默认路由是一种特殊的静态路由",
          "B. 所有数据包都会按照默认路由进行转发",
          "C. 默认路由是路由表中的第一条路由",
          "D. 默认路由是路由表中的最后一条路由"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 18,
        "type": "single",
        "question": "以下哪个组播地址是OSPF路由协议所使用的（）。",
        "options": [
          "A. 224.0.0.6",
          "B. 224.0.0.7",
          "C. 224.0.0.9",
          "D. 224.0.0.10"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 19,
        "type": "single",
        "question": "运行OSPF协议的两台路由器无法正常建立邻居，不可能是以下那种因素（）。",
        "options": [
          "A. 验证不一致",
          "B. Hello计时器或dead计时器不一致",
          "C. 修改其中一台路由器的dr-priorty为0",
          "D. 区域设置不一致"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 20,
        "type": "single",
        "question": "（）标准引入正交频分复用技术，定义了5GHz频段高速物理层规范。",
        "options": [
          "A. IEEE 802.11c",
          "B. IEEE 802.11b",
          "C. IEEE 802.11a",
          "D. IEEE 802.11g"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 21,
        "type": "single",
        "question": "以下（）项不属于“胖”“瘦”AP两种技术的区别。",
        "options": [
          "A. 安全策略控制",
          "B. 灵活性",
          "C. 信道间干扰",
          "D. 集中管理配置"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 22,
        "type": "single",
        "question": "无线局域网的最初协议是（）。",
        "options": [
          "A. IEEE802.11",
          "B. IEEE802.5",
          "C. IEEE802.3",
          "D. IEEE802.1"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 23,
        "type": "single",
        "question": "IEEE802.11b标准采用了（）调制方式。",
        "options": [
          "A. FHSS",
          "B. DSSS",
          "C. OFDM",
          "D. MIMO"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 24,
        "type": "single",
        "question": "下面那个属于射频范围2.4GHz的物理层规范（）。",
        "options": [
          "A. 802.11g",
          "B. 802.11a",
          "C. 802.11e",
          "D. 802.11i"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 25,
        "type": "single",
        "question": "MIMO是以下哪种协议中支持的技术（）。",
        "options": [
          "A. 802.11n",
          "B. 802.11g",
          "C. 802.11ac",
          "D. 802.11a"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 26,
        "type": "single",
        "question": "同时支持2.4G和5G频段的802.11协议是以下哪一种（）。",
        "options": [
          "A. 802.11ac",
          "B. 802.11n",
          "C. 802.11B",
          "D. 802.11a"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 27,
        "type": "single",
        "question": "以下（）项不属于基于OFDM的调制方式。",
        "options": [
          "A. BPSK",
          "B. DBPSK",
          "C. QPSK",
          "D. QAM"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 28,
        "type": "single",
        "question": "关于“密码复杂性要求策略”的描述正确的是（）。",
        "options": [
          "A. 密码长度要求至少7位",
          "B. 在密码中至少要同时包括大/小写字母，数字和非字母符号的三种类型",
          "C. 不能包括全部的账户包，但可以包括账户名种的部分连续部分",
          "D. 不能是上次已使用过的密码"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 29,
        "type": "single",
        "question": "密码策略中的密码复杂性要求密码的长度至少几个字符（）。",
        "options": [
          "A. 6",
          "B. 7",
          "C. 8",
          "D. 9"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 30,
        "type": "single",
        "question": "密码策略中，关于密码复杂性的说法不正确的是（）。",
        "options": [
          "A. 建议使用大小写字母、数字和特殊字符组成密码",
          "B. 密码复杂性要求在创建新密码或更改密码时强制执行",
          "C. 复杂密码可以长期使用",
          "D. 要求密码有最小的长度，如六个字符"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 31,
        "type": "single",
        "question": "防止非法授权访问网络设备的方法不包括（）。",
        "options": [
          "A. 强制使用Telnet远程登录",
          "B. 使用基于用户名和加密密码的强认证方法",
          "C. 使用基于用户名的权限分配",
          "D. 使用ACL限制非法IP"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 32,
        "type": "single",
        "question": "等保2.0标准对集中管控提出明确要求:“应能够建立一条安全的信息传输路径”，即要求远程网管终端应通过（）方式连接，防止远程管理中信息泄露。",
        "options": [
          "A. HTTP",
          "B. HTTPS",
          "C. SSL",
          "D. SSH"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 33,
        "type": "single",
        "question": "等保2.0标准对集中管控提出明确要求:“应对网络链路、安全设备、网络设备和服务器等的运行状况进行集中检测”，即要求路由交换设备应配置（）服务。",
        "options": [
          "A. SMTP",
          "B. AAA",
          "C. SNMP",
          "D. SSH"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 34,
        "type": "single",
        "question": "网络互联设备系统命令采用分级保护方式，最高级别是（）。",
        "options": [
          "A. 0",
          "B. 1",
          "C. 10",
          "D. 15"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 35,
        "type": "single",
        "question": "网络互联设备系统命令采用分级保护方式，默认情况下2级可以（）。",
        "options": [
          "A. 使用网络诊断工具命令（ping、tracert）",
          "B. 用于系统维护，查看配置",
          "C. 进行业务操作，使用各个网络层次的配置命令",
          "D. 修改系统内部参数"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 36,
        "type": "single",
        "question": "对于路由器的用户可以设置两种用户权限。可赋予其哪两种访问权限?",
        "options": [
          "A. 非特权和特权",
          "B. 特权及普通用户",
          "C. 管理员及系统管理员",
          "D. 普通用户和系统管理员"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 37,
        "type": "single",
        "question": "在交换机配置mac地址和端口绑定的好处不包括（）。",
        "options": [
          "A. 解决IP地址盗用",
          "B. 防止ARP攻击",
          "C. 管理接入设备数量",
          "D. 进行流量审计"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 38,
        "type": "single",
        "question": "为防止员工随意更换工位上网以及冒用他人IP地址上网，建议在交换机配置（）。",
        "options": [
          "A. IP + PORT 绑定",
          "B. MAC + PORT 绑定",
          "C. IP + MAC绑定",
          "D. IP + MAC + PORT 绑定"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 39,
        "type": "single",
        "question": "交换机端口安全违规处理动作不包括（）。",
        "options": [
          "A. 丢弃数据帧，不产生警告",
          "B. 丢弃数据帧，产生警告",
          "C. 丢弃数据帧，将端口shutdown",
          "D. 转发数据帧，并产生警告"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 40,
        "type": "single",
        "question": "当交换机端口违规处理方式配置为protect时，在收到其他非安全mac地址数据帧时，交换机会（）。",
        "options": [
          "A. 继续转发数据帧",
          "B. 丢弃，不产生警告",
          "C. 丢弃，同时产生警告",
          "D. 丢弃，并将端口shutdown"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 41,
        "type": "single",
        "question": "以下关于WLAN安全机制的叙述中，（）是正确的。",
        "options": [
          "A. WPA是为建立无线网络安全环境提供的第一个安全机制",
          "B. WEP和IPSec协议一样，其目标都是通过加密无线电波来提供安全保证",
          "C. WEP2的初始化向量（IV）空间为64位",
          "D. WPA提供了比WEP更为安全的无线局域网接入方案"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 42,
        "type": "single",
        "question": "哪个WLAN的安全机制可以实现无线AP和认证服务器AS之间的双向认证。（）",
        "options": [
          "A. WPA",
          "B. WPA2",
          "C. WAPI",
          "D. EAP"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 43,
        "type": "single",
        "question": "WEP协议通过对无线帧的加密部分加入（）来提供数据完整性的验证。",
        "options": [
          "A. ICV",
          "B. IV",
          "C. MIC",
          "D. CRC"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 44,
        "type": "single",
        "question": "1x用于WLAN的安全认证，在无线客户端与（）之间进行身份的认证。",
        "options": [
          "A. AP",
          "B. AC",
          "C. AS",
          "D. WLAN交换机"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 45,
        "type": "single",
        "question": "在无线网络安全机制WAPI中，（）实现通信数据的加密传输。",
        "options": [
          "A. WAI",
          "B. WPI",
          "C. ASU",
          "D. AAA"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 46,
        "type": "single",
        "question": "使用WEP加密机制，64位和128位的加密算法分别对于输入（）的16进制字符作为密钥。",
        "options": [
          "A. 5位、16位",
          "B. 5位、26位",
          "C. 10位、16位",
          "D. 10位、26位"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 47,
        "type": "single",
        "question": "关于入侵检测系统（IDS），下面说法不正确的是（）。",
        "options": [
          "A. IDS的主要功能是对计算机和网络资源上的恶意使用行为进行识别和响应",
          "B. IDS需要配合安全审计系统才能应用，后者为前者提供审计分析资料",
          "C. IDS主要用于检测来自外部的入侵行为",
          "D. IDS可用于发现合法用户是否滥用特权"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 48,
        "type": "single",
        "question": "以下哪个属于IPS的功能?（）",
        "options": [
          "A. 检测网络攻击",
          "B. 网络流量检测",
          "C. 实时异常告警",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 49,
        "type": "single",
        "question": "IPS是指（）。",
        "options": [
          "A. 入侵检测系统",
          "B. 入侵保护系统",
          "C. 网络入侵系统",
          "D. 网络保护系统"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 50,
        "type": "single",
        "question": "以下关于入侵防御系统(IPS)的描述中，错误的是（）。",
        "options": [
          "A. IPS产品在网络中是在线旁路式工作，能保证处理方法适当而且可预知",
          "B. IPS能对流量进行逐字节检查，且可将经过的数据包还原为完整的数据流",
          "C. IPS提供主动、实时的防护，能检测网络层、传输层和应用层的内容",
          "D. 如果检测到攻击企图，IPS就会自动将攻击包丢掉或采取措施阻断攻击源"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 51,
        "type": "single",
        "question": "在Windows Server用户“密码策略”设置中，“密码必须符合复杂性要求”策略启用后，用户设置密码时必须满足（）要求。",
        "options": [
          "A. 必须使用大写字母、数字、小写字母和符号中的3种",
          "B. 密码最小长度为6位",
          "C. 必须使用大写字母、数字、小写字母和符号",
          "D. 密码长度没有限制"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 52,
        "type": "single",
        "question": "为组织创建适当的密码策略，每个用户必须遵守这个密码策略，下列正确的是（）。",
        "options": [
          "A. 定义“强制密码历史”可以使系统记忆几个以前使用过的密码，当用户密码到期时，用户将可重复使用以前的密码",
          "B. “密码最长期限”通常的时间间隔为30到60天",
          "C. “最短密码长度”可以使密码至少包含指定个数的字符",
          "D. 七位以上的短密码比长密码具有更强的安全性"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 53,
        "type": "single",
        "question": "下面不属于本地用户组密码安全策略的内容是（）。",
        "options": [
          "A. 密码必须符合复杂性要求",
          "B. 设定密码长度最小值",
          "C. 设定用户不能更改密码",
          "D. 强制密码历史"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 54,
        "type": "single",
        "question": "在Windows server中，账户策略中的（）对于域或本地用户账户，决定系统锁定账户的时间，以及锁定谁的账户。",
        "options": [
          "A. 审核策略",
          "B. Kerberos策略",
          "C. 密码策略",
          "D. 账户锁定策略"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 55,
        "type": "single",
        "question": "在“本地安全设置”中，用户账户锁定策略，当3次无效登录后，用户账户被锁定的实际时间是（）。",
        "options": [
          "A. 账户将一直被锁定，直到管理员明确解除对它的锁定",
          "B. 30分钟",
          "C. 账户锁定时间无效",
          "D. 10分钟"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 56,
        "type": "single",
        "question": "用户帐户被锁定，是因为（）。",
        "options": [
          "A. 帐户长时间没有被使用",
          "B. 帐户超过了帐户锁定阈值",
          "C. 系统管理员禁止该用户帐户",
          "D. 帐户超过使用期限"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 57,
        "type": "single",
        "question": "如果windows中帐户锁定阈值设置为0，表示（）。",
        "options": [
          "A. 用户帐户不会被锁定",
          "B. 用户帐户永久锁定",
          "C. 用户帐户密码输错一次以上永久锁定",
          "D. 用户帐户不能修改密码"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 58,
        "type": "single",
        "question": "您的网络包含一个active directory域。你有一个成员服务器运行域。你有一个成员服务器运行Windows Server 2008 R2。你需要立即停用到服务器的所有传入连接。你应该怎么做?",
        "options": [
          "A. 从服务管理单元中，禁用IP 助手",
          "B. 从服务管理单元中，禁用Netlogon 服务",
          "C. 从Windows防火墙，启用公共配置文件中“阻止所有连接选项”",
          "D. 从Windows防火墙，启用域配置文件中“阻止所有连接选项”"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 59,
        "type": "single",
        "question": "你的公司有一个单一的活动目录域。该公司通过网络防火墙保护。远程用户通过使用PPTP VPN服务器连接到网络。当用户尝试连接到VPN服务器，他们会收到以下错误信息:远程计算机没有响应?你需要确保用户能够建立VPN连接。你应该怎么做?",
        "options": [
          "A. 打开防火墙上的1423端口",
          "B. 打开防火墙上的1723端口",
          "C. 打开防火墙上的3389端口",
          "D. 打开防火墙上的6000端口"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 60,
        "type": "single",
        "question": "你的网络中有两台服务器分别名为Server1和Server2，两台服务器都运行Windows Server 2008 R2。Server1上有几条自定义入站规则和安全连接规则。你要将Server1上的这几条防火墙规则覆盖到Server2上，你该怎么做?",
        "options": [
          "A. 在命令提示符下，运行netsh.exe firewall dump",
          "B. 在命令提示符下，运行netsh.exe firewall show > firewall.txt",
          "C. 在高级安全Windows防火墙控制台，单击“导出策略”",
          "D. 在高级安全Windows防火墙控制台，单击“安全连接规则”，然后单击“导出列表”"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 61,
        "type": "single",
        "question": "要审核每个用户帐户登录或注销成功还是失败，需要在审核策略的（）中勾选“成功”和“失败”。",
        "options": [
          "A. 审核登录事件",
          "B. 审核帐户管理",
          "C. 审核系统事件",
          "D. 审核特权使用"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 62,
        "type": "single",
        "question": "下列哪个命令是将用户密码的最大天数设为30天?（）",
        "options": [
          "A. chage -W 30 testuser",
          "B. chage -M 30 testuser",
          "C. chage -D 30 testuser",
          "D. chage -E 30 testuser"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 63,
        "type": "single",
        "question": "以下不属于防火墙能够实现的功能是（）。",
        "options": [
          "A. 网络地址转换",
          "B. 差错控制",
          "C. 数据包过滤",
          "D. 数据转发"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 64,
        "type": "single",
        "question": "rule permit ip source 210.78.1.1 0.0.255.255 destination202.38.5.2 0.0.0.0的含义是（）。",
        "options": [
          "A. 允许主机210.78.1.1访问主机202.38.5.2",
          "B. 允许210.78.0.0的网络访问202.38.0.0的网络",
          "C. 允许主机202.38.5.2访问网络210.78.0.0",
          "D. 允许210.78.0.0的网络访问主机202.38.5.2"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 65,
        "type": "single",
        "question": "以下关于终端安全保护系统的功能，描述不正确的是（）。",
        "options": [
          "A. 能自动发现和收集终端计算机资产，使企业清楚知道并统一管理IT资产",
          "B. 支持可信软件统一分发",
          "C. 被动防御",
          "D. 终端接入受控"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 66,
        "type": "single",
        "question": "以下关于终端安全的防御措施的描述，不正确的是（）。",
        "options": [
          "A. 进行终端上的用户上网行为管控",
          "B. 所有终端必须安装最新版的杀毒软件，至少windows的客户端是必须安装的，并且制定定期更新病毒库策略",
          "C. 所有办公终端、生产终端禁止外接USB、串口等设备",
          "D. 保障终端安全，只要有必要的技术手段支持就行，其他的因素没什么影响"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 67,
        "type": "single",
        "question": "以下关于终端安全的描述，不正确的是（）。",
        "options": [
          "A. 所有办公终端（Windows系统）必须加入活动目录，开启密码复杂度要求，最小化用户权限，利用组策略下发终端安全策略，如审计、最小化授权等措施",
          "B. 一般打印终端都不存在安全风险，为提高工作效率，均不采用集中打印模式",
          "C. 所有办公终端、生产终端禁止随意安装软件，须制定软件白名单，未在其中的软件直接拒绝安装或者运行，防止恶意软件、木马等程序被有意无意的调用",
          "D. 终端安全中审计有着至关重要的作用，利用ad开启所有办公终端的audit功能，针对登陆失败、成功等关键动作进行记录是最基本的策略之一"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 68,
        "type": "single",
        "question": "与传统端点安全防护采用预设安全策略的静态防御技术相比，下列有关EDR描述的说法中，错误的是（）。",
        "options": [
          "A. EDR加强了威胁检测的能力",
          "B. EDR加强了响应取证的能力",
          "C. EDR可以在威胁造成危害后立即进行检测和阻止",
          "D. EDR具有能够快速检测、识别、监控和处理端点事件的能力"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 69,
        "type": "single",
        "question": "目前主流的EDR通常采用B/S部署架构，通过控制中心的管理平台即可实现桌面资产、服务器资产的（）管理。",
        "options": [
          "A. 独立",
          "B. 分散",
          "C. 统一",
          "D. 周期"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 70,
        "type": "single",
        "question": "EDR安全模型中的系统加固是指定期进行漏洞扫描、补丁修复、（）和更新端点软件清单，通过软件白名单限制未经授权的软件运行，通过主机防火墙限制未经授权的服务端口开放，并定期检查和清理内部人员的账号和授权信息。",
        "options": [
          "A. 异常行为分析",
          "B. 攻击指示器",
          "C. 安全策略设置",
          "D. 主动扫描资产"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 71,
        "type": "single",
        "question": "使用的防病毒软件可以（）。",
        "options": [
          "A. 查出易感染的任何病毒",
          "B. 查出已知名的病毒，清除一部分病毒",
          "C. 清除任何已感染的病毒",
          "D. 查出并清除任何病毒"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 72,
        "type": "single",
        "question": "防病毒软件的工作原理不包含（）。",
        "options": [
          "A. 防病毒软件会定期更新病毒特征数据库，在计算机上扫描文件和程序，检测是否存在已知的病毒",
          "B. 防病毒软件会运行在后台监控计算机的活动，并实时检测潜在的威胁",
          "C. 防病毒软件能在接收和发送电子邮件时扫描附件，过滤掉包含病毒的邮件",
          "D. 安装防病毒软件后就再也不用担心计算机病毒的威胁了，无须定时升级"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 73,
        "type": "single",
        "question": "对于杀毒软件扫描到的病毒文件，一般采取的杀毒方式是（）。",
        "options": [
          "A. 清除",
          "B. 删除",
          "C. 禁止访问",
          "D. 不处理"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 74,
        "type": "single",
        "question": "杀毒软件中的网络防护主要保护计算机在使用过程中，对网络危险行为的防御。（）不属于网络防护的范围。",
        "options": [
          "A. 僵尸网络防护",
          "B. Web服务保护",
          "C. 恶意网址拦截",
          "D. 软件安装拦截"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 75,
        "type": "single",
        "question": "（）不属于防病毒软件病毒查杀的方法。",
        "options": [
          "A. 检测可疑文件的签名并进行比对",
          "B. 基于启发式的侦测技术的查杀方法",
          "C. 基于行为侦测技术的查杀方法",
          "D. 基于结果侦测技术的查杀方法"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 76,
        "type": "single",
        "question": "防病毒软件中经常自带（）工具，可以清理不必要的系统垃圾、缓存文件、无效注册表等，节省电脑使用空间。",
        "options": [
          "A. 弹窗拦截",
          "B. 文件粉碎",
          "C. 垃圾清理",
          "D. 右键管理"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 77,
        "type": "single",
        "question": "防病毒软件中的（）功能是根据您设定的上网时间来对电脑联网功能进行控制。",
        "options": [
          "A. 上网行为控制",
          "B. 上网时段控制",
          "C. 网站内容控制",
          "D. 程序执行控制"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 78,
        "type": "single",
        "question": "关于防病毒软件防护中心配置的方法，下列说法有误的是（）。",
        "options": [
          "A. 查杀病毒的处理方式一般有“自动处理”和“询问”两种方式供用户选择",
          "B. 查杀病毒的处理方式，通常默认设置是“清除病毒时先备份至隔离区”",
          "C. 主流的防病毒软件防护中心配置中，通常都会有类似“信任区”和“隔离区”的配置选项",
          "D. 配置为全盘查杀模式杀毒速度快，杀毒更彻底"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 79,
        "type": "single",
        "question": "IIS即Internet（）服务，是微软公司开发的Web服务器应用程序。",
        "options": [
          "A. 邮件",
          "B. 信息",
          "C. 网络",
          "D. 域名"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 80,
        "type": "single",
        "question": "下列（）服务可以由IIS提供。1 www 2 ftp 3 smtp 4 nntp",
        "options": [
          "A. 1、2",
          "B. 1、2、3",
          "C. 1、3、4",
          "D. 1、2、3、4"
        ],
        "analysis": "",
        "answer": 3
      }
    ]
  },
  {
    "set_name": "2026考证多选题",
    "items": [
      {
        "id": 1,
        "type": "multiple",
        "question": "我国网络安全法律体系的特点包括（）。",
        "options": [
          "A. 以《网络安全法》为基本法统领，覆盖各个领域",
          "B. B、部门规章及以下文件占多数",
          "C. C、涉及多个管理部门",
          "D. D、内容涵盖网络安全管理、保障、责任各个方面"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 2,
        "type": "multiple",
        "question": "我国网络安全法律体系的特点包括（）。",
        "options": [
          "A. 以《网络安全法》为基本法统领，覆盖各个领域",
          "B. B、部门规章及以下文件占多数",
          "C. C、涉及多个管理部门",
          "D. D、内容涵盖网络安全管理、保障、责任各个方面"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 3,
        "type": "multiple",
        "question": "网络安全，是指通过采取必要措施，防范对网络的攻击、侵入、干扰、破坏和非法使用以及意外事故，使网络处于稳定可靠运行的状态，以及保障网络数据的（）的能力。",
        "options": [
          "A. 真实性",
          "B. B、完整性",
          "C. C、保密性",
          "D. D、可用性"
        ],
        "analysis": "",
        "answer": [
          1,
          2,
          3
        ]
      },
      {
        "id": 4,
        "type": "multiple",
        "question": "实施网络安全管理的关键成功因素包括（）。",
        "options": [
          "A. 向所有管理者和员工有效地推广安全意识",
          "B. B、向所有管理者、员工及其他伙伴方分发信息安全策略、指南和标准",
          "C. C、为网络安全管理活动提供资金支持",
          "D. D、提供适当的培训和教育"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 5,
        "type": "multiple",
        "question": "SQL注入攻击有可能产生（）危害。",
        "options": [
          "A. 网页被挂木马",
          "B. B、恶意篡改网页内容",
          "C. C、未经授权状况下操作数据库中的数据",
          "D. D、私自添加系统账号"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 6,
        "type": "multiple",
        "question": "以下属于弥补openSSL安全漏洞措施的是（）。",
        "options": [
          "A. 更新补丁",
          "B. B、更新X.509证书",
          "C. C、更换泄露的密钥",
          "D. D、杀毒"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 7,
        "type": "multiple",
        "question": "降低计算机病毒的影响范围就必须有效的控制计算机病毒的传播途径，下列属于计算机病毒传播途径的是（）。",
        "options": [
          "A. 通过文件共享传播",
          "B. B、通过电子邮件传播",
          "C. C、通过WEB网页传播",
          "D. D、通过系统漏洞传播"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 8,
        "type": "multiple",
        "question": "下列有关计算机病毒的说法中，正确的是（）。",
        "options": [
          "A. 计算机病毒可以通过WORD文档进行传播",
          "B. B、用杀毒软件将存储介质杀毒之后，该存储介质仍会再染病毒",
          "C. C、计算机病毒可以自动生成",
          "D. D、计算机病毒在某些条件下被激活之后，才开始起干扰和破坏作用"
        ],
        "analysis": "",
        "answer": [
          0,
          2,
          3
        ]
      },
      {
        "id": 9,
        "type": "multiple",
        "question": "对社会工程学攻击解释中意思贴近的是（）。",
        "options": [
          "A. 计算机存在逻辑错误",
          "B. B、人做出错误判断",
          "C. C、攻击者的计算机知识",
          "D. D、多种攻击技术复合"
        ],
        "analysis": "",
        "answer": [
          1,
          3
        ]
      },
      {
        "id": 10,
        "type": "multiple",
        "question": "在地址翻译原理中，防火墙根据什么来使用传输到相同的IP发送给内部不同的主机上（）。",
        "options": [
          "A. 防火墙记录的目的端口",
          "B. B、防火墙使用广播的方式发送",
          "C. C、防火墙根据每个包的时间顺序",
          "D. D、防火墙根据每个包的TCP序列号"
        ],
        "analysis": "",
        "answer": [
          0,
          3
        ]
      },
      {
        "id": 11,
        "type": "multiple",
        "question": "防火墙有哪些缺点和不足?（）",
        "options": [
          "A. 防火墙不能抵抗最新的未设置策略的攻击漏洞",
          "B. B、防火墙的并发连接数限制容易导致拥塞或者溢出",
          "C. C、防火墙对服务器合法开放的端口的攻击大多无法阻止",
          "D. D、防火墙可以阻止内部主动发起连接的攻击"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 12,
        "type": "multiple",
        "question": "主机系统高可用技术包括以下哪些工作模式（）。",
        "options": [
          "A. 双机热备份方式",
          "B. B、双机互备方式",
          "C. C、多处理器协同方式",
          "D. D、群集并发存取方式"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          3
        ]
      },
      {
        "id": 13,
        "type": "multiple",
        "question": "下列关于网络信息安全说法正确的有（）。",
        "options": [
          "A. 网络运营者应当对其收集的用户信息严格保密",
          "B. B、网络运营者应妥善管理用户信息，无需建立用户信息保护制度",
          "C. C、网络运营者不得泄露、篡改、毁损其收集的个人信息",
          "D. D、在经过处理无法识别特定个人且不能复原的情况下，未经被收集者同意，网络运营者不得向他人提供个人信息"
        ],
        "analysis": "",
        "answer": [
          0,
          2
        ]
      },
      {
        "id": 14,
        "type": "multiple",
        "question": "某单位信息内网的一台计算机上一份重要文件泄密，但从该计算机上无法获得泄密细节和线索，可能的原因是（）。",
        "options": [
          "A. 该计算机未开启审计功能",
          "B. B、该计算机审计日志未安排专人进行维护",
          "C. C、该计算机感染了木马",
          "D. D、该计算机存在系统漏洞"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 15,
        "type": "multiple",
        "question": "加密的强度主要取决于（）。",
        "options": [
          "A. 算法的强度",
          "B. B、密钥的保密性",
          "C. C、明文的长度",
          "D. D、密钥的强度"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          3
        ]
      },
      {
        "id": 16,
        "type": "multiple",
        "question": "AIX中采用没有警告的快速关机可以用（）或（）命令。",
        "options": [
          "A. #shutdown -F",
          "B. B、#halt",
          "C. C、backup",
          "D. D、restore"
        ],
        "analysis": "",
        "answer": [
          0,
          1
        ]
      },
      {
        "id": 17,
        "type": "multiple",
        "question": "以下是按照计算机规模分类的是（）。",
        "options": [
          "A. 巨型机",
          "B. B、移动电脑",
          "C. C、大型机",
          "D. D、小型机",
          "E. E、微型机"
        ],
        "analysis": "",
        "answer": [
          0,
          2,
          3,
          4
        ]
      },
      {
        "id": 18,
        "type": "multiple",
        "question": "电力监控系统安全防护的总体原则是（）。",
        "options": [
          "A. 安全分区",
          "B. B、网络专用",
          "C. C、横向隔离",
          "D. D、纵向认证"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 19,
        "type": "multiple",
        "question": "以下哪些属于IX1500的RAID特性?（）",
        "options": [
          "A. RAID级别转换",
          "B. B、RAID容量扩展",
          "C. C、RAID缓存掉电72小时保护",
          "D. D、RAID6支持"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 20,
        "type": "multiple",
        "question": "元数据的来源包括（）。",
        "options": [
          "A. 通过用户交互、定义和数据分析定义业务元数据",
          "B. B、通过某些维护支持活动可以将有关数据的质量描述和其他发现添加到源数据储存库中，或从IT系统中获取元数据",
          "C. C、可以在汇总层面或者细节层面识别元数据",
          "D. D、对相关元数据的适当管理和在元数据之间导航是重要的使用需求"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 21,
        "type": "multiple",
        "question": "下列一组数中，比八进制37大的有（）。",
        "options": [
          "A. 11011001B",
          "B. B、75D",
          "C. C、37D",
          "D. D、2A7H",
          "E. E、50D"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      {
        "id": 22,
        "type": "multiple",
        "question": "计算机后门的作用包括（）。",
        "options": [
          "A. 方便下次直接进入",
          "B. B、监视用户所有隐私",
          "C. C、监视用户所有行为",
          "D. D、完全控制用户主机"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 23,
        "type": "multiple",
        "question": "由于跨站脚本攻击漏洞而造成的危害的是（）。",
        "options": [
          "A. 网站挂马",
          "B. B、盗窃企业重要的具有商业价值的资料",
          "C. C、访问未授权的页面和资源",
          "D. D、盗取各类用户账号"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          3
        ]
      },
      {
        "id": 24,
        "type": "multiple",
        "question": "拒绝服务攻击方式包括（）。",
        "options": [
          "A. 利用大量数据挤占网络带宽",
          "B. B、利用大量请求消耗系统性能",
          "C. C、利用协议实现缺陷",
          "D. D、利用系统处理方式缺陷"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 25,
        "type": "multiple",
        "question": "社会工程学利用的人性弱点包括（）。",
        "options": [
          "A. 信任权威",
          "B. B、信任共同爱好",
          "C. C、期望守信",
          "D. D、期望社会认可"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 26,
        "type": "multiple",
        "question": "以下哪些是IPSAN的优点:（）。",
        "options": [
          "A. 实现弹性扩展的存储网络，能自适应应用的改变",
          "B. B、已经验证的传输设备保证运行的可靠性",
          "C. C、以太网从1G向10G及更高速过渡，只需通过简单的升级便可得到极大的性能提升，并保护投资",
          "D. D、大量熟悉的网络技术和管理的人才减少培训和人力成本",
          "E. E、IP跨长距离扩展能力，轻松实现远程数据复制和灾难恢复"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      {
        "id": 27,
        "type": "multiple",
        "question": "异常信息包含了针对开发和维护人员调试使用的系统信息，为了避免攻击者发现潜在缺陷并进行攻击的情况，在设计异常信息时应注意（）。",
        "options": [
          "A. 使用结构化异常处理机制",
          "B. B、程序发生异常时，应终止当前业务，并对当前业务进行回滚操作",
          "C. C、通信双方中一方在一段时间内未作反应，另一方自动结束会话",
          "D. D、程序发生异常时，应在日志中记录详细的错误消息"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 28,
        "type": "multiple",
        "question": "服务台人员在为用户提供支持服务时，（）。",
        "options": [
          "A. 必须礼貌、真诚的提供服务",
          "B. B、对待用户应耐心",
          "C. C、仔细倾听用户的描述",
          "D. D、提出积极的建议"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 29,
        "type": "multiple",
        "question": "鼠标是一种新型的（）设备。",
        "options": [
          "A. 输入设备",
          "B. B、通信设备",
          "C. C、控制设备",
          "D. D、输出设备"
        ],
        "analysis": "",
        "answer": [
          0,
          2
        ]
      },
      {
        "id": 30,
        "type": "multiple",
        "question": "国家实行网络安全等级保护制度。网络运营者应当按照网络安全等级保护制度的要求，履行下列安全保护义务，保障网络免受干扰、破坏或者未经授权的访问，防止网络数据泄露或者被窃取、篡改:（）。",
        "options": [
          "A. 制定内部安全管理制度和操作规程，确定网络安全负责人，落实网络安全保护责任",
          "B. B、采取防范计算机病毒和网络攻击、网络侵入等危害网络安全行为的技术措施",
          "C. C、采取监测、记录网络运行状态、网络安全事件的技术措施，并按照规定留存相关的网络日志不少于六个月",
          "D. D、采取数据分类、重要数据备份和加密等措施"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 31,
        "type": "multiple",
        "question": "《网络安全法》规定，网络空间主权的内容包括（）。",
        "options": [
          "A. 国内主权",
          "B. B、依赖性主权",
          "C. C、独立权",
          "D. D、自卫权"
        ],
        "analysis": "",
        "answer": [
          0,
          2,
          3
        ]
      },
      {
        "id": 32,
        "type": "multiple",
        "question": "OSI安全体系为异构计算机的进程与进程之间的通信安全性，定义了五类安全服务，以下属于这五类安全服务的是（）。",
        "options": [
          "A. 机密性",
          "B. B、完整性",
          "C. C、鉴别",
          "D. D、防抵赖"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 33,
        "type": "multiple",
        "question": "在系统投运前，应对系统运行的稳定性、安全性进行严格测试，包括检查（）等。",
        "options": [
          "A. 应用系统是否存在安全漏洞和隐患",
          "B. B、安装最新的补丁软件",
          "C. C、关闭不必要的服务端口和不必要的服务进程",
          "D. D、删除不必要的用户"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 34,
        "type": "multiple",
        "question": "信息机房各出入口应安排专人值守或配置电子门禁系统，（）、（）和（）进入的人员。",
        "options": [
          "A. 控制",
          "B. B、封闭",
          "C. C、识别",
          "D. D、记录"
        ],
        "analysis": "",
        "answer": [
          0,
          2,
          3
        ]
      },
      {
        "id": 35,
        "type": "multiple",
        "question": "木马的常见传播途径有（）。",
        "options": [
          "A. 邮件附件",
          "B. B、下载文件",
          "C. C、网页",
          "D. D、聊天工具"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 36,
        "type": "multiple",
        "question": "关于交换机帧转发的描述中，正确的是（）。",
        "options": [
          "A. 直接交换是指交换机接到帧就直接转发",
          "B. B、存储转发交换是指交换机接收到帧，先校验整个帧，然后再转发",
          "C. C、改进的直接交换是指交换机接收到帧，先校验帧的目的地址，然后再转发",
          "D. D、改进的直接交换是指交换机接收到帧，先校验帧的前64B，然后再转发"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          3
        ]
      },
      {
        "id": 37,
        "type": "multiple",
        "question": "软件盗版是指未经授权对软件进行复制、仿制、使用或生产。下面属于软件盗版的形式是（）。",
        "options": [
          "A. 使用的是计算机销售公司安装的非正版软件",
          "B. B、网上下载的非正版软件——“非正版软件”是指使用没花钱的软件",
          "C. C、自己解密的非正版软件",
          "D. D、使用试用版的软件"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 38,
        "type": "multiple",
        "question": "网络运营者建立企业的管理制度和操作流程，以满足法律合规性的要求，避免法律风险，主要包括（）。",
        "options": [
          "A. 健全用户信息保护制度",
          "B. B、落实网络实名制",
          "C. C、网络安全事件应急预案",
          "D. D、关键信息基础设施的安全保护义务"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 39,
        "type": "multiple",
        "question": "狠抓网络安全责任落实和绩效考核。构建（）的网络安全管理体系、（）。",
        "options": [
          "A. 管理统一、职责明确、工作界面清晰",
          "B. B、管理有效、权责明确、工作界面清楚",
          "C. C、技术体系、监督体系和保障体系",
          "D. D、技术体系、稽查体系和保障体系"
        ],
        "analysis": "",
        "answer": [
          0,
          2
        ]
      },
      {
        "id": 40,
        "type": "multiple",
        "question": "下列关于内外网邮件系统说法正确的有（）。",
        "options": [
          "A. 严禁使用未进行内容审计的信息内外网邮件系统",
          "B. B、严禁用户使用默认口令作为邮箱密码",
          "C. C、严禁内外网邮件系统开启自动转发功能",
          "D. D、严禁用户使用互联网邮箱处理公司办公业务"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 41,
        "type": "multiple",
        "question": "下列哪些属于服务器硬件的冗余?（）",
        "options": [
          "A. 磁盘冗余",
          "B. B、电源冗余",
          "C. C、网卡冗余",
          "D. D、双机冗余"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 42,
        "type": "multiple",
        "question": "下述描述中，正确的是（）。",
        "options": [
          "A. 设置了交换机的管理地址后，就可使用Telnet方式来登录连接交换机，并实现对交换机的管理与配置",
          "B. B、首次配置交换机时，必须采用Console口登录配置",
          "C. C、默认情况下，交换机的所有端口均属于VLAN1，设置管理地址，实际上就是设置VLAN1接口的地址",
          "D. D、交换机允许同时建立多个Telnet登录连接"
        ],
        "analysis": "",
        "answer": [
          1,
          2,
          3
        ]
      },
      {
        "id": 43,
        "type": "multiple",
        "question": "国家采取措施，（）来源于中华人民共和国境内外的网络安全风险和威胁，保护关键信息基础设施免受攻击、侵入、干扰和破坏。",
        "options": [
          "A. 监测",
          "B. B、防御",
          "C. C、处置",
          "D. D、隔离"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 44,
        "type": "multiple",
        "question": "属于安全闭环组成部分的是（）。",
        "options": [
          "A. 检测",
          "B. B、响应",
          "C. C、防护",
          "D. D、预警"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 45,
        "type": "multiple",
        "question": "系统等保定级主要包括以下几个步骤:（）。",
        "options": [
          "A. 系统识别和描述",
          "B. B、信息系统划分",
          "C. C、系统的运行维护",
          "D. D、安全等级确定"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          3
        ]
      },
      {
        "id": 46,
        "type": "multiple",
        "question": "《危险化学品安全管理条例》（国务院令第491号）的目标:（）。",
        "options": [
          "A. 加强危险化学品的安全管理",
          "B. B、预防和减少危险化学品事故",
          "C. C、保障人民群众生命财产安全",
          "D. D、保护环境"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 47,
        "type": "multiple",
        "question": "根据《中国南方电网有限责任公司IT服务管理办法（2014年）》，IT服务管理事件经理职责:（）。",
        "options": [
          "A. 负责事件解决过程中的协调和监控",
          "B. B、负责事件升级的判断与执行",
          "C. C、负责与其它流程经理的沟通与协调",
          "D. D、负责收集、分析事件数据，发现潜在问题"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 48,
        "type": "multiple",
        "question": "逻辑强隔离装置部署在应用服务器与数据库服务器之间，实现（）功能。",
        "options": [
          "A. 访问控制",
          "B. B、网络强隔离",
          "C. C、地址绑定",
          "D. D、防SQL注入攻击"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 49,
        "type": "multiple",
        "question": "物联网工程师证书是根据国家工信部门要求颁发的一类物联网专业领域下工业和信息化领域人才证书，除物联网工程师外，还有哪些方向（）。",
        "options": [
          "A. 节能环保工程师",
          "B. B、物联网系统工程师",
          "C. C、智能电网工程师",
          "D. D、智能物流工程师"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 50,
        "type": "multiple",
        "question": "数据备份系统由哪几部分组成:（）。",
        "options": [
          "A. 备份服务器",
          "B. B、备份网络",
          "C. C、备份设备",
          "D. D、备份软件",
          "E. E、磁盘阵列"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 51,
        "type": "multiple",
        "question": "计算机中通常使用的三种数据单位包括（）。",
        "options": [
          "A. 位",
          "B. B、编码",
          "C. C、字",
          "D. D、字节",
          "E. E、字段"
        ],
        "analysis": "",
        "answer": [
          0,
          2,
          3
        ]
      },
      {
        "id": 52,
        "type": "multiple",
        "question": "关于“心脏出血”漏洞的阐述正确的是（）。",
        "options": [
          "A. 通过读取网络服务器内存，攻击者可以访问敏感数据",
          "B. B、该病毒可使用户心脏出血",
          "C. C、心脏出血漏洞是“灾难性的”",
          "D. D、“心脏出血”漏洞的危险性在于，它要比一般的漏洞潜伏得更深"
        ],
        "analysis": "",
        "answer": [
          0,
          2,
          3
        ]
      },
      {
        "id": 53,
        "type": "multiple",
        "question": "中间件的优势特点是（）。",
        "options": [
          "A. 面向程序设计人员",
          "B. B、缩短应用程序开发周期",
          "C. C、节约开发成本",
          "D. D、减少系统初期建设成本"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      }
    ]
  },
  {
    "set_name": "2026考证判断题",
    "items": [
      {
        "id": 1,
        "type": "judge",
        "question": "国家鼓励开发网络数据安全保护和利用技术，促进公共图书馆资源开放，推动技术创新和经济社会发展。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 2,
        "type": "judge",
        "question": "国家鼓励开发网络数据安全保护和利用技术，促进公共图书馆资源开放，推动技术创新和经济社会发展。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 3,
        "type": "judge",
        "question": "任意翻阅同事文件资料的行为违反职业行为规范。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 4,
        "type": "judge",
        "question": "运算器是计算机对数据进行加工处理的部件，主要执行加、减、乘、除等算术运算。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 5,
        "type": "judge",
        "question": "快速格式化会检测是否有坏扇区。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 6,
        "type": "judge",
        "question": "计算机软件按其用途及实现的功能不同可分为系统软件和应用软件两大类。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 7,
        "type": "judge",
        "question": "计算机能直接识别汇编语言程序。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 8,
        "type": "judge",
        "question": "利用多媒体计算机可以进行观看VCD、听音乐、玩游戏、录放音等操作。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 9,
        "type": "judge",
        "question": "在Windows系统中，对于C盘上被删除的文件均在回收站中。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 10,
        "type": "judge",
        "question": "开放系统互连参考模型（OSI）中，网络层以数据包的形式传输数据流。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 11,
        "type": "judge",
        "question": "当IP报文在internet中运动的时候，每经过一台路由器，IP报文的TTL字段的值就被路由器减1，如果该字段的值被减为0，则这个报文就会被设备丢弃。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 12,
        "type": "judge",
        "question": "12.30.0.1是B类IP地址。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 13,
        "type": "judge",
        "question": "TCP分段中，有字段被称为序号sequence number，它代表着该TCP分段自身的序号，接受该分段的一方可以根据这个序号判断是否存在分段重收，或者漏收的情况。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 14,
        "type": "judge",
        "question": "UDP报文没有数据报文和控制报文之分，所有UDP报文都是UDP数据报文。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 15,
        "type": "judge",
        "question": "目前Internet上基于以太网的网络设备多数使用长地址类型的物理地址。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 16,
        "type": "judge",
        "question": "配置同一台交换机 VLANIF 接口的 IP 地址可以相同。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 17,
        "type": "judge",
        "question": "网络地址转换技术又称为NAT技术，它的基本作用是实现私网地址转换成公网地址，不能将公网地址转换成私网地址。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 18,
        "type": "judge",
        "question": "如果更改了 AP 射频的配置参数，必须重启 AP 后命令才能生效。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 19,
        "type": "judge",
        "question": "当客户端出现可以连接到无线网络，也可以访问外网，但网络速度较慢的情况时，可能是此位置的信号强度不够或者当前 AP 设备断电。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 20,
        "type": "judge",
        "question": "Linux 没有像 Windows那样的桌面系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 21,
        "type": "judge",
        "question": "用户登录之前需按 Ctrl+Alt+Del 可确保用户输入其密码时通过信任的路径进行通信。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 22,
        "type": "judge",
        "question": "基于端口的VLAN划分方式，可以利用交换机把网络划分成多个vlan，一般情况下交换机默认的vlan是vlan1。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 23,
        "type": "judge",
        "question": "将交换机端口配置成trunk口后，可以根据网络情况配置Trunk端口允许哪些VLAN的数据帧通过。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 24,
        "type": "judge",
        "question": "STP确定交换机的根端口是由BID、RPC、PID共同决定。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 25,
        "type": "judge",
        "question": "为方便对路由器的管理，通常会对路由器改名和设置管理地址，并将管理地址宣告进路由协议中去。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 26,
        "type": "judge",
        "question": "OSPF通过路由协议算法可以生成一棵无环的最短路径树，因而OSPF路由协议没有环路问题。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 27,
        "type": "judge",
        "question": "SNMP 报文是通过 UDP 来承载的。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 28,
        "type": "judge",
        "question": "只要用户远程登录交换机，就能够执行任何命令。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 29,
        "type": "judge",
        "question": "华为的管理级用户权限，能够允许切换设备主备板件。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 30,
        "type": "judge",
        "question": "一个组中可以根据需要包含多个用户帐户。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 31,
        "type": "judge",
        "question": "职业道德是事业成功的保证。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 32,
        "type": "judge",
        "question": "爱岗敬业是对员工的基本要求。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 33,
        "type": "judge",
        "question": "计算机系统包含硬件系统和操作系统两大部分。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 34,
        "type": "judge",
        "question": "人和计算机进行信息交换是通过输入输出设备实现的。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 35,
        "type": "judge",
        "question": "三层交换机主要用于骨干网络和连接子网。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 36,
        "type": "judge",
        "question": "计算机中最小单位是二进制的一个数位。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 37,
        "type": "judge",
        "question": "应用软件的作用是扩大计算机的存储容量。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 38,
        "type": "judge",
        "question": "操作系统直接作用于硬件上，并为其它软件提供支持。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 39,
        "type": "judge",
        "question": "在OSI 参考模型中，网络层的功能主要是。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 40,
        "type": "judge",
        "question": "TCP/IP 模型的网络接口层对应于 OSI 模型的物理层、数据链路层和网络层。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 41,
        "type": "judge",
        "question": "IP地址219.25.23.56的缺省子网掩码有16位。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 42,
        "type": "judge",
        "question": "ipv6 地址 1070:0:0:0:8:0:0:417a 可以简写为 1070::8::417a。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 43,
        "type": "judge",
        "question": "TCP 连接的建立是一个三次握手的过程，而 TCP 连接的终止则要经过四次握手。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 44,
        "type": "judge",
        "question": "Ping命令的输出信息中包括目的地址、ICMP报文长度、序号、TTL值、以及往返时间。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 45,
        "type": "judge",
        "question": "网络规划设计的时候，应充分考虑用户功能需求、物理布局、设备类型、网络负载等综合情况。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 46,
        "type": "judge",
        "question": "养成职业道德习惯是职业道德教育的内容之一。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 47,
        "type": "judge",
        "question": "服从管理，不问对属于职业守则。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 48,
        "type": "judge",
        "question": "微型计算机的CPU主要由运算器和控制器组成。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 49,
        "type": "judge",
        "question": "文件误删除之后不要重启或者关闭系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 50,
        "type": "judge",
        "question": "计算机的软件是指计算机中的指令的集合。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 51,
        "type": "judge",
        "question": "计算机能直接执行机器语言程序。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 52,
        "type": "judge",
        "question": "一个完整的多媒体计算机系统，应包含三个组成部分，它们分别是文字处理系统、声音处理系统和图像处理系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 53,
        "type": "judge",
        "question": "在Windows系统中，对话框的形状是一个矩形框，在默认状态下，其大小是不能改变的。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 54,
        "type": "judge",
        "question": "DNS 工作于OSI 参考模型的网络层，在信道上传输原始的比特流。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 55,
        "type": "judge",
        "question": "IP报文中的部分字段的含义包含源mac地址。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 56,
        "type": "judge",
        "question": "254.220.0.9是B类IP地址。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 57,
        "type": "judge",
        "question": "由于 TCP 协议在建立连接和关闭连接时都采用三次握手制，所以 TCP 支持可靠传输。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 58,
        "type": "judge",
        "question": "UDP协议并不去处理报文的丢失、重复、时延、乱序等各种问题，而是让应用层来保证信息的可靠性传输。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 59,
        "type": "judge",
        "question": "DNS用来把具有可读性的MAC地址映射成IP地址。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 60,
        "type": "judge",
        "question": "二层交换机属于数据链路层设备，可以识别数据帧中的 mac 地址信息，根据 mac 地址转发数据，并将这些 mac 地址与对应的端口信息记录在自己的 mac 地址表中。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 61,
        "type": "judge",
        "question": "功率较小的室内分布系统需环境评估通过后方能建设。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 62,
        "type": "judge",
        "question": "输出功率等于和小于15W的移动式无线电通讯设备，其电磁辐射可以免于管理，如陆上、海上移动通讯设备以及步话机等。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 63,
        "type": "judge",
        "question": "操作系统的基本类型主要有实时操作系统、批处理操作系统及分时操作系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 64,
        "type": "judge",
        "question": "主要由于linux小部分由汇编大部分用C语言编写原因，使linux易于移植。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 65,
        "type": "judge",
        "question": "打印机，键盘，鼠标器都属于输入设备的。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 66,
        "type": "judge",
        "question": "可回溯性是网络协议的特点。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 67,
        "type": "judge",
        "question": "用于描述DNS数据库段的数据是一种ASCII文本数据。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 68,
        "type": "judge",
        "question": "错误检测和纠正网络协议实现可靠传输的方法之一。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 69,
        "type": "judge",
        "question": "根据网络故障的性质，可将网络故障分为路由故障和线路故障。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 70,
        "type": "judge",
        "question": "如果无法通过域名访问特定网站，nslookup命令可用于检查域名解析是否正常。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 71,
        "type": "judge",
        "question": "用人单位在试用期解除劳动合同的，可以随时解除，无需向劳动者说明理由。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 72,
        "type": "judge",
        "question": "根据《中华人民共和国劳动法》，劳动者每日工作时间标准是8小时。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 73,
        "type": "judge",
        "question": "依当事人一方的意思表示即可发生抵销效力的权利，称为抵销权。该权利属于形成权。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 74,
        "type": "judge",
        "question": "《民法典》自2021年1月1日起施行。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 75,
        "type": "judge",
        "question": "侵害他财产的，财产的损失应当按照财产生成时财产的市场价值或其他方式计算。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 76,
        "type": "judge",
        "question": "民法典首次明确禁止性骚扰，违背他人意愿，以言语、肢体行为等方式对他人实施性骚扰的，受害人有权依法请求行为人承担民事责任。机关、企业、学校等单位应当采取合理的预防、受理投诉调查处置等措施，防止和制止利用职权、从属关系等实施性骚扰。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 77,
        "type": "judge",
        "question": "根据《民法典》的规定，民事主体可以依法查询自己的信用评价，发现信用评价不当的，可以自行采取删除这一必要措施。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 78,
        "type": "judge",
        "question": "当网络拓扑发生变化时，交换机不会自动启用备份链路。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 79,
        "type": "judge",
        "question": "STP通过在交换机之间传递一种特殊的协议报文（BPDU）来确定网络的拓扑结构。BPDU中包含了足够的信息来保证交换机完成生成树计算。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 80,
        "type": "judge",
        "question": "默认路由通常会在出口网络中使用。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 81,
        "type": "judge",
        "question": "无线网络设备安装繁琐，成本高。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 82,
        "type": "judge",
        "question": "LTE系统采用了正交频分复用和多入多出等关键技术，在网络架构和多址接入技术方面有了革命性的变化，被业界通俗称为3G。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 83,
        "type": "judge",
        "question": "交换机端口安全默认是打开的。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 84,
        "type": "judge",
        "question": "安全MAC地址的最大数量是默认是2。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 85,
        "type": "judge",
        "question": "端口安全功能是通过对MAC地址表的配置，来实现在某一端口只允许一台或者几台确定的设备访问此台交换机端口。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 86,
        "type": "judge",
        "question": "802.1x是一种基于端口的网络接入控制协议。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 87,
        "type": "judge",
        "question": "目前无线路由器里带有的加密模式主要有:WEP，WPA-PSK（TKIP），WPA2-PSK（AES）。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 88,
        "type": "judge",
        "question": "WPA全名为Wi-Fi Protected access，有WPWPA2和WPA3三个标准，是一种保护无线电脑网络（Wi-Fi）安全的系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 89,
        "type": "judge",
        "question": "白名单列表:拒绝接入WLAN网络客户端的MAC地址列表，只有存在该列表的用户才能接入。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 90,
        "type": "judge",
        "question": "黑白名单的配置方式有基于VAP（服务集）:该配置只对某些SSID启用。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 91,
        "type": "judge",
        "question": "在windows操作系统中，安全审计功能包括:注册表维护设置信息、日志系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 92,
        "type": "judge",
        "question": "域的审核策略确保所有账户登录事件都被审核。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 93,
        "type": "judge",
        "question": "Linux在secure日志中登陆成功日志和审计日志是一个文件。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 94,
        "type": "judge",
        "question": "当发生了定义的规则中的动作时，如果有一个规则在/etc/audit/auditd.conf中定义则它会通过调度程序发送，然后会有一条日志消息写到/var/log/audit/audit.log中。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 95,
        "type": "judge",
        "question": "防病毒软件的漏洞修复功能，能第一时间获取补丁相关信息，及时修复未被发现的漏洞。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 96,
        "type": "judge",
        "question": "PS C:\\Users\\administrator> Get-WindowsFeature Web-DAV-Publishing display Name Name []WebDAV发布 --- Web-DAV-Publishing 是用来检查WebDAV功能开启的状态。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 97,
        "type": "judge",
        "question": "IIS管理器的FTP站点中，选中你要授权的文件夹，并切换到“内容视图”，选中“FTP授权规则”，双击“FTP授权规则”，可进入“授权规则”管理界面，为指定的用户设置权限。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 98,
        "type": "judge",
        "question": "以 Windows server 2008 中自带的 FTP 服务为例，进行FTP站点加固时，启用FTP授权规则一般会允许所有匿名用户访问站点，并设置允许“读取和写入”权限。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 99,
        "type": "judge",
        "question": "DHCP IP地址耗尽攻击是指攻击者不断变换物理地址，尝试申请DHCP域中的IP地址，直到耗尽 DHCP Server地址池中的所有地址，导致其他正常用户无法获取IP地址的行为。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 100,
        "type": "judge",
        "question": "为了应对DHCP Server仿冒者攻击，可引入DHCP Snooping技术，在DHCP客户端和DHCP 服务器之间建立一道虚拟防火墙。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 101,
        "type": "judge",
        "question": "在配置跨交换机VLAN交互信息时，Trunk端口能够实现多个VLAN间通信。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 102,
        "type": "judge",
        "question": "在配置跨交换机VLAN通信时，不需要对VLAN进行划分。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 103,
        "type": "judge",
        "question": "配置ssh登录时的认证包括口令认证和管理认证。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 104,
        "type": "judge",
        "question": "为了SSH登录安全，一般会将 SSH 的端口设置为默认的22以外的端口，或者禁用Root账户登录。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 105,
        "type": "judge",
        "question": "限制SNMP管理主机的IP地址范围不是一种SNMP设备安全管理方法。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 106,
        "type": "judge",
        "question": "通过设置文件共享的权限只能控制网络访问，不能控制本机访问。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 107,
        "type": "judge",
        "question": "若要同时修改文件或目录的属组，可以使用Chown来设置。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 108,
        "type": "judge",
        "question": "给系统打补丁时，只要为系统打上最新的补丁包就可以。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 109,
        "type": "judge",
        "question": "在给系统下载补丁包升级时，不需要对应其版本及兼容性。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 110,
        "type": "judge",
        "question": "域名备案网站的内容不能带有中国、中华等字样。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 111,
        "type": "judge",
        "question": "AAA上对DNS的配置的要求为配置一个DNS。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 112,
        "type": "judge",
        "question": "在配置本地DNS服务器时，一般需要指定至少一个上游DNS服务器，以便在本地服务器无法解析时进行查询。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 113,
        "type": "judge",
        "question": "备份应用数据需要考虑数据恢复的问题，包括采用磁盘镜像或容错、备份磁带异地存放、等多种灾难预防措施。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 114,
        "type": "judge",
        "question": "暴力破解属于口令破解的一种方式。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 115,
        "type": "judge",
        "question": "FIDO本质是采用公私钥签名/验签的方式，实现用户身份认证，通过生物识别的方式获得私钥授权;因此FIDO在安全原理上与PKI体系是同属一个安全级别，远远高于静态口令、短信验证码、OTP令牌等传统安全认证方式。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 116,
        "type": "judge",
        "question": "最简单和常见的缓冲区溢出攻击类型就是在一个字符串里综合了代码植入和活动纪录技术。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 117,
        "type": "judge",
        "question": "漏洞扫描的主要功能是扫描目标主机的漏洞。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 118,
        "type": "judge",
        "question": "漏洞扫描工具不能实时监视网络上的入侵，所以对保护系统安全方面很是有限。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 119,
        "type": "judge",
        "question": "主机及系统信息收集是黑客在入侵踩点（信息搜集）阶段使用到的技术。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 120,
        "type": "judge",
        "question": "生成相同网络的接入点都会拥有高度同步的内部时钟，接入点会不断地交换时间戳以实现同步，同步增量为25微秒，大多数流氓热点在尝试进行时间戳同步时往往会出现各种各样的错误，通过检测这种错误来发现流氓热点。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 121,
        "type": "judge",
        "question": "TCP代理是指我们的FW部署在客户端和服务器中间，当客户端向服务器发送的SYN报文经过FW时，FW代替服务器与客户端建立三次握手，它可以对SYN报文进行拦截。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 122,
        "type": "judge",
        "question": "UDP分片分为首分片和后续分片，Anti-DDoS设备只对首分片执行防御动作，如果首分片异常被丢弃了，后续分片因找不到首分片的会话会直接被后续转发流程丢弃。UDP首分片防御方法和UDP flood防御方法一致。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 123,
        "type": "judge",
        "question": "为保证数据库是可恢复的，登记日志文件时必须遵循两条规则:（1）登记的次序严格按照并发事务执行的时间次序。（2）必须先写日志文件，后写数据库。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 124,
        "type": "judge",
        "question": "增量备份在数据恢复时必须依赖上一次完全备份和上一次的增量备份才能对数据进行完整恢复，恢复时数据重构较完全备份慢，恢复窗口更大。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 125,
        "type": "judge",
        "question": "网络安全事件的应急响应流程中，首先应进行的是事件检测与报告，而非直接关闭受影响系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 126,
        "type": "judge",
        "question": "零信任架构的核心思想是“永不信任，始终验证”，因此不需要区分内网和外网资源的访问控制策略。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 127,
        "type": "judge",
        "question": "区块链技术的去中心化特性使其无法被篡改，因此基于区块链存储的敏感数据无需额外加密保护。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 128,
        "type": "judge",
        "question": "物联网设备由于资源受限，通常无法运行复杂的安全软件，因此更容易成为网络攻击的目标。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 129,
        "type": "judge",
        "question": "跨站请求伪造（CSRF）攻击的核心是利用用户已认证的会话，因此关闭浏览器会话即可完全防范该类攻击。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 130,
        "type": "judge",
        "question": "安全审计日志应至少保留6个月，以便在发生安全事件时进行溯源分析。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 131,
        "type": "judge",
        "question": "采用HTTPS协议传输数据后，所有传输内容均无法被截取，因此无需担心数据泄露风险。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 132,
        "type": "judge",
        "question": "服务器虚拟化技术会增加网络攻击面，因为多个虚拟机共享同一物理硬件资源，一个虚拟机被攻破可能影响其他虚拟机。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 133,
        "type": "judge",
        "question": "弱口令攻击属于暴力破解的一种，因此启用账户锁定策略（如输错5次锁定）可有效防范。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 134,
        "type": "judge",
        "question": "数据库加密仅需对敏感字段（如密码、身份证号）进行加密，普通字段无需加密，以提高查询效率。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 135,
        "type": "judge",
        "question": "无线局域网的WPS功能虽然方便用户快速连接，但存在安全漏洞，可能导致密码被破解，因此不建议启用。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 136,
        "type": "judge",
        "question": "入侵防御系统（IPS）工作在串联模式，能够实时阻断攻击流量，而入侵检测系统（IDS）工作在旁路模式，仅能报警无法阻断。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 137,
        "type": "judge",
        "question": "系统漏洞分为高危、中危、低危三个级别，仅需修复高危漏洞即可保证系统安全。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 138,
        "type": "judge",
        "question": "电子邮件的DKIM签名机制可验证邮件发送者的身份，防止邮件被伪造，因此无需再启用SPF机制。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 139,
        "type": "judge",
        "question": "终端安全管理中，禁止外接USB设备可完全防范移动存储介质带来的病毒传播风险。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 140,
        "type": "judge",
        "question": "网络地址转换（NAT）不仅能实现私网地址与公网地址的转换，还能隐藏内部网络结构，提高网络安全性。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 141,
        "type": "judge",
        "question": "云计算环境中，租户的数据存储在共享的云服务器上，因此云服务商的管理员可以随意访问租户数据。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 142,
        "type": "judge",
        "question": "数字证书的有效期届满后，仍可继续使用，只需重新下载安装即可。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 143,
        "type": "judge",
        "question": "脚本病毒主要通过网页脚本、邮件脚本等方式传播，因此禁用浏览器的JavaScript功能可有效防范。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 144,
        "type": "judge",
        "question": "网络安全等级保护二级以上的信息系统，必须每年进行一次等级测评。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 145,
        "type": "judge",
        "question": "访问控制列表（ACL）仅能基于IP地址、端口号进行访问控制，无法基于用户身份进行权限限制。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 146,
        "type": "judge",
        "question": "数据脱敏技术通过对敏感数据进行替换、加密等处理，使其在不影响业务使用的前提下无法识别原始信息，因此脱敏后的数据可直接用于测试环境。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 147,
        "type": "judge",
        "question": "僵尸网络攻击的主要目的是利用大量受控主机发起DDoS攻击，因此关闭主机的网络连接即可清除僵尸程序。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 148,
        "type": "judge",
        "question": "操作系统的默认账户（如Windows的administrator、Linux的root）如果不修改默认密码，会成为黑客攻击的重要突破口。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 149,
        "type": "judge",
        "question": "网页防篡改技术中的事件触发模式，是指实时监控网页文件的变化，一旦发现篡改立即恢复，比时间轮询模式更及时。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 150,
        "type": "judge",
        "question": "网络安全策略的制定无需考虑业务可用性，只需优先保证安全性。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 151,
        "type": "judge",
        "question": "移动设备的越狱（iOS）或root（Android）操作会破坏系统的安全机制，导致设备更容易被植入恶意软件。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 152,
        "type": "judge",
        "question": "安全漏洞扫描工具的扫描结果100%准确，因此扫描结果显示无漏洞的系统即为安全系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 153,
        "type": "judge",
        "question": "分布式拒绝服务（DDoS）攻击的流量通常来自大量合法的网络设备，因此难以通过防火墙直接阻断。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 154,
        "type": "judge",
        "question": "企业的网络安全培训仅需对技术人员进行，普通员工无需参与，因为他们不会接触核心系统。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 155,
        "type": "judge",
        "question": "数据备份的“3-2-1原则”是指:至少3份备份、2种不同介质、1份异地存放，该原则可有效防范数据丢失风险。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 156,
        "type": "judge",
        "question": "域名系统（DNS）的缓存中毒攻击是指攻击者篡改DNS服务器的缓存记录，将域名解析到恶意IP地址，因此定期清理DNS缓存可防范该攻击。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 157,
        "type": "judge",
        "question": "防火墙的默认策略应设置为“deny all”，即拒绝所有流量，再根据业务需求开放必要的端口和服务，这是更安全的配置方式。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 158,
        "type": "judge",
        "question": "计算机病毒必须依附于可执行文件才能传播，因此文本文件（如TXT）不会携带病毒。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 159,
        "type": "judge",
        "question": "身份认证中的双因素认证（2FA）结合了两种不同类型的认证因素（如密码+验证码），其安全性高于单因素认证。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 160,
        "type": "judge",
        "question": "网络安全事件发生后，应优先恢复业务运行，再进行事件溯源和原因分析，避免造成更大的业务损失。",
        "options": [
          "A. 对",
          "B. 错"
        ],
        "analysis": "",
        "answer": 1
      }
    ]
  },
  {
    "set_name": "2026考证单选题321-435",
    "items": [
      {
        "id": 1,
        "type": "single",
        "question": "在Web服务中，客户端验证方法的顺序是（）。",
        "options": [
          "A. 匿名身份验证、Windows验证、摘要式身份验证、基本身份验证",
          "B. 摘要式身份验证、基本身份验证、匿名身份验证、Windows验证",
          "C. Windows验证、匿名身份验证、摘要式身份验证、基本身份验证",
          "D. Windows验证、摘要式身份验证、基本身份验证、匿名身份验证"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 2,
        "type": "single",
        "question": "在使用IIS发布Web服务时，可通过勾选“控制面板→程序→启用或关闭Windows功能”中的（）选项来安装IIS服务。",
        "options": [
          "A. .NET Framework 3.5（包含.NET 2.0和3.0）",
          "B. Internet Explorer 11",
          "C. Internet Information Services",
          "D. NFS服务"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 3,
        "type": "single",
        "question": "IIS服务器配置中，FTP站点进行数据传输默认使用TCP端口（）。",
        "options": [
          "A. 1024",
          "B. 21",
          "C. 20",
          "D. 53"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 4,
        "type": "single",
        "question": "有关FTP服务概述，下列说法有误的是（）。",
        "options": [
          "A. FTP是File Transfer Protocol（文件传输协议）的缩写",
          "B. 相比于HTTP，FTP协议要复杂得多。因为FTP协议要用到两个TCP连接，一个是命令链路，用来在FTP客户端与服务器之间传递命令;另一个是数据链路，用来上传或下载数据",
          "C. FTP协议有两种工作方式:PORT方式和PASV方式，中文意思为主动式和被动式",
          "D. 传统的FTP实现(active Mode)用21作为数据端口，20作为命令端口;而被动模式(Passive Mode)会随机启用本机的一个端口作为数据监听端口"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 5,
        "type": "single",
        "question": "DHCP在网络中起着重要作用，它可以为网络中的计算机自动分配 TCP/IP 地址、子网掩码、（）、DNS 地址、WINS 服务器地址等参数，使用DHCP服务器，可以极大地减轻网管的负担。",
        "options": [
          "A. FTP地址",
          "B. 域名",
          "C. 网关地址",
          "D. 服务端口"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 6,
        "type": "single",
        "question": "DHCP服务器向DHCP客户机出租的IP地址一般都有一个租借期限。DHCP客户机启动时和IP租约期限到达租约的（）时，DHCP客户机都会自动向DHCP服务器发送更新其IP租约的信息。",
        "options": [
          "A. 0.25",
          "B. 0.5",
          "C. 0.7",
          "D. 0.9"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 7,
        "type": "single",
        "question": "Windows server 2016添加DHCP服务器角色时，系统会提示（）是服务器安装的先决的条件之一。",
        "options": [
          "A. 管理员帐户使用了弱密码",
          "B. 管理员帐户使用了强密码",
          "C. guest帐户使用了弱密码",
          "D. guest帐户使用了强密码"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 8,
        "type": "single",
        "question": "成功安装 DHCP 服务器角色后，需要对 DHCP 服务器进行授权和配置，以下描述不正确的是（）。",
        "options": [
          "A. 如果在域环境中安装DHCP，则必须执行授权步骤使 DHCP 服务器在域中运行",
          "B. 使用 DHCP控制台创建新 DHCP 作用域时，在“添加排除和延迟”页面上，可以指定希望服务器分配的地址池范围",
          "C. 安装在 active directory 域中未经授权的 DHCP 服务器无法正常工作，并且不会将 IP 地址租给 DHCP 客户端",
          "D. 在 Windows 桌面上，打开“开始”菜单并选择“Windows管理工具”>“DHCP”，可以进入DHCP控制台界面"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 9,
        "type": "single",
        "question": "Windows Server 2012系统中，可以在cmd窗口中使用appcmd命令检查IIS中是否启用了“目录浏览”功能。appcmd工具的所在目录是（）。",
        "options": [
          "A. C:\\Windows32\\System\\inetsrv\\",
          "B. C:\\Windows\\System32\\inetsrv\\",
          "C. C:\\Windows\\System\\inetsrv\\",
          "D. C:\\Windows\\System32\\InputMethod\\"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 10,
        "type": "single",
        "question": "Windows Server 2012系统中，检查IIS中是否禁用了“目录浏览”功能，可以在cmd窗口中使用命令（）进行检查。",
        "options": [
          "A. C:\\Windows\\system32\\inetsrv目录下的appcmd.exe",
          "B. C:\\Windows32\\System\\inetsrv目录下的cmd.exe",
          "C. C:\\Windows\\System32\\configuration目录下的appcmd.exe",
          "D. C:\\Windows\\system32\\inetsrv目录下的cmd.exe"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 11,
        "type": "single",
        "question": "IIS在默认情况下产生错误的时候，会给客户端反馈详细的错误信息，这将导致服务器一些敏感信息或文件被泄露，我们可以通过点击功能视图中的（）图标，对服务器进行加固。",
        "options": [
          "A. 错误页",
          "B. WebDAV",
          "C. 处理程序映射",
          "D. .NET错误页"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 12,
        "type": "single",
        "question": "默认情况下，IIS管理中错误页功能，对不同的错误状态设置了（）。",
        "options": [
          "A. 不同的响应页面",
          "B. 相同的响应页面",
          "C. 没有响应页面",
          "D. 用户定义的响应页面"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 13,
        "type": "single",
        "question": "安全加固管理中，IIS错误页配置方法正确的是（）。",
        "options": [
          "A. 设置自定义错误页中如含有中文字符，不建议使用GB2312编码",
          "B. 在IIS错误页功能页中，对不同的错误状态设置自定义相应页面，避免网站敏感信息泄露",
          "C. 可以通过修改.NET错误页功能来实现",
          "D. 错误页设置不可以通过直接修改原有的报错页面文件路径或错误页内容来实现"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 14,
        "type": "single",
        "question": "Windows server 2008 中自带的 FTP 服务中，加固FTP匿名登录漏洞时，我们必须在FTP身份验证中（）。",
        "options": [
          "A. 启用匿名身份验证",
          "B. 禁用匿名身份验证",
          "C. 启用基本身份验证",
          "D. 禁用基本身份验证"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 15,
        "type": "single",
        "question": "以 Windows server 2008 中自带的 FTP 服务为例，（）功能可以禁用匿名用户登录。",
        "options": [
          "A. FTP身份验证",
          "B. FTP授权规则",
          "C. FTP请求筛选",
          "D. FTP IPv4地址和域限制"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 16,
        "type": "single",
        "question": "Windows server 2012 IIS中“添加FTP站点”页面，在“身份验证和授权信息”身份验证（），授权允许访问选择“所有用户”，权限勾选“读取”，则FTP匿名登录会被禁用。",
        "options": [
          "A. 匿名和基本都勾选",
          "B. 只勾选基本",
          "C. 匿名和基本都不勾选",
          "D. 只勾选匿名"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 17,
        "type": "single",
        "question": "已经新建了两个用于登录FTP的账户，在IIS配置FTP用户隔离时，FTP服务器根目录下LocalUser目录中，新建的隔离用户目录必须（），否则无法实现用户隔离。",
        "options": [
          "A. 名称和FTP账户用户名称必须保持一致",
          "B. 随便定义名称",
          "C. 定义为ftp1和ftp2",
          "D. 定义为Local和User"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 18,
        "type": "single",
        "question": "以 Windows server 2008 中自带的 FTP 服务为例，通过点击功能视图中的“FTP IPv4地址和域限制”图标，可以指定允许访问FTP站点的（）。",
        "options": [
          "A. 源IP地址",
          "B. 目标IP地址",
          "C. 源端口",
          "D. 目标端口"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 19,
        "type": "single",
        "question": "FTP 服务进行安全加固时，可以使用 VPN 等安全接入手段连接到 FTP 服务器端，同时使用安全组来控制访问源（）。",
        "options": [
          "A. 端口",
          "B. 用户",
          "C. 文档",
          "D. IP"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 20,
        "type": "single",
        "question": "VLAN是将一个物理局域网进行（）划分，所有同一个VLAN内的各个工作站无需放置在同一个物理空间。",
        "options": [
          "A. 虚拟",
          "B. 物理",
          "C. 逻辑",
          "D. 交换"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 21,
        "type": "single",
        "question": "VLAN采用的主要协议为（）。",
        "options": [
          "A. 802.1q",
          "B. 802.11",
          "C. 802.3",
          "D. 802.15"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 22,
        "type": "single",
        "question": "以下关于VLAN的主要用途描述错误的是（）。",
        "options": [
          "A. 合并广播域",
          "B. 合并冲突域",
          "C. 隔离广播域",
          "D. 隔离用户"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 23,
        "type": "single",
        "question": "以下不是VLAN的作用的是（）。",
        "options": [
          "A. 便于逻辑工作组的管理与通信",
          "B. 隔离广播域，防止广播风暴",
          "C. 提供更高的安全性",
          "D. 增加网络传输速度"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 24,
        "type": "single",
        "question": "以下哪个选项不是VLAN的常见用途?（）",
        "options": [
          "A. 提供网络安全隔离",
          "B. 优化网络传输性能",
          "C. 简化网络管理和配置",
          "D. 支持多个无线网络的覆盖"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 25,
        "type": "single",
        "question": "以下关于VLAN的叙述中，属于其优点的是（）。",
        "options": [
          "A. 允许逻辑地划分网段",
          "B. 减少了冲突域的数量",
          "C. 增加了冲突域的大小",
          "D. 减少了广播域的数量"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 26,
        "type": "single",
        "question": "VLAN的优点之一是（）。",
        "options": [
          "A. 提高网络安全性",
          "B. 扩展物理网络范围",
          "C. 增加网络带宽",
          "D. 提供无线网络安全"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 27,
        "type": "single",
        "question": "在下面关于VLAN的定义中，不正确的是（）。",
        "options": [
          "A. native vlan",
          "B. tag vlan",
          "C. port vlan",
          "D. IEEE802.1Q vlan"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 28,
        "type": "single",
        "question": "在IEEE 802.1Q标准中，VLAN的定义方法使用的是（）。",
        "options": [
          "A. MAC地址",
          "B. IP地址",
          "C. VLAN标签",
          "D. 端口号"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 29,
        "type": "single",
        "question": "以下哪种模式用于将单个VLAN分配给交换机接口?（）",
        "options": [
          "A. access模式",
          "B. Trunk模式",
          "C. Hybrid模式",
          "D. High模式"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 30,
        "type": "single",
        "question": "当多个VLAN需要跨越两台物理交换机时，需要（）。",
        "options": [
          "A. 用三层端口连接两台交换机",
          "B. 用Trunk端口连接两台交换机",
          "C. 用路由器来连接两台交换机",
          "D. 在两台交换机上配置VLAN即可"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 31,
        "type": "single",
        "question": "单臂路由是指（）。",
        "options": [
          "A. 路由器和交换机在一起",
          "B. 路由器接在主干网上的一个交换设备上",
          "C. 路由器和工作站连在一起",
          "D. 单独的一个分支路由器"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 32,
        "type": "single",
        "question": "下列关于配置单臂路由的方法错误的是?（）",
        "options": [
          "A. 每个VLAN一个物理连接",
          "B. 交换机上，把连接到路由器的端口配置成Trunk类型的端口，并允许相关VLAN的帧通过",
          "C. 在路由器上需要创建子接口",
          "D. 交换机和路由器之间仅使用一条物理链路连接"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 33,
        "type": "single",
        "question": "当PC串口和交换机console口连接时，应使用（）。",
        "options": [
          "A. 直通线",
          "B. 反转线",
          "C. 交叉线",
          "D. 双绞线"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 34,
        "type": "single",
        "question": "Telnet协议工作在OSI七层结构中的（）。",
        "options": [
          "A. 网络层",
          "B. 传输层",
          "C. 表示层",
          "D. 应用层"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 35,
        "type": "single",
        "question": "用户可以通过修改HTTPS服务器的（），能有效地防止攻击者通过HTTPS服务标准端口号攻击设备，从而进一步增加设备的安全性。",
        "options": [
          "A. 证书文件",
          "B. 公钥文件",
          "C. 私钥文件",
          "D. 端口号"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 36,
        "type": "single",
        "question": "本地组账户被赋予了一定的权限，以便让它们具备（）计算机或访问本机资源的能力。",
        "options": [
          "A. 管理本地",
          "B. 管理远程",
          "C. 管理数据库",
          "D. 管理现实"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 37,
        "type": "single",
        "question": "Windows本地组账户可以包含（）。",
        "options": [
          "A. 本地用户账户",
          "B. 域用户账户",
          "C. 本地用户账户和域用户账户",
          "D. 只能包含本地计算机的内置账户"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 38,
        "type": "single",
        "question": "在设置账户密码时，默认要求用户的密码必须至少（）个字符，且不可包含用户账户名称或全名。",
        "options": [
          "A. 2",
          "B. 4",
          "C. 6",
          "D. 8"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 39,
        "type": "single",
        "question": "若要新建Test组，需要在（）对话框输入新建的组名Test。",
        "options": [
          "A. 组",
          "B. 计算机管理",
          "C. 本地用户和组",
          "D. 新建组"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 40,
        "type": "single",
        "question": "在Windows本地计算机上将本地用户添加到本地用户组的命令是（）。",
        "options": [
          "A. net user /add",
          "B. net user /delete",
          "C. net localgroup /add",
          "D. net localgroup /delete"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 41,
        "type": "single",
        "question": "Windows文件访问控制是用于（）的安全机制。",
        "options": [
          "A. 控制网络访问速度",
          "B. 控制文件传输协议",
          "C. 控制文件的访问和权限",
          "D. 控制网络设备配置"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 42,
        "type": "single",
        "question": "在Linux系统中，可以使用（）命令为创建账户。",
        "options": [
          "A. useradd",
          "B. userdel",
          "C. usermod",
          "D. groupadd"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 43,
        "type": "single",
        "question": "Linux文件权限中保存的信息不包括（）。",
        "options": [
          "A. 文件所有者的权限",
          "B. 文件所有者所在组的权限",
          "C. 其他用户的权限",
          "D. 文件失效时间"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 44,
        "type": "single",
        "question": "在Linux中，可以通过配置（）目录来存放硬件设备的特殊文件。",
        "options": [
          "A. /dev",
          "B. /bin",
          "C. /etc",
          "D. /home"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 45,
        "type": "single",
        "question": "在整个树状目录结构中，最顶层有（）个根目录。",
        "options": [
          "A. 一",
          "B. 二",
          "C. 三",
          "D. 四"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 46,
        "type": "single",
        "question": "在Linux中，可使用（）命令移动一个目录。",
        "options": [
          "A. mkdir",
          "B. rm",
          "C. mv",
          "D. cd"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 47,
        "type": "single",
        "question": "在Linux中，对于较多的文件适合使用（）或less命令查看。",
        "options": [
          "A. more",
          "B. many",
          "C. much",
          "D. big"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 48,
        "type": "single",
        "question": "在Linux中，创建的文件默认作为不可执行文件，因此没有（）权限。",
        "options": [
          "A. w",
          "B. x",
          "C. r",
          "D. b"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 49,
        "type": "single",
        "question": "Linux系统对普通文件默认的访问权限是（）。",
        "options": [
          "A. -rwxrwx---",
          "B. -rw-rw-r--",
          "C. wx------",
          "D. -rw-r--r--"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 50,
        "type": "single",
        "question": "文件隐藏属性chattr命令最常使用的属性是a和i，其中a属性表示文件的内容只能（），不能修改或删除。",
        "options": [
          "A. 减少",
          "B. 管理",
          "C. 访问",
          "D. 增加"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 51,
        "type": "single",
        "question": "补丁管理这一流程使企业可以对系统环境中的内部软件部署和（）进行控制。",
        "options": [
          "A. 维护",
          "B. 规划",
          "C. 修改",
          "D. 设置"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 52,
        "type": "single",
        "question": "以下哪个术语通常用于指代未经修复的已知漏洞?（）",
        "options": [
          "A. 错误",
          "B. 补丁",
          "C. 恶意软件",
          "D. 漏洞"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 53,
        "type": "single",
        "question": "防病毒软件升级的一个重要原因是（）。",
        "options": [
          "A. 增加系统的电源效率",
          "B. 提高网络连接速度",
          "C. 修复已知的病毒",
          "D. 添加新的游戏功能"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 54,
        "type": "single",
        "question": "在域名类型中，.edu表示的是（）。",
        "options": [
          "A. 工商企业",
          "B. 教育机构",
          "C. 非盈利组织",
          "D. 政府部门"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 55,
        "type": "single",
        "question": "域名中的顶级域（TLD）是指（）。",
        "options": [
          "A. 域名的第一个部分，用于标识网站所属的国家或地区",
          "B. 域名的最后一部分，通常表示域名的类型或性质",
          "C. 域名的中间部分，用于指定特定的网站",
          "D. 域名中的任意部分，可以是字母、数字或其他字符的组合"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 56,
        "type": "single",
        "question": "域名解析就是将好记的域名解析成（），然后在此地址的主机上将一个子目录与域名绑定。",
        "options": [
          "A. MAC地址",
          "B. 物理地址",
          "C. 逻辑地址",
          "D. IP地址"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 57,
        "type": "single",
        "question": "在域名解析中，DNS缓存是（）。",
        "options": [
          "A. 域名服务器的备份副本",
          "B. 域名的注册记录",
          "C. 临时存储的域名解析结果",
          "D. 域名的所有者信息"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 58,
        "type": "single",
        "question": "域名的注册步骤不包括（）。",
        "options": [
          "A. 选择注册商网站",
          "B. 选域名",
          "C. 准备身份证或企业营业执照",
          "D. 向客户收款"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 59,
        "type": "single",
        "question": "DNS服务包含了正向解析和（）解析。",
        "options": [
          "A. 网页",
          "B. 反向",
          "C. 同步",
          "D. 异步"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 60,
        "type": "single",
        "question": "对数据进行备份是为了保证数据的一致性和（）性，消除系统使用者和操作者的后顾之忧。",
        "options": [
          "A. 异步",
          "B. 破坏",
          "C. 完整",
          "D. 零碎"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 61,
        "type": "single",
        "question": "常用的数据备份方式包括完全备份、增量备份和（）备份。",
        "options": [
          "A. 差异",
          "B. 正常",
          "C. 减量",
          "D. 零碎"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 62,
        "type": "single",
        "question": "Windows数据备份通过Windows服务器系统内置的（）功能来对服务器中的重要数据信息进行自动备份的。",
        "options": [
          "A. 任务计划",
          "B. 计算机管理",
          "C. 计算机计划",
          "D. 电池计划"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 63,
        "type": "single",
        "question": "增量备份和差异备份的主要区别在于（）。",
        "options": [
          "A. 增量备份备份的数据更多",
          "B. 差异备份备份的数据更多",
          "C. 增量备份只备份与上次完全备份之后更改的数据",
          "D. 差异备份只备份与上次完全备份之后新增的数据"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 64,
        "type": "single",
        "question": "常用数据备份软件不包括（）。",
        "options": [
          "A. Ghost",
          "B. driveimage",
          "C. driver2driver",
          "D. Winstone"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 65,
        "type": "single",
        "question": "以下哪个工具可以用于在Linux系统中进行数据备份和恢复操作?（）",
        "options": [
          "A. Time Machine",
          "B. acronis True Image",
          "C. rsync",
          "D. Windows backup and Restore"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 66,
        "type": "single",
        "question": "网络管理的5大功能域是（）。",
        "options": [
          "A. 配置管理、故障管理、计费管理、性能管理和安全管理",
          "B. 配置管理、故障管理、计费管理、带宽管理和安全管理",
          "C. 配置管理、故障管理、成本管理、性能管理和安全管理",
          "D. 配置管理、用户管理、计费管理、性能管理和安全管理"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 67,
        "type": "single",
        "question": "ICMP协议属于 TCP/IP 网络中的网络层协议，ICMP报文封装在（）协议数据单元中传送，在网络中起着差错和拥塞控制的作用。",
        "options": [
          "A. IP",
          "B. TCP",
          "C. UDP",
          "D. PPP"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 68,
        "type": "single",
        "question": "ICMP测试的目的是什么（）。",
        "options": [
          "A. 确定消息是否能够到达目的地，如果不能，则确定可能的原因",
          "B. 保证网络中的所有活动都是受检测的",
          "C. 确定网络是否是跟据模型建立的",
          "D. 确定网络是处于控制模型还是用户模型"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 69,
        "type": "single",
        "question": "在（）输入“ping”命令，可进行网络连通测试。",
        "options": [
          "A. 资源管理器中",
          "B. 命令提示符后",
          "C. VB编辑器中",
          "D. Word文档中"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 70,
        "type": "single",
        "question": "在 Windows 中，tracert 命令的-h 选项表示（）。",
        "options": [
          "A. 指定主机名",
          "B. 指定最大跳步数",
          "C. 指定到达目标主机的时间",
          "D. 指定源路由"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 71,
        "type": "single",
        "question": "ISO定义的网络管理功能中，（）包括的功能有风险分析、网管系统保护等。",
        "options": [
          "A. 配置管理",
          "B. 故障管理",
          "C. 性能管理",
          "D. 安全管理"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 72,
        "type": "single",
        "question": "某客户端采用 ping 命令检测网络连接故障时，发现可以 ping 通 127.0.0.1 及本机的IP地址，但无法 ping 通同一网段内其他工作正常的计算机的 IP 地址。该客户端的故障可能是（）。",
        "options": [
          "A. TCP/IP 协议不能正常工作",
          "B. 本机网卡不能正常工作",
          "C. 本机网络接口故障",
          "D. DNS 服务器地址设置错误"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 73,
        "type": "single",
        "question": "下列哪项是物理层故障的例子?（）。",
        "options": [
          "A. 封装不正确",
          "B. STP 配置不正确",
          "C. ARP 映射不正确",
          "D. 时钟频率不正确"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 74,
        "type": "single",
        "question": "广播流量过多一般表明（）出了问题。",
        "options": [
          "A. 物理层",
          "B. 数据链路层",
          "C. 网络层",
          "D. 传输层"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 75,
        "type": "single",
        "question": "流量控制实际上是对（）的控制。",
        "options": [
          "A. 发送方的数据流量",
          "B. 接收方的数据流量",
          "C. 发送、接收方的数据流量",
          "D. 链路上任意两结点的数据流量"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 76,
        "type": "single",
        "question": "会话劫持的这种攻击形式破坏了下列哪一项内容（）。",
        "options": [
          "A. 网络信息的抗抵赖性",
          "B. 网络信息的保密性",
          "C. 网络服务的可用性",
          "D. 网络信息的完整性"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 77,
        "type": "single",
        "question": "在下列这些网络攻击模型的攻击过程中，端口扫描攻击一般属于哪一项（）。",
        "options": [
          "A. 信息收集",
          "B. 弱点挖掘",
          "C. 攻击实施",
          "D. 痕迹清除"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 78,
        "type": "single",
        "question": "在网络攻击模型中，下列哪种攻击过程不属于预攻击阶段（）。",
        "options": [
          "A. 身份隐藏",
          "B. 开辟后门",
          "C. 弱点挖掘",
          "D. 信息收集"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 79,
        "type": "single",
        "question": "网络中存在各种各样的安全威胁，一个安全的系统不仅要从检测网络攻击行为出发，更应该设计一定的防御措施以抵抗入侵行为。防火墙属于网络安全技术中的静态安全技术，对于动态发展的网络中的安全问题无法彻底解决。这就需要引入（）。",
        "options": [
          "A. 身份验证系统",
          "B. 智能识别系统",
          "C. 入侵检测系统",
          "D. 网络防御系统"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 80,
        "type": "single",
        "question": "下列关于端口扫描器功能叙述错误的是（）。",
        "options": [
          "A. 发现一个主机或网络的能力",
          "B. 一旦发现一台主机，有发现什么服务正运行在这台主机上的能力",
          "C. 通过测试这些服务，发现漏洞的能力",
          "D. 能够扫描且不被发现的能力"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 81,
        "type": "single",
        "question": "下面软件产品中，（）是属于漏洞扫描器。",
        "options": [
          "A. X-Scan",
          "B. Norton antiVirus",
          "C. Snort",
          "D. WEB"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 82,
        "type": "single",
        "question": "如果一个网站存在CSRF漏洞，可以通过CSRF漏洞做下面哪些事情（）。",
        "options": [
          "A. 获取网站用户注册的个人资料信息",
          "B. 修改网站用户注册的个人资料信息",
          "C. 冒用网站用户的身份发布信息",
          "D. 以上都可以"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 83,
        "type": "single",
        "question": "John the Ripper工具的Incremental crack Mode模式是（）。",
        "options": [
          "A. 可以选择使用规则及不使用不规则的字典档破解模式",
          "B. 用最简单的变形来进行破解的工作，速度最快",
          "C. 暴力破解，尝试所有可能的字符组合",
          "D. 可以定义用户自己的破解模式"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 84,
        "type": "single",
        "question": "关于缓冲区溢出的原理错误的是（）。",
        "options": [
          "A. 缓冲区溢出通常是由编程疏忽引起的",
          "B. 如果缓冲区被写满，而程序没有去检查缓冲区边界，也没有停止接收数据，这时缓冲区溢出就会发生",
          "C. 一小部分数据或者一套指令的溢出就可能导致一个程序或者操作系统崩溃",
          "D. C语言具有检查边界的功能"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 85,
        "type": "single",
        "question": "下列关于拒绝服务攻击说法错误的是（）。",
        "options": [
          "A. 来自网络的拒绝服务攻击可以分为停止服务和消耗资源两类",
          "B. 拒绝服务攻击的目的是利用各种攻击技术使服务器或者主机等拒绝为合法用户提供服务",
          "C. 停止服务意味着毁坏或者关闭用户想访问的特定的服务",
          "D. 停止服务是目前最流行的拒绝服务攻击方式"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 86,
        "type": "single",
        "question": "针对软件的拒绝服务攻击是通过消耗系统资源使软件无法响应正常请求的一种攻击方式，在软件开发时分析拒绝服务攻击的威胁，以下哪个不是需要考虑的攻击方式（）。",
        "options": [
          "A. 攻击者利用软件存在逻辑错误，通过发送某种类型数据导致运算进入死循环，CPU资源占用始终100%",
          "B. 攻击者利用软件脚本使用多重嵌套查询，在数据量大时会导致查询效率低，通过发送大量的查询导致数据库响应缓慢",
          "C. 攻击者利用软件不自动释放连接的问题，通过发送大量连接消耗软件并发连接数，导致并发连接数耗尽而无法访问",
          "D. 攻击者买通了IDC人员，将某软件运行服务器的网线拔掉导致无法访问"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 87,
        "type": "single",
        "question": "关于web安全及其威胁防护技术的描述，不正确的是（）。",
        "options": [
          "A. 当前web面临的主要威胁有可信任站点的漏洞、浏览器及其插件的漏洞、网络钓鱼、僵尸网络等",
          "B. web防篡改技术包括单点登录、时间轮询、事件触发等",
          "C. web内容安全管理技术包括电子邮件过滤、网页过滤、反间谍软件等",
          "D. web访问控制的主要任务是保证网络资源不被非法访问者访问"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 88,
        "type": "single",
        "question": "N-Stealth不包含哪个插件（）。",
        "options": [
          "A. dara",
          "B. Retina",
          "C. SAINT",
          "D. ISS Internet Scanner"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 89,
        "type": "single",
        "question": "关于恶意代码，以下说法错误的是（）。",
        "options": [
          "A. 从传播范围来看，恶意代码呈现多平台传播的特征",
          "B. 按照运行平台，恶意代码可以分为网络传播型病毒、文件传播型病毒",
          "C. 不感染的依附性恶意代码无法单独执行",
          "D. 为了对目标系统实施攻击和破坏活动，传播途径是恶意代码赖以生存和繁殖的基本条件"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 90,
        "type": "single",
        "question": "以下关于软件逆向工程说法错误的是（）。",
        "options": [
          "A. 恶意软件开发者利用逆向工程定位操作系统和应用程序的漏洞，并利用该漏洞开发恶意软件",
          "B. 防病毒软件开发者利用逆向工程分析恶意软件的步骤、行为和对系统造成的破坏，进而提出防范机制",
          "C. 很多应用程序使用公有加解密算法，可利用逆向工程分析其算法的实现细节和缺陷",
          "D. 如果某些软件进行了特殊的设计或具备难以实现的功能，其竞争者可能通过对组件的逆向"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 91,
        "type": "single",
        "question": "恶意代码的攻击模型中（）是恶意代码实现其恶意目的的必要条件。",
        "options": [
          "A. 潜伏",
          "B. 维持或提升现有特权",
          "C. 破坏",
          "D. 侵入系统"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 92,
        "type": "single",
        "question": "恶意代码的生存技术中的模糊变换技术是（）。",
        "options": [
          "A. 自身保护",
          "B. 多态，难以进行基于特征的识别",
          "C. 简单实现恶意代码的组合和变化",
          "D. 提高自身的伪装能力和防破译能力，增加检测和清除的难度"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 93,
        "type": "single",
        "question": "哪一项不是特洛伊木马所窃取的信息（）。",
        "options": [
          "A. 计算机名字",
          "B. 硬件信息",
          "C. QQ用户密码",
          "D. 系统文件"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 94,
        "type": "single",
        "question": "当进行分析校验的时候，你通常会在什么情况下发现一个被木马感染了的文件?（）",
        "options": [
          "A. 在可执行文件的末尾有扩展名为.TRJ的文件",
          "B. 文件的尺寸变大或者变小，或者时间戳错误",
          "C. 文件被删除",
          "D. 文件已经具备了一个.SRC扩展名"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 95,
        "type": "single",
        "question": "下列关于“特洛伊木马”病毒的叙述中不正确的是（）。",
        "options": [
          "A. 特洛伊木马程序一般分为服务端和客户端",
          "B. 特洛伊木马的隐蔽性是其最重要的特征",
          "C. 特洛伊木马必须是自动启动和运行的程序",
          "D. 特洛伊木马以感染其它程序为目的，通过网络进行主动复制传播"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 96,
        "type": "single",
        "question": "特洛伊木马有两大类型，以下哪一种是属于可以控制?（）",
        "options": [
          "A. universale",
          "B. transitive",
          "C. 两种都是",
          "D. 两种都不是"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 97,
        "type": "single",
        "question": "按计算机病毒入侵系统途径可将计算机病毒分为（）。",
        "options": [
          "A. 蠕虫病毒、脚本病毒、外壳病毒、入侵病毒",
          "B. 源码病毒、入侵病毒、操作系统和外壳病毒",
          "C. 操作系统病毒、木马病毒、脚本病毒、图片病毒",
          "D. 入侵病毒、脚本病毒、操作系统病毒、蠕虫病毒"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 98,
        "type": "single",
        "question": "僵尸网络botnet有（）地执行相同的恶意行为的特点。",
        "options": [
          "A. 一对多",
          "B. 多对一",
          "C. 多对多",
          "D. 一对一"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 99,
        "type": "single",
        "question": "僵尸网络 botnet 概念中的bot程序是 robot 的缩写，是指（）。",
        "options": [
          "A. 提供攻击的应用",
          "B. 提供IRC聊天服务的服务器",
          "C. 实现恶意控制功能的程序代码",
          "D. 控制和通信的中心服务器"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 100,
        "type": "single",
        "question": "不属于教唆犯罪、传授犯罪手段和方法信息的是（）。",
        "options": [
          "A. 利用僵尸网络进行DDoS攻击",
          "B. 教授制作钓鱼网站",
          "C. 教授利用感冒药制造冰毒",
          "D. 在微信群内发信教唆去市政府请愿"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 101,
        "type": "single",
        "question": "网络安全事件的分类有（）。",
        "options": [
          "A. 5种",
          "B. 6种",
          "C. 7种",
          "D. 8种"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 102,
        "type": "single",
        "question": "对于网络安全事件分类中，错误的是（）。",
        "options": [
          "A. 有害程序事件",
          "B. 网络攻击事件",
          "C. 信息破坏事件",
          "D. 物理攻击事件"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 103,
        "type": "single",
        "question": "网络安全事件分类中的网络攻击事件中有（）。",
        "options": [
          "A. 后门攻击事件、漏洞攻击事件",
          "B. 蠕虫事件、特洛伊事件",
          "C. 信息假冒事件、信息泄露事件",
          "D. 混合程序攻击事件、网页内嵌事件"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 104,
        "type": "single",
        "question": "网络安全事件中的特洛伊事件属于（）。",
        "options": [
          "A. 信息内容安全事件",
          "B. 有害程序事件",
          "C. 灾害性事件",
          "D. 其他事件"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 105,
        "type": "single",
        "question": "信息篡改事件、信息假冒事件、信息泄露事件、信息窃取事件、信息丢失事件和其他信息破坏事件是属于（）。",
        "options": [
          "A. 信息内容安全事件",
          "B. 信息破坏事件",
          "C. 灾害性事件",
          "D. 其他事件"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 106,
        "type": "single",
        "question": "信息内容安全事件是指（）。",
        "options": [
          "A. 指蓄意制造、传播计算机病毒，或是因受到计算机病毒影响而导致的事件",
          "B. 不能归类的网络安全事件",
          "C. 通过网络传播法律法规禁止信息，组织非法串联、煽动集会游行或炒作敏感问题并危害国家安全、社会稳定和公众利益的事件",
          "D. 信息篡改事件、信息假冒事件、信息泄露事件、信息窃取事件、信息丢失事件和其他信息破坏事件"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 107,
        "type": "single",
        "question": "网络运营者采取监测、记录网络运行状态和网络安全事件的日志信息不少于（）。",
        "options": [
          "A. 1个月",
          "B. 3个月",
          "C. 6个月",
          "D. 1年"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 108,
        "type": "single",
        "question": "发生网络安全事件(事故)在第一时间报告公安机关的同时，立即启动应急处置方案，开展（）工作。",
        "options": [
          "A. 保护对象重要性评估",
          "B. 应急处置",
          "C. 预警分级评估",
          "D. 损害程度评估"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 109,
        "type": "single",
        "question": "网络安全事件分级总共有（）。",
        "options": [
          "A. 1级",
          "B. 2级",
          "C. 3级",
          "D. 4级"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 110,
        "type": "single",
        "question": "网络安全事件分级中的特别重大事件为（）。",
        "options": [
          "A. Ⅰ级",
          "B. Ⅱ级",
          "C. Ⅲ级",
          "D. Ⅳ级"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 111,
        "type": "single",
        "question": "下列为较大网络安全事件的是（）。",
        "options": [
          "A. 其他对社会秩序、经济建设和公众利益构成严重威胁、造成严重影响的",
          "B. 国家秘密信息、重要敏感信息和关键数据丢失或被窃取、篡改、假冒，对国家安全和社会稳定构成严重威胁",
          "C. 其他对社会秩序、经济建设和公众利益构成较严重威胁、造成较严重影响的",
          "D. 重要网络和信息系统遭受严重的系统损失，造成系统长时间中断或局部瘫痪，业务处理能力受到极大影响"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 112,
        "type": "single",
        "question": "信息安全事件对社会所造成影响的范围和程度称社会影响，可以划分为（）。",
        "options": [
          "A. 特别重大的社会影响",
          "B. 重大的社会影响",
          "C. 较大的社会影响",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 113,
        "type": "single",
        "question": "关于信息安全事件分级，对于事发组织是可承受的事件属于（）。",
        "options": [
          "A. 特别重大事件",
          "B. 一般事件",
          "C. 较大事件",
          "D. 重大事件"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 114,
        "type": "single",
        "question": "关于预警的响应与处置，下列说法错误的是（）。",
        "options": [
          "A. 当网络安全威胁情况消除或威胁达不到黄色预警级别，预警发布机构应及时解除预警",
          "B. 预警发布机构根据网络安全事件或威胁的动态变化，及时发布预警的升级或降级信息",
          "C. 当可能对网络与信息系统保护对象产生特别严重的损害时，网络与信息系统的主管和运营部门应及时向单位负责人和信息安全第一责任人汇报",
          "D. 网络与信息系统的主管和运营部门接到网络安全预警后，应分析、研判相关事件或威胁对自身网络安全保护对象可能造成损害的程度"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 115,
        "type": "single",
        "question": "网络运营者应当制定（），及时处置系统漏洞、计算机病毒、网络攻击、网络侵入等安全风险。",
        "options": [
          "A. 网络安全事件应急演练方案",
          "B. 网络安全事件应急预案",
          "C. 网络安全事件补救措施",
          "D. 网络安全事件应急处置措施"
        ],
        "analysis": "",
        "answer": 1
      }
    ]
  },
  {
    "set_name": "2026考证单选题1",
    "items": [
      {
        "id": 1,
        "type": "single",
        "question": "关于道德，正确的说法是（ ）。",
        "options": [
          "A. 道德在职业活动中不起作用",
          "B. 道德在公共生活中几乎不起作用",
          "C. 道德威力巨大，无坚不克",
          "D. 道德是调节社会关系的重要手段"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 2,
        "type": "single",
        "question": "关于道德与法律的关系，正确的是（ ）。",
        "options": [
          "A. 在内容上没有交叉",
          "B. 在最终目的上没有一致性",
          "C. 在实践上是相互支撑的",
          "D. 在适用范围上完全一致"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 3,
        "type": "single",
        "question": "社会主义公民道德建设的基本原则是（ ）。",
        "options": [
          "A. 爱国主义",
          "B. 社会主义",
          "C. 功利主义",
          "D. 集体主义"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 4,
        "type": "single",
        "question": "网络安全工作者不需（ ）。",
        "options": [
          "A. 自觉维护国家信息安全，拒绝并抵制泄露国家秘密和破坏国家信息基础建设的行为",
          "B. 自觉维护网络社会安全，拒绝并抵制通过计算机网络系统谋取非法利益和破坏社会和谐的行为",
          "C. 自觉维护公众信息安全，拒绝并抵制通过计算机网络系统侵犯公众合法权益和泄露个人隐私的行为",
          "D. 自觉维护个人信息安全，采取一切措施避免信息泄露"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 5,
        "type": "single",
        "question": "下列关于诚实守信的说法中，你认为不正确的是（ ）。",
        "options": [
          "A. 诚实守信是企业的无形形象",
          "B. 诚实守信任何时候都与企业发展目标相冲突",
          "C. 诚实守信是社会主义市场经济的内在要求",
          "D. 诚实守信的企业最终能够取信于社会"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 6,
        "type": "single",
        "question": "职业纪律是企业的行为规范，职业纪律具有（ ）的特点。",
        "options": [
          "A. 每个从业人员都要遵守纪律和法律，尤其要遵守职业纪律和与职业活动相关",
          "B. 只遵守与所从事职业相关的法律法规",
          "C. 只遵守计量法",
          "D. 只遵守标准化法"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 7,
        "type": "single",
        "question": "办事公道是指从业人员在进行职业活动时要做到（ ）。",
        "options": [
          "A. 追求真理，坚持原则",
          "B. 奉献社会，助人为乐",
          "C. 公私分明，实事求是",
          "D. 有求必应，服务热情"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 8,
        "type": "single",
        "question": "职业道德作为职业行为准则，有着其他的（ ）不具备的特征。",
        "options": [
          "A. 社会行为准则",
          "B. 工作行为准则",
          "C. 职业行为准则",
          "D. 社会交往准则"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 9,
        "type": "single",
        "question": "运算器的主要功能是（ ）。",
        "options": [
          "A. 实现算术运算和逻辑运算",
          "B. 保存各种指令信息供系统其他部件使用",
          "C. 分析指令并进行译码",
          "D. 按主频指标规定发出时钟脉冲"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 10,
        "type": "single",
        "question": "下列排除计算机故障的基本原则中错误的是（ ）。",
        "options": [
          "A. 判断真伪",
          "B. 先硬后软",
          "C. 从简单到复杂",
          "D. 由外到内"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 11,
        "type": "single",
        "question": "下列关于计算机软件系统的叙述中错误的是（ ）。",
        "options": [
          "A. 计算机软件系统的主要任务是提高机器的使用效率",
          "B. 计算机软件系统的主要任务是为计算机系统提供物质基础",
          "C. 计算机软件系统的主要任务是发挥和扩大机器的功能和用途",
          "D. 计算机软件系统的主要任务是为用户使用计算机系统提供方便"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 12,
        "type": "single",
        "question": "在计算机中，必须将高级语言程序转换为（ ）才能被CPU执行。",
        "options": [
          "A. 汇编程序",
          "B. 指令",
          "C. 软件",
          "D. 目标代码"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 13,
        "type": "single",
        "question": "计算机中对多媒体的定义是指（ ）。",
        "options": [
          "A. 多种表示和传播信息的载体",
          "B. 各种信息的编码",
          "C. 计算机的输入输出信息",
          "D. 计算机屏幕显示的信息"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 14,
        "type": "single",
        "question": "Windows系统是一种（ ）。",
        "options": [
          "A. 分时操作系统",
          "B. 命令操作系统",
          "C. 文字操作系统",
          "D. 视窗操作系统"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 15,
        "type": "single",
        "question": "在Linux系统中，默认情况下管理员创建了一个用户，就会在（ ）目录下创建一个用户主目录。",
        "options": [
          "A. /uesr",
          "B. /home",
          "C. /root",
          "D. /ect"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 16,
        "type": "single",
        "question": "以下选项中，（ ）不是iOS操作系统的优点。",
        "options": [
          "A. 安全性较高",
          "B. 稳定性较好",
          "C. 应用数量多、品质高",
          "D. 系统的封闭性"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 17,
        "type": "single",
        "question": "下列有关数据库的描述，正确的是（ ）。",
        "options": [
          "A. 数据库设计是指设计数据库管理系统",
          "B. 数据库技术的根本目标是要解决数据共享的问题",
          "C. 数据库是一个独立的系统，不需要操作系统的支持",
          "D. 数据库系统中，数据的物理结构必须与逻辑结构一致"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 18,
        "type": "single",
        "question": "一名员工可以使用多台计算机，每台计算机只能由一名员工使用，则实体员工和计算机间的联系是（ ）。",
        "options": [
          "A. 一对多",
          "B. 多对多",
          "C. 多对一",
          "D. 一对一"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 19,
        "type": "single",
        "question": "网络层属于 OSI7 层参考模型中的一层，以下是网络层的功能是（ ）。",
        "options": [
          "A. 确保数据的传送正确无误",
          "B. 确定数据包如何转发与路由",
          "C. 在信道上传送比特流",
          "D. 纠错与流控"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 20,
        "type": "single",
        "question": "ARP协议工作于 TCP/IP 协议栈的哪一层（ ）。",
        "options": [
          "A. 应用层",
          "B. 传输层",
          "C. 网络层",
          "D. 链路层"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 21,
        "type": "single",
        "question": "TCP 与 UDP 协议的相同之处在于都是（ ）。",
        "options": [
          "A. 面向连接的协议",
          "B. 面向非连接的协议",
          "C. 传输层协议",
          "D. 以上均不对"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 22,
        "type": "single",
        "question": "dns协议的的功能是（ ）。",
        "options": [
          "A. 为客户机分配 ip 地址",
          "B. 访问 http 的应用程序",
          "C. 将计算机名翻译为 ip 地址",
          "D. 将 mac 地址翻译为 ip 地址"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 23,
        "type": "single",
        "question": "以下说法中错误的是（ ）。",
        "options": [
          "A. 中继器是工作在物理层的设备",
          "B. 集线器和以太网交换机工作在数据链路层",
          "C. 桥能隔离网络层广播",
          "D. 路由器是工作在网络层的设备"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 24,
        "type": "single",
        "question": "以下不是组网常见使用的设备是（ ）。",
        "options": [
          "A. 路由器",
          "B. 交换机",
          "C. 堡垒机",
          "D. 无线AP"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 25,
        "type": "single",
        "question": "以下不是无线网络性能测试的主要项目是（ ）。",
        "options": [
          "A. 网络延时测试",
          "B. 密码复杂度测试",
          "C. 信号强度测试",
          "D. 传输带宽测试"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 26,
        "type": "single",
        "question": "如果连接同一个 SSID 的无线客户端想从一个 AP 漫游到另一个 AP，那么两个 AP 之间信号重叠的区域范围一般为多少（ ）。",
        "options": [
          "A. 50%",
          "B. 不需要重叠",
          "C. 100%",
          "D. 10%-15%"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 27,
        "type": "single",
        "question": "当一个内部网络对外的出口只有一个时，那么最好配置（ ）。",
        "options": [
          "A. 默认路由",
          "B. 主机路由",
          "C. 动态路由",
          "D. 静态路由"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 28,
        "type": "single",
        "question": "IPSec需要使用一个称为（ ）的信令协议来建立两台主机之间的逻辑连接。",
        "options": [
          "A. AH认证头部协议",
          "B. SA安全关联组协议",
          "C. PGP隐私",
          "D. TLS传输安全协议"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 29,
        "type": "single",
        "question": "在局域网中，以下选项中最重要的故障检测工作是（ ）。",
        "options": [
          "A. 对文件服务器的维护",
          "B. 对终端客户机的维护",
          "C. 对hub的维护",
          "D. 对网络适配器的维护"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 30,
        "type": "single",
        "question": "使用（ ）来判断故障发生在企业网内部还是外部。",
        "options": [
          "A. ping 1.202.66.222",
          "B. tracert 1.202.66.222",
          "C. netstat 1.202.66.222",
          "D. arp 1.202.66.222"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 31,
        "type": "single",
        "question": "2005年4月1日正式施行的《电子签名法》，被称为\"中国首部真正意义上的信息化法律\"，自此电子签名与传统手写签名和盖章具有同等的法律效力。下列关于电子签名说法错误的是（ ）。",
        "options": [
          "A. 电子签名是指数据电文中以电子形式所含、所附用于识别签名人身份并表明签名人认可其中内容的数据",
          "B. 电子签名适用于民事活动中的合同或者其他文件、单证等文书",
          "C. 电子签名需要第三方认证，由依法设立的电子认证服务提供者提供认证服务",
          "D. 电子签名制作数据用于电子签名时，属于电子签名人和电子认证服务提供者共有"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 32,
        "type": "single",
        "question": "信息安全等级保护中，第三级适用的正确的是（ ）。",
        "options": [
          "A. 适用于一般的信息和信息系统，其受到破坏后，会对公民、法人和其他组织的权益有一定的影响，但不危害国家安全、社会秩序、经济建设和公共利益",
          "B. 适用于一定程度上涉及国家安全、社会秩序、经济建设和公共利益的一般信息和信息系统，其受到破坏后，会对国家安全、社会秩序、经济建设和公共利益造成一般损害",
          "C. 适用于涉及国家安全、社会秩序、经济建设和公共利益的信息和信息系统，其受到破坏后，会对国家安全、社会秩序、经济建设和公共利益造成严重损害",
          "D. 适用于涉及国家安全、社会秩序、经济建设和公共利益的重要信息和信息系统，其受到破坏后，会对国家安全、社会秩序、经济建设和公共利益造成特别严重损害"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 33,
        "type": "single",
        "question": "以下哪一项设备工作在OSI 参考模型的数据链路层（ ）。",
        "options": [
          "A. 广域网交换机",
          "B. 路由器",
          "C. 中继器",
          "D. 集线器"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 34,
        "type": "single",
        "question": "IP协议的特征是（ ）。",
        "options": [
          "A. 可靠，无连接",
          "B. 不可靠，无连接",
          "C. 可靠，面向连接",
          "D. 不可靠，面向连接"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 35,
        "type": "single",
        "question": "B类IP地址的范围是（ ）。",
        "options": [
          "A. 1.0.0.0 - 126.0.0.0",
          "B. 128.0.0.0 - 191.255.0.0",
          "C. 192.0.1.0 - 223.255.255.0",
          "D. 224.0.0.0 - 239.255.255.255"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 36,
        "type": "single",
        "question": "当已经分片的数据报需要重新组装时，目的主机需要使用 IP 数据报头中的（ ）进行重组。",
        "options": [
          "A. 首部长度字段",
          "B. 服务类型 ToS 字段",
          "C. 版本字段",
          "D. 标识符字段"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 37,
        "type": "single",
        "question": "以下不属于UDP报文字段部分字节的含义和作用的是（ ）。",
        "options": [
          "A. 源端口",
          "B. 目的端口",
          "C. 报文长度",
          "D. 序号"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 38,
        "type": "single",
        "question": "DHCP在网络中的作用是非常巨大的，它可以为网络中的计算机自动分配 TCP/IP 地址、（ ）、网关地址、 DNS 地址、 WINS 服务器地址等参数。",
        "options": [
          "A. FTP地址",
          "B. 子网掩码",
          "C. 域名",
          "D. 服务端口"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 39,
        "type": "single",
        "question": "以下描述中，不正确的是（ ）。",
        "options": [
          "A. 设置了交换机的管理地址后，就可以使用telnet方式来登录连接交换机，并实现对交换机的管理与配置",
          "B. 首次配置交换机时，必须采用console口登录配置",
          "C. 默认情况下，交换机的所有端口均属于vlan1，设置管理地址，实际上就是设置vlan1接口的地址",
          "D. 交换机允许同时建立多个telnet登录连接"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 40,
        "type": "single",
        "question": "以下选项中对于NAT 叙述错误的是（ ）。",
        "options": [
          "A. NAT 是\"网络地址转换\"的缩写",
          "B. 地址转换又称地址翻译，用来实现私有地址和公用网络地址之间的转换",
          "C. 当内部网络的主机访问外部网络的时候，一定不需要 NAT",
          "D. 地址转换的提出为解决 IP 地址紧张的问题提供了一个有效途径"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 41,
        "type": "single",
        "question": "为保证路由器不被陌生访客所使用，通常不会对console口设置（ ）。",
        "options": [
          "A. 密码ciper模式登录",
          "B. AAA 认证登录",
          "C. 密码simple模式登录",
          "D. 免密登录"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 42,
        "type": "single",
        "question": "下列那一项是 WLAN 最常用的上网认证方式：（ ）。",
        "options": [
          "A. WEP 认证",
          "B. SIM 认证",
          "C. 宽带拨号认证",
          "D. PPoE 认证"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 43,
        "type": "single",
        "question": "RedHat Linux使用（ ）包实现系统安装的管理。",
        "options": [
          "A. tar",
          "B. RPM",
          "C. patch",
          "D. gm"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 44,
        "type": "single",
        "question": "操作系统安全加固措施不包括：（ ）。",
        "options": [
          "A. 设置密码安全策略",
          "B. 禁用来宾账户",
          "C. 开启并设置内置防火墙",
          "D. 从\"开始\"菜单中删除\"运行菜单\""
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 45,
        "type": "single",
        "question": "主机系统安全涉及的控制点包括：身份鉴别、安全标记、访问控制、可信路径、安全审计等（ ）个控制点。",
        "options": [
          "A. 8",
          "B. 9",
          "C. 10",
          "D. 7"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 46,
        "type": "single",
        "question": "TCSEC（可信计算机系统评估标准）将网络安全分为（ ）类应用服务的职责。",
        "options": [
          "A. 一",
          "B. 二",
          "C. 三",
          "D. 四"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 47,
        "type": "single",
        "question": "（ ）公司在2013年开始向零信任架构转型之后，带动\"零信任\"安全架构的流行。",
        "options": [
          "A. 亚马逊",
          "B. Intuit",
          "C. 腾讯",
          "D. Google"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 48,
        "type": "single",
        "question": "以下哪一项不是单机状态下的安全措施（ ）。",
        "options": [
          "A. 物理保护计算机，不允许非授权人员接触计算机",
          "B. 访问控制，非授权人员无法读取或复制计算机中的信息",
          "C. 防止计算机感染病毒",
          "D. 禁止接入任何输出设备"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 49,
        "type": "single",
        "question": "签名不可以解决的鉴别问题有（ ）。",
        "options": [
          "A. 发送者伪造",
          "B. 发送者否认",
          "C. 接收方篡改",
          "D. 第三方冒充"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 50,
        "type": "single",
        "question": "网络安全中的访问控制规则是处理主体对客体访问（ ）的合法性问题，一个主体只能访问经过授权使用的给定客体。",
        "options": [
          "A. 权限设置",
          "B. 机制设置",
          "C. 方法设置",
          "D. 对象设置"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 51,
        "type": "single",
        "question": "在Linux中（ ）就是收缩进程所享有的特权，以防进程滥用特权。",
        "options": [
          "A. 量权权限原则",
          "B. 适度权限原则",
          "C. 最小权限原则",
          "D. 必要权限原则"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 52,
        "type": "single",
        "question": "按照通用标准规范，安全审计主要包含数据生成、事件选择、事件存储、（ ）、审计分析、审计复核6个主要功能模块。",
        "options": [
          "A. 事件响应",
          "B. 自动响应",
          "C. 事件分析",
          "D. 及时响应"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 53,
        "type": "single",
        "question": "Linux系统安全配置不包括（ ）。",
        "options": [
          "A. 及时升级补丁程序",
          "B. 配置账户密码策略",
          "C. 启用telnet登录",
          "D. 禁用不需要的服务"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 54,
        "type": "single",
        "question": "在Windows Server计算机设置最小密码长度为8，应该如何来实现这一目标（ ）。",
        "options": [
          "A. 设置计算机本地策略中的密码策略，设置\"密码长度最小值\"为8",
          "B. 设置计算机账户策略中的密码策略，设置\"密码长度最小值\"为8",
          "C. 设置计算机本地策略中的安全选项，设置\"密码长度最小值\"为8",
          "D. 制定一个行政规定，要求用户的密码长度最小为8"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 55,
        "type": "single",
        "question": "密码学的目的是（ ）。",
        "options": [
          "A. 研究数据加密",
          "B. 研究数据解密",
          "C. 研究数据保密",
          "D. 研究信息安全"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 56,
        "type": "single",
        "question": "数据库的概念模型独立于（ ）。",
        "options": [
          "A. 具体的机器和DBMS",
          "B. E-R图",
          "C. 信息世界",
          "D. 现实世界"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 57,
        "type": "single",
        "question": "以下属于恶意代码的一组是（ ）。",
        "options": [
          "A. 病毒、木马、蠕虫、正版软件、间谍软件",
          "B. 病毒、替代程序、僵尸程序、间谍软件",
          "C. 病毒、木马、蠕虫、僵尸程序、后门",
          "D. 病毒、木马、蠕虫、僵尸程序、读屏软件"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 58,
        "type": "single",
        "question": "监视恶意代码主体程序是否正常的技术是（ ）。",
        "options": [
          "A. 备份文件",
          "B. 超级权限",
          "C. HOOK技术",
          "D. 进程守护"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 59,
        "type": "single",
        "question": "（ ）技术常用来保护软件版权，防止软件被破解。",
        "options": [
          "A. 压缩",
          "B. 加壳",
          "C. 脱壳",
          "D. 破壳"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 60,
        "type": "single",
        "question": "分析已有的程序，寻求比源代码更高级的抽象表现形式，这就是软件（ ）。",
        "options": [
          "A. 反向思维",
          "B. 逆向思维",
          "C. 逆向工程",
          "D. 抽象工程"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 61,
        "type": "single",
        "question": "应用服务的职责是（ ）。",
        "options": [
          "A. 跨Bounded Context业务逻辑",
          "B. DTO转换",
          "C. 事务AOP、权限AOP、日志AOP、异常AOP、外部系统访问：邮件、消息队列",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 62,
        "type": "single",
        "question": "应用服务有以下（ ）应用类型。",
        "options": [
          "A. WEB应用",
          "B. API应用",
          "C. 移动应用",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 63,
        "type": "single",
        "question": "DNS服务，可用于实现（ ）解析。",
        "options": [
          "A. 域名",
          "B. MAC",
          "C. 系统",
          "D. 服务"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 64,
        "type": "single",
        "question": "Windows的DNS服务配置过程中，将IP地址解析为域名，需要配置（ ）。",
        "options": [
          "A. 正向查找区域",
          "B. 反向查找区域",
          "C. 正向解析区域",
          "D. 反向解析区域"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 65,
        "type": "single",
        "question": "DNS放大攻击的原理是（ ）。",
        "options": [
          "A. 攻击者向公共DNS服务器发送DNS名称查询，使用受害者的地址作为源地址，导致公共DNS服务器的响应都被发送到目标系统",
          "B. 攻击者将恶意数据注入DNS解析器的缓存系统，以将用户重定向到他们选择的网站",
          "C. 利用DNS协议使用客户端-服务器模型注入恶意软件和其他数据。使用这些数据有效负载，网络犯罪分子可以接管DNS服务器，然后可能访问其管理功能和驻留在其上的应用程序",
          "D. 攻击者会使用受感染主机的动态IP地址充当后端僵尸网络主机的反向代理"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 66,
        "type": "single",
        "question": "在DNS服务配置完成后，要进行IP地址和域名正反解析测试，所使用的命令是（ ）。",
        "options": [
          "A. ipconfig/release",
          "B. ipconfig/flushdns",
          "C. nslookup",
          "D. ipconfig/all"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 67,
        "type": "single",
        "question": "万维网（World Wide WEB）最核心的技术是（ ）。",
        "options": [
          "A. Java",
          "B. HTML和HTTP",
          "C. QoS",
          "D. TCP/IP"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 68,
        "type": "single",
        "question": "在配置IIS的网站时，希望网站以html文档的方式打开以\".xyz\"结尾的未知文档，可通过配置（ ）实现。",
        "options": [
          "A. NIME类型",
          "B. MINE类型",
          "C. MIME类型",
          "D. NINE类型"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 69,
        "type": "single",
        "question": "WEB服务的安全威胁分为（ ）。",
        "options": [
          "A. 完整性",
          "B. 保密性",
          "C. 拒绝服务、认证鉴别",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 70,
        "type": "single",
        "question": "为确保WEB服务安全，下列说法正确的是（ ）。",
        "options": [
          "A. 安装有IIS组件",
          "B. 确保默认WEB站点和管理WEB站点的安全",
          "C. 使FrontPage Server Extension(EPSE)有效",
          "D. 启用所有的WEB服务"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 71,
        "type": "single",
        "question": "FTP的工作模式分主动模式和被动模式。主要是站在服务器的角度去看问题，主动模式下服务器一般开放TCP（ ）端口进行数据传输。",
        "options": [
          "A. 21",
          "B. 随机",
          "C. 80",
          "D. 20"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 72,
        "type": "single",
        "question": "在IIS中搭建FTP网站，下列说法正确的是（ ）。",
        "options": [
          "A. 基本访问方式是不需要账号和密码登录的",
          "B. FTP的默认端口不能修改",
          "C. 访问FTP的权限可以设置读取和写入方式",
          "D. 身份验证不可以采用匿名方式"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 73,
        "type": "single",
        "question": "FTP常见的威胁不包括（ ）。",
        "options": [
          "A. 匿名身份验证",
          "B. DDOS攻击",
          "C. 网络钓鱼攻击",
          "D. XSS攻击"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 74,
        "type": "single",
        "question": "匿名FTP访问通常使用（ ）作为用户名。",
        "options": [
          "A. guest",
          "B. email地址",
          "C. anonymous",
          "D. 主机id"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 75,
        "type": "single",
        "question": "DHCP在网络中起着重要作用，它可以为网络中的计算机自动分配 TCP/IP 地址、（ ）、网关地址、DNS 地址、WINS服务器地址等参数。",
        "options": [
          "A. FTP地址",
          "B. 子网掩码",
          "C. 域名",
          "D. 服务端口"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 76,
        "type": "single",
        "question": "如果DHCP安装成功，将在%systemroot%\\system32文件夹下自动创建一个名为（ ）的文件夹。",
        "options": [
          "A. bootp",
          "B. dhcp",
          "C. dhcpmessage",
          "D. dhcplog"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 77,
        "type": "single",
        "question": "在实际网络中，针对DHCP攻击的手段不包含（ ）。",
        "options": [
          "A. DHCP饿死攻击",
          "B. 仿冒DHCP Server攻击",
          "C. DHCP中间人攻击",
          "D. DHCP胁持攻击"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 78,
        "type": "single",
        "question": "在DHCP服务配置完成后，手动在客户端获得TCP/IP信息，查看所有TCP/IP信息的命令是。",
        "options": [
          "A. ipconfig/release",
          "B. ipconfig/renew",
          "C. ipconfig/all",
          "D. nslookup"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 79,
        "type": "single",
        "question": "以下关于VPN说法正确的是（ ）。",
        "options": [
          "A. VPN指的是用户通过公用网络建立的临时的、逻辑隔离的、安全的连接",
          "B. VPN指的是用户自己租用线路，和公共网络物理上完全隔离的、安全的线路",
          "C. VPN不能做到信息认证和身份认证",
          "D. VPN只能提供身份认证、不能提供加密数据的功能"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 80,
        "type": "single",
        "question": "Samba的主配置文件是（ ）。",
        "options": [
          "A. /bin/smb/smb.conf",
          "B. /etc/samba/smb.conf",
          "C. /bin/samba/smb.conf",
          "D. /bin/samba/samba.conf"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 81,
        "type": "single",
        "question": "下列关于VLAN的描述中，错误的是（ ）。",
        "options": [
          "A. VLAN技术可以将一个规模较大的冲突域隔离成若干个规模较小的冲突域",
          "B. VLAN技术可以将一个规模较大的二层广播域隔离成若干个规模较小的二层广播域",
          "C. 位于不同VLAN中的计算机之间可以通过技术实现进行通信",
          "D. 位于同一VLAN中的计算机之间可以进行二层通信"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 82,
        "type": "single",
        "question": "当Trunk类型的端口在接收到带tag的报文时，以下说法正确的是（ ）。",
        "options": [
          "A. 不会判断该端口是否允许该VLAN tag的数据通过",
          "B. 不做任何处理直接透传",
          "C. 如果端口不允许该VLAN tag的数据通过，直接丢弃",
          "D. 打上本端口的PVID信息，再发送出去"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 83,
        "type": "single",
        "question": "关于STP，下列描述正确的是（ ）。",
        "options": [
          "A. STP是数据链路层协议",
          "B. STP是网络层协议",
          "C. STP是传输层协议",
          "D. STP是应用层协议"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 84,
        "type": "single",
        "question": "当要配置路由器某个接口的地址时应采用的命令是（ ）。",
        "options": [
          "A. ip address 1.1.1.1 netmask 255.0.0.0",
          "B. ip address 1.1.1.1/24",
          "C. set ip address 1.1.1.1 subnetmask 24",
          "D. ip address 1.1.1.1 255.255.255.248"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 85,
        "type": "single",
        "question": "以下4条路由都以静态路由的形式存在于某路由器的IP路由表中，那么这条路由器对于目的IP地址为8.1.1.1的IP报文将根据以下哪条路由来转发（ ）。",
        "options": [
          "A. 0.0.0.0/0",
          "B. 8.0.0.0/8",
          "C. 8.1.0.0/16",
          "D. 18.0.0.0/16"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 86,
        "type": "single",
        "question": "交换机不支持以下那种方式对其进行配置（ ）。",
        "options": [
          "A. 通过mini usb对交换机进行配置",
          "B. 通过FTP对交换机进行配置",
          "C. 通过stelnet对交换机进行配置",
          "D. 通过console口对交换机进行配置"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 87,
        "type": "single",
        "question": "用户通过（ ）端口对交换机进行带外管理配置。",
        "options": [
          "A. console",
          "B. line",
          "C. LAND",
          "D. WAN"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 88,
        "type": "single",
        "question": "一个交换机用户的权限等级为2，则用户所能够使用的命令的等级为（ ）。",
        "options": [
          "A. 0",
          "B. 1",
          "C. 2",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 89,
        "type": "single",
        "question": "当网络中出现故障时，管理员通过查询日志发现是因为某台路由器的配置被修改了，那么以下措施中无法避免这种状况的再次发生的是（ ）。",
        "options": [
          "A. 管理员应该通过配置 ACL 来控制只有管理员能够登录设备",
          "B. 管理员应该在路由的管理端口上启用 port-secrity",
          "C. 管理员应该配置 AAA 来对登录设备的用户进行认证和授权",
          "D. 管理员应该配置除管理员之外的所有账户登录设备的权限级别为 0"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 90,
        "type": "single",
        "question": "在Windows Server 2016工作组中，每台计算机把自己的资源信息、用户帐户信息和安全信息存放在本地的（ ）中。",
        "options": [
          "A. SAM数据库",
          "B. 防火墙",
          "C. 活动目录数据库",
          "D. 文件夹"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 91,
        "type": "single",
        "question": "对于Windows系统网络安全管理方面，下面（ ）不属于对此方面的安全管理措施。",
        "options": [
          "A. 禁止空连接",
          "B. 共享权限的修改",
          "C. 关闭不必要的网络服务和网络端口",
          "D. 系统补丁"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 92,
        "type": "single",
        "question": "关于UNIX/Linux系统的root账号，说法错误的是（ ）。",
        "options": [
          "A. root账号是一个超级用户账户，可以对系统进行任何操作",
          "B. UNIX/Linux超级用户账户只有一个",
          "C. 除非必要，避免以超级用户登录",
          "D. 在UNIX系统中，只要将用户的UID和GID设置为0就可以将其变成超级用户"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 93,
        "type": "single",
        "question": "在Linux系统中，用户和组配置文件所在的目录是（ ）。",
        "options": [
          "A. /",
          "B. /etc",
          "C. /home",
          "D. /bin"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 94,
        "type": "single",
        "question": "Linux系统中修改主机访问控制（IP限制）的文件是（ ）。",
        "options": [
          "A. /etc/hosts.allow",
          "B. /etc/hosts.deny",
          "C. /etc/sysctl.conf",
          "D. /etc/shadow"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 95,
        "type": "single",
        "question": "保障UNIX/Linux系统账号安全最为关键的措施是（ ）。",
        "options": [
          "A. 文件/etc/passwd和/etc/group必须有写保护",
          "B. 删除/etc/passwd、/etc/group",
          "C. 设置足够强度的账号密码",
          "D. 使用shadow密码"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 96,
        "type": "single",
        "question": "在Linux中，以下（ ）做法不能提升网络安全性。",
        "options": [
          "A. 取消不必要的服务",
          "B. 定期检查系统中的日志",
          "C. 开放ping",
          "D. 防IP欺骗"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 97,
        "type": "single",
        "question": "Linux系统安全增强技术包括以下（ ）选项。",
        "options": [
          "A. 开放远程访问",
          "B. 配置最小权限",
          "C. 设置容易记有规律的口令",
          "D. 启用anonymous账户"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 98,
        "type": "single",
        "question": "每一个文件或文件夹的安全选项卡里面包括了访问控制列表和（ ）项。",
        "options": [
          "A. 访问共享",
          "B. 访问安全",
          "C. 访问控制",
          "D. 访问管理"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 99,
        "type": "single",
        "question": "访问控制的模型是（ ）。",
        "options": [
          "A. 正式描述访问控制ID规范",
          "B. 自主访问控制，强制访问控制，基于角色的访问控制和基于属性的访问控制",
          "C. 正式描述敏感标签",
          "D. 没有任何选择"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 100,
        "type": "single",
        "question": "文件系统中，文件访问控制信息存储的合理位置是（ ）。",
        "options": [
          "A. 文件控制块",
          "B. 文件分配表",
          "C. 用户口令表",
          "D. 系统注册表"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 101,
        "type": "single",
        "question": "关于系统补丁正确的说法是（ ）。",
        "options": [
          "A. 信息内网中的机器可以直接接入互联网更新系统补丁",
          "B. 系统补丁都是对系统有益的，补丁装得越多越好",
          "C. 系统补丁装与不装区别不大，没什么作用",
          "D. 系统补丁能有效的修复系统漏洞，加强系统的安全性"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 102,
        "type": "single",
        "question": "安装系统补丁的方法不包括（ ）。",
        "options": [
          "A. 手动安装",
          "B. 在线更新",
          "C. 工具软件安装",
          "D. 系统安装"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 103,
        "type": "single",
        "question": "防病毒软件都有判断特定程序行为是否为（ ）程序的技术机制，通常称为杀毒引擎。",
        "options": [
          "A. 环境",
          "B. 系统",
          "C. 应用",
          "D. 病毒"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 104,
        "type": "single",
        "question": "Windows病毒包括脚本病毒和（ ）。",
        "options": [
          "A. 海外病毒",
          "B. 宏病毒",
          "C. 流感病毒",
          "D. 毒虫病毒"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 105,
        "type": "single",
        "question": "以下（ ）不是属于计算机病毒检测技术。",
        "options": [
          "A. 特征代码法",
          "B. 奇偶校验法",
          "C. 行为监测法",
          "D. 软件模拟法"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 106,
        "type": "single",
        "question": "下列哪一种防病毒软件的实施策略在内部公司网络中是最有效的（ ）。",
        "options": [
          "A. 工作站防病毒软件",
          "B. 服务器防毒软件",
          "C. 病毒墙",
          "D. 病毒库及时更新"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 107,
        "type": "single",
        "question": "下面关于域名的说法正确的是（ ）。",
        "options": [
          "A. 域名专指一个服务器的名字",
          "B. 域名就是网址",
          "C. 域名可以自己任意取",
          "D. 域名系统按地理域或机构域分层采用层次结构"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 108,
        "type": "single",
        "question": "在Internet中，用字符串表示的IP地址称为（ ）。",
        "options": [
          "A. 账户",
          "B. 域名",
          "C. 主机名",
          "D. 用户名"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 109,
        "type": "single",
        "question": "每一个Web页面，包括主页都有一个唯一的地址，通常称该地址为（ ）。",
        "options": [
          "A. Web页面地址",
          "B. 主页地址",
          "C. 网页搜索地址",
          "D. 统一资源定位器URL"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 110,
        "type": "single",
        "question": "使用IE浏览器浏览网页时，出于安全方面的考虑，需要禁止执行JavaScript，可以在IE中（ ）。",
        "options": [
          "A. 禁用ActiveX",
          "B. 禁用cookie",
          "C. 禁用没有标记为安全的ActiveX控件",
          "D. 禁用脚本"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 111,
        "type": "single",
        "question": "常见的Web攻击方法不包括（ ）。",
        "options": [
          "A. 恶意代码上传下载",
          "B. 利用服务器配置漏洞",
          "C. SQL注入攻击",
          "D. 业务测试"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 112,
        "type": "single",
        "question": "在访问因特网过程中，为了防止Web页面中恶意代码对自己计算机的损害，可以采取的防范措施是（ ）。",
        "options": [
          "A. 利用SSL访问Web站点",
          "B. 将要访问的Web站点按其可信度分配到浏览器的不同安全区域",
          "C. 在浏览器中安装数字证书",
          "D. 要求Web站点安装数字证书"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 113,
        "type": "single",
        "question": "渗透测试报告不包括（ ）。",
        "options": [
          "A. 漏洞危害",
          "B. 漏洞截图",
          "C. 使用工具",
          "D. 修复建议"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 114,
        "type": "single",
        "question": "域名是政府网站的基本组成部分和重要身份标识。关于《国务院办公厅关于加强政府网站域名管理的通知》（国办函（2018）55号）对域名解析安全防护和域名监测处置要求，以下四个选项中，（ ）是不正确的。",
        "options": [
          "A. 积极采取域名系统安全协议技术，防止域名被劫持、被冒用，确保域名解析安全",
          "B. 应委托具有应急灾备、抗攻击等能力的域名解析服务提供商进行域名解析，鼓励对政府网站域名进行集中解析",
          "C. 租用网络虚拟空间的，所租用的空间应当位于服务商的境内节点",
          "D. 使用内容分发网络（CDN）服务的，应确保将境内用户的域名解析地址指向其境外节点时的安全"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 115,
        "type": "single",
        "question": "《互联网域名管理办法》规定，申请设立域名注册管理机构的，应具有完善的业务发展计划和技术方案以及与从事顶级域名运行管理相适应的（ ）、资金、专业人员以及符合电信管理机构要求的信息管理系统。",
        "options": [
          "A. 设备",
          "B. 场地",
          "C. 环境",
          "D. 系统"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 116,
        "type": "single",
        "question": "CDN的关键技术主要有（ ）和分发技术。",
        "options": [
          "A. 负载均衡",
          "B. 内容存储",
          "C. 调度运算",
          "D. 网络加速"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 117,
        "type": "single",
        "question": "下列选项中，不属于数据备份的主要方式的是（ ）。",
        "options": [
          "A. 完全备份",
          "B. 增量备份",
          "C. 差异备份",
          "D. 系统备份"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 118,
        "type": "single",
        "question": "只备份上次备份以后有变化的数据，属于数据备份类型中的（ ）。",
        "options": [
          "A. 完全备份",
          "B. 增量备份",
          "C. 差分备份",
          "D. 按需备份"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 119,
        "type": "single",
        "question": "（ ）是操作系统引导记录区的意思，它通常位于硬盘的0磁道1柱面1扇区，是操作系统可以直接访问的第一个扇区。",
        "options": [
          "A. DIR区",
          "B. DBR区",
          "C. FAT区",
          "D. MBR区"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 120,
        "type": "single",
        "question": "下列选项中，不属于Oracle数据库三种标准的备份方式的是（ ）。",
        "options": [
          "A. 导出/导入",
          "B. 热备份",
          "C. 冷备份",
          "D. 逻辑备份"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 121,
        "type": "single",
        "question": "如果计算机出现无法上网的现象，则可能的原因是（ ）。",
        "options": [
          "A. 没有插U盘",
          "B. 打印机没开",
          "C. 网线没插好",
          "D. 没有安装文字处理软件"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 122,
        "type": "single",
        "question": "关于在网络设计阶段进行通信流量分析时可以采用简单的80/20规则，下列描述中正确的是（ ）。",
        "options": [
          "A. 这种设计思路可以最大限度地满足用户的远程联网需求",
          "B. 这个规则可以随时控制网络的运行状态",
          "C. 这个规则适用于内部交流较多而外部访问较少的网络",
          "D. 这个规则使用于网络允许存在具有特殊应用的网段"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 123,
        "type": "single",
        "question": "路由器故障诊断可以使用多种工具（ ）。",
        "options": [
          "A. 路由器诊断命令",
          "B. 网络管理工具",
          "C. 局域网或广域网分析仪在内的其他故障诊断工具",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 124,
        "type": "single",
        "question": "ping命令中，将IP地址格式表示的主机的网络地址解析为计算机名的参数的是（ ）。",
        "options": [
          "A. -n",
          "B. -t",
          "C. -a",
          "D. -l"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 125,
        "type": "single",
        "question": "利用（ ）命令可以显示统计信息和当前TCP/IP网络连接的情况，用户或网络管理员可以得到非常详细的统计结果。",
        "options": [
          "A. ipconfig",
          "B. netstat",
          "C. tracert",
          "D. ping"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 126,
        "type": "single",
        "question": "Pathping命令的功能是（ ）。",
        "options": [
          "A. 显示与IP、TCP、UDP和ICMP协议相关的统计信息",
          "B. 解决NetBIOS名称解析问题",
          "C. 显示数据包到达目标主机所经过的路径",
          "D. 是一个路由跟踪工具，可以确定可能导致网络故障的路由器或链接"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 127,
        "type": "single",
        "question": "在Windows操作系统中，采用（ ）命令查看本机路由表。",
        "options": [
          "A. nslookup",
          "B. route print",
          "C. netstat",
          "D. nbtstst"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 128,
        "type": "single",
        "question": "在Windows命令行窗口中进入nslookup交互工作方式，然后输入set type=mx，这样的设置可以（ ）。",
        "options": [
          "A. 切换到指定的域名服务器",
          "B. 查询邮件服务器的地址",
          "C. 由地址查找对应的域名",
          "D. 查询域名对应的各种资源"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 129,
        "type": "single",
        "question": "以下对Iftop的描述正确的是（ ）。",
        "options": [
          "A. 是一款实时流量监控工具",
          "B. Iftop可以监控TCP/IP连接等",
          "C. Iftop无报表功能",
          "D. Iftop必须以root身份才能运行"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 130,
        "type": "single",
        "question": "攻击者用传输数据来冲击网络接口，使服务器过于繁忙以至于不能应答请求的攻击方式是（ ）。",
        "options": [
          "A. 拒绝服务攻击",
          "B. 地址欺骗攻击",
          "C. 会话劫持",
          "D. 信号包探测程序攻击"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 131,
        "type": "single",
        "question": "常规端口扫描和半开式扫描的区别是（ ）。",
        "options": [
          "A. 没有区别",
          "B. 没有完成三次握手、缺少ACK过程",
          "C. 半开式采用UDP方式扫描",
          "D. 扫描准确性不一样"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 132,
        "type": "single",
        "question": "许多黑客攻击都是利用软件实现中的缓冲区溢出的漏洞，对此最可靠的解决方案是（ ）。",
        "options": [
          "A. 安装防火墙",
          "B. 安装入侵检测系统",
          "C. 给系统安装最新的补丁",
          "D. 安装防病毒软件"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 133,
        "type": "single",
        "question": "特洛伊木马具有（ ）和非授权性的特点。",
        "options": [
          "A. 隐藏性",
          "B. 稳定性",
          "C. 安全性",
          "D. 快速性"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 134,
        "type": "single",
        "question": "攻击者截获并记录了从A到B的数据，于是从早期所截获的数据中提取出信息重新发往B称为（ ）。",
        "options": [
          "A. 中间人攻击",
          "B. 字典攻击",
          "C. 强力攻击",
          "D. 重放攻击"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 135,
        "type": "single",
        "question": "系统安全事件可分为（ ）两大类。",
        "options": [
          "A. 存在恶意活动的多次事件和阈值以内的恶意行为",
          "B. 存在恶意活动的单次事件和超过阈值的恶意行为",
          "C. 存在恶意活动的多次事件和超过阈值的恶意行为",
          "D. 存在恶意活动的单次事件和阈值以内的恶意行为"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 136,
        "type": "single",
        "question": "对系统漏洞攻击造成的危害不包括（ ）。",
        "options": [
          "A. 攻击或控制整个电脑",
          "B. 植入木马、病毒",
          "C. 窃取电脑中的重要资料和信息",
          "D. 破坏系统"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 137,
        "type": "single",
        "question": "网络钓鱼使用的最主要的欺骗技术是（ ）。",
        "options": [
          "A. 仿冒某些公司的网站或电子邮件",
          "B. 攻破某些网站，然后修改他的程序代码",
          "C. 直接窃取用户电脑的一些记录",
          "D. 发送大量垃圾邮件"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 138,
        "type": "single",
        "question": "根据病毒存在的媒体分类不包括（ ）。",
        "options": [
          "A. 网络病毒",
          "B. 文件病毒",
          "C. 引导型病毒",
          "D. 驻留型病毒"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 139,
        "type": "single",
        "question": "下列不属于数据库漏洞的是（ ）。",
        "options": [
          "A. 安全特性缺陷",
          "B. 操作系统后门",
          "C. 垃圾邮件",
          "D. 数据库账号管理"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 140,
        "type": "single",
        "question": "下列各项中，（ ）不是文件型病毒的特点。",
        "options": [
          "A. 文件型病毒通常在运行主程序时进入内存",
          "B. 文件型病毒可以通过检查主程序长度来判断其存在",
          "C. 以自身逻辑部分取代合法的引导程序模块，导致系统瘫痪",
          "D. 病毒以某种形式隐藏在主程序中，并不修改主程序"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 141,
        "type": "single",
        "question": "下列对跨站脚本攻击（XSS）的描述正确的是：（ ）。",
        "options": [
          "A. XSS攻击指的是恶意攻击者在WEB页面里插入恶意代码，当用户浏览该页面时嵌入其中的代码会被执行，从而达到恶意攻击用户的特殊目的",
          "B. XSS攻击是DOOS攻击的一种变种",
          "C. XSS攻击就是CC攻击",
          "D. XSS攻击就是利用被控制的机器不断地向被攻击网站发送访问请求，迫使服务器连接数超出限制，当CPU资源耗尽，那么网站也就被攻击垮了，从而达到攻击的目的"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 142,
        "type": "single",
        "question": "关于源代码审核，描述错误的是（ ）。",
        "options": [
          "A. 源代码审核有利于发现软件编码中存在的安全问题",
          "B. 源代码审核工程遵循PDCA模型",
          "C. 源代码审核方式包括人工审核和工具审核",
          "D. 源代码审核工具包括商业工具和开源工具"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 143,
        "type": "single",
        "question": "面向对象的编程语言不包括（ ）。",
        "options": [
          "A. JAVA",
          "B. PYTHON",
          "C. C",
          "D. C++"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 144,
        "type": "single",
        "question": "在安全审计的风险评估阶段，通常是按（ ）顺序来进行的。",
        "options": [
          "A. 侦查阶段-控制阶段-渗透阶段",
          "B. 控制阶段-侦查阶段-渗透阶段",
          "C. 渗透阶段-侦查阶段-控制阶段",
          "D. 侦查阶段-渗透阶段-控制阶段"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 145,
        "type": "single",
        "question": "木马的组成部分有（ ）。",
        "options": [
          "A. 管理者",
          "B. 用户",
          "C. 客户端和服务器端",
          "D. 程序"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 146,
        "type": "single",
        "question": "常见的网络通信协议后门不包括（ ）。",
        "options": [
          "A. ICMP",
          "B. IGMP",
          "C. TCP",
          "D. IP"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 147,
        "type": "single",
        "question": "在网页上挂载恶意代码属于（ ）类型的恶意代码传播方式。",
        "options": [
          "A. 利用操作系统和应用软件的漏洞进行传播",
          "B. 通过网站传播",
          "C. 利用用户之间的信任关系传播",
          "D. 利用移动媒介传播"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 148,
        "type": "single",
        "question": "关于恶意代码流行趋势，以下说法（ ）是错误的。",
        "options": [
          "A. 从传播速度上来看，恶意代码的暴发和传播速度越来越快",
          "B. 从攻击意图来看，恶意代码的开发者越来越专业化，其意图也从娱乐和技术炫耀逐渐转为恶意牟利",
          "C. 从功能上来看，恶意代码的分工越来越细",
          "D. 从传播范围来看，恶意代码呈现单一平台传播的特征"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 149,
        "type": "single",
        "question": "企业在选择防病毒产品时，选择单一品牌防毒软件产品的好处是（ ）。",
        "options": [
          "A. 更简化的管理流程",
          "B. 划算的总体成本",
          "C. 容易更新",
          "D. 以上都正确"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 150,
        "type": "single",
        "question": "常见的漏洞扫描技术有（ ）。",
        "options": [
          "A. 端口扫描技术",
          "B. ping扫描技术",
          "C. TCP扫描技术、UDP扫描技术",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 151,
        "type": "single",
        "question": "下列（ ）工具不属于WEB服务器漏洞扫描工具。",
        "options": [
          "A. Nikto",
          "B. paros Proxy",
          "C. WEB Dumper",
          "D. Nessus"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 152,
        "type": "single",
        "question": "关于防病毒软件的实时扫描的描述中，（ ）说法是错误的。",
        "options": [
          "A. 可以查找文件是否被病毒行为修改的扫描技术",
          "B. 扫描动作在背景中发生，不需要用户的参与",
          "C. 扫描只局限于检查已知的恶意代码签名，无法检测到未知的恶意代码",
          "D. 在访问某个文件时，执行实时扫描的防毒产品会检查这个被打开的文件"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 153,
        "type": "single",
        "question": "以下用于进行数据恢复的工具软件是（ ）。",
        "options": [
          "A. MSOffice2010",
          "B. WINRARC",
          "C. EasyRecover",
          "D. 金山毒霸"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 154,
        "type": "single",
        "question": "X-SCAN软件在完成系统或网络漏洞扫描后，不可以产生的报告类型是（ ）。",
        "options": [
          "A. doc",
          "B. xml",
          "C. html",
          "D. txt"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 155,
        "type": "single",
        "question": "Windows2016的系统日志文件有应用程序日志，安全日志、系统日志、DNS服务器日志等等，这些日志默认位置：%systemroot%/system32/config，默认文件大小（ ）。",
        "options": [
          "A. 128KB",
          "B. 256KB",
          "C. 512KB",
          "D. 1024KB"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 156,
        "type": "single",
        "question": "最近，李明发现自己的计算机经常无缘无故地死机，运行速度也明显变慢，怀疑感染了计算机病毒。他首先应采取的合理措施是（ ）。",
        "options": [
          "A. 重新安装操作系统",
          "B. 用杀毒软件查杀病毒",
          "C. 立即关机以后不再使用",
          "D. 对所有磁盘进行格式化"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 157,
        "type": "single",
        "question": "使用Windows10的自带的工具恢复系统，是在（ ）窗口下操作。",
        "options": [
          "A. 设置\\\\系统和安全\\\\备份和还原(Windows 7)",
          "B. 设置\\\\系统和安全\\\\备份和还原(Windows 10)",
          "C. 控制面板\\\\系统和安全\\\\备份和还原(Windows 7)",
          "D. 控制面板\\\\系统和安全\\\\备份和还原(Windows 10)"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 158,
        "type": "single",
        "question": "数据库常见攻击方法的检测有快照对比和（ ）。",
        "options": [
          "A. 使用资源管理器（Solaris使用ps-aux命令）检查当前内存、CPU等资源占用情况",
          "B. 检测系统进程和快照对比，找出非法进程",
          "C. 页面快照",
          "D. 日志分析"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 159,
        "type": "single",
        "question": "数据库加密方法有（ ）。",
        "options": [
          "A. 密本方式",
          "B. 密码块链方式",
          "C. 子密钥数据库加密技术、秘密同态技术",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 160,
        "type": "single",
        "question": "下列关于SQL Server数据库日志的说法错误是（ ）。",
        "options": [
          "A. 当修改数据库时，必先写日志",
          "B. 日志文件是维护数据库完整性的重要工具",
          "C. 所有的对SQL数据库的操作都需要写日志",
          "D. 当日志文件的空间占满时，将无法写日志"
        ],
        "analysis": "",
        "answer": 2
      }
    ]
  },
  {
    "set_name": "2026考证判断题1",
    "items": [
      {
        "id": 1,
        "type": "judge",
        "question": "企业文化具有约束的功能。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 2,
        "type": "judge",
        "question": "企业员工因时间紧急未经授权私下代表企业签约，为公司创造了利润，这种行为是对的。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 3,
        "type": "judge",
        "question": "计算机硬件结构由存储器、CPU、输入设备和输出设备构成。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 4,
        "type": "judge",
        "question": "微型计算机的I/O设备通过USB接口与主机连接。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 5,
        "type": "judge",
        "question": "集线器上所有端口独享同一个带宽。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 6,
        "type": "judge",
        "question": "1个字节是由8个二进制数位组成。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 7,
        "type": "judge",
        "question": "应用软件是用户利用计算机及其提供的系统软件为解决各种实际问题而编制的程序。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 8,
        "type": "judge",
        "question": "操作系统的功能之一是提高计算机的运行速度。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 9,
        "type": "judge",
        "question": "应用层负责为应用程序提供网络服务。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 10,
        "type": "judge",
        "question": "在 TCP/IP 层次模型中与 OSI 参考模型第四层相对应的主要协议有TCP和UDP，其中后者提供无连接的不可靠传输服务。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 11,
        "type": "judge",
        "question": "网段192.168.1.0/24，192.168.2.0/24，192.168.3.0/24，192.168.0.0/24能够汇聚成一个网段192.168.0.0/22。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 12,
        "type": "judge",
        "question": "IPv6 报文的基本首部长度是固定值。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 13,
        "type": "judge",
        "question": "TCP通话的双方是通过\"三次握手\"来建立TCP会话的，所谓三次握手是指TCP会话建立过程总共交换了三个TCP段，分别是SYN段、SYN+ACK段、ACK段。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 14,
        "type": "judge",
        "question": "ICMP协议用来在网络设备间传递各种差错和控制信息，它对于收集各种网络信息、诊断和排除各种网络故障具有至关重要的作用。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 15,
        "type": "judge",
        "question": "在分层网络设计模型中，核心层提供了将设备接入网络的途径，并控制允许哪些设备通过网络进行通信。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 16,
        "type": "judge",
        "question": "交换机上安全策略定制越多的拒绝规则，越有利于网络安全。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 17,
        "type": "judge",
        "question": "路由器所有的接口属于同一个广播域。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 18,
        "type": "judge",
        "question": "如果更改了 AP 射频的配置参数，必须重启 AP 后命令才能生效。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 19,
        "type": "judge",
        "question": "UNIX系统中，将某个用户的uid和gid修改成0，则这个用户就拥有了和root一样的权限。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 20,
        "type": "judge",
        "question": "Windows server 2016中的F盘是fat32格式，预转换成NTFS格式，可以用chkdsk /f实现。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 21,
        "type": "judge",
        "question": "在L2交换机上，可以通过配置三层VLAN接口实现VLAN间的通信。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 22,
        "type": "judge",
        "question": "交换机上可以用 vlan batch 批量创建 vlan 简化配置。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 23,
        "type": "judge",
        "question": "园区网络规划时，可以按照业务类型进行 VLAN 的规划。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 24,
        "type": "judge",
        "question": "STP协议中，交换机会逻辑阻塞非根端口和非指定端口。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 25,
        "type": "judge",
        "question": "查询设备 ospf 协议的配置信息，可以在 ospf 协议视图下输入命令\"display this\"。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 26,
        "type": "judge",
        "question": "SNMP 报文是通过 TCP 来承载的。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 27,
        "type": "judge",
        "question": "所有品牌的网络设备都支持通过SNMP被第三方进行管理。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 28,
        "type": "judge",
        "question": "访问级权限的用户，telnet到交换机后可以修改配置。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 29,
        "type": "judge",
        "question": "最低级别的telnet用户登录路由器后，可以修改路由器配置。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 30,
        "type": "judge",
        "question": "Windows操作系统默认的系统管理员账号为admin。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 31,
        "type": "judge",
        "question": "浏览一些站点时，出现的全是乱码的原因是该站点加密了。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 32,
        "type": "judge",
        "question": "路由器在转发某个数据包时，如果未匹配到对应的明细路由且无默认路由，将直接丢弃数据包。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 33,
        "type": "judge",
        "question": "三层模型将网络划分为核心层、汇聚层和接入层，每一层都有着特定的作用。其中，网络汇聚层实现资源访问控制和流量控制等功能。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 34,
        "type": "judge",
        "question": "在使用ipconfig命令时，默认情况下，仅显示绑定到TCP/IP的适配器的IP地址、子网掩码、默认网关和DNS服务器。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 35,
        "type": "judge",
        "question": "Arp用于确定对应IP地址的网卡物理地址，ARP命令能够查看本地计算机或另一台计算机的ARP高速缓存中的当前内容。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 36,
        "type": "judge",
        "question": "tracert命令用来检验数据包是通过什么路径到达目的地的。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 37,
        "type": "judge",
        "question": "Nbtstat -r命令显示NetBIOS名称缓存。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 38,
        "type": "judge",
        "question": "使用在另一台计算机上远程将某些netsh命令与netsh -r参数配合使用时，远程注册表服务必须在远程计算机上运行。如果未运行，Windows将显示\"找不到网络路径\"错误消息。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 39,
        "type": "judge",
        "question": "Net config作用是显示密码、登录限制和域信息的当前配置。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 40,
        "type": "judge",
        "question": "为了保障网络安全，防止外部网对内部网的侵犯，躲在内部网与外部网之间设置入侵检测。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      }
    ]
  },
  {
    "set_name": "2025考证单选题2",
    "items": [
      {
        "id": 1,
        "type": "single",
        "question": "道德中所谓“应该”的意思是（    ）。",
        "options": [
          "A. 基于社会利益，按照社会公认的价值取向行事",
          "B. 考虑自己的利益需求，按照自己的想法行事",
          "C. 根据实际情况，不断对办事方式做出调整",
          "D. 从人际关系出发，凡是合乎人情的，就是应该的"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 2,
        "type": "single",
        "question": "职业道德是（    ）。",
        "options": [
          "A. 从业人员的特定行为规范",
          "B. 企业上司的指导性要求",
          "C. 从业人员的自我约束",
          "D. 职业纪律方面的最低要求"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 3,
        "type": "single",
        "question": "下列关于为事公道的说法中，你认为错误的是（    ）。",
        "options": [
          "A. 为事公道就是要站在公正的立场上，按标准为事",
          "B. 为事公道不可能有明确的标准，只能因人而异",
          "C. 工作人员接待顾客时不以貌取人属于办事公道",
          "D. 办事公道不排斥折中处理的方式"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 4,
        "type": "single",
        "question": "下列关于职业道德的说法中，你认为正确的是（    ）。",
        "options": [
          "A. 没有职业道德的人干不好任何工作",
          "B. 有职业道德的人一定能够胜任工作",
          "C. 职业道德有时起作用，有时不起作用",
          "D. 职业道德无关紧要，可有可无"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 5,
        "type": "single",
        "question": "以下关于人员与职业道德关系的说法中，你认为正确的是（    ）。",
        "options": [
          "A. 每个从业人员都应该以德为先，做有职业道德的人",
          "B. 只有每个人都遵守职业道德，职业道德才会起作用",
          "C. 遵守职业道德与否，应该视具体情况而定",
          "D. 知识和技能是第一位的，职业道德则是第二位的"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 6,
        "type": "single",
        "question": "遵纪守法是指（    ）。",
        "options": [
          "A. 每个从业人员都要遵守纪律和法律，尤其要遵守职业纪律和与职业活动相关的法律法规",
          "B. 只遵守与所从事职业相关的法律法规",
          "C. 只遵守计量法",
          "D. 只遵守标准化法"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 7,
        "type": "single",
        "question": "要做到遵纪守法，对每个职工来说，必须做到（    ）。",
        "options": [
          "A. 有法可依",
          "B. 反对“管”“卡”“压”",
          "C. 反对自由主义",
          "D. 努力学法、知法、守法、用法"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 8,
        "type": "single",
        "question": "遵守职业纪律，不要求从业人员（    ）。",
        "options": [
          "A. 履行岗位职责",
          "B. 执行操作规程",
          "C. 可不遵守那些自己认为不合理的制度",
          "D. 处理好上下级关系"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 9,
        "type": "single",
        "question": "在程序的执行过程中，Cache和主存的地址映射是由（    ）完成的。",
        "options": [
          "A. 操作系统",
          "B. 程序员调度",
          "C. 硬件自动",
          "D. 用户软件"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 10,
        "type": "single",
        "question": "关于在I/O设备与主机间交换数据的叙述，（    ）是错误的。",
        "options": [
          "A. 中断方式下，CPU需要执行程序来实现数据传送任务",
          "B. 中断方式和DMA方式下，CPU与I/O设备都可同步工作",
          "C. 中断方式和DMA方式中，快速I/O设备更适合采用中断方式传递数据",
          "D. 若同时接到DMA请求和中断请求，CPU优先响应DMA请求"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 11,
        "type": "single",
        "question": "路由器是一种用于网络互连的计算机设备，但作为路由器，并不具备的是（    ）。",
        "options": [
          "A. 路由功能",
          "B. 多层交换",
          "C. 支持两种以上的子网协议",
          "D. 具有存储、转发、寻径功能"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 12,
        "type": "single",
        "question": "将二进制数11000001B转换为十进制数应该是（    ）。",
        "options": [
          "A. 193",
          "B. 189",
          "C. 187",
          "D. 195"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 13,
        "type": "single",
        "question": "下列软件中，属于应用软件的是（    ）。",
        "options": [
          "A. UNIX",
          "B. OFFICE",
          "C. LINUX",
          "D. WINDOWS"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 14,
        "type": "single",
        "question": "因争用资源产生死锁的必要条件是互斥、循环等待、不可抢占和（    ）。",
        "options": [
          "A. 请求与释放",
          "B. 释放与等待",
          "C. 释放与阻塞",
          "D. 保持与等待"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 15,
        "type": "single",
        "question": "在Linux系统中，（    ）目录用来存放用户密码信息。",
        "options": [
          "A. /boot",
          "B. /var",
          "C. /etc",
          "D. /dev"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 16,
        "type": "single",
        "question": "以下选项中，不属于Android系统的缺点的是（    ）。",
        "options": [
          "A. 版本过多，升级频繁",
          "B. 显著的开放性可以使其拥有更多的开发者",
          "C. 过分依赖开发商，缺少标准配置",
          "D. Android的开放性容易带来隐私危机"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 17,
        "type": "single",
        "question": "下列模式中，能够给出数据库物理存储结构与物理存取方法的是（    ）。",
        "options": [
          "A. 内模式",
          "B. 外模式",
          "C. 概念模式",
          "D. 逻辑模式"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 18,
        "type": "single",
        "question": "下列关于视图的说法错误的是（    ）。",
        "options": [
          "A. 视图是从一个或多个基本表导出的表，它是虚表",
          "B. 视图一经定义就可以和基本表一样被查询、删除和更新",
          "C. 某一用户可以定义若干个视图",
          "D. 视图可以用来定义新的视图"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 19,
        "type": "single",
        "question": "交换机工作在 OSI 七层中的 （    ）。",
        "options": [
          "A. 一层",
          "B. 二层",
          "C. 三层",
          "D. 三层以上"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 20,
        "type": "single",
        "question": "在 TCP/IP 协议中，A 类地址可用的网络地址是多少个（    ）。",
        "options": [
          "A. 125",
          "B. 126",
          "C. 127",
          "D. 128"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 21,
        "type": "single",
        "question": "应用程序 PING 发出的是（    ）报文。",
        "options": [
          "A. TCP 请求报文",
          "B. TCP 应答报文",
          "C. ICMP 请求报文",
          "D. ICMP 应答报文"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 22,
        "type": "single",
        "question": "如果要用电脑远程登录到另一台路由器，使用的应用程序为（    ）。",
        "options": [
          "A. HTTP",
          "B. PING",
          "C. TELNET",
          "D. TRACERT"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 23,
        "type": "single",
        "question": "当路由器的数据链路层收到报文的 MTU 大于该路由器将要发出接口的最大 MTU 时，采取的应对措施是（    ）。",
        "options": [
          "A. 丢掉该分组",
          "B. 将该分组分片",
          "C. 向源路由器发出请求，减小其分组大小",
          "D. 直接转发该分组"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 24,
        "type": "single",
        "question": "在以太网网络中（    ）可以将网络分成多个冲突域，但不能将网络分成多个广播域。",
        "options": [
          "A. 网桥",
          "B. 交换机",
          "C. 路由器",
          "D. 集线器"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 25,
        "type": "single",
        "question": "以下在局域网中进行网段分割时最好用的设备是（    ）。",
        "options": [
          "A. 路由器",
          "B. 交换机",
          "C. 网桥",
          "D. 集线器"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 26,
        "type": "single",
        "question": "下列关于 SSID 的说法错误的是（    ）。",
        "options": [
          "A. 一个 AP 上可以释放多个不同的 SSID",
          "B. 多个 AP 上可以释放相同的一个 SSID",
          "C. 一个 AP 上可以配置的 SSID 数目没有数量的限制",
          "D. 一个 AP 的两组天线上可以释放相同的 SSID 信号"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 27,
        "type": "single",
        "question": "以下关于静态路由说法错误的是（    ）。",
        "options": [
          "A. 通过网络管理员手动配置",
          "B. 路由器之间需要交互路由信息",
          "C. 不能自动适应网络拓扑的变化",
          "D. 对系统性能要求低"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 28,
        "type": "single",
        "question": "目前无线局域网主要以（    ）作传输媒介。",
        "options": [
          "A. 短波",
          "B. 微波",
          "C. 激光",
          "D. 红外线"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 29,
        "type": "single",
        "question": "对于利用软件缺陷进行的网络攻击，最有效的措施是（    ）。",
        "options": [
          "A. 及时更新补丁程序",
          "B. 安装防病毒软件并及时更新病毒库",
          "C. 安装防火墙",
          "D. 安装漏洞扫描软件"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 30,
        "type": "single",
        "question": "源主机ping 目的设备时，如果网络工作正常，则目的设备在接收到该报文后，将会向源主机回应 ICMP（    ）报文。",
        "options": [
          "A. Echo Request",
          "B. Echo Reply",
          "C. TTL-Exceeded",
          "D. Port-Unreachable"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 31,
        "type": "single",
        "question": "根据等级保护相关管理文件，等级保护对象的安全保护等级分为（    ）。",
        "options": [
          "A. 三级",
          "B. 四级",
          "C. 五级",
          "D. 六级"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 32,
        "type": "single",
        "question": "关于我国加强信息安全保障工作的主要原则，以下说法错误的是（    ）。",
        "options": [
          "A. 立足国情，以我为主，坚持技术与管理并重",
          "B. 正确处理安全和发展的关系，以安全保发展，在发展中求安全",
          "C. 统筹规划，突出重点，强化基础工作",
          "D. 全面提高信息安全防护能力，保护公众利益，维护国家安全"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 33,
        "type": "single",
        "question": "下面关于OSI 参考模型各层功能的说法错误的是（    ）。",
        "options": [
          "A. 物理层涉及在通信信道上传输的原始比特流，它定义了传输数据所需要的机械、电气功能及规程等特性",
          "B. 网络层决定传输报文的最佳路由，其关键问题是确定数据包从源端到目的端如何选择路由",
          "C. 传输层的基本功能是建立、维护虚电路，进行差错校验和流量控制",
          "D. 会话层负责数据格式处理、数据加密等"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 34,
        "type": "single",
        "question": "下面哪个协议不是 TCP/IP 中的网络层协议（    ）。",
        "options": [
          "A. IP",
          "B. RARP",
          "C. ARP",
          "D. UDP"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 35,
        "type": "single",
        "question": "将一个B类地址网段精确的分为512个子网那么子网掩码是（    ）。",
        "options": [
          "A. 255.255.255.252",
          "B. 255.255.255.128",
          "C. 255.255.0.0",
          "D. 255.255.255.192"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 36,
        "type": "single",
        "question": "IPv6的基本报头长度为（    ）Byte。",
        "options": [
          "A. 40",
          "B. 48",
          "C. 32",
          "D. 64"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 37,
        "type": "single",
        "question": "下列哪项最恰当地描述了建立 TCP 连接时“第一次握手”所做的工作（    ）。",
        "options": [
          "A. “连接发起方”向“接收方”发送一个 SYN-ACK 段",
          "B. “接收方”向“连接发起方”发送一个 SYN-ACK 段",
          "C. “连接发起方”向目标主机的 TCP 进程发送一个 SYN 段",
          "D. “接收方”向源主机的 TCP 进程发送一个 SYN 段作为应答"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 38,
        "type": "single",
        "question": "下列所述的哪个不是 ICMP 协议的功能（    ）。",
        "options": [
          "A. 报告 TCP 连接超时信息",
          "B. 重定向 UDP 消息",
          "C. 转发 SNMP 数据",
          "D. 查找子网掩码"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 39,
        "type": "single",
        "question": "当一台主机的IP地址是192.168.0.19，子网掩码是255.255.255.224，那么主机所在网络的网络号占ip地址的（    ）位。",
        "options": [
          "A. 24",
          "B. 25",
          "C. 27",
          "D. 28"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 40,
        "type": "single",
        "question": "企业在管理交换机配置权限时，对不同的账户权限进行分级管理，对于S5700以下选项中（    ）级权限的账户可以查看交换机的配置信息。",
        "options": [
          "A. 0",
          "B. 1",
          "C. 2",
          "D. 3"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 41,
        "type": "single",
        "question": "第一次对路由器进行配置的时候，一般使用（    ）登录路由器进行配置。",
        "options": [
          "A. 以太网口",
          "B. console口",
          "C. 环回口",
          "D. 串行端口"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 42,
        "type": "single",
        "question": "以下哪一项不是胖 AP 入网需要配置的参数（    ）。",
        "options": [
          "A. IP 地址",
          "B. DNS 服务器地址",
          "C. 默认网关地址",
          "D. 子网掩码"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 43,
        "type": "single",
        "question": "以下操作系统中，不属于网络操作系统的是（    ）。",
        "options": [
          "A. Linux",
          "B. UNIX",
          "C. Windows Server 2016",
          "D. DOS"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 44,
        "type": "single",
        "question": "Windows Server 2016操作系统的版本主要包括：Essentials、（    ）和Datacenter。",
        "options": [
          "A. 精简版",
          "B. Enterprise",
          "C. Standard",
          "D. Student"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 45,
        "type": "single",
        "question": "以下（    ）不是安全模型的实例。",
        "options": [
          "A. BLP模型",
          "B. US Wall模型",
          "C. Chinese Wall模型",
          "D. Biba模型"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 46,
        "type": "single",
        "question": "TCSEC（可信计算机系统评估标准）将网络安全分为（    ）个等级。",
        "options": [
          "A. 三",
          "B. 五",
          "C. 七",
          "D. 九"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 47,
        "type": "single",
        "question": "零信任网络（亦称零信任架构）模型对于企业网（    ）。",
        "options": [
          "A. 严格区分内外网",
          "B. 内外网有条件转换",
          "C. 无内网外网之分",
          "D. 内网优先外网"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 48,
        "type": "single",
        "question": "硬件安全技术，是指用硬件的手段保障计算机系统或网络系统中的信息安全的各种技术，以下哪种不属于硬件安全技术的有（    ）。",
        "options": [
          "A. 侧信道技术",
          "B. 硬件固件安全技术",
          "C. 无线传感器网络安全技术",
          "D. 数据备份技术"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 49,
        "type": "single",
        "question": "签名可以解决的鉴别问题包括（    ）、接收方篡改、第三方冒充。",
        "options": [
          "A. 发送者伪造",
          "B. 发送者否认",
          "C. 文件窃取",
          "D. 文件丢失"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 50,
        "type": "single",
        "question": "下列关于安全审计的内容说法中错误的是（    ）。",
        "options": [
          "A. 应对网络系统中的网络设备运行情况、网络流量、用户行为等进行日志记录",
          "B. 审计记录应包括：事件的日期和时间、用户、事件类型、事件是否成功及其他与审计相关的信息",
          "C. 应能根据记录数据进行分析，并生成报表",
          "D. 为了节约存储空间，审计记录可以随意删除、修改或覆盖"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 51,
        "type": "single",
        "question": "最小权限的英文缩写是（    ）。",
        "options": [
          "A. PSAP",
          "B. PPP",
          "C. PSA",
          "D. POLP"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 52,
        "type": "single",
        "question": "按照通用标准规范，安全审计主要包含数据生成、事件选择、事件存储、自动响应、（    ）、审计复核6个主要功能模块。",
        "options": [
          "A. 审计选择",
          "B. 事件分析",
          "C. 审计分析",
          "D. 事件处理"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 53,
        "type": "single",
        "question": "合理利用linux的日志文件，可以即时了解系统的安全情况，下面（    ）不是日志文件。",
        "options": [
          "A. /etc/smb.conf",
          "B. /var/log/lastlog",
          "C. /var/log/secure",
          "D. /var/log/wtmp"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 54,
        "type": "single",
        "question": "在Windows操作系统安全配置中，以下不属于账号安全配置的是（    ）。",
        "options": [
          "A. 禁用guest账号",
          "B. 更改管理员缺省账号名称",
          "C. 锁定管理员账号",
          "D. 删除与工作无关的账号"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 55,
        "type": "single",
        "question": "关于密码技术，以下（    ）描述是错误的。",
        "options": [
          "A. 密码学包括密码编码学和密码分析学两门学科",
          "B. 对称密钥密码体制基本特征是发送方和接收方共享相同的密钥",
          "C. 密码体制的安全既依赖于对密钥的保密，又依赖于对算法的保密",
          "D. 对称密钥加密算法不易实现数字签名，限制了它的应用范围"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 56,
        "type": "single",
        "question": "SQL语言分别为交互式SQL和（    ）。",
        "options": [
          "A. 提示式SQL",
          "B. 多用户SQL",
          "C. 嵌入式SQL",
          "D. 解释式SQL"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 57,
        "type": "single",
        "question": "以下哪一项不是常见的将病毒植入主机的方式（    ）。",
        "options": [
          "A. 移动媒体",
          "B. 运行正版软件",
          "C. 访问网页",
          "D. 邮件附件"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 58,
        "type": "single",
        "question": "为了防止电子邮件中的恶意代码，应该由（    ）方式阅读电子邮件。",
        "options": [
          "A. 纯文本",
          "B. 网页",
          "C. 程序",
          "D. 会话"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 59,
        "type": "single",
        "question": "对于病毒，（    ）可以绕过一些杀毒软件的扫描，从而实现它作为病毒的一些入侵或破坏的一些特性。",
        "options": [
          "A. 压缩",
          "B. 脱壳",
          "C. 加壳",
          "D. 破壳"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 60,
        "type": "single",
        "question": "逆向工程是（    ）过程。",
        "options": [
          "A. 模型到代码",
          "B. 代码到模型",
          "C. 设计到实现",
          "D. 类图到包图"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 61,
        "type": "single",
        "question": "网络应用服务，是（    ），包括网站建设、虚拟主机、企业邮箱等服务。",
        "options": [
          "A. 互联网基础服务资讯提供平台",
          "B. 在网络环境中为客户端提供各种服务的专用计算机系统",
          "C. 为客户提供本地服务的程序",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 62,
        "type": "single",
        "question": "能够进行域名和与之相对应的IP地址转换的服务器是（    ）。",
        "options": [
          "A. VPN服务器",
          "B. WEB服务器",
          "C. DNS服务器",
          "D. DHCP服务器"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 63,
        "type": "single",
        "question": "关于DNS服务，下列说法正确的是（    ）。",
        "options": [
          "A. 是动态主机配置协议",
          "B. 是域名解析协议",
          "C. 是用于分配域名的",
          "D. 必须配合HTTP协议来使用"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 64,
        "type": "single",
        "question": "如果DNS安装成功，将在%systemroot%\\system32文件夹下自动创建一个名为（    ）的文件夹。",
        "options": [
          "A. 域名",
          "B. dns",
          "C. dnsmessage",
          "D. dnslog"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 65,
        "type": "single",
        "question": "DNS常见的威胁有（    ）。",
        "options": [
          "A. DNS放大攻击",
          "B. DNS缓存中毒",
          "C. 僵尸网络反向代理",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 66,
        "type": "single",
        "question": "面对DNS威胁可常用的防御方法有（    ）。",
        "options": [
          "A. 采用更严格的访问控制",
          "B. 部署零信任方案",
          "C. 检查/验证DNS记录",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 67,
        "type": "single",
        "question": "下面对WEB的说法错误的是（    ）。",
        "options": [
          "A. 是一种基于超文本和HTTP的、全球性的、静态交互的、跨平台的分布式图形信息系统",
          "B. 即全球广域网，也称为万维网",
          "C. 建立在Internet上的一种网络服务",
          "D. 为浏览者在Internet上查找和浏览信息提供了图形化的、易于访问的直观界面，其中的文档及超级链接将Internet上的信息节点组织成一个互为关联的网状结构"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 68,
        "type": "single",
        "question": "下列（    ）端口属于WEB服务的默认端口。",
        "options": [
          "A. 21",
          "B. 53",
          "C. 80",
          "D. 110"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 69,
        "type": "single",
        "question": "常见WEB攻击方法，不包括（    ）。",
        "options": [
          "A. 利用服务器配置漏洞",
          "B. 恶意代码上传下载",
          "C. 构造恶意输入（SQL注入攻击、命令注入攻击、跨站脚本攻击）",
          "D. 业务测试"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 70,
        "type": "single",
        "question": "在访问WEB站点时，为了防止第三方偷看传输的内容，我们可以采取的行动为（    ）。",
        "options": [
          "A. 将整个Internet划分成Internet、Intranet、可信、受限等不同区域",
          "B. 在主机浏览器中加载自己的证书",
          "C. 浏览站点前索要WEB站点的证书",
          "D. 通信中使用SSL技术"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 71,
        "type": "single",
        "question": "FTP的工作模式分主动模式和被动模式。主要是站在服务器的角度去看问题，被动模式下服务器开放TCP（    ）端口进行数据传输。",
        "options": [
          "A. 21",
          "B. 随机",
          "C. 80",
          "D. 20"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 72,
        "type": "single",
        "question": "在IIS中搭建FTP网站，下列说法错误的是（    ）。",
        "options": [
          "A. 基本访问方式是需要账号，但不需要密码登录的",
          "B. FTP的默认端口可以修改",
          "C. 访问FTP的权限可以设置读取和写入方式",
          "D. 身份验证可以采用匿名方式"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 73,
        "type": "single",
        "question": "FTP存在的漏洞不包括（    ）。",
        "options": [
          "A. 匿名身份验证",
          "B. 明文传输",
          "C. 不验证数据的完整性",
          "D. 基于用户名密码验证"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 74,
        "type": "single",
        "question": "在IIS里配置 FTP 服务，通过配置“FTP IPv4地址和域限制”，可以指定允许访问FTP站点的（    ）。",
        "options": [
          "A. 源端口号",
          "B. 目的端口号",
          "C. 源IP地址",
          "D. 目的IP地址"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 75,
        "type": "single",
        "question": "DHCP服务是基于（    ）协议。",
        "options": [
          "A. TCP",
          "B. UDP",
          "C. ICMP",
          "D. HTTP"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 76,
        "type": "single",
        "question": "配置DHCP服务中，下列说法正确的是（    ）。",
        "options": [
          "A. 可以配置保留的IP地址，与主机的MAC地址对应",
          "B. 分配一个IP地址池，必须配置排除地址",
          "C. 每个作用域可以配置的IP地址范围是256",
          "D. 只能配置一个作用域"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 77,
        "type": "single",
        "question": "DHCP饿死攻击的原理是（    ）。",
        "options": [
          "A. 当攻击者私自安装并运行DHCP Server 程序后，可以将自己伪装成DHCP Server",
          "B. 攻击者利用ARP机制，欺骗客户端把攻击者当成DHCP服务器，把发向DHCP服务器的流量发给攻击者；同理，攻击者欺骗DHCP服务器，把攻击者当成DHCP客户端，把发向DHCP客户端的流量发给攻击者",
          "C. 攻击者持续大量地向DHCP服务器申请IP地址，直到耗尽DHCP服务器地址池的IP地址，使DHCP服务器无法再给正常的主机分配IP地址",
          "D. 通过拦截正常的网络通信数据，并进行数据篡改和嗅探，而通信的双方却毫不知情"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 78,
        "type": "single",
        "question": "在DHCP服务配置完成后，手动在客户端获得TCP/IP信息，重新获得TCP/IP信息的命令是（    ）。",
        "options": [
          "A. ipconfig/release",
          "B. ipconfig/renew",
          "C. ipconfig/all",
          "D. nslookup"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 79,
        "type": "single",
        "question": "Linux的文件共享服务是（    ）。",
        "options": [
          "A. DNS",
          "B. FTP",
          "C. Samba",
          "D. DHCP"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 80,
        "type": "single",
        "question": "配置IPSec VPN实现数据的保密性，需选择安全协议（    ）。",
        "options": [
          "A. IKE",
          "B. AH",
          "C. ESP",
          "D. SSL"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 81,
        "type": "single",
        "question": "以下对于引入 VLAN 的二层交换机说法错误的是（    ）。",
        "options": [
          "A. 任何一个帧都不能从自己所属的 VLAN 被转发到其他的 VLAN 中",
          "B. 每一个 VLAN 都是一个独立的广播域",
          "C. 每一个人都不能随意地从网络上的一点，毫无控制地直接访问另一点的网络或监听整个网络上的帧",
          "D. VLAN 隔离了广播域，但并没有隔离各个 VLAN 之间的任何流量"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 82,
        "type": "single",
        "question": "查看以下交换机端口的配置后，选项中说法错误的是（    ）。\ninterface GigabitEthernet 0/0/2\nport hybrid pvid vlan 100\nport hybrid tagged vlan 100\nport hybrid untagged vlan 200",
        "options": [
          "A. 如果数据帧携带的 vlan tag 为 200，则剥离该 tag 转发",
          "B. 如果收到不带 vlan tag 的数据帧，交换机要添加 vlan tag 100",
          "C. 接口类型为 hybrid",
          "D. 如果数据帧携带的 vlan tag 为 100，则剥离该 tag 转发"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 83,
        "type": "single",
        "question": "支持VLAN的以太网帧格式中，tag标签的长度值是（    ）字节。",
        "options": [
          "A. 2",
          "B. 8",
          "C. 4",
          "D. 6"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 84,
        "type": "single",
        "question": "以下对于手动负载均衡模式的链路聚合说法正确的是（    ）。",
        "options": [
          "A. 手工负载分担模式下所有活动接口都参与数据的转发，分担负载流量",
          "B. 手工负载分担模式下最多只能有 4 个活动端口",
          "C. 手工负载分担模式下链路两端的设备相互发送 LACP 报文",
          "D. 手工负载分担模式下可以配置活动端口的数量"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 85,
        "type": "single",
        "question": "配置IP地址和掩码需在VRP（    ）下进行。",
        "options": [
          "A. 用户视图",
          "B. 系统视图",
          "C. 接口视图",
          "D. 其他视图"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 86,
        "type": "single",
        "question": "标准的SNMP服务使用的端口号是（    ）。",
        "options": [
          "A. 161、162",
          "B. 160、161",
          "C. 162、163",
          "D. 160、163"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 87,
        "type": "single",
        "question": "某企业新购入路由器，作为网络管理员、初次配置该设备通常通过（    ）方式。",
        "options": [
          "A. SNMP",
          "B. FTP",
          "C. Console口登录",
          "D. Telnet"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 88,
        "type": "single",
        "question": "VRP 操作系统命令划分为访问级、监控级、配置级、管理级 4 个级别。企业在进行账号分配时，一般给企业见习人员分配什么级别的账号（    ）。",
        "options": [
          "A. 配置级",
          "B. 访问级",
          "C. 管理级",
          "D. 监控级"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 89,
        "type": "single",
        "question": "当管理员通过 Telnet 登录路由器后，发现无法配置路由器的接口 IP 地址。那么可能的原因是（    ）。",
        "options": [
          "A. Telnet 用户的认证方式配置错误",
          "B. 管理员使用的 Telnet 终端软件禁止相应操作",
          "C. Telnet 用户的级别配置错误",
          "D. SNMP 参数配置错误"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 90,
        "type": "single",
        "question": "Windows操作系统默认的系统管理员账号为（    ）。",
        "options": [
          "A. Windows",
          "B. administrator",
          "C. guest",
          "D. root"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 91,
        "type": "single",
        "question": "在Windows Server 2016操作系统中，创建隐藏共享文件夹时，需要在文件夹共享名的后面附加一个（    ）符号。",
        "options": [
          "A. &",
          "B. #",
          "C. $",
          "D. @"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 92,
        "type": "single",
        "question": "Linux系统账号分为超级用户、普通用户、（    ）。",
        "options": [
          "A. 特权用户",
          "B. 一般用户",
          "C. 内置用户",
          "D. 来宾用户"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 93,
        "type": "single",
        "question": "在Linux系统中，添加用户组命令是（    ）。",
        "options": [
          "A. groupadd",
          "B. gpasswd",
          "C. groups",
          "D. groupmod"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 94,
        "type": "single",
        "question": "Linux系统中修改文件的所有者的命令是（    ）。",
        "options": [
          "A. chgrp",
          "B. chown",
          "C. chpasswd",
          "D. chmod"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 95,
        "type": "single",
        "question": "资源安全管理通常会保护（    ）和保护文件。",
        "options": [
          "A. 关键用户",
          "B. 关键分区",
          "C. 个人信息",
          "D. 日志系统"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 96,
        "type": "single",
        "question": "在Linux中，以下（    ）做法不能提升网络安全性。",
        "options": [
          "A. 使用telnet远程登录Linux系统",
          "B. 定期检查系统中的日志",
          "C. 防止ping",
          "D. 使用ssh远程登录Linux系统"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 97,
        "type": "single",
        "question": "Linux系统安全增强技术包括以下（    ）选项。",
        "options": [
          "A. 启用匿名账户",
          "B. 配置最大权限",
          "C. 限制远程访问",
          "D. 设置容易记有规律的口令"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 98,
        "type": "single",
        "question": "访问控制列表的类型包含扩展访问控制列表和（    ）。",
        "options": [
          "A. 行为访问控制",
          "B. 标准访问控制列表",
          "C. 限制访问控制列表",
          "D. 用户访问控制列表"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 99,
        "type": "single",
        "question": "常见的访问控制模型有（    ）、自主访问控制、强制访问控制和基于属性访问控制几种。",
        "options": [
          "A. 基于权限访问控制",
          "B. 基于端口访问控制",
          "C. 基于时间访问控制",
          "D. 基于角色访问控制"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 100,
        "type": "single",
        "question": "在访问控制策略制定防外还是防内是考虑（    ）。",
        "options": [
          "A. 不同网络应用的安全需求",
          "B. 所有和应用相关的信息的确认",
          "C. 网络信息传播和授权策略",
          "D. 访问权限的更新与维护"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 101,
        "type": "single",
        "question": "系统补丁主要用来修复系统的（    ）。",
        "options": [
          "A. 美观",
          "B. 顺畅",
          "C. 安全",
          "D. 便捷"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 102,
        "type": "single",
        "question": "windows更新系统补丁的三种方法是：（    ）、工具软件更新和手动更新。",
        "options": [
          "A. 系统更新",
          "B. 定时更新",
          "C. 最大化更新",
          "D. 有权更新"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 103,
        "type": "single",
        "question": "下列是不感染的独立性恶意代码的是（    ）。",
        "options": [
          "A. 特洛伊木马",
          "B. 点滴器",
          "C. 计算机病毒",
          "D. 后门"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 104,
        "type": "single",
        "question": "Windows病毒包括宏病毒和（    ）。",
        "options": [
          "A. 脚本病毒",
          "B. 木马",
          "C. 流感病毒",
          "D. 毒虫病毒"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 105,
        "type": "single",
        "question": "以下（    ）不属于一个合理的反病毒方法的执行措施。",
        "options": [
          "A. 检测",
          "B. 识别",
          "C. 破坏",
          "D. 清除"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 106,
        "type": "single",
        "question": "杀毒软件扫描到的病毒文件，通常采取的杀毒方式是（    ）。",
        "options": [
          "A. 禁止访问",
          "B. 删除",
          "C. 保留",
          "D. 不处理"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 107,
        "type": "single",
        "question": "某台主机属于中国电信系统，其域名应以（    ）结尾。",
        "options": [
          "A. com.cn",
          "B. com",
          "C. net.cn",
          "D. net"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 108,
        "type": "single",
        "question": "以下关于域名和IP地址的说法正确的是（    ）。",
        "options": [
          "A. 域名和IP地址是相同的",
          "B. 域名与IP地址是对应的，但不是一一对应的",
          "C. 域名与IP地址是一一对应的",
          "D. Internet上的每台计算机都必须有唯一的IP地址和域名"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 109,
        "type": "single",
        "question": "URL的组成格式为（    ）。",
        "options": [
          "A. 资源类型.存放资源的主机域名.资源文件名",
          "B. 资源类型.资源文件名.存放资源的主机域名",
          "C. 主机域名.资源类型.资源文件名",
          "D. 资源文件名.主机域名.资源类型"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 110,
        "type": "single",
        "question": "用户从CA安全认证中心申请自己的证书，并将该证书安装在浏览器的主要目的是（    ）。",
        "options": [
          "A. 以防止他人假冒自己",
          "B. 验证Web服务器的真实性",
          "C. 保护自己的计算机免受到病毒的危害",
          "D. 防止第三方偷看传输的信息"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 111,
        "type": "single",
        "question": "下列选项中，（    ）不是导致Web服务溢出攻击的原因。",
        "options": [
          "A. 服务器使用Windows操作系统",
          "B. 没有能够过滤用户输入中的恶意字符",
          "C. 开发者没有完全考虑Web用户可能的行为",
          "D. 应用服务器处理输入数据时存在缓冲区溢出漏洞"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 112,
        "type": "single",
        "question": "为增强Web应用程序的安全性，某软件开发经理决定加强Web软件安全开发培训，下列哪项内容不在考虑范围内。（    ）",
        "options": [
          "A. 关于网站身份鉴别技术方面安全知识的培训",
          "B. 针对OpenSSL心脏出血漏洞方面安全知识的培训",
          "C. 针对SQL注入漏洞的安全编程培训",
          "D. 关于ARM系统漏洞挖掘方面安全知识的培训"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 113,
        "type": "single",
        "question": "渗透测试的流程不包含（    ）。",
        "options": [
          "A. 留后门",
          "B. 信息收集",
          "C. 漏洞挖掘",
          "D. 提权"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 114,
        "type": "single",
        "question": "下列关于域名备案的目的的描述中，不正确的是（    ）。",
        "options": [
          "A. 为了防止在网上从事非法的网站经营活动",
          "B. 为了打击不良互联网信息的传播",
          "C. 未经备案，不得在中华人民共和国境内从事互联网信息服务",
          "D. 如果网站不备案的话，很有可能被查处以后关停"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 115,
        "type": "single",
        "question": "《互联网域名管理办法》规定，（    ）是中国的国家顶级域名。",
        "options": [
          "A. .China",
          "B. .CHN",
          "C. .CA",
          "D. .CN"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 116,
        "type": "single",
        "question": "下列选项中，不属于CDN网络中包含的功能实体的是（    ）。",
        "options": [
          "A. 内容缓存设备",
          "B. 内容交换机",
          "C. 内容路由器",
          "D. 内容服务器"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 117,
        "type": "single",
        "question": "数据备份保护信息系统的安全属性是（    ）。",
        "options": [
          "A. 可审性",
          "B. 可用性",
          "C. 完整性",
          "D. 保密性"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 118,
        "type": "single",
        "question": "（    ）是按备份周期对整个系统所有的文件（数据）进行备份，是客服系统数据不安全最简单的方法。",
        "options": [
          "A. 完整备份策略",
          "B. 按需备份策略",
          "C. 差分备份策略",
          "D. 增量备份策略"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 119,
        "type": "single",
        "question": "要设置系统的备份还原，可使用的对话框是（    ）。",
        "options": [
          "A. 文件夹选项",
          "B. 系统属性",
          "C. 显示属性",
          "D. 设备管理器"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 120,
        "type": "single",
        "question": "关于冷备份的说法正确的是（    ）。",
        "options": [
          "A. 支持按表和按用户恢复",
          "B. 低度维护，高度安全",
          "C. 单独使用时，只能提供到“某一时间点上”的恢复",
          "D. 非常快速，且容易归档"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 121,
        "type": "single",
        "question": "若PC出现网络故障，一般应首先检查（    ）。",
        "options": [
          "A. DNS服务器",
          "B. 路由配置",
          "C. 系统病毒",
          "D. 物理连通性"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 122,
        "type": "single",
        "question": "数据包丢失一般是由（    ）引起的。",
        "options": [
          "A. 死锁",
          "B. 安全",
          "C. 链路中断",
          "D. 拥塞"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 123,
        "type": "single",
        "question": "以下关于交换式局域网的规划设计的描述，不正确的是（    ）。",
        "options": [
          "A. 通常采用三层式结构来规划设计交换式局域网",
          "B. 接入层交换机由于数量多，通常采用端口密度大的二层交换机",
          "C. 汇聚层交换机采用三层交换机，网段的划分通常在汇聚层交换机上实现",
          "D. 汇聚层交换机与核心层交换机之间的链路，只能采用路由工作模式"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 124,
        "type": "single",
        "question": "使用（    ）命令释放当前主机自动获取的IP地址。",
        "options": [
          "A. ipconfig/all",
          "B. ipconfig/reload",
          "C. ipconfig/release",
          "D. ipconfig/reset"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 125,
        "type": "single",
        "question": "在发现主机受到ARP攻击时需清除ARP缓存，使用的命令是（    ）。",
        "options": [
          "A. arp -a",
          "B. arp -s",
          "C. arp -d",
          "D. arp -g"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 126,
        "type": "single",
        "question": "以下命令中，可以实现路由追踪检测功能的命令是（    ）。",
        "options": [
          "A. ping",
          "B. tracert",
          "C. netstat",
          "D. nslookup"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 127,
        "type": "single",
        "question": "用来显示基于NetBIOS协议相关的统计资料，本地计算机和远程计算机的NetBIOS名称表盒NetBIOS名称缓存的命令是（    ）。",
        "options": [
          "A. netstat",
          "B. nbtstat",
          "C. tracert",
          "D. route"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 128,
        "type": "single",
        "question": "Netsh命令的功能是（    ）。",
        "options": [
          "A. 管理网络环境、服务、用户、登录等本地信息",
          "B. 显示或修改本地IP路由表的条目",
          "C. 通过发送包含不同TTL的ICMP报文并监听回应报文，来探测到达目的计算机的路径",
          "D. 允许从本地或远程显示或修改当前正在运行的计算机的网络配置"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 129,
        "type": "single",
        "question": "Net命令的功能是（    ）。",
        "options": [
          "A. 管理网络环境、服务、用户、登录等本地信息",
          "B. 显示或修改本地IP路由表的条目",
          "C. 显示和修改ARP表项",
          "D. 通过发送包含不同TTL的ICMP报文并监听回应报文，来探测到达目的计算机的路径"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 130,
        "type": "single",
        "question": "目前网络安全形势日趋复杂，攻击手段和攻击工具层出不穷，攻击工具日益先进，攻击者需要的技能日趋下降。以下关于网络攻防的描述中，不正确的是（    ）。",
        "options": [
          "A. 嗅探器Sniffer 工作的前提是网络必须是共享以太网",
          "B. 加密技术可以有效抵御各类系统攻击",
          "C. APT的全称是高级持续性威胁",
          "D. 同步包风暴(SYN Flooding)的攻击来源无法定位"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 131,
        "type": "single",
        "question": "（    ）类型的软件能够阻止外部主机对本地计算机的端口扫描。",
        "options": [
          "A. 反病毒软件",
          "B. 个人防火墙",
          "C. 基于TCP/IP的检查工具，如netstat",
          "D. 加密软件"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 132,
        "type": "single",
        "question": "向有限的空间输入超长的字符串属于（    ）攻击手段。",
        "options": [
          "A. 缓冲区溢出",
          "B. 网络监听",
          "C. 拒绝服务",
          "D. IP欺骗"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 133,
        "type": "single",
        "question": "驻留在多个网络设备上的程序在短时间内同时产生大量的请求消息冲击某Web服务器，导致该服务器不堪重负，无法正常响应其他合法用户的请求，这属于（    ）。",
        "options": [
          "A. 上网冲浪",
          "B. 中间人攻击",
          "C. DDoS攻击",
          "D. MAC攻击"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 134,
        "type": "single",
        "question": "从对信息的破坏性上看，网络攻击可以分为被动攻击和主动攻击，以下属于被动攻击的是（    ）。",
        "options": [
          "A. 伪造",
          "B. 流量分析",
          "C. 拒绝服务",
          "D. 中间人攻击"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 135,
        "type": "single",
        "question": "安全事件定义：信息安全事件是由于（    ）的原因，对信息系统造成危害，或对社会造成负面影响的事件。",
        "options": [
          "A. 自然",
          "B. 人为",
          "C. 软硬件本身缺陷或故障",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 136,
        "type": "single",
        "question": "以下（    ）不属于脆弱性范畴。",
        "options": [
          "A. 操作系统漏洞",
          "B. 应用程序BUG",
          "C. 黑客攻击",
          "D. 人员的不良操作习惯"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 137,
        "type": "single",
        "question": "网络钓鱼属于（    ）。",
        "options": [
          "A. 漏洞攻击",
          "B. 社会工程学攻击",
          "C. 病毒攻击",
          "D. XSS攻击"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 138,
        "type": "single",
        "question": "根据计算机病毒的感染特性看，宏病毒不会感染以下（    ）类型的文件。",
        "options": [
          "A. Microsoft Word",
          "B. Visual Basic",
          "C. Microsoft Basic",
          "D. Microsoft Excel"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 139,
        "type": "single",
        "question": "下列不属于数据库漏洞的是（    ）。",
        "options": [
          "A. 特权升级",
          "B. 钓鱼攻击",
          "C. 拒绝服务攻击",
          "D. 弱密码"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 140,
        "type": "single",
        "question": "文件上传攻击造成的危害不包括（    ）。",
        "options": [
          "A. 上传脚本",
          "B. 控制服务器",
          "C. 信息泄露",
          "D. 被钓鱼"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 141,
        "type": "single",
        "question": "下列对跨站脚本攻击（XSS）的解释最准确的是（    ）。",
        "options": [
          "A. 引诱用户点击虚拟网络连接的一种攻击方法",
          "B. 构造精妙的关系数据库的结构化查询语言对数据库进行非法访问",
          "C. 一种很强大的木马攻击手段",
          "D. 将恶意代码嵌入到用户浏览器的WEB页面中，从而达到恶意的目的"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 142,
        "type": "single",
        "question": "关于代码审核，描述错误的是（    ）。",
        "options": [
          "A. 对计算机源代码非系统化地审查",
          "B. 常用软件和同行评审的方式进行",
          "C. 目的是在找出及修正在软件开发初期未发现的错误",
          "D. 目的是提升软件质量及开发者的技术"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 143,
        "type": "single",
        "question": "下面（    ）正确的描述了基于C语言的编程体系经历的四个阶段。",
        "options": [
          "A. C语言->SDK编程->面向对象的C++语言->MFC编程",
          "B. C语言->面向对象的C++语言->MFC编程->SDK编程",
          "C. C语言->MFC编程->面向对象的C++语言->SDK编程",
          "D. C语言->面向对象的C++语言->SDK编程->MFC编程"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 144,
        "type": "single",
        "question": "（    ）渗透测试是指审计员可以获取被测单位的各种内部资料甚至不公开资料的情况下进行的测试。",
        "options": [
          "A. 白盒测试",
          "B. 蓝盒测试",
          "C. 灰盒测试",
          "D. 黑盒测试"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 145,
        "type": "single",
        "question": "监视恶意代码主体程序是否正常的技术是（    ）。",
        "options": [
          "A. 备份文件",
          "B. 超级权限",
          "C. HOOK技术",
          "D. 进程守护"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 146,
        "type": "single",
        "question": "恶意代码通常分为（    ）。",
        "options": [
          "A. 病毒、木马、蠕虫、伪装程序、间谍软件",
          "B. 病毒、木马、蠕虫、僵尸程序、间谍软件",
          "C. 病毒、木马、蠕虫、僵尸程序、间谍软件、替代程序",
          "D. 病毒、木马、蠕虫、僵尸程序、读频软件"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 147,
        "type": "single",
        "question": "使用U盘的自动执行运行恶意代码属于（    ）类型的恶意代码传播方式。",
        "options": [
          "A. 利用操作系统和应用软件的漏洞进行传播",
          "B. 通过网站传播",
          "C. 利用用户之间的信任关系传播",
          "D. 利用移动媒介传播"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 148,
        "type": "single",
        "question": "当前的恶意代码发展趋势（    ）。",
        "options": [
          "A. 网络化发展",
          "B. 专业化发展",
          "C. 简单化发展、多样化发展",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 149,
        "type": "single",
        "question": "对企业网络最大的威胁是（    ）。",
        "options": [
          "A. 内部员工的恶意攻击",
          "B. 竞争对手",
          "C. 外国政府",
          "D. 黑客攻击"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 150,
        "type": "single",
        "question": "漏洞扫描一般采用（    ）的技术原理。",
        "options": [
          "A. 基于异常检测技术",
          "B. 基于特征检测技术",
          "C. 基于协议分析技术",
          "D. 基于操作系统的分析技术"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 151,
        "type": "single",
        "question": "审计日志用于保存（    ）。",
        "options": [
          "A. 程序运行过程",
          "B. 程序执行结果",
          "C. 程序的初始状态",
          "D. 对数据库的更新操作"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 152,
        "type": "single",
        "question": "针对端口进行渗透的服务应用攻击，主要的防范办法是（    ）。",
        "options": [
          "A. 增加密码的长度和复杂性，定期更新密码",
          "B. 及时给服务应用打新补丁，对代码进行审计",
          "C. 关闭不必要端口，修改重要端口",
          "D. 部署专抗DDOS的硬件防火墙"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 153,
        "type": "single",
        "question": "Windows 2016 Server的IIS网站和FTP站点配置恢复是在（    ）功能实现的。",
        "options": [
          "A. IIS管理器-服务器-管理-Turn on or off shared configuration",
          "B. IIS管理器-站点-管理-Turn on or off shared configuration",
          "C. IIS管理器-服务器-管理-恢复",
          "D. IIS管理器-站点-管理-恢复"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 154,
        "type": "single",
        "question": "针对操作系统的漏洞更深入的扫描，是（    ）型的漏洞评估的产品。",
        "options": [
          "A. 数据库",
          "B. 主机型",
          "C. 网络型",
          "D. 以上都不是"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 155,
        "type": "single",
        "question": "防火墙应具有强大的审计功能和自动日志分析功能是因为（    ）。",
        "options": [
          "A. 可以更早地发现潜在的威胁并预防攻击的发生",
          "B. 依据安全管理部门的要求",
          "C. 内网审计系统的要求",
          "D. 日志是防火墙进行安全决策的参考"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 156,
        "type": "single",
        "question": "常见的应对系统密码在线攻击的方式有（    ）。",
        "options": [
          "A. 关闭相关服务/端口",
          "B. 使用强密码",
          "C. 设置组策略把远程访问账户设为guest，查看日志，发现是否有攻击行为",
          "D. 以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 157,
        "type": "single",
        "question": "关于操作系统恢复，下列说法中错误的是（    ）。",
        "options": [
          "A. 在备份时，如果知道备份文件具体路径，可单击“浏览文件”按钮",
          "B. 在备份时，如果知道备份文件的具体路径，可单击“搜索”按钮",
          "C. 恢复系统备份时，只能恢复到默认路径",
          "D. 系统恢复后不需要重启计算机"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 158,
        "type": "single",
        "question": "关于数据库注入攻击的说法错误的是（    ）。",
        "options": [
          "A. 它的主要原因是程序对用户的输入缺乏过滤",
          "B. 一般情况下防火墙对它无法防范",
          "C. 对它进行防范时要关注操作系统的版本和安全补丁",
          "D. 注入成功后可以获取部分权限"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 159,
        "type": "single",
        "question": "不属于数据库加密的方式是（    ）。",
        "options": [
          "A. 库外加密",
          "B. 专用加密中间件",
          "C. 库内加密",
          "D. 硬件/软件加密"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 160,
        "type": "single",
        "question": "用于数据库恢复的重要文件是（    ）。",
        "options": [
          "A. 数据库文件",
          "B. 索引文件",
          "C. 日志文件",
          "D. 备注文件"
        ],
        "analysis": "",
        "answer": 2
      }
    ]
  },
  {
    "set_name": "2025考证判断题2",
    "items": [
      {
        "id": 1,
        "type": "judge",
        "question": "国家鼓励开发网络数据安全保护和利用技术，促进公共图书馆资源开放，推动技术创新和经济社会发展。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 2,
        "type": "judge",
        "question": "任意翻阅同事文件资料的行为违反职业行为规范。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 3,
        "type": "judge",
        "question": "运算器是计算机对数据进行加工处理的部件，主要执行加、减、乘、除等算术运算。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 4,
        "type": "judge",
        "question": "快速格式化会检测是否有坏扇区。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 5,
        "type": "judge",
        "question": "计算机软件按其用途及实现的功能不同可分为系统软件和应用软件两大类。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 6,
        "type": "judge",
        "question": "计算机能直接识别汇编语言程序。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 7,
        "type": "judge",
        "question": "利用多媒体计算机可以进行观看VCD、听音乐、玩游戏、录放音等操作。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 8,
        "type": "judge",
        "question": "在Windows系统中，对于C盘上被删除的文件均在回收站中。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 9,
        "type": "judge",
        "question": "开放系统互连参考模型（OSI）中，网络层以数据包的形式传输数据流。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 10,
        "type": "judge",
        "question": "当IP报文在internet中运动的时候，每经过一台路由器，IP报文的TTL字段的值就被路由器减1，如果该字段的值被减为0，则这个报文就会被设备丢弃。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 11,
        "type": "judge",
        "question": "30.0.1是B类IP地址。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 12,
        "type": "judge",
        "question": "TCP分段中，有字段被称为序号sequence number，它代表着该TCP分段自身的序号，接受该分段的一方可以根据这个序号判断是否存在分段重收，或者漏收的情况。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 13,
        "type": "judge",
        "question": "UDP报文没有数据报文和控制报文之分，所有UDP报文都是UDP数据报文。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 14,
        "type": "judge",
        "question": "目前Internet上基于以太网的网络设备多数使用长地址类型的物理地址。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 15,
        "type": "judge",
        "question": "配置同一台交换机 VLANIF 接口的 IP 地址可以相同。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 16,
        "type": "judge",
        "question": "网络地址转换技术又称为NAT技术，它的基本作用是实现私网地址转换成公网地址，不能将公网地址转换成私网地址。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 17,
        "type": "judge",
        "question": "如果更改了 AP 射频的配置参数，必须重启 AP 后命令才能生效。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 18,
        "type": "judge",
        "question": "当客户端出现可以连接到无线网络，也可以访问外网，但网络速度较慢的情况时，可能是此位置的信号强度不够或者当前 AP 设备断电。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 19,
        "type": "judge",
        "question": "Linux 没有像 Windows那样的桌面系统。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 20,
        "type": "judge",
        "question": "用户登录之前需按 Ctrl+Alt+Del 可确保用户输入其密码时通过信任的路径进行通信。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 21,
        "type": "judge",
        "question": "基于端口的VLAN划分方式，可以利用交换机把网络划分成多个vlan，一般情况下交换机默认的vlan是vlan1。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 22,
        "type": "judge",
        "question": "将交换机端口配置成trunk口后，可以根据网络情况配置Trunk端口允许哪些VLAN的数据帧通过。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 23,
        "type": "judge",
        "question": "STP确定交换机的根端口是由BID、RPC、PID共同决定。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 24,
        "type": "judge",
        "question": "为方便对路由器的管理，通常会对路由器改名和设置管理地址，并将管理地址宣告进路由协议中去。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 25,
        "type": "judge",
        "question": "OSPF通过路由协议算法可以生成一棵无环的最短路径树，因而OSPF路由协议没有环路问题。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 26,
        "type": "judge",
        "question": "SNMP 报文是通过 UDP 来承载的。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 27,
        "type": "judge",
        "question": "SNMP 报文是通过 UDP 来承载的。（    ）（重复题）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 28,
        "type": "judge",
        "question": "只要用户远程登录交换机，就能够执行任何命令。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 29,
        "type": "judge",
        "question": "华为的管理级用户权限，能够允许切换设备主备板件。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 30,
        "type": "judge",
        "question": "一个组中可以根据需要包含多个用户帐户。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 31,
        "type": "judge",
        "question": "局域网内的两台电脑IP冲突，会导致整个网络瘫痪。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 32,
        "type": "judge",
        "question": "一般情况下，非HTTP协议的网络分析，在服务器端用tcpdump比较多，在客户端用wireshark比较多，但两个抓包软件的语法是不一样的。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 33,
        "type": "judge",
        "question": "如果计算机网络出现通信连接异常的故障时，首选的方式就是用ipconfig命令进行诊断。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 34,
        "type": "judge",
        "question": "ping命令使用-t参数可以持续不断地ping目标主机。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 35,
        "type": "judge",
        "question": "netstat -a命令用于显示以太网的统计信息。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 36,
        "type": "judge",
        "question": "Pathping命令可以提供与目标之间的中间路由的网络滞后和网络丢失的信息。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 37,
        "type": "judge",
        "question": "Route add命令的主要作用是添加静态路由。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 38,
        "type": "judge",
        "question": "nslookup命令一般是用来确认DNS服务器动作的。nslookup有多个选择功能，在命令行输入\"nslookup <主机名>\"并执行，即可显示出目标服务器的主机名和对应的IP地址，称为正向解析。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 39,
        "type": "judge",
        "question": "Iftop是类似于Linux下面top的实时流量监控工具。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 40,
        "type": "judge",
        "question": "DDoS是指集中式拒绝服务攻击。（    ）",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      }
    ]
  },
  {
    "set_name": "补充题集",
    "items": [
      {
        "id": 1,
        "type": "single",
        "question": "在许多组织机构中，产生总体安全性问题的主要原因是（）",
        "options": [
          "缺少安全性管理",
          "B、缺少故障管理",
          "C、缺少风险分析",
          "D、缺少技术控制机制"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 2,
        "type": "single",
        "question": "有关NTFS文件系统优点的描述中，（）是不正确的",
        "options": [
          "NTFS可自动地修复磁盘错误",
          "B、NTFS可防止未授权用户访问文件",
          "C、NTFS没有磁盘空间限制",
          "D、NTFS支持文件压缩功能"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 3,
        "type": "single",
        "question": "以下那个解决可以帮助减少物理硬件成本？（）",
        "options": [
          "VCenter Operation Manager for View",
          "B、Thin Client（精简型计算机）",
          "C、Horizon View Client",
          "D、Horizon Mirage"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 4,
        "type": "single",
        "question": "微软推荐的有关域中组的使用策略是（）。",
        "options": [
          "A-G-P",
          "B、DL-P",
          "C、A-DL-G-P",
          "D、A-G-DL-P"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 5,
        "type": "single",
        "question": "应实现设备特权用户的（），系统不支持的应部署日志服务器保证管理员的操作能够被审计，并且网络特权用户管理员无权对审计记录进行操作。",
        "options": [
          "权限分离",
          "B、多样性",
          "C、唯一性",
          "D、权限最大化"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 6,
        "type": "single",
        "question": "雨天在户外操作电气设备时，操作杆的绝缘部分应有（），罩的上口应与绝缘部分紧密结合，无渗漏现象。",
        "options": [
          "防雨罩",
          "B、防尘罩",
          "C、防触电罩",
          "D、防抖装置"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 7,
        "type": "single",
        "question": "逻辑强隔离装置采用代理模式，也称为（）",
        "options": [
          "SQL代理",
          "B、TNS代理",
          "C、ORACLE代理",
          "D、OCI代理"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 8,
        "type": "single",
        "question": "如果需要创建一个RAID 10的RAID组，至少需要（）块硬盘？",
        "options": [
          "2",
          "B、3",
          "C、4",
          "D、5"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 9,
        "type": "single",
        "question": "下列方法（）最能有效地防止不安全的直接对象引用漏洞。",
        "options": [
          "检测用户访问权限",
          "B、使用参数化查询",
          "C、过滤特殊字符",
          "D、使用token令牌"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 10,
        "type": "single",
        "question": "boot.ini文件是一个文本文件，其作用是（）。",
        "options": [
          "设置启动项",
          "B、计算机硬件配置",
          "C、用户配置文件",
          "D、以上均不是"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 11,
        "type": "single",
        "question": "应能够检测到系统管理数据、鉴别信息和重要业务数据在存储过程中完整性是否受到破坏，并在检测到完整性错误时采取必要的（）措施。",
        "options": [
          "修复",
          "B、恢复",
          "C、格式化",
          "D、备份"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 12,
        "type": "single",
        "question": "（）是因特网中最重要的设备，它是网络与网络连接的桥梁。",
        "options": [
          "路由器",
          "B、中继站",
          "C、集线器",
          "D、服务器"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 13,
        "type": "single",
        "question": "《信息系统安全等级保护基本要求》中对不同级别的信息系统应具备的基本安全保护能力进行了要求，共划分为（）级。",
        "options": [
          "4",
          "B、5",
          "C、6",
          "D、7"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 14,
        "type": "single",
        "question": "在Windows操作系统中可以通过安装（）组件创建FTP站点。",
        "options": [
          "IIS",
          "B、IE",
          "C、WWW",
          "D、DNS"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 15,
        "type": "single",
        "question": "一个C/S应用系统通过本地命名的方法配置客户端到服务器的连接...下面哪一句描述是正确的？（）",
        "options": [
          "配置本地命名连接tnsnames.ora必须在客户端电脑上",
          "B、为了客户端的连接tnsnames.ora必须从服务器上删除",
          "C、配置本地命名连接tnsnames.ora必须在客户端和服务器端都配置",
          "D、客户端不需要tnsnames.ora文件"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 16,
        "type": "single",
        "question": "以下哪个不属于iis自带的服务（）。",
        "options": [
          "telnet服务",
          "B、web服务",
          "C、ftp服务",
          "D、smtp服务"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 17,
        "type": "single",
        "question": "下面哪种工具不是Windows Server 2003中默认安装的AD管理工具（）。",
        "options": [
          "Active Directory用户和计算机",
          "B、Active Directory站点和服务",
          "C、Active Directory域和信任",
          "D、GPMC"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 18,
        "type": "single",
        "question": "下面不属于虚拟化平台的是（）。",
        "options": [
          "Vmware",
          "B、Hyper-v",
          "C、Citrix",
          "D、DOS"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 19,
        "type": "single",
        "question": "假如你向一台远程主机发送特定的数据包，却不想远程主机响应你的数据包。这时你使用哪一种类型的进攻手段？（）",
        "options": [
          "缓冲区溢出",
          "B、地址欺骗",
          "C、拒绝服务",
          "D、暴力攻击"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 20,
        "type": "single",
        "question": "破解双方通信获得明文是属于（）的技术。",
        "options": [
          "密码分析还原",
          "B、协议漏洞渗透",
          "C、应用漏洞分析与渗透",
          "D、DOS攻击"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 21,
        "type": "single",
        "question": "信息安全等级保护的5个级别中，（）是最高级别，属于关系到国计民生的最关键信息系统的保护。",
        "options": [
          "强制保护级",
          "B、专控保护级",
          "C、监督保护级",
          "D、指导保护级",
          "E、自主保护级"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 22,
        "type": "single",
        "question": "防火墙能够（）。",
        "options": [
          "防范恶意的知情者",
          "B、防范通过它的恶意连接",
          "C、防备新的网络安全问题",
          "D、完全防止传送己被病毒感染的软件和文件"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 23,
        "type": "single",
        "question": "在取得目标系统的访问权之后，黑客通常还需要采取进一步的行动以获得更多权限，这一行动是（）",
        "options": [
          "提升权限，以攫取控制权",
          "B、扫描、拒绝服务攻击、获取控制权",
          "C、网络嗅探",
          "D、进行拒绝服务攻击"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 24,
        "type": "single",
        "question": "下列哪一项可以用于查看网络流量并确定网络上所运行的服务？（）",
        "options": [
          "Sniffer",
          "B、IDS",
          "C、防火墙",
          "D、路由器"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 25,
        "type": "single",
        "question": "风险评估不包括以下哪个活动?（）",
        "options": [
          "中断引入风险的活动",
          "B、识别资产",
          "C、识别威胁",
          "D、分析风险"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 26,
        "type": "single",
        "question": "在\"选项\"对话框的\"文件位置\"选项卡中可以设置（）。",
        "options": [
          "表单的默认大小",
          "B、默认目录",
          "C、日期和时间的显示格式",
          "D、程序代码的颜色"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 27,
        "type": "single",
        "question": "下列RAID技术无法提高读写性能的是（）。",
        "options": [
          "RAID0",
          "B、RAID1",
          "C、RAID3",
          "D、RAID5"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 28,
        "type": "single",
        "question": "Windows Server 2003标准版支持的CPU数量为（）。",
        "options": [
          "4",
          "B、6",
          "C、8",
          "D、12"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 29,
        "type": "single",
        "question": "若每次打开Word程序文档时，计算机都会把文档传送到另一台FTP服务器，那么可以怀疑Word程序被黑客植入（）。",
        "options": [
          "病毒",
          "B、特洛伊木马",
          "C、FTP匿名服务",
          "D、陷门"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 30,
        "type": "single",
        "question": "以下对于拒绝服务攻击描述错误的是：（）",
        "options": [
          "通过盗取管理员账号使得管理员无法正常登录服务器",
          "B、通过发送大量数据包导致网络带宽拥塞",
          "C、通过发送大量连接请求导致资源耗尽",
          "D、通过发送错误的协议数据包引发系统崩溃"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 31,
        "type": "single",
        "question": "信息安全风险的三要素是指（）",
        "options": [
          "资产/威胁/脆弱性",
          "B、资产/使命/威胁",
          "C、使命/威胁/脆弱性",
          "D、威胁/脆弱性/使命"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 32,
        "type": "single",
        "question": "从系统结构上来看，入侵检测系统可以不包括（）。",
        "options": [
          "数据源",
          "B、分析引擎",
          "C、审计",
          "D、响应"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 33,
        "type": "single",
        "question": "依据数据包的基本标记来控制数据包的防火墙技术是（）",
        "options": [
          "包过滤技术",
          "B、应用代理技术",
          "C、状态检侧技术",
          "D、有效载荷"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 34,
        "type": "single",
        "question": "溢出攻击的核心是（）。",
        "options": [
          "修改堆栈记录中进程的返回地址",
          "B、利用Shellcode",
          "C、提升用户进程权限",
          "D、捕捉程序漏洞"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 35,
        "type": "single",
        "question": "随着Internet发展的势头和防火墙的更新，防火墙的哪些功能将被取代（）。",
        "options": [
          "使用IP加密技术",
          "B、日志分析工具",
          "C、攻击检测和报警",
          "D、对访问行为实施静态、固定的控制"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 36,
        "type": "single",
        "question": "信息系统软件本身及其处理的信息在时间、范围和强度上的保密特性描述的系统安全属性是（）。",
        "options": [
          "机密性",
          "B、完整性",
          "C、可用性",
          "D、可控性"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 37,
        "type": "single",
        "question": "绝缘安全工器具应存放在温度-15℃～35℃，相对湿度5%～80%的干燥（）的工具室（柜）内。",
        "options": [
          "通风",
          "B、密闭",
          "C、封闭",
          "D、阴凉"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 38,
        "type": "single",
        "question": "电子邮件客户端通常需要用（）协议来发送邮件。",
        "options": [
          "仅 SMTP",
          "B、仅 POP",
          "C、SMTP 和 POP",
          "D、以上都不正确"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 39,
        "type": "single",
        "question": "DNS在计算机术语中是（）？",
        "options": [
          "域名服务器",
          "B、邮局协议",
          "C、文件传输服务",
          "D、网页服务器"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 40,
        "type": "single",
        "question": "数据安全主要包含（）。",
        "options": [
          "数据加密和数据解密",
          "B、数据加密和数据恢复",
          "C、数据解密和数据恢复",
          "D、数据存储和数据加密"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 41,
        "type": "single",
        "question": "IIS写权限漏洞是由于开启了IIS上的哪项服务引起的（）。",
        "options": [
          "FastCGI",
          "B、Webdav",
          "C、PHP-fpm",
          "D、IIS URL Rewrite"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 42,
        "type": "single",
        "question": "设备的硬件维护操作时必须戴（）。",
        "options": [
          "安全帽",
          "B、安全带",
          "C、防静电手套",
          "D、针织手套"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 43,
        "type": "single",
        "question": "公司的WEB服务器受到来自某个IP地址的黑客反复攻击，你的主管要求你通过防火墙来阻止来自那个地址的所有连接，以保护WEB服务器，那么你应该选择哪一种防火墙?（）。",
        "options": [
          "包过滤型",
          "B、应用级网关型",
          "C、复合型防火墙",
          "D、代理服务型"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 44,
        "type": "single",
        "question": "信息系统使用中，当会话控制应在会话处于非活跃一定时间或会话结束后（）。",
        "options": [
          "终止网络连接",
          "B、关闭计算机",
          "C、关闭服务器",
          "D、关闭数据库"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 45,
        "type": "single",
        "question": "公钥密码基础设施PKI解决了信息系统中的（）问题。",
        "options": [
          "身份信任",
          "B、权限管理",
          "C、安全审计",
          "D、加密"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 46,
        "type": "single",
        "question": "下面RAID级别中，数据冗余能力最弱的是？（）",
        "options": [
          "RAID 0",
          "B、RAID 1",
          "C、RAID 3",
          "D、RAID 5"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 47,
        "type": "single",
        "question": "严格执行带电作业工作规定，严禁无工作方案或采用未经审定的（）进行带电作业工作；严禁使用不合格工器具开展带电作业；严禁约时停用或恢复重合闸。",
        "options": [
          "安全措施",
          "B、工作方案",
          "C、工作票",
          "D、运行方式"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 48,
        "type": "single",
        "question": "更换部件或设备工作变更时，全程工作必须至少有（）人以上参加，工作完成后及时做好维修记录。",
        "options": [
          "1",
          "B、2",
          "C、3",
          "D、4"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 49,
        "type": "single",
        "question": "不能防范ARP欺骗攻击的是（）",
        "options": [
          "使用静态路由表",
          "B、使用ARP防火墙软件",
          "C、使用防ARP欺骗的交换机",
          "D、主动查询IP和MAC地址"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 50,
        "type": "single",
        "question": "简单包过滤防火墙主要工作在（）",
        "options": [
          "链路层/网络层",
          "B、网络层/传输层",
          "C、应用层",
          "D、会话层"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 51,
        "type": "single",
        "question": "B类计算机机房的空调设备应尽量采用（）。",
        "options": [
          "风冷式空调",
          "B、立式的",
          "C、分体的",
          "D、规定中没有要求"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 52,
        "type": "single",
        "question": "对DMZ区的描述错误的是（）",
        "options": [
          "DMZ区内的服务器一般不对外提供服务",
          "B、DMZ主要解决外部网络访问内部服务器的问题",
          "C、DMZ可有效保护内部网络",
          "D、DMZ位于内网和外网之间"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 53,
        "type": "single",
        "question": "一台需要与互联网通信的 WEB服务器放在以下哪个位置最安全？（）",
        "options": [
          "在DMZ 区",
          "B、在内网中",
          "C、和防火墙在同一台计算机上",
          "D、在互联网防火墙外"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 54,
        "type": "single",
        "question": "（）加强了WLAN的安全性。它采用了802.1x的认证协议、改进的密钥分布架构和AES加密。",
        "options": [
          "802.11i",
          "B、802.11j",
          "C、802.11n",
          "D、802.11e"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 55,
        "type": "single",
        "question": "2011年，Skype存在用户端对端加密的密钥直接写在代码里（hardcoded key）的安全漏洞，由此可知Skype存在（）安全漏洞。",
        "options": [
          "不安全的加密存储",
          "B、安全配置错误",
          "C、不安全的直接对象引用",
          "D、传输层保护不足"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 56,
        "type": "single",
        "question": "数据保密性指的是（）。",
        "options": [
          "防止因数据被截获而造成泄密",
          "B、提供连接实体身份的鉴别",
          "C、保证数据收发一致性",
          "D、确保数据是由合法实体发出的"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 57,
        "type": "single",
        "question": "下面哪种方法不能够更新针对计算机的组策略设定（）。",
        "options": [
          "重启机器",
          "B、当前用户重新登陆",
          "C、gpupdate",
          "D、后台更新"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 58,
        "type": "single",
        "question": "网络216.12.128.0/24 — 216.12.143.0/24路由合并后，在骨干路由器的路由表地址是：（）。",
        "options": [
          "216.12.128.0/24",
          "B、216.12.128.0/20",
          "C、216.12.0.0/16",
          "D、216.12.128.0/11"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 59,
        "type": "single",
        "question": "计算机病毒是指（）。",
        "options": [
          "带细菌的磁盘",
          "B、已损坏的磁盘",
          "C、具有破坏性的特制程序",
          "D、被破坏了的程序"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 60,
        "type": "single",
        "question": "在上网行为管理设备存储空间耗尽、遭受入侵攻击等异常情况下，应采取预防措施保证已存储记录数据的（）。",
        "options": [
          "可靠性",
          "B、可用性",
          "C、连续性",
          "D、有效性"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 61,
        "type": "single",
        "question": "公司对各单位互联网流量和应用情况进行监控，在IT运维月报中（）公布各单位流量排名靠前的使用情况。",
        "options": [
          "定期",
          "B、不定期",
          "C、长期",
          "D、临时"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 62,
        "type": "single",
        "question": "终端涉密检查的文件动态监控是指（）。",
        "options": [
          "在文件的打开和关闭的瞬间对此文档进行检索",
          "B、随机抽取文档进行检索",
          "C、文档拷贝过程中，进行检索",
          "D、对删除文档进行检索"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 63,
        "type": "single",
        "question": "由于频繁出现软件运行时被黑客远程攻击获取数据的现象，某软件公司准备加强软件安全开发管理，在下面做法中，对于解决问题没有直接帮助的是（）。",
        "options": [
          "要求规范软件编码，并制定公司的安全编码准则",
          "B、要求开发人员采用敏捷开发模型进行开发",
          "C、要求所有的开发人员参加软件安全意识培训",
          "D、要求增加软件安全测试环节，尽早发现软件安全问题"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 64,
        "type": "single",
        "question": "Internet信息服务在Windows的哪个组件下（）。",
        "options": [
          "索引服务",
          "B、网络服务",
          "C、应用程序服务器",
          "D、Windows网络服务"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 65,
        "type": "single",
        "question": "SA指的是（）",
        "options": [
          "数字签名算法",
          "B、数字系统算法",
          "C、数字签名协议",
          "D、数字签名协议"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 66,
        "type": "single",
        "question": "以下代码中存在（）的安全漏洞：FormFile theFile = advertiseform.getFilepath(); String up_path = servlet.getServletContext().getRealPath(\"/\"); if(theFile != null ){}",
        "options": [
          "上传文件漏洞",
          "B、不安全的直接对象引用",
          "C、SQL注入",
          "D、未验证的重定向和转发"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 67,
        "type": "single",
        "question": "在下面的NT/2K安全模型的空白处，应该是哪个安全组件？（）",
        "options": [
          "LONGON过程（LP）",
          "B、安全帐号管理（SAM）",
          "C、安全参考监控器（SRM）",
          "D、本地安全授权（LSA）"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 68,
        "type": "single",
        "question": "按系统保护（G2）的要求，系统应提供在管理维护状态中运行的能力，管理维护状态只能被（）使用。",
        "options": [
          "领导",
          "B、机房管理员",
          "C、系统管理员",
          "D、系统操作员"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 69,
        "type": "single",
        "question": "（）最好地描述了数字证书。",
        "options": [
          "等同于在网络上证明个人和公司身份的身份证",
          "B、浏览器的一标准特性，它使得黑客不能得知用户的身份",
          "C、网站要求用户使用用户名和密码登陆的安全机制",
          "D、伴随在线交易证明购买的收据"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 70,
        "type": "single",
        "question": "公司总部以及供电局信息运行维护部门每天定时对门户系统进行巡检。检查数据备份是否备份正常：基本配置库和IPP数据库的备份周期为一天（）次全备，保留周期为30天。",
        "options": [
          "一",
          "B、二",
          "C、三",
          "D、无"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 71,
        "type": "single",
        "question": "冯.诺伊曼机工作方式的基本特点是（）。",
        "options": [
          "多指令流单数据流",
          "B、按地址访问并顺序执行指令",
          "C、堆栈操作",
          "D、存储器按内容选择地址"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 72,
        "type": "single",
        "question": "降级容灾是指灾备中心的IT系统在处理能力、可靠性等指标（）生产中心。",
        "options": [
          "低于",
          "B、相当",
          "C、高于",
          "D、不能衡量"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 73,
        "type": "single",
        "question": "不属于信息安全与信息系统的“三个同步”的是（）",
        "options": [
          "同步管理",
          "B、同步建设",
          "C、同步规划",
          "D、同步投入"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 74,
        "type": "single",
        "question": "下列不属于URL的是（）。",
        "options": [
          "http://www.163.com",
          "B、www.163.com",
          "C、ftp://www.163.com",
          "D、ftp://www.163.com:1000"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 75,
        "type": "single",
        "question": "一门课程同时有若干个学生选修，而一个学生可以同时选修多门课程，则课程与学生之间具有（）关系。",
        "options": [
          "一对一",
          "B、一对多",
          "C、多对多",
          "D、多对一"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 76,
        "type": "single",
        "question": "要使用默认选项安装 WSUS，不须在计算机上安装的软件是（）。",
        "options": [
          "Microsoft Internet 信息服务（IIS）6.0",
          "B、用于 Windows Server 2003 的 .NET Framework 1.1 SP1",
          "C、Background Intelligent Transfer Service（BITS）2.0",
          "D、Microsoft Office 2003"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 77,
        "type": "single",
        "question": "某单位通过防火墙进行互联网接入，外网口地址为 202.10.1.11，内网口地址为 192.168.1.1， 这种情况下防火墙工作模式为：（）",
        "options": [
          "透明模式",
          "B、路由模式",
          "C、代理模式",
          "D、以上都不对"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 78,
        "type": "single",
        "question": "下列（）技术不属于预防病毒技术的范畴。",
        "options": [
          "加密可执行程序",
          "B、引导区保护",
          "C、系统监控与读写控制",
          "D、校验文件"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 79,
        "type": "single",
        "question": "网页挂马是指（）",
        "options": [
          "攻击者通过在正常页面中插入一段代码，浏览者打开页面时执行代码并下载运行木马",
          "B、利用人们的猎奇心理构造链接引诱点击",
          "C、把木马服务端和某个游戏/软件捆绑发送给别人",
          "D、与互联网上下载的免费软件进行捆绑激活"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 80,
        "type": "single",
        "question": "在OSPF使用虚拟链路（Virtual link）主要用于那些目的（）。",
        "options": [
          "在区域0不连续时进行弥补",
          "B、连接一个没有到主干区域直接物理连接的区域",
          "C、测试路由通路",
          "D、A和B"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 81,
        "type": "single",
        "question": "关于安全风险，下列说法不正确的是（）。",
        "options": [
          "物理安全风险包括火灾、水灾、地震等环境事故，造成整个系统毁灭",
          "B、网络层面的安全风险包括系统弱点被暴露而招致攻击",
          "C、主机层面的安全风险包括计算机病毒的侵害",
          "D、应用安全是指用户在网络上运行的业务应用系统、办公应用系统及其他各种在线应用系统的安全。"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 82,
        "type": "single",
        "question": "使用数据库的主要目的之一是为了解决数据的（）问题。",
        "options": [
          "可靠性",
          "B、传输",
          "C、保密",
          "D、共享"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 83,
        "type": "single",
        "question": "为了防御网络监听，最常用的方法是：（）",
        "options": [
          "采用物理传输（非网络）",
          "B、信息加密",
          "C、无线网",
          "D、使用专线传输"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 84,
        "type": "single",
        "question": "目前使用的防病毒软件的作用是（）。",
        "options": [
          "查出任何已感染的病毒",
          "B、查出并消除任何已感染的病毒",
          "C、消除已感染的任何病毒",
          "D、查出已知名的病毒，消除部分病毒"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 85,
        "type": "single",
        "question": "根据灾难恢复演练的深度不同，可以将演练分为三个级别，这三个级别按演练深度由低到高的排序 正确的是（）",
        "options": [
          "系统级演练、业务级演练、应用级演练",
          "B、系统级演练、应用级演练、业务级演练",
          "C、业务级演练、应用级演练、系统级演练",
          "D、业务级演练、系统级演练、应用级演练"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 86,
        "type": "single",
        "question": "内容过滤技术的应用领域不包括（）",
        "options": [
          "防病毒",
          "B、网页防篡改",
          "C、防火墙",
          "D、入侵检测"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 87,
        "type": "single",
        "question": "在Windows的DOS窗口中键入命令ipconfig/?，其作用是（）。",
        "options": [
          "显示所有网卡的TCP/IP配置信息",
          "B、显示ipconfig相关帮助信息",
          "C、更新网卡的DHCP配置",
          "D、刷新客户端DNS缓存的内容"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 88,
        "type": "single",
        "question": "企业负责人年度业绩考核减项指标及评价标准，各单位提供的信息系统软硬件产品存在恶意漏洞、恶意代码的，每起减___分；引起严重后果的，每起减___分。（）",
        "options": [
          "1，3",
          "B、2，4",
          "C、2，5",
          "D、1，4"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 89,
        "type": "single",
        "question": "在NT中，如果config.pol已经禁止了对注册表的访问，那么黑客能够绕过这个限制吗？怎样实现？（）",
        "options": [
          "不可以",
          "B、可以通过时间服务来启动注册表编辑器",
          "C、可以通过在本地计算机删除config.pol文件",
          "D、可以通过poledit命令"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 90,
        "type": "single",
        "question": "Windows 系统下，哪项不是有效进行共享安全的防护措施?（）",
        "options": [
          "使用 netshare\\\\127．0．0．1\\c$/delete 命令,删除系统中C$等管理共享,重启系统",
          "B、确保所有的共享都有高强度的密码防护",
          "C、禁止通过\"空会话\"连接以匿名的方式列举用户、群组、系统配置和注册表键值",
          "D、安装软件防火培阻止外面对共享目录的连接"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 91,
        "type": "single",
        "question": "关于屏蔽子网防火墙，下列说法错误的是（）。",
        "options": [
          "屏蔽子网防火墙是几种防火墙类型中最安全的",
          "B、屏蔽子网防火墙既支持应用级网关也支持电路级网关",
          "C、内部网对于Internet来说是不可见的",
          "D、内部用户可以不通过DMZ直接访问Internet"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 92,
        "type": "single",
        "question": "分布式拒绝服务攻击的简称是（）",
        "options": [
          "DDOS",
          "B、DROS",
          "C、LAND",
          "D、SDOS"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 93,
        "type": "single",
        "question": "在安全编码中，应该按照（）为应用程序分配数据库访问权限。",
        "options": [
          "最小化原则",
          "B、最大化原则",
          "C、优先原则",
          "D、随意原则"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 94,
        "type": "single",
        "question": "入侵检测应用的目的：（）",
        "options": [
          "实时检测网络流量或主机事件",
          "B、数据包过滤",
          "C、在发现攻击事件时及时反应",
          "D、A和C"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 95,
        "type": "single",
        "question": "以下能有效预防计算机病毒的方法是（）。",
        "options": [
          "尽可能多的做磁盘碎片整理",
          "B、及时升级防病毒软件",
          "C、及时清理系统垃圾文件",
          "D、把重要文件压缩处理"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 96,
        "type": "single",
        "question": "路由器的路由表包括目的地址，下一站地址以及（）。",
        "options": [
          "时间.距离",
          "B、距离.计时器.标志位",
          "C、路由.距离.时钟",
          "D、时钟.路由"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 97,
        "type": "single",
        "question": "RAID6级别的RAID组的磁盘利用率（N：成员盘个数）为（）。",
        "options": [
          "N/（N-2）",
          "B、1",
          "C、（N-2）/N",
          "D、1/2N"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 98,
        "type": "single",
        "question": "信息系统安全中应用安全方面不包括（）。",
        "options": [
          "安全评估",
          "B、强制访问控制",
          "C、身份鉴别",
          "D、应用通信安全"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 99,
        "type": "single",
        "question": "计算机病毒是指编制或者在（）中插入的破坏计算机功能或者毁坏数据，影响计算机使用，并能自我复制的一组计算机指令或者程序代码。",
        "options": [
          "计算机程序",
          "B、计算机",
          "C、计算机软盘",
          "D、计算机硬盘"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 100,
        "type": "multiple",
        "question": "我国网络安全法律体系的特点包括（ ）",
        "options": [
          "以《网络安全法》为基本法统领，覆盖各个领域",
          "B、部门规章及以下文件占多数",
          "C、涉及多个管理部门",
          "D、内容涵盖网络安全管理、保障、责任各个方面"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 101,
        "type": "multiple",
        "question": "关于风险评估工作形式，下列小张的观点正确的是（ ）",
        "options": [
          "风险评估工作形式包括：自评估和检查评估",
          "B、自评估是指信息系统拥有、运营或使用单位发起的对本单位信息系统进行风险评估",
          "C、检查评估是信息系统上级管理部门组织或者国家有关职能部门依法开展的风险评估",
          "D、对信息系统的风险评估方式只能是“自评估”和“检查评估”中的一个，非此即彼"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 102,
        "type": "multiple",
        "question": "网络安全，是指通过采取必要措施，防范对网络的攻击、侵入、干扰、破坏和非法使用以及意外事故，使网络处于稳定可靠运行的状态，以及保障网络数据的（）的能力",
        "options": [
          "真实性",
          "B、完整性",
          "C、保密性",
          "D、可用性"
        ],
        "analysis": "",
        "answer": [
          1,
          2,
          3
        ]
      },
      {
        "id": 103,
        "type": "multiple",
        "question": "实施网络安全管理的关键成功因素包括（ ）",
        "options": [
          "向所有管理者和员工有效地推广安全意识",
          "B、向所有管理者、员工及其他伙伴方分发信息安全策略、指南和标准",
          "C、为网络安全管理活动提供资金支持",
          "D、提供适当的培训和教育"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 104,
        "type": "multiple",
        "question": "SQL注入攻击有可能产生（ ）危害",
        "options": [
          "网页被挂木马",
          "B、恶意篡改网页内容",
          "C、未经授权状况下操作数据库中的数据",
          "D、私自添加系统账号"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 105,
        "type": "multiple",
        "question": "根据相关法律，网络产品、服务的提供者（ ）。",
        "options": [
          "不得设置恶意程序",
          "B、发现安全缺陷、漏洞时应当立即采取补救措施",
          "C、应当为其产品、服务持续提供安全维护",
          "D、收集用户信息应向用户明示并取得同意"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 106,
        "type": "multiple",
        "question": "以下属于弥补openSSL安全漏洞措施的是（ ）",
        "options": [
          "更新补丁",
          "B、更新X.509证书",
          "C、更换泄露的密钥",
          "D、杀毒"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 107,
        "type": "multiple",
        "question": "降低计算机病毒的影响范围就必须有效的控制计算机病毒的传播途径,下列属于计算机病毒传播途径的是（）",
        "options": [
          "通过文件共享传播",
          "B、通过电子邮件传播",
          "C、通过WEB网页传播",
          "D、通过系统漏洞传播"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 108,
        "type": "multiple",
        "question": "下列有关计算机病毒的说法中，正确的是（ ）",
        "options": [
          "计算机病毒可以通过WORD文档进行传播",
          "B、用杀毒软件杀毒之后，该介质仍会再染病毒",
          "C、计算机病毒可以自动生成",
          "D、病毒在某些条件下被激活之后开始起破坏作用"
        ],
        "analysis": "",
        "answer": [
          0,
          2,
          3
        ]
      },
      {
        "id": 109,
        "type": "multiple",
        "question": "对社会工程学攻击解释中意思贴近的是（ ）",
        "options": [
          "计算机存在逻辑错误",
          "B、人做出错误判断",
          "C、攻击者的计算机知识",
          "D、多种攻击技术复合"
        ],
        "analysis": "",
        "answer": [
          1,
          3
        ]
      },
      {
        "id": 110,
        "type": "multiple",
        "question": "在地址翻译原理中，防火墙根据什么将相同的IP发送给内部不同的主机？（ ）",
        "options": [
          "防火墙记录的包的目的端口",
          "B、防火墙使用广播的方式发送",
          "C、防火墙根据每个包的时间顺序",
          "D、防火墙根据每个包的TCP序列号"
        ],
        "analysis": "",
        "answer": [
          0,
          3
        ]
      },
      {
        "id": 111,
        "type": "multiple",
        "question": "防火墙有哪些缺点和不足？（ ）",
        "options": [
          "不能抵抗最新的未设置策略的攻击漏洞",
          "B、并发连接数限制容易导致拥塞或溢出",
          "C、对服务器合法开放端口的攻击大多无法阻止",
          "D、可以阻止内部主动发起连接的攻击"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 112,
        "type": "multiple",
        "question": "主机系统高可用技术包括以下哪些工作模式（ ）",
        "options": [
          "双机热备份方式",
          "B、双机互备方式",
          "C、多处理器协同方式",
          "D、群集并发存取方式"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          3
        ]
      },
      {
        "id": 113,
        "type": "multiple",
        "question": "下列关于网络信息安全说法正确的有（ ）。",
        "options": [
          "网络运营者应当对其收集的用户信息严格保密",
          "B、网络运营者应妥善管理用户信息，无需建立保护制度",
          "C、不得泄露、篡改、毁损其收集的个人信息",
          "D、未经被收集者同意，网络运营者不得向他人提供个人信息（去标识化除外）"
        ],
        "analysis": "",
        "answer": [
          0,
          2
        ]
      },
      {
        "id": 114,
        "type": "multiple",
        "question": "重要文件泄密但无法从计算机获得线索，可能的原因是（ ）。",
        "options": [
          "该计算机未开启审计功能",
          "B、该计算机审计日志未安排专人进行维护",
          "C、该计算机感染了木马",
          "D、该计算机存在系统漏洞"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 115,
        "type": "multiple",
        "question": "加密的强度主要取决于（ ）",
        "options": [
          "算法的强度",
          "B、密钥的保密性",
          "C、明文的长度",
          "D、密钥的强度"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          3
        ]
      },
      {
        "id": 116,
        "type": "multiple",
        "question": "AIX中采用没有警告的快速关机可以用（ ）命令。",
        "options": [
          "shutdown -F",
          "B、halt",
          "C、backup",
          "D、restore"
        ],
        "analysis": "",
        "answer": [
          0,
          1
        ]
      },
      {
        "id": 117,
        "type": "multiple",
        "question": "以下是按照计算机规模分类的是（ ）。",
        "options": [
          "巨型机",
          "B、移动电脑",
          "C、大型机",
          "D、小型机",
          "E、微型机"
        ],
        "analysis": "",
        "answer": [
          0,
          2,
          3,
          4
        ]
      },
      {
        "id": 118,
        "type": "multiple",
        "question": "电力监控系统安全防护的总体原则是（ ）",
        "options": [
          "安全分区",
          "B、网络专用",
          "C、横向隔离",
          "D、纵向认证"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 119,
        "type": "multiple",
        "question": "以下哪些属于IX1500的RAID特性？（ ）",
        "options": [
          "RAID级别转换",
          "B、RAID容量扩展",
          "C、RAID缓存掉电72小时保护",
          "D、RAID6支持"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 120,
        "type": "multiple",
        "question": "元数据的来源包括（）",
        "options": [
          "通过用户交互、定义和数据分析定义业务元数据",
          "B、通过某些维护支持活动可以将有关数据的质量描述和其他发现添加到源数据储存库中，或从IT系统中获取元数据",
          "C、可以在汇总层面或者细节层面识别元数据",
          "D、对相关元数据的适当管理和在元数据之间导航是重要的使用需求"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 121,
        "type": "multiple",
        "question": "下列一组数中，比八进制37大的有（）。",
        "options": [
          "11011001B",
          "B、75D",
          "C、37D",
          "D、2A7H",
          "E、50D"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      {
        "id": 122,
        "type": "multiple",
        "question": "计算机后门的作用包括（）",
        "options": [
          "方便下次直接进入",
          "B、监视用户所有隐私",
          "C、监视用户所有行为",
          "D、完全控制用户主机"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 123,
        "type": "multiple",
        "question": "由于跨站脚本攻击漏洞而造成的危害的是（）",
        "options": [
          "网站挂马",
          "B、盗窃企业重要的具有商业价值的资料",
          "C、访问未授权的页面和资源",
          "D、盗取各类用户账号"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          3
        ]
      },
      {
        "id": 124,
        "type": "multiple",
        "question": "拒绝服务攻击方式包括（）",
        "options": [
          "利用大量数据挤占网络带宽",
          "B、利用大量请求消耗系统性能",
          "C、利用协议实现缺陷",
          "D、利用系统处理方式缺陷"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 125,
        "type": "multiple",
        "question": "社会工程学利用的人性弱点包括（）",
        "options": [
          "信任权威",
          "B、信任共同爱好",
          "C、期望守信",
          "D、期望社会认可"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 126,
        "type": "multiple",
        "question": "以下哪些是IPSAN的优点：（）。",
        "options": [
          "实现弹性扩展的存储网络",
          "B、已经验证的传输设备保证运行的可靠性",
          "C、只需通过简单的升级便可得到极大的性能提升，并保护投资",
          "D、熟悉网络技术的人才多，减少培训和人力成本",
          "E、IP跨长距离扩展能力，轻松实现远程数据复制和灾难恢复"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      {
        "id": 127,
        "type": "multiple",
        "question": "异常信息包含了开发和维护人员调试使用的系统信息，为避免攻击者利用，设计异常信息时应注意（）",
        "options": [
          "使用机构化异常处理机制",
          "B、程序发生异常时，应终止当前业务并回滚",
          "C、通信双方在一段时间内未作反应应自动结束会话",
          "D、程序发生异常时，应在日志中记录详细错误消息"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 128,
        "type": "multiple",
        "question": "服务台人员在为用户提供支持服务时，（）。",
        "options": [
          "必须礼貌、真诚的提供服务",
          "B、对待用户应耐心",
          "C、仔细倾听用户的描述",
          "D、提出积极的建议"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 129,
        "type": "multiple",
        "question": "鼠标是一种新型的（）设备。",
        "options": [
          "输入设备",
          "B、通信设备",
          "C、控制设备",
          "D、输出设备"
        ],
        "analysis": "",
        "answer": [
          0,
          2
        ]
      },
      {
        "id": 130,
        "type": "multiple",
        "question": "根据等级保护制度，网络运营者应当履行下列安全保护义务：（）。",
        "options": [
          "制定内部安全管理制度和操作规程",
          "B、采取防范病毒、网络攻击的技术措施",
          "C、监测、记录网络运行状态并按规定留存日志不少于六个月",
          "D、采取数据分类、重要数据备份和加密等措施"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 131,
        "type": "multiple",
        "question": "《网络安全法》规定,网络空间主权的内容包括（）",
        "options": [
          "国内主权",
          "B、依赖性主权",
          "C、独立权",
          "D、自卫权"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 132,
        "type": "multiple",
        "question": "OSI安全体系定义了五类安全服务，包括（）",
        "options": [
          "机密性",
          "B、完整性",
          "C、鉴别",
          "D、防抵赖"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 133,
        "type": "multiple",
        "question": "系统投运前应进行稳定性、安全性测试，包括（）等。",
        "options": [
          "检查是否存在安全漏洞和隐患",
          "B、安装最新的补丁软件",
          "C、关闭不必要的服务端口和进程",
          "D、删除不必要的用户"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 134,
        "type": "single",
        "question": "机房出入口应安排专人值守或配置电子门禁系统，控制、（ C ）和（ D ）进入的人员。",
        "options": [
          "识别",
          "B、识别",
          "C、识别",
          "D、识别"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 135,
        "type": "multiple",
        "question": "木马的常见传播途径有（）。",
        "options": [
          "邮件附件",
          "B、下载文件",
          "C、网页",
          "D、聊天工具"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 136,
        "type": "multiple",
        "question": "关于交换机帧转发的描述中，正确的是（）。",
        "options": [
          "直接交换是指交换机接到帧就直接转发",
          "B、存储转发交换是指接收后先校验整个帧再转发",
          "C、改进的直接交换是指先校验目的地址再转发",
          "D、改进的直接交换是指先校验前64B再转发"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          3
        ]
      },
      {
        "id": 137,
        "type": "multiple",
        "question": "下列属于软件盗版形式的是（）",
        "options": [
          "使用销售公司安装的非正版软件",
          "B、网上下载的非正版软件（未付费）",
          "C、自己解密的非正版软件",
          "D、使用试用版的软件"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 138,
        "type": "multiple",
        "question": "网络运营者建立管理制度和操作流程以满足合规性，主要包括（）",
        "options": [
          "健全用户信息保护制度",
          "B、落实网络实名制",
          "C、网络安全事件应急预案",
          "D、关键信息基础设施的安全保护义务"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 139,
        "type": "single",
        "question": "狠抓责任落实和绩效考核。构建（）的网络安全管理体系、( C )。",
        "options": [
          "管理统一、职责明确、工作界面清晰",
          "B、管理有效、权责明确、工作界面清楚",
          "C、技术体系、监督体系和保障体系",
          "D、技术体系、稽查体系和保障体系"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 140,
        "type": "multiple",
        "question": "下列关于内外网邮件系统说法正确的有（）。",
        "options": [
          "严禁使用未进行内容审计的邮件系统",
          "B、严禁用户使用默认口令",
          "C、严禁开启自动转发功能",
          "D、严禁使用互联网邮箱处理公司业务"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 141,
        "type": "multiple",
        "question": "下列哪些属于服务器硬件的冗余？（）",
        "options": [
          "磁盘冗余",
          "B、电源冗余",
          "C、网卡冗余",
          "D、双机冗余"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 142,
        "type": "multiple",
        "question": "下述描述中，正确的是（）。",
        "options": [
          "设置交换机管理地址后即可使用Telnet连接",
          "B、首次配置必须采用Console口",
          "C、默认交换机所有端口属于VLAN1",
          "D、交换机允许建立多个Telnet登录连接"
        ],
        "analysis": "",
        "answer": [
          1,
          2,
          3
        ]
      },
      {
        "id": 143,
        "type": "multiple",
        "question": "国家采取措施，（）来源于境内的网络安全风险和威胁，保护基础设施。",
        "options": [
          "监测",
          "B、防御",
          "C、处置",
          "D、隔离"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "id": 144,
        "type": "multiple",
        "question": "属于安全闭环组成部分的是（）",
        "options": [
          "检测",
          "B、响应",
          "C、防护",
          "D、预警"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 145,
        "type": "multiple",
        "question": "系统等保定级主要包括以下几个步骤：（）。",
        "options": [
          "系统识别和描述",
          "B、信息系统划分",
          "C、系统的运行维护",
          "D、安全等级确定"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          3
        ]
      },
      {
        "id": 146,
        "type": "multiple",
        "question": "《危险化学品安全管理条例》的目标：（）。",
        "options": [
          "加强危险化学品的安全管理",
          "B、预防和减少危险化学品事故",
          "C、保障人民群众生命财产安全",
          "D、保护环境"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 147,
        "type": "multiple",
        "question": "IT服务管理中事件经理的职责：（）。",
        "options": [
          "负责事件解决过程中的协调和监控",
          "B、负责事件升级的判断与执行",
          "C、负责与其他流程经理沟通",
          "D、负责收集分析事件数据发现潜在问题"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 148,
        "type": "multiple",
        "question": "逻辑强隔离装置部署在应用与数据库之间，实现（）功能",
        "options": [
          "访问控制",
          "B、网络强隔离",
          "C、地址绑定",
          "D、防SQL注入攻击"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 149,
        "type": "multiple",
        "question": "除物联网工程师外，国家颁发的证书方向还有（）。",
        "options": [
          "节能环保工程师",
          "B、物联网系统工程师",
          "C、智能电网工程师",
          "D、智能物流工程师"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 150,
        "type": "multiple",
        "question": "数据备份系统由哪几部分组成：（）。",
        "options": [
          "备份服务器",
          "B、备份网络",
          "C、备份设备",
          "D、备份软件",
          "E、磁盘阵列"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 151,
        "type": "multiple",
        "question": "计算机中通常使用的三种数据单位包括（）。",
        "options": [
          "位",
          "B、编码",
          "C、字",
          "D、字节",
          "E、字段"
        ],
        "analysis": "",
        "answer": [
          0,
          2,
          3
        ]
      },
      {
        "id": 152,
        "type": "multiple",
        "question": "关于“心脏出血”漏洞的阐述正确的是（）",
        "options": [
          "通过读取网络服务器内存，攻击者可以访问敏感数据",
          "B、该病毒可使用户心脏出血",
          "C、心脏出血漏洞是灾难性的",
          "D、该漏洞比一般漏洞潜伏更深"
        ],
        "analysis": "",
        "answer": [
          0,
          2,
          3
        ]
      },
      {
        "id": 153,
        "type": "multiple",
        "question": "中间件的优势特点是（）。",
        "options": [
          "面向程序设计人员",
          "B、缩短应用程序开发周期",
          "C、节约开发成本",
          "D、减少系统初期建设成本"
        ],
        "analysis": "",
        "answer": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "id": 154,
        "type": "single",
        "question": "简述网络信息安全的意义。",
        "options": [],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 155,
        "type": "single",
        "question": "什么是入侵检测系统(IDS)？",
        "options": [],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 156,
        "type": "single",
        "question": "请简述DES算法的基本过程。",
        "options": [],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 157,
        "type": "single",
        "question": "常见的信息安全威胁及技术措施有哪些？",
        "options": [],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 158,
        "type": "single",
        "question": "什么是密码分析？DES中S盒的作用是什么？",
        "options": [],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 159,
        "type": "single",
        "question": "Windows Server 2016操作系统的版本主要包括：Essentials、（）和Datacenter。",
        "options": [
          "精简版",
          "B、Enterprise",
          "C、Standard",
          "D、Student"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 160,
        "type": "single",
        "question": "windows更新系统补丁的三种方法是：（）、工具软件更新和手动更新。",
        "options": [
          "系统更新",
          "B、定时更新",
          "C、最大化更新",
          "D、有权更新"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 161,
        "type": "single",
        "question": "当 AC 为旁挂式组网时，如果数据是直接转发，则数据流（）AC；如果数据是隧道转发模式，则数据流（）AC。",
        "options": [
          "不经过，经过",
          "B、不经过，不经过",
          "C、经过，经过",
          "D、经过，不经过"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 162,
        "type": "single",
        "question": "终端安全管理目标：规范支撑系统中终端用户的行为，降低来自支撑系统终端的安全威胁，可解决（）问题。",
        "options": [
          "终端接入和配置管理；终端账号、秘密、漏洞补丁等系统安全管理；桌面及主机设置管理；终端防病毒管理",
          "B、终端账号、秘密、漏洞补丁等系统安全管理；桌面及主机设置管理；终端防病毒管理",
          "C、终端接入和配置管理；桌面及主机设置管理；终端防病毒管理",
          "D、终端接入和配置管理；终端账号、秘密、漏洞补丁等系统安全管理；桌面及主机设置管理"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 163,
        "type": "single",
        "question": "以下对职业的内涵描述中，正确的是？",
        "options": [
          "职业需要专业的知识与技能",
          "B、职业不一定需要参与社会分工",
          "C、通过工作获得的财富只包含物质财富",
          "D、合理的报酬就是通过劳动后每月获得的薪水"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 164,
        "type": "single",
        "question": "以下哪个选项最准确地描述了职业道德的基本内涵？",
        "options": [
          "遵守法律法规和组织规章制度",
          "B、追求个人利益和财富积累",
          "C、维护客户利益和满足其需求",
          "D、保持良好的道德品质和职业操守"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 165,
        "type": "single",
        "question": "职业道德的核心原则是什么？",
        "options": [
          "个人发展和成就",
          "B、真诚和诚信",
          "C、利润最大化",
          "D、社会责任和公益责任"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 166,
        "type": "single",
        "question": "职业道德修养中，以下哪个方面是至关重要的？",
        "options": [
          "个人利益追求",
          "B、持续学习和自我提升",
          "C、管理层的指导",
          "D、追求权力和地位"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 167,
        "type": "single",
        "question": "下列哪一项没有违反诚实守信的要求？",
        "options": [
          "保守企业秘密",
          "B、派人打进竞争对手内部，增强竞争优势",
          "C、根据服务对象来决定是否遵守承诺",
          "D、凡有利于企业利益的行为"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 168,
        "type": "single",
        "question": "某机械厂的一位领导说：机械工业工艺复杂，技术密集，工程师在图纸上画得再好、再精确，工人操作中如果差那么一毫米，最终出来的就可能是废品。这段话主要强调（）素质的重要性。",
        "options": [
          "专业技能",
          "B、思想政治",
          "C、职业道德",
          "D、身心素质"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 169,
        "type": "single",
        "question": "电器漏电时的处理方法是？",
        "options": [
          "用绝缘手套将插头拔下来",
          "B、用棉布包裹住电线",
          "C、用湿毛巾擦拭漏电部分",
          "D、设备断电并修理电器"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 170,
        "type": "single",
        "question": "根据作用范围分类，网络协议可以分为几种类型？",
        "options": [
          "2",
          "B、3",
          "C、4",
          "D、5"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 171,
        "type": "single",
        "question": "以下哪种网络适用于跨越城市或国家的通信？",
        "options": [
          "局域网",
          "B、广域网",
          "C、互联网",
          "D、无线网"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 172,
        "type": "single",
        "question": "下列哪些是对计算机网络不正确的定义？",
        "options": [
          "计算机网络是计算机的集合",
          "B、计算机网络的目的是相互共享资源",
          "C、计算机网络是在协议控制下通过通信系统来实现计算机之间的连接",
          "D、计算机网络中的一台计算机可以干预另一台计算机的工作"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 173,
        "type": "single",
        "question": "根据网络安全等级保护分级管理标准，信息系统网络安全保护等级分为（）级？",
        "options": [
          "3",
          "B、4",
          "C、5",
          "D、6"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 174,
        "type": "single",
        "question": "根据《中华人民共和国计算机信息系统安全保护条例》，以下属于计算机信息系统安全风险的是？",
        "options": [
          "高速互联网连接",
          "B、安装最新的操作系统",
          "C、未经授权访问",
          "D、定期备份数据"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 175,
        "type": "single",
        "question": "根据《中华人民共和国计算机信息系统安全保护条例》，以下哪种行为属于对计算机病毒的防范措施？",
        "options": [
          "成功的网络攻击",
          "B、及时的安全漏洞修复",
          "C、安装未经验证的软件",
          "D、数据的大规模传输"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 176,
        "type": "single",
        "question": "等保2.0标准对集中管控提出明确要求：“应能够建立一条安全的信息传输路径”，即要求远程网管终端应通过（）方式连接，防止远程管理中信息泄露。",
        "options": [
          "HTTP",
          "B、HTTPS",
          "C、SSL",
          "D、SSH"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 177,
        "type": "single",
        "question": "等保2.0标准对集中管控提出明确要求：“应对网络链路、安全设备、网络设备和服务器等的运行状况进行集中检测”，即要求路由交换设备应配置（）服务。",
        "options": [
          "SMTP",
          "B、AAA",
          "C、SNMP",
          "D、SSH"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 178,
        "type": "single",
        "question": "对于路由器的用户可以设置两种用户权限。可赋予其哪两种访问权限？",
        "options": [
          "非特权和特权",
          "B、特权及普通用户",
          "C、管理员及系统管理员",
          "D、普通用户和系统管理员"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 179,
        "type": "single",
        "question": "802.1x用于WLAN的安全认证，在无线客户端与（）之间进行身份的认证。",
        "options": [
          "AP",
          "B、AC",
          "C、AS",
          "D、WLAN交换机"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 180,
        "type": "single",
        "question": "以下哪个属于IPS的功能？（）",
        "options": [
          "检测网络攻击",
          "B、网络流量检测",
          "C、实时异常告警",
          "D、以上都是"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 181,
        "type": "single",
        "question": "您的网络包含一个active directory域。你有一个成员服务器运行域。你有一个成员服务器运行Windows Server 2008 R2。你需要立即停用到服务器的所有传入连接。你应该怎么做？",
        "options": [
          "从服务管理单元中，禁用IP 助手",
          "B、从服务管理单元中，禁用Netlogon 服务",
          "C、从Windows防火墙，启用公共配置文件中“阻止所有连接选项”",
          "D、从Windows防火墙，启用域配置文件中“阻止所有连接选项”"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 182,
        "type": "single",
        "question": "你的公司有一个单一的活动目录域。该公司通过网络防火墙保护。远程用户通过使用PPTP VPN服务器连接到网络。当用户尝试连接到VPN服务器，他们会收到以下错误信息：远程计算机没有响应？你需要确保用户能够建立VPN连接。你应该怎么做？",
        "options": [
          "打开防火墙上的1423端口",
          "B、打开防火墙上的1723端口",
          "C、打开防火墙上的3389端口",
          "D、打开防火墙上的6000端口"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 183,
        "type": "single",
        "question": "你的网络中有两台服务器分别名为Server1和Server2，两台服务器都运行Windows Server 2008 R2。Server1上有几条自定义入站规则和安全连接规则。你要将Server1上的这几条防火墙规则覆盖到Server2上，你该怎么做？",
        "options": [
          "在命令提示符下，运行netsh.exe firewall dump",
          "B、在命令提示符下，运行netsh.exe firewall show > firewall.txt",
          "C、在高级安全Windows防火墙控制台，单击“导出策略”",
          "D、在高级安全Windows防火墙控制台，单击“安全连接规则”，然后单击“导出列表”"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 184,
        "type": "single",
        "question": "下列哪个命令是将用户密码的最大天数设为30天？（）",
        "options": [
          "chage -W 30 testuser",
          "B、chage -M 30 testuser",
          "C、chage -D 30 testuser",
          "D、chage -E 30 testuser"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 185,
        "type": "single",
        "question": "以下哪个选项不是VLAN的常见用途？（）",
        "options": [
          "提供网络安全隔离",
          "B、优化网络传输性能",
          "C、简化网络管理和配置",
          "D、支持多个无线网络的覆盖"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 186,
        "type": "single",
        "question": "以下哪种模式用于将单个VLAN分配给交换机接口？（）",
        "options": [
          "access模式",
          "B、Trunk模式",
          "C、Hybrid模式",
          "D、High模式"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 187,
        "type": "single",
        "question": "下列关于配置单臂路由的方法错误的是？（）",
        "options": [
          "每个VLAN一个物理连接",
          "B、交换机上，把连接到路由器的端口配置成Trunk类型的端口，并允许相关VLAN的帧通过",
          "C、在路由器上需要创建子接口",
          "D、交换机和路由器之间仅使用一条物理链路连接"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 188,
        "type": "single",
        "question": "以下哪个术语通常用于指代未经修复的已知漏洞？（）",
        "options": [
          "错误",
          "B、补丁",
          "C、恶意软件",
          "D、漏洞"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 189,
        "type": "single",
        "question": "以下哪个工具可以用于在Linux系统中进行数据备份和恢复操作？（）",
        "options": [
          "Time Machine",
          "B、acronis True Image",
          "C、rsync",
          "D、Windows backup and Restore"
        ],
        "analysis": "",
        "answer": 2
      },
      {
        "id": 190,
        "type": "single",
        "question": "下列哪项是物理层故障的例子？（）。",
        "options": [
          "封装不正确",
          "B、STP 配置不正确",
          "C、ARP 映射不正确",
          "D、时钟频率不正确"
        ],
        "analysis": "",
        "answer": 3
      },
      {
        "id": 191,
        "type": "single",
        "question": "当进行分析校验的时候，你通常会在什么情况下发现一个被木马感染了的文件？（）",
        "options": [
          "在可执行文件的末尾有扩展名为.TRJ的文件",
          "B、文件的尺寸变大或者变小，或者时间戳错误",
          "C、文件被删除",
          "D、文件已经具备了一个.SRC扩展名"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 192,
        "type": "single",
        "question": "特洛伊木马有两大类型，以下哪一种是属于可以控制？（）",
        "options": [
          "universale",
          "B、transitive",
          "C、两种都是",
          "D、两种都不是"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 193,
        "type": "judge",
        "question": "12.30.0.1是B类IP地址。",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 194,
        "type": "judge",
        "question": "254.220.0.9是B类IP地址。",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 195,
        "type": "judge",
        "question": "802.1x是一种基于端口的网络接入控制协议。",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 196,
        "type": "judge",
        "question": "目前无线路由器里带有的加密模式主要有：WEP，WPA-PSK（TKIP），WPA2-PSK（AES）。",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 197,
        "type": "judge",
        "question": "白名单列表：拒绝接入WLAN网络客户端的MAC地址列表，只有存在该列表的用户才能接入。",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 198,
        "type": "judge",
        "question": "黑白名单的配置方式有基于VAP（服务集）：该配置只对某些SSID启用。",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 199,
        "type": "judge",
        "question": "在windows操作系统中，安全审计功能包括：注册表维护设置信息、日志系统。",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 1
      },
      {
        "id": 200,
        "type": "judge",
        "question": "FIDO本质是采用公私钥签名/验签的方式，实现用户身份认证，通过生物识别的方式获得私钥授权；因此FIDO在安全原理上与PKI体系是同属一个安全级别，远远高于静态口令、短信验证码、OTP令牌等传统安全认证方式。",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 201,
        "type": "judge",
        "question": "为保证数据库是可恢复的，登记日志文件时必须遵循两条规则：（1）登记的次序严格按照并发事务执行的时间次序。（2）必须先写日志文件，后写数据库。",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      },
      {
        "id": 202,
        "type": "judge",
        "question": "数据备份的“3-2-1原则”是指：至少3份备份、2种不同介质、1份异地存放，该原则可有效防范数据丢失风险。",
        "options": [
          "对",
          "错"
        ],
        "analysis": "",
        "answer": 0
      }
    ]
  }
];
