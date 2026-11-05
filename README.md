# 无广告 · 无付费 · 好用工具清单

> 一份只收录 **核心功能永久免费、没有广告、没有付费墙** 的软件与在线服务的清单。
> 不收试用版，不收「免费但把关键功能锁住」的版本，不收带捆绑安装的所谓绿色版。
> 只链官网与官方仓库，不在本仓库托管任何安装包。

[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

<!-- STATS:START -->
收录 **127** 款工具，覆盖 **7** 个分类 · 🟢 开源 106 · 🔵 免费闭源 4 · 🟡 可选付费 17 · 最后核对 2026-11-05
<!-- STATS:END -->

## 收录标准

一个工具要进这份清单，必须**同时**满足下面六条：

1. **核心功能永久免费** —— 不是限时试用，不是「免费版只让导出 3 次」，不是核心能力被拆去卖 Pro。
2. **没有广告** —— 无横幅、无开屏、无弹窗、无信息流广告、无「推荐安装」，也不接受「可接受广告」白名单。
3. **没有付费墙** —— 不升级就不能正常用的，一律不收。
4. **不强制注册、不强制联网** —— 本地能跑完整流程；云同步只能是可选加分项。
5. **不捆绑** —— 安装器不塞第三方软件、不改主页、不常驻推广进程。
6. **下载入口干净** —— 只链官网或官方仓库 Releases，绝不指向第三方下载站。

补充说明：

- **开源是加分项，不是门槛。** Everything、Wikipedia 这类闭源但确实干净的工具同样收录。
- **可选付费不等于有付费墙。** 如果付费只买云空间、商用授权、企业支持，而本地功能完整免费，可以收录，但必须标 `🟡 可选付费` 并写清楚边界。
- **不接赞助位、不收推广费、不搞付费插队。** 排序只按分类，不按商业关系。
- **会复核。** 软件被收购、改协议、加广告是常事，一旦发现就移入文末「已移出」并说明原因。

## 怎么读这份清单

| 标记 | 含义 |
| --- | --- |
| 🟢 开源 | 源码公开，可审查、可自建，最不容易变卦 |
| 🔵 免费闭源 | 不开源，但确实免费、无广告、无捆绑 |
| 🟡 可选付费 | 基础功能完整免费；付费只涉及云同步 / 商用授权 / 企业版，边界写在 💬 备注里 |

每条都带官网，有源码仓库的额外附「源码」，末尾 `*斜体*` 是适用平台，💬 是必须知道的注意事项。

---

<!-- LIST:START -->
## 🖥️ 系统与桌面效率

> 装完系统第一批该装的东西，全部干净无捆绑。

- **[7-Zip](https://www.7-zip.org/)** · [源码](https://github.com/ip7z/7zip) · 🟢 开源 — 格式通吃的压缩 / 解压工具，界面朴素但极稳。 · *Windows*
  - 💬 只认 7-zip.org，7zip.com 是仿冒站。
- **[Everything](https://www.voidtools.com/)** · 🔵 免费闭源 — 基于文件名索引的秒级全盘搜索，几乎不占资源。 · *Windows*
- **[WizTree](https://www.diskanalyzer.com/)** · 🟡 可选付费 — 直接读 MFT 的磁盘空间分析器，几秒扫完整个盘。 · *Windows*
  - 💬 个人 / 非商业免费，商业用途需购买授权；软件本身无广告。
- **[PowerToys](https://learn.microsoft.com/windows/powertoys/)** · [源码](https://github.com/microsoft/PowerToys) · 🟢 开源 — 微软官方的 Windows 增强套件：窗口布局、批量重命名、取色、命令面板等。 · *Windows*
- **[TrafficMonitor](https://github.com/zhongyang219/TrafficMonitor)** · 🟢 开源 — 任务栏网速 / CPU / 内存悬浮监控，轻量可换肤。 · *Windows*
- **[LibreHardwareMonitor](https://github.com/LibreHardwareMonitor/LibreHardwareMonitor)** · 🟢 开源 — 硬件温度、风扇、电压监控，开源无推广。 · *Windows*
- **[CrystalDiskInfo](https://crystalmark.info/en/software/crystaldiskinfo/)** · [源码](https://github.com/hiyohiyo/CrystalDiskInfo) · 🟢 开源 — 硬盘 SMART 健康状态查看，标准版无广告。 · *Windows*
  - 💬 下载时避开第三方站点提供的「带广告修改版」。
- **[BleachBit](https://www.bleachbit.org/)** · [源码](https://github.com/bleachbit/bleachbit) · 🟢 开源 — 系统垃圾与缓存清理，CCleaner 的干净替代。 · *Windows / Linux*
- **[Rufus](https://rufus.ie/)** · [源码](https://github.com/pbatard/rufus) · 🟢 开源 — 启动盘制作，免费、便携、无需安装。 · *Windows*
- **[Ventoy](https://www.ventoy.net/)** · [源码](https://github.com/ventoy/Ventoy) · 🟢 开源 — 一次制作，往 U 盘丢 ISO 就能多系统启动。 · *Windows / Linux / macOS*
- **[Clonezilla](https://clonezilla.org/)** · 🟢 开源 — 整盘镜像备份与还原，装机救急用。 · *自启动镜像*
- **[GParted](https://gparted.org/)** · 🟢 开源 — 分区调整与格式化，Live USB 里最好用的那一个。 · *Linux Live*
- **[Open-Shell](https://github.com/Open-Shell/Open-Shell-Menu)** · 🟢 开源 — 找回经典开始菜单，开源无捆绑。 · *Windows*
- **[Files](https://files.community/)** · [源码](https://github.com/files-community/Files) · 🟡 可选付费 — 现代版 Windows 文件管理器，标签页、双栏、预览齐全。 · *Windows*
  - 💬 GitHub 版本免费完整，Microsoft Store 版本收费。
- **[LocalSend](https://localsend.org/)** · [源码](https://github.com/localsend/localsend) · 🟢 开源 — 局域网跨设备互传文件，不走云端、不用登录，AirDrop 的通用版。 · *全平台*
- **[Syncthing](https://syncthing.net/)** · [源码](https://github.com/syncthing/syncthing) · 🟢 开源 — P2P 文件同步，没有中心服务器，也没有容量限制。 · *全平台*
- **[KDE Connect](https://kdeconnect.kde.org/)** · [源码](https://github.com/KDE/kdeconnect-kde) · 🟢 开源 — 手机与电脑互传剪贴板、通知、文件，局域网直连。 · *全平台 / Android*
- **[小狼毫 Weasel（Rime）](https://rime.im/)** · [源码](https://github.com/rime/weasel) · 🟢 开源 — 可完全自定义的输入法引擎，本地词库、无联网、无推广。 · *Windows / macOS / Linux*
- **[CopyQ](https://hluk.github.io/CopyQ/)** · [源码](https://github.com/hluk/CopyQ) · 🟢 开源 — 带搜索和脚本的剪贴板历史管理。 · *全平台*
- **[ShareX](https://getsharex.com/)** · [源码](https://github.com/ShareX/ShareX) · 🟢 开源 — 截图 / 录屏 / 标注 / 上传一条龙，开源无水印。 · *Windows*
- **[Flameshot](https://flameshot.org/)** · [源码](https://github.com/flameshot-org/flameshot) · 🟢 开源 — 轻量截图与标注，跨平台。 · *全平台*
- **[GlazeWM](https://github.com/glzr-io/glazewm)** · 🟢 开源 — Windows 平铺窗口管理器，YAML 配置。 · *Windows*
- **[komorebi](https://github.com/LGUG2Z/komorebi)** · 🟢 开源 — 另一款 Windows 平铺窗口管理器，键盘流首选。 · *Windows*
- **[Espanso](https://espanso.org/)** · [源码](https://github.com/espanso/espanso) · 🟢 开源 — 跨平台的文本展开器，输入缩写自动替换成常用语、模板或代码片段。 · *全平台*

## 📄 办公 · 文档 · 笔记

> 写、读、管，全都能离线完成，不逼你开会员。

- **[LibreOffice](https://www.libreoffice.org/)** · [源码](https://github.com/LibreOffice/core) · 🟢 开源 — 文档、表格、演示全套办公套件，无订阅、无广告。 · *全平台*
- **[ONLYOFFICE 桌面版](https://www.onlyoffice.com/desktop.aspx)** · [源码](https://github.com/ONLYOFFICE/DesktopEditors) · 🟢 开源 — 与 Office 格式兼容度很高的桌面办公套件。 · *全平台*
  - 💬 桌面版免费完整；云端协作是另一项付费服务，与本机使用无关。
- **[Joplin](https://joplinapp.org/)** · [源码](https://github.com/laurent22/joplin) · 🟡 可选付费 — 本地优先的 Markdown 笔记，支持端到端加密。 · *全平台 / Android / iOS*
  - 💬 软件与本地同步完全免费；Joplin Cloud 是可选的付费同步服务。
- **[Logseq](https://logseq.com/)** · [源码](https://github.com/logseq/logseq) · 🟢 开源 — 大纲式双链笔记，纯本地文件，数据完全在自己手里。 · *全平台*
- **[思源笔记 SiYuan](https://b3log.org/siyuan/)** · [源码](https://github.com/siyuan-note/siyuan) · 🟡 可选付费 — 块级双链、思维导图、所见即所得 Markdown，本地优先的中文知识库。 · *全平台 / Android / iOS*
  - 💬 本地功能免费完整；云端同步与 AI 为可选订阅。
- **[Obsidian](https://obsidian.md/)** · 🟡 可选付费 — 基于本地 Markdown 文件夹的双链笔记，插件生态极强。 · *全平台 / Android / iOS*
  - 💬 个人使用完全免费且无广告；商业用途、官方同步与发布服务收费。
- **[Zotero](https://www.zotero.org/)** · [源码](https://github.com/zotero/zotero) · 🟡 可选付费 — 文献管理与引用，浏览器插件一键抓取。 · *全平台*
  - 💬 软件免费无广告，自带 300MB 云空间；更大空间需付费。
- **[Anki](https://apps.ankiweb.net/)** · [源码](https://github.com/ankitects/anki) · 🟡 可选付费 — 间隔重复记忆卡片，算法开源，牌组完全本地。 · *桌面 / Android / iOS*
  - 💬 桌面端与 AnkiDroid 免费；iOS 官方 App 收费，可用免费网页版 AnkiWeb。
- **[Calibre](https://calibre-ebook.com/)** · [源码](https://github.com/kovidgoyal/calibre) · 🟢 开源 — 电子书库管理、格式转换、推送到阅读器。 · *全平台*
- **[KOReader](https://github.com/koreader/koreader)** · 🟢 开源 — 电子书阅读器前端，尤其适合墨水屏设备。 · *Android / Linux / 墨水屏*
- **[SumatraPDF](https://www.sumatrapdfreader.org/)** · [源码](https://github.com/sumatrapdfreader/sumatrapdf) · 🟢 开源 — 极轻的 PDF / EPUB / 漫画阅读器，打开大文件不卡。 · *Windows*
- **[Okular](https://okular.kde.org/)** · 🟢 开源 — 带批注、书签、表单的通用文档阅读器。 · *全平台*
- **[PDF Arranger](https://github.com/pdfarranger/pdfarranger)** · 🟢 开源 — PDF 拆页、合并、旋转、重排的小工具。 · *Windows / Linux*
- **[diagrams.net (draw.io)](https://www.drawio.com/)** · [源码](https://github.com/jgraph/drawio) · 🟢 开源 — 流程图 / 架构图，网页直接用，可存到本地或网盘。 · *网页 / 桌面*
- **[Excalidraw](https://excalidraw.com/)** · [源码](https://github.com/excalidraw/excalidraw) · 🟡 可选付费 — 手绘风白板，打开网页就能画。 · *网页 / 自托管*
  - 💬 个人使用免费完整无广告；团队付费版只影响协作功能。
- **[Notepad++](https://notepad-plus-plus.org/)** · [源码](https://github.com/notepad-plus-plus/notepad-plus-plus) · 🟢 开源 — Windows 上最常用的轻量文本 / 代码编辑器。 · *Windows*
- **[Pandoc](https://pandoc.org/)** · [源码](https://github.com/jgm/pandoc) · 🟢 开源 — 文档格式转换的通用转换器，Markdown / Word / PDF / HTML / LaTeX 互通。 · *全平台*

## 🌐 浏览器 · 隐私 · 传输

> 上网这一层的干净程度，决定了后面所有软件的安装体验。

- **[Firefox](https://www.mozilla.org/firefox/)** · [源码](https://github.com/mozilla-firefox/firefox) · 🟢 开源 — 独立内核的开源浏览器，完整版 uBlock Origin 目前的最佳平台。 · *全平台 / Android*
  - 💬 部分区域的新标签页有赞助快捷方式，可在设置中关闭；非第三方广告。
- **[LibreWolf](https://librewolf.net/)** · [源码](https://codeberg.org/librewolf/source) · 🟢 开源 — Firefox 的隐私强化分支，默认去掉遥测与赞助内容。 · *桌面*
- **[Mullvad Browser](https://mullvad.net/en/browser)** · 🟢 开源 — 与 Tor 项目合作的反指纹浏览器，无需购买 VPN 也能用。 · *桌面*
- **[Tor Browser](https://www.torproject.org/download/)** · 🟢 开源 — 匿名网络访问，开源且无广告。 · *全平台 / Android*
- **[uBlock Origin](https://github.com/gorhill/uBlock)** · 🟢 开源 — 低占用的广告与追踪器拦截器，开源、无「可接受广告」白名单。 · *Firefox / Edge*
  - 💬 Chrome 已全面停用 MV2（2025 年 7 月强制关闭），完整版只剩 Firefox / Brave / Edge；Chrome 请用 uBO Lite。
- **[uBlock Origin Lite](https://github.com/gorhill/uBlock)** · 🟢 开源 — 为 Manifest V3 写的精简版，Chrome / Safari 可用，能力受平台限制。 · *Chrome / Edge / Safari / Firefox*
- **[Thunderbird](https://www.thunderbird.net/)** · [源码](https://github.com/mozilla/releases-comm-central) · 🟢 开源 — 开源邮件客户端，多账号、PGP、日历一体。 · *桌面*
- **[KeePassXC](https://keepassxc.org/)** · [源码](https://github.com/keepassxreboot/keepassxc) · 🟢 开源 — 纯本地密码库，不依赖任何账号或云服务。 · *全平台*
- **[Bitwarden](https://bitwarden.com/)** · [源码](https://github.com/bitwarden/clients) · 🟡 可选付费 — 可自托管的开源密码管理器，免费版功能完整。 · *全平台 / 浏览器扩展*
  - 💬 免费版已含无限设备与无限密码；高级版只是附加功能。
- **[Signal](https://signal.org/)** · [源码](https://github.com/signalapp) · 🟢 开源 — 端到端加密即时通讯，非营利基金会运营，界面无广告。 · *全平台*
- **[Element (Matrix)](https://element.io/)** · [源码](https://github.com/element-hq/element-web) · 🟢 开源 — 去中心化开源聊天，可自建服务器。 · *全平台 / 网页*
- **[qBittorrent](https://www.qbittorrent.org/)** · [源码](https://github.com/qbittorrent/qBittorrent) · 🟢 开源 — BT / 磁力下载，无广告、无捆绑、无付费加速。 · *全平台*
- **[Motrix](https://motrix.app/)** · [源码](https://github.com/agalwood/Motrix) · 🟢 开源 — 界面清爽的多协议下载器，支持 HTTP / BT / 磁力。 · *全平台*
- **[Gopeed](https://gopeed.com/)** · [源码](https://github.com/GopeedLab/gopeed) · 🟢 开源 — Go 写的轻量下载器，支持扩展与多线程。 · *全平台 / Android*
  - 💬 请从 GitHub Releases 下载；部分应用商店版本收费。
- **[WinSCP](https://winscp.net/)** · 🟢 开源 — SFTP / SCP 图形客户端，老牌且干净。 · *Windows*
- **[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/)** · 🟢 开源 — 经典 SSH / Telnet 客户端，单文件便携。 · *Windows / Linux*
  - 💬 官方页是 chiark.greenend.org.uk，注意仿冒域名。
- **[Wireshark](https://www.wireshark.org/)** · [源码](https://gitlab.com/wireshark/wireshark) · 🟢 开源 — 网络协议分析的事实标准。 · *全平台*
- **[FreeTube](https://freetubeapp.io/)** · [源码](https://github.com/FreeTubeApp/FreeTube) · 🟢 开源 — 开源桌面视频客户端，本地订阅列表、无广告、不追踪。 · *桌面*
  - 💬 非官方客户端，接口变更后需等待应用更新。

## 🎬 影音 · 图像 · 创作

> 不 watermark、不导出收费、不弹「升级专业版」。

- **[VLC](https://www.videolan.org/vlc/)** · [源码](https://code.videolan.org/videolan/vlc) · 🟢 开源 — 几乎能播任何格式的播放器，无广告无遥测。 · *全平台*
- **[mpv](https://mpv.io/)** · [源码](https://github.com/mpv-player/mpv) · 🟢 开源 — 极简、可脚本化的命令行播放器，画质与性能上限很高。 · *全平台*
- **[OBS Studio](https://obsproject.com/)** · [源码](https://github.com/obsproject/obs-studio) · 🟢 开源 — 录屏与直播推流，无水印、无时长限制。 · *全平台*
- **[HandBrake](https://handbrake.fr/)** · [源码](https://github.com/HandBrake/HandBrake) · 🟢 开源 — 视频转码与压制，预设齐全。 · *全平台*
- **[Shotcut](https://www.shotcut.org/)** · [源码](https://github.com/mltframework/shotcut) · 🟢 开源 — 开源视频剪辑，多轨、滤镜、关键帧都有。 · *全平台*
- **[Kdenlive](https://kdenlive.org/)** · 🟢 开源 — 另一款成熟的开源非线性剪辑软件。 · *全平台*
- **[LosslessCut](https://mifi.no/losslesscut/)** · [源码](https://github.com/mifi/lossless-cut) · 🟡 可选付费 — 无损剪切视频 / 音频，不重编码所以极快。 · *全平台*
  - 💬 GitHub 版本完全免费；应用商店版本为付费安装方式。
- **[GIMP](https://www.gimp.org/)** · [源码](https://gitlab.gnome.org/GNOME/gimp) · 🟢 开源 — 图像处理与修图，Photoshop 的开源平替。 · *全平台*
- **[Krita](https://krita.org/)** · [源码](https://invent.kde.org/graphics/krita) · 🟢 开源 — 数位绘画，笔刷系统对画师非常友好。 · *全平台*
- **[Inkscape](https://inkscape.org/)** · [源码](https://gitlab.com/inkscape/inkscape) · 🟢 开源 — SVG 矢量图编辑。 · *全平台*
- **[Blender](https://www.blender.org/)** · [源码](https://projects.blender.org/blender/blender) · 🟢 开源 — 3D 建模、动画、渲染、甚至视频剪辑，全套免费。 · *全平台*
- **[ImageMagick](https://imagemagick.org/)** · [源码](https://github.com/ImageMagick/ImageMagick) · 🟢 开源 — 命令行图像批处理的瑞士军刀。 · *全平台*
- **[FFmpeg](https://ffmpeg.org/)** · [源码](https://github.com/FFmpeg/FFmpeg) · 🟢 开源 — 音视频编解码与处理的底层基石。 · *全平台*
- **[Audacity](https://www.audacityteam.org/)** · [源码](https://github.com/audacity/audacity) · 🟢 开源 — 多轨音频编辑与录音，免费无广告。 · *全平台*
  - 💬 新版首次启动会询问是否开启匿名使用统计，选否即可完全离线。
- **[MusicBrainz Picard](https://picard.musicbrainz.org/)** · [源码](https://github.com/metabrainz/picard) · 🟢 开源 — 用音频指纹批量整理音乐标签与封面。 · *全平台*
- **[Kodi](https://kodi.tv/)** · [源码](https://github.com/xbmc/xbmc) · 🟢 开源 — 开源家庭影音中心，本身不含任何广告或内容收费。 · *全平台*
- **[darktable](https://www.darktable.org/)** · [源码](https://github.com/darktable-org/darktable) · 🟢 开源 — RAW 显影与照片管理，Lightroom 的开源平替。 · *全平台*

## 💻 开发工具

> 编辑器、数据库、API 调试，都能不用登录、不用订阅。

- **[VSCodium](https://vscodium.com/)** · [源码](https://github.com/VSCodium/vscodium) · 🟢 开源 — VS Code 的开源构建，去掉微软遥测与品牌推广，扩展生态通用。 · *全平台*
- **[Git](https://git-scm.com/)** · [源码](https://github.com/git/git) · 🟢 开源 — 版本控制，无需多言。 · *全平台*
- **[Neovim](https://neovim.io/)** · [源码](https://github.com/neovim/neovim) · 🟢 开源 — 现代化 Vim，Lua 配置与 LSP 支持。 · *全平台*
- **[Helix](https://helix-editor.com/)** · [源码](https://github.com/helix-editor/helix) · 🟢 开源 — 开箱即用的 Rust 终端编辑器，内置 LSP / 树形语法高亮。 · *全平台*
- **[Windows Terminal](https://github.com/microsoft/terminal)** · 🟢 开源 — 多标签、GPU 渲染的现代终端。 · *Windows*
- **[PowerShell](https://github.com/PowerShell/PowerShell)** · 🟢 开源 — 跨平台的开源 shell 与脚本语言。 · *全平台*
- **[Starship](https://starship.rs/)** · [源码](https://github.com/starship/starship) · 🟢 开源 — 跨 shell 的极速提示符，显示分支、语言版本、耗时。 · *全平台*
- **[Atuin](https://atuin.sh/)** · [源码](https://github.com/atuinsh/atuin) · 🟢 开源 — 加密存储的 shell 历史，支持模糊搜索与自建同步。 · *Linux / macOS*
- **[DBeaver Community](https://dbeaver.io/)** · [源码](https://github.com/dbeaver/dbeaver) · 🟡 可选付费 — 通用数据库客户端，支持几十种数据库。 · *全平台*
  - 💬 Community 版功能完整且开源；Pro 版是额外的企业特性。
- **[Beekeeper Studio](https://www.beekeeperstudio.io/)** · [源码](https://github.com/beekeeper-studio/beekeeper-studio) · 🟡 可选付费 — 颜值高、上手快的 SQL 编辑器。 · *全平台*
  - 💬 社区版开源免费；付费版只加企业功能。
- **[DB Browser for SQLite](https://sqlitebrowser.org/)** · [源码](https://github.com/sqlitebrowser/sqlitebrowser) · 🟢 开源 — SQLite 可视化管理，轻量无账号。 · *全平台*
- **[Bruno](https://www.usebruno.com/)** · [源码](https://github.com/usebruno/bruno) · 🟢 开源 — 离线优先的 API 客户端，请求集合直接存成纯文本文件。 · *全平台*
- **[Hoppscotch](https://hoppscotch.io/)** · [源码](https://github.com/hoppscotch/hoppscotch) · 🟡 可选付费 — 开源 API 调试工具，网页可用也可自托管。 · *网页 / 自托管*
  - 💬 网页版与自建版免费完整；企业云是付费服务。
- **[Forgejo](https://forgejo.org/)** · [源码](https://codeberg.org/forgejo/forgejo) · 🟢 开源 — 社区自治的轻量 Git 托管服务，自建无限制。 · *自托管*
- **[Gitea](https://about.gitea.com/)** · [源码](https://github.com/go-gitea/gitea) · 🟢 开源 — 资源占用极低的 Git 托管服务。 · *自托管*

## 📱 Android / F-Droid

> 手机是广告重灾区，这一节优先选 F-Droid 上的开源应用。

- **[F-Droid](https://f-droid.org/)** · [源码](https://gitlab.com/fdroid/fdroidclient) · 🟢 开源 — 只收录开源应用的商店，天然过滤广告与内购。 · *Android*
- **[Droid-ify](https://github.com/Iamlooker/Droid-ify)** · 🟢 开源 — 更现代的 F-Droid 客户端，界面和速度都更好。 · *Android*
- **[Obtainium](https://github.com/ImranR98/Obtainium)** · 🟢 开源 — 直接从 GitHub / 官方源追踪 APK 更新，绕开应用商店。 · *Android*
- **[Fossify 套件](https://fossify.org/)** · [源码](https://github.com/FossifyOrg) · 🟢 开源 — 相册、文件、日历、通讯录、拨号、短信、键盘、音乐、笔记等一整套无广告基础应用。 · *Android*
  - 💬 Simple Mobile Tools 被出售后加入广告与订阅，社区分叉出了 Fossify；全套 App 甚至不申请联网权限。
- **[Organic Maps](https://organicmaps.app/)** · [源码](https://github.com/organicmaps/organicmaps) · 🟢 开源 — 基于 OpenStreetMap 的离线地图与导航，无广告、无追踪。 · *Android / iOS*
- **[OsmAnd~](https://osmand.net/)** · [源码](https://github.com/osmandapp/OsmAnd) · 🟡 可选付费 — 功能更全的离线地图，等高线、路线规划、POI 都很强。 · *Android / iOS*
  - 💬 F-Droid 上的 OsmAnd~ 版本功能完整免费；Play 商店版部分功能需订阅。
- **[Aegis Authenticator](https://getaegis.app/)** · [源码](https://github.com/beemdevelopment/Aegis) · 🟢 开源 — 开源 2FA，支持加密备份与导入导出。 · *Android*
- **[KeePassDX](https://www.keepassdx.com/)** · [源码](https://github.com/Kunzisoft/KeePassDX) · 🟢 开源 — 安卓上的本地密码库，与 KeePass 格式兼容。 · *Android*
- **[AntennaPod](https://antennapod.org/)** · [源码](https://github.com/AntennaPod/AntennaPod) · 🟢 开源 — 播客客户端，无广告、无账号、无推荐算法。 · *Android*
- **[NewPipe](https://newpipe.net/)** · [源码](https://github.com/TeamNewPipe/NewPipe) · 🟢 开源 — 轻量视频前端，无广告、支持后台播放与下载。 · *Android*
  - 💬 非官方客户端，接口变更后需等应用更新。
- **[Seal](https://github.com/JunkFood02/Seal)** · 🟢 开源 — 基于 yt-dlp 的安卓视频 / 音频下载工具。 · *Android*
- **[Markor](https://github.com/gsantner/markor)** · 🟢 开源 — 直接编辑本地 Markdown / todo.txt 文件的极简笔记。 · *Android*
- **[Tasks.org](https://tasks.org/)** · [源码](https://github.com/tasks/tasks) · 🟢 开源 — 开源待办与日历，支持 CalDAV / DavX5 同步。 · *Android*
- **[Thunderbird for Android（原 K-9 Mail）](https://github.com/thunderbird/thunderbird-android)** · 🟢 开源 — 开源邮件客户端，多账号、无广告。 · *Android*
- **[Termux](https://termux.dev/)** · [源码](https://github.com/termux/termux-app) · 🟢 开源 — 安卓上的 Linux 终端环境，无需 root。 · *Android*
- **[AdAway](https://app.adaway.org/)** · [源码](https://github.com/AdAway/AdAway) · 🟢 开源 — Hosts / VPN 模式的系统级广告拦截。 · *Android*
- **[RethinkDNS + Firewall](https://rethinkdns.com/)** · [源码](https://github.com/celzero/rethink-app) · 🟢 开源 — DNS 过滤 + 按应用断网，一次把广告和偷跑流量都管住。 · *Android*

## 🌍 在线服务 · 自建服务

> 不卖广告位、不逼登录；能自建的都给了自建选项。

- **[Wikipedia](https://www.wikipedia.org/)** · 🔵 免费闭源 — 无第三方广告的百科全书，内容可自由复用。 · *网页*
  - 💬 偶尔出现非商业募捐横幅，不是广告。
- **[Internet Archive](https://archive.org/)** · 🔵 免费闭源 — 网页时光机、公共领域图书 / 影像 / 软件存档。 · *网页*
- **[Project Gutenberg](https://www.gutenberg.org/)** · 🔵 免费闭源 — 公共领域电子书，无广告、无账号。 · *网页*
- **[OpenStreetMap](https://www.openstreetmap.org/)** · 🟢 开源 — 自由开放的地图数据，很多无广告地图应用都基于它。 · *网页 / 数据*
- **[SearXNG](https://searxng.org/)** · [源码](https://github.com/searxng/searxng) · 🟢 开源 — 开源元搜索引擎，聚合结果、不追踪、不插广告。 · *公共实例 / 自托管*
- **[Invidious](https://invidious.io/)** · [源码](https://github.com/iv-org/invidious) · 🟢 开源 — 视频平台的开源轻量前端，无广告、无追踪。 · *公共实例 / 自托管*
- **[PrivateBin](https://privatebin.info/)** · [源码](https://github.com/PrivateBin/PrivateBin) · 🟢 开源 — 端到端加密的临时文本 / 代码分享，服务器看不到内容。 · *公共实例 / 自托管*
- **[LibreTranslate](https://libretranslate.com/)** · [源码](https://github.com/LibreTranslate/LibreTranslate) · 🟡 可选付费 — 开源机器翻译，可完全自建。 · *网页 / 自托管*
  - 💬 自建实例免费无限制；官方公共 API 需付费 Key。
- **[CryptPad](https://cryptpad.org/)** · [源码](https://github.com/cryptpad/cryptpad) · 🟡 可选付费 — 端到端加密的在线文档、表格、白板协作。 · *网页 / 自托管*
  - 💬 匿名使用与自建免费；付费订阅只影响云端存储空间。
- **[Jitsi Meet](https://jitsi.org/jitsi-meet/)** · [源码](https://github.com/jitsi/jitsi-meet) · 🟢 开源 — 打开网页就能开的多人视频会议，无账号、无时长限制。 · *网页 / 自托管*
- **[Pi-hole](https://pi-hole.net/)** · [源码](https://github.com/pi-hole/pi-hole) · 🟢 开源 — 网络级 DNS 广告拦截，一台树莓派保护全屋设备。 · *自托管*
- **[AdGuard Home](https://adguard.com/en/adguard-home/overview.html)** · [源码](https://github.com/AdguardTeam/AdGuardHome) · 🟢 开源 — 另一款网络级 DNS 过滤，配置界面更友好。 · *自托管*
- **[Nextcloud](https://nextcloud.com/)** · [源码](https://github.com/nextcloud/server) · 🟢 开源 — 自建网盘 + 日历 + 联系人 + 文档协作。 · *自托管*
- **[Jellyfin](https://jellyfin.org/)** · [源码](https://github.com/jellyfin/jellyfin) · 🟢 开源 — 自建影音媒体库，无订阅、无广告、无遥测。 · *自托管*
- **[Immich](https://immich.app/)** · [源码](https://github.com/immich-app/immich) · 🟢 开源 — 自建照片备份与 AI 检索，Google Photos 的开源替代。 · *自托管*
- **[Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF)** · 🟡 可选付费 — 自建 PDF 工具箱：合并、拆分、压缩、OCR、转换全都有。 · *自托管*
  - 💬 v3.0 起为 open-core：手动 PDF 工具仍全部免费（免费版最多 5 用户）；批量自动化有每月额度，外部数据库 / SAML SSO / 审计日志属付费企业版。
- **[Codeberg](https://codeberg.org/)** · 🟢 开源 — 非营利运营的代码托管平台，无广告、无追踪。 · *网页*
- **[OpenAlternative](https://openalternative.co/)** · [源码](https://github.com/piotrkulpinski/openalternative) · 🟢 开源 — 按商业软件名查开源平替的目录站。 · *网页*
- **[Uptime Kuma](https://github.com/louislam/uptime-kuma)** · 🟢 开源 — 自建 uptime 监控与状态页，HTTP / TCP / 证书到期都能盯，无账号无广告。 · *自托管*
<!-- LIST:END -->

---

## ⚠️ 已移出 / 慎选

这些是最容易踩的坑，尤其是曾经很干净、后来变了的：

| 名称 | 情况 | 建议替代 |
| --- | --- | --- |
| **Simple Mobile Tools** | 2023 年底被出售给 ZipoApps，Play 版陆续加入广告与订阅，2024 年 11 月 F-Droid 归档了旧应用 | Fossify 套件（社区分叉，见 Android 章节） |
| **CCleaner 免费版** | 安装器捆绑推广，免费版频繁弹窗引导升级 | BleachBit |
| **µTorrent** | 免费版含广告与捆绑安装 | qBittorrent |
| **Photopea** | 网页版靠广告位变现，「免费」但有广告 | GIMP / Krita |
| **各类「高速下载器」/ 下载站** | 改包、捆绑、全家桶，按钮越大越危险 | 只进官网或 GitHub Releases |
| **7zip.com / 7-zip.cn** | 仿冒 7-Zip 官网，下载物可能被改动 | 7-zip.org |
| **Firefox 赞助快捷方式 / Brave Rewards** | 默认开启的推广内容，非第三方广告且可关闭 | 设置里关掉；想要彻底干净用 LibreWolf |
| **DaVinci Resolve 免费版** | 大部分功能可用，但部分能力需付费 Studio 授权 | Shotcut / Kdenlive |
| **Audacity 新版首次启动** | 会询问是否开启匿名使用统计 | 选「否」即可完全离线，详见正文备注 |
| **Anki iOS / Obsidian 商用** | 特定平台或特定用途收费 | 见正文对应条目的 💬 备注 |
| **Stirling-PDF v3.0+** | 2026 年 9 月转为 open-core：核心 PDF 工具仍免费，但免费版限 5 用户、批量自动化有月度额度，专有模块需商业授权 | 只用手动 PDF 工具可继续自建，边界见正文 💬 备注 |

## 下载安全：三条就够了

1. **搜「软件名 + 官网」或「软件名 + github」**，不要只搜软件名 —— 前排常年是投了广告的下载站和高仿官网。
2. **只认官方仓库 → Releases**，下载后能校验哈希就校验；网盘转手、QQ 群「打包版」一律不碰。
3. **装完看行为**：要一堆无关权限、开机弹窗、强制联网上传、塞了别的软件 —— 中一条就卸载。

## 参与贡献

推荐一个新工具，最快的方式是[提一个 Issue](https://github.com/ai-noraxu/awesome-free-no-ads/issues/new/choose)；想直接改清单：

1. 只编辑 `data/tools.json`（唯一数据源），按现有字段补一条；
2. 运行 `node scripts/build.mjs` 重新生成 README 的清单区块；
3. 提交 PR，勾选 `CONTRIBUTING.md` 里的核对项。

清单区块由脚本生成，**请不要直接手改 README 的清单部分**，否则下次生成会被覆盖。

**自动维护**：每周一自动跑一次增量更新 —— 发现并核实新的合格工具、复核已收录条目是否变卦（被收购 / 加广告 / 改订阅制）、修复失效链接，然后重新生成 README 并推送；GitHub Actions 另有每月一次链接巡检与每次提交的一致性校验。所有变更都留在 git 历史里，可随时回溯或回滚。

## 数据与许可

- 结构化数据在 [`data/tools.json`](data/tools.json)，可直接拿去生成网站、检索或做统计。
- 本清单内容以 [CC0 1.0](LICENSE) 释出，公共领域，随意复制改编，不需要署名。
- 各软件本身的权利归各自作者所有，本清单不代表任何背书。
