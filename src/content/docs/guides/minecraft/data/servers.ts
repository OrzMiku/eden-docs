import type { MinecraftServerType } from "../types";

export const serverList: MinecraftServerType[] = [
    {
        name: '埃斯特庄园一服',
        description: '原版生电服务器！',
        tags: ['生电', '原版', '数据包驱动'],
        address: 'mc1.loveyouforever.cc',
        version: '1.21.1',
        // clientDownloadLink: 'https://minecraft.net',
    }, {
        name: '埃斯特庄园二服',
        description: '一个虚无三模组服务器！',
        tags: ['模组', '虚无三', '枪械'],
        address: 'mc2.loveyouforever.cc',
        version: '1.16.5',
        clientDownloadLink: '#',
    }, {
        name: '埃斯特庄园三服',
        description: '内有工作场合不宜内容！谨慎入内！',
        tags: ['NSFW', '珍妮', '科技'],
        address: 'mc3.loveyouforever.cc',
        version: '1.12.2',
        clientDownloadLink: '#',
    },

];

export default serverList;