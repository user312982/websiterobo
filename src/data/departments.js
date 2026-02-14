import ketuaImg from '../assets/image/board/ketua.webp';
import wakilImg from '../assets/image/board/wakil.webp';
import sekretarisImg from '../assets/image/board/sekretaris.webp';
import bendaharaImg from '../assets/image/board/bendahara.webp';

import yohanMecha from '../assets/image/mecha/yohan_mecha.webp';
import rafiMecha from '../assets/image/mecha/rafi_mecha.webp';
import aliMecha from '../assets/image/mecha/ali_mecha.webp';
import akhtarMecha from '../assets/image/mecha/akhtar_mecha.webp';
import kemalMecha from '../assets/image/mecha/kemal_mecha.webp';
import adiMecha from '../assets/image/mecha/adi_mecha.webp';
import aturMecha from '../assets/image/mecha/atur_mecha.webp';
import daffaMecha from '../assets/image/mecha/daffa_mecha.webp';

import dichaProg from '../assets/image/programming/dicha_prog.webp';
import iqbalProg from '../assets/image/programming/iqbal_prog.webp';
import celloProg from '../assets/image/programming/cello_prog.webp';
import razitProg from '../assets/image/programming/razit_prog.webp';
import andiProg from '../assets/image/programming/andi_prog.webp';
import ananthaProg from '../assets/image/programming/anantha_prog.webp';
import hasbiProg from '../assets/image/programming/hasbi_prog.webp';
import nabilProg from '../assets/image/programming/nabil_prog.webp';
import rhadytProg from '../assets/image/programming/rhadyt_prog.webp';

import rakhaCb from '../assets/image/cb/rakha_cb.webp';
import caturCb from '../assets/image/cb/catur_cb.webp';
import febieyolaCb from '../assets/image/cb/febieyola_cb.webp';
import lionCb from '../assets/image/cb/lion_cb.webp';
import alyaCb from '../assets/image/cb/alya_cb.webp';
import daffaCb from '../assets/image/cb/daffa_cb.webp';
import anisaCb from '../assets/image/cb/anisa_cb.webp';
import arinCb from '../assets/image/cb/arin_cb.webp';

import aditRnd from '../assets/image/rnd/adit_rnd.webp';
import asysyifaRnd from '../assets/image/rnd/asysyifa_rnd.webp';
import ihsanRnd from '../assets/image/rnd/ihsan_rnd.webp';
import nastainRnd from '../assets/image/rnd/nastain_rnd.webp';

export const depts = [
    {
        id: '01',
        name: 'Executive Board',
        desc: 'Managing daily operations, organizational strategy, and external relations.',
        themeColor: '#B45309', // Dark Bronze
        accentColor: '#FDE68A',
        crestIcon: 'tie',
        stripeStyle: 'double',
        stats: { projects: 0, members: 4, level: 'Command' },
        members: [
            { name: 'Marsa Naufal', role: 'Ketua Umum', image: ketuaImg },
            { name: 'Akbar Juniarta Shaleh', role: 'Wakil Ketua', image: wakilImg },
            { name: 'Rahmahdaniah Fitri', role: 'Sekretaris', image: sekretarisImg },
            { name: 'Shopy Farras Khairunnisa', role: 'Bendahara', image: bendaharaImg },
        ]
    },
    {
        id: '02',
        name: 'Mechatronics',
        desc: 'Focus on mechanical systems, electronics, and control engineering for advanced robotics.',
        themeColor: '#9F1239', // Deep Crimson
        accentColor: '#FECDD3',
        crestIcon: 'gear',
        stripeStyle: 'diagonal',
        stats: { projects: 0, members: 11, level: 'Artisan' },
        members: [
            { name: 'Muhammad Ridhol Mahbubi', role: 'Ketua Departemen', image: yohanMecha },
            { name: 'Rafi Muhammad Akbar', role: 'Staf Ahli', image: rafiMecha },
            { name: 'Ali Rizqi Nurpebrianto', role: 'Staf Ahli', image: aliMecha },
            { name: 'Keyshal Naufal Juliantila', role: 'Staf Ahli', image: null },
            { name: 'Alev Putra Alfandy', role: 'Staf Ahli', image: null },
            { name: 'Ahmad Akhtar Chairullah Wahyudi', role: 'Staf Ahli', image: akhtarMecha },
            { name: 'Kemal Ekta Ramadhani', role: 'Staf', image: kemalMecha },
            { name: 'Adi Pratama Lauwoto Lau', role: 'Staf', image: adiMecha },
            { name: 'Atur Gideon Simanjuntak', role: 'Staf', image: aturMecha },
            { name: 'Rafqi Sadam Wijaya', role: 'Staf', image: null },
            { name: 'Muhammad Daffa Naufal', role: 'Staf', image: daffaMecha },
        ]
    },
    {
        id: '03',
        name: 'Programming',
        desc: 'Developing AI algorithms, computer vision systems, and autonomous navigation logic.',
        themeColor: '#1E3A8A', // Deep Navy
        accentColor: '#BFDBFE',
        crestIcon: 'keycap',
        stripeStyle: 'vertical',
        stats: { projects: 0, members: 9, level: 'Thinker' },
        members: [
            { name: 'Dicha Wijaya Kusuma', role: 'Ketua Departemen', image: dichaProg },
            { name: 'Muhammad Iqbal Alexandre Saputra', role: 'Staf Ahli', image: iqbalProg },
            { name: 'Rayhan Marcello Ananda Purnomo', role: 'Staf Ahli', image: celloProg },
            { name: 'Hadri Harazit', role: 'Staf Ahli', image: razitProg },
            { name: 'Andi Azzumar Azra', role: 'Staf', image: andiProg },
            { name: 'Anantha Lokantara', role: 'Staf', image: ananthaProg },
            { name: 'Hasbi Ma\'arif', role: 'Staf', image: hasbiProg },
            { name: 'Muhammad Nabil Ihyalfikra', role: 'Staf', image: nabilProg },
            { name: 'Rhadyt Insan Faryabie', role: 'Staf', image: rhadytProg },
        ]
    },
    {
        id: '04',
        name: 'Creative Branding',
        desc: 'Ensuring consistent visual identity and producing high-quality media assets.',
        themeColor: '#581C87', // Deep Violet
        accentColor: '#E9D5FF',
        crestIcon: 'palette',
        stripeStyle: 'cross',
        stats: { projects: 0, members: 8, level: 'Creativity' },
        members: [
            { name: 'Arinda Zhafira Salsabilla', role: 'Ketua Departemen', image: arinCb },
            { name: 'Fabieyola Leq Bit', role: 'Staf Ahli', image: febieyolaCb },
            { name: 'Norbertino Eurakha', role: 'Staf Ahli', image: rakhaCb },
            { name: 'Catur Putra Romadhan', role: 'Staf Ahli', image: caturCb },
            { name: 'Rianto Uskalion Stiono', role: 'Staf', image: lionCb },
            { name: 'Zahwa Aliya Yasmin', role: 'Staf', image: alyaCb },
            { name: 'Daffa Rifli Maulana', role: 'Staf', image: daffaCb },
            { name: 'Anisa Salsabila Zuandini', role: 'Staf', image: anisaCb },
        ]
    },
    {
        id: '05',
        name: 'Relationship & Dev',
        desc: 'Building strategic partnerships and fostering community growth.',
        themeColor: '#064E3B', // Deep Forest Green
        accentColor: '#A7F3D0',
        crestIcon: 'globe',
        stripeStyle: 'horizontal',
        stats: { projects: 0, members: 9, level: 'Diplomat' },
        members: [
            { name: 'Najwa Nurazizah Maulia Hafidz', role: 'Ketua Departemen', image: null },
            { name: 'Aditya Raharja', role: 'Staf Ahli', image: aditRnd },
            { name: 'Muhammad Ihsan', role: 'Staf Ahli', image: ihsanRnd },
            { name: 'Adi Setiawan Noor Cahyadi Putra', role: 'Staf', image: null },
            { name: 'Meissy Ratna Artanty', role: 'Staf', image: null },
            { name: 'Syahri Nasta\'in', role: 'Staf', image: nastainRnd },
            { name: 'Syahwa Novianti Eka Nugraha', role: 'Staf', image: null },
            { name: 'Asysyifa Arinilhaq Modjo', role: 'Staf', image: asysyifaRnd },
            { name: 'Aldrich Christian Sipayung', role: 'Staf', image: null },
        ]
    },
];
