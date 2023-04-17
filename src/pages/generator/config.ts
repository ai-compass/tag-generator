export interface ConfigItem {
  name: string
  times: number
  list: ConfigItemList[]
}

export interface ItemList {
  readonly chinese: string
  readonly english: string
  selected?: boolean
}

export interface ConfigItemList {
  type: string
  list: ItemList[]
}

const configList: ConfigItem[] = [
  {
    name: '人物',
    times: 0,
    list: [
      {
        type: '人物',
        list: [
          {
            chinese: '女性',
            english: 'female',
          },
          {
            chinese: '男性',
            english: 'male',
          },
          {
            chinese: '女孩',
            english: 'girl',
          },
          {
            chinese: '男孩',
            english: 'boy',
          },
          {
            chinese: '正太',
            english: 'shota',
          },
          {
            chinese: '萝莉',
            english: 'loli',
          },
          {
            chinese: '美少女',
            english: 'bishoujo',
          },
          {
            chinese: '美少男',
            english: 'bishounen',
          },
          {
            chinese: '辣妹',
            english: 'gyaru',
          },
          {
            chinese: '大小姐',
            english: 'ojousama',
          },
          {
            chinese: 'Q版人物',
            english: 'Q chibi',
          },
          {
            chinese: '胖子',
            english: 'fat man',
          },
          {
            chinese: '伪娘',
            english: 'crossdressing',
          },
          {
            chinese: '天使',
            english: 'angel',
          },
          {
            chinese: '魔鬼',
            english: 'devil',
          },
          {
            chinese: '迷你女孩',
            english: 'minigirl',
          },
          {
            chinese: '非人',
            english: 'no_humans',
          },
          {
            chinese: '雌小鬼',
            english: 'mesugaki',
          },
          {
            chinese: '怪物',
            english: 'monster',
          },
          {
            chinese: '老人',
            english: 'elder',
          },
          {
            chinese: '富豪',
            english: 'rich man',
          },
          {
            chinese: '乞丐',
            english: 'beggar',
          },
          {
            chinese: '巨人',
            english: 'titans',
          },
          {
            chinese: '侏儒',
            english: 'dwarf',
          },
          {
            chinese: '小丑',
            english: 'clown',
          },
          {
            chinese: '奴隶',
            english: 'slave',
          },
          {
            chinese: '雪女',
            english: 'yukiwo',
          },
          {
            chinese: '酋长',
            english: 'sheik',
          },
          {
            chinese: '女王',
            english: 'queen',
          },
          {
            chinese: '女神',
            english: 'goddess',
          },
          {
            chinese: '公主',
            english: 'princess',
          },
          {
            chinese: '王子',
            english: 'prince',
          },
          {
            chinese: '新娘',
            english: 'bride',
          },
          {
            chinese: '新郎',
            english: 'bridegroom',
          },
          {
            chinese: '肌肉男',
            english: 'muscle man',
          },
          {
            chinese: '偶像',
            english: 'idol',
          },
          {
            chinese: '兔女郎',
            english: 'bunny girl',
          },
          {
            chinese: '怪物女孩',
            english: 'monster girl',
          },
          {
            chinese: '狐狸女孩',
            english: 'fox girl',
          },
          {
            chinese: '狼女孩',
            english: 'wolf girl',
          },
          {
            chinese: '猫女孩',
            english: 'cat girl',
          },
          {
            chinese: '木偶',
            english: 'marionette',
          },
          {
            chinese: '黏土手办',
            english: 'nendoroid',
          },
        ],
      },
      {
        type: '数量',
        list: [
          {
            chinese: '单人',
            english: 'solo',
          },
          {
            chinese: '多个女孩',
            english: 'multiple girls',
          },
          {
            chinese: '双胞胎',
            english: 'twins',
          },
          {
            chinese: '三胞胎',
            english: 'triplets',
          },
          {
            chinese: '兄弟姐妹',
            english: 'brother and sister',
          },
        ],
      },
      {
        type: '视角',
        list: [
          {
            chinese: '第一人称视角',
            english: 'first-person view',
          },
          {
            chinese: '主观视角',
            english: 'pov',
          },
          {
            chinese: '三视图',
            english: 'three sided view',
          },
          {
            chinese: '多视图',
            english: 'multiple views',
          },
          {
            chinese: '插入画面',
            english: 'cut-in',
          },
          {
            chinese: '前景模糊',
            english: 'blurry foreground',
          },
          {
            chinese: '特写镜头',
            english: 'close-up',
          },
          {
            chinese: '七分身镜头',
            english: 'cowboy shot',
          },
          {
            chinese: '德式倾斜镜头',
            english: 'dutch angle',
          },
          {
            chinese: '鱼眼镜头',
            english: 'fisheye',
          },
          {
            chinese: '线影法(纹理)',
            english: 'hatching (texture)',
          },
          {
            chinese: '远景透视画法',
            english: 'vanishing point',
          },
          {
            chinese: '广角镜头',
            english: 'wide shot',
          },
          {
            chinese: '俯视镜头',
            english: 'from above',
          },
          {
            chinese: '背影',
            english: 'from behind',
          },
          {
            chinese: '仰视镜头',
            english: 'from below',
          },
          {
            chinese: '室外看向室内(的镜头)',
            english: 'from outside',
          },
          {
            chinese: '角色的侧面',
            english: 'from side',
          },
          {
            chinese: '大气距离感',
            english: 'atmospheric perspective',
          },
          {
            chinese: '全景',
            english: 'panorama',
          },
          {
            chinese: '透视画法',
            english: 'perspective',
          },
          {
            chinese: '经过旋转的',
            english: 'rotated',
          },
          {
            chinese: '横向显示的',
            english: 'sideways',
          },
          {
            chinese: '倒挂的',
            english: 'upside-down',
          },
        ],
      },
    ],
  },
  {
    name: '角色',
    times: 0,
    list: [
      {
        type: '职业',
        list: [
          {
            chinese: '救生员',
            english: 'lifeguard',
          },
          {
            chinese: '拳击手',
            english: 'boxer',
          },
          {
            chinese: '科学家',
            english: 'scientist',
          },
          {
            chinese: '运动员',
            english: 'athletes',
          },
          {
            chinese: '职场女性',
            english: 'office lady',
          },
          {
            chinese: '和尚',
            english: 'monk',
          },
          {
            chinese: '杂技演员',
            english: 'crobat',
          },
          {
            chinese: '修女',
            english: 'nun',
          },
          {
            chinese: '护士',
            english: 'nurse',
          },
          {
            chinese: '空姐',
            english: 'stewardess',
          },
          {
            chinese: '学生',
            english: 'student',
          },
          {
            chinese: '女服务员',
            english: 'waitress',
          },
          {
            chinese: '老师',
            english: 'teacher',
          },
          {
            chinese: '赛车手',
            english: 'racer',
          },
          {
            chinese: '警察',
            english: 'police',
          },
          {
            chinese: '士兵',
            english: 'soldier',
          },
          {
            chinese: '啦啦队',
            english: 'cheerleader',
          },
          {
            chinese: '男演员',
            english: 'actor',
          },
          {
            chinese: '女演员',
            english: 'actress',
          },
          {
            chinese: '间谍',
            english: 'spy',
          },
          {
            chinese: '特工',
            english: 'agent',
          },
          {
            chinese: '刺客',
            english: 'assassin',
          },
          {
            chinese: '诗人',
            english: 'poet',
          },
          {
            chinese: '日本武士',
            english: 'samurai',
          },
          {
            chinese: '舞女',
            english: 'dancing girl',
          },
          {
            chinese: '摩托车手',
            english: 'motorcyclist',
          },
          {
            chinese: '黑客',
            english: 'hacker',
          },
          {
            chinese: '魔术师',
            english: 'magician',
          },
          {
            chinese: '侦探',
            english: 'detective',
          },
          {
            chinese: '人偶',
            english: 'doll',
          },
          {
            chinese: '女仆',
            english: 'maid',
          },
          {
            chinese: '飞行员',
            english: 'pilot',
          },
          {
            chinese: '潜水员',
            english: 'diver',
          },
          {
            chinese: '酒吧审查员',
            english: 'bar censor',
          },
          {
            chinese: '传教士',
            english: 'missionary',
          },
          {
            chinese: '消防员',
            english: 'firefighter',
          },
          {
            chinese: '守门员',
            english: 'goalkeeper',
          },
          {
            chinese: '厨师',
            english: 'chef',
          },
          {
            chinese: '宇航员',
            english: 'astronaut',
          },
          {
            chinese: '收银员',
            english: 'cashier',
          },
          {
            chinese: '邮递员',
            english: 'mailman',
          },
          {
            chinese: '咖啡师',
            english: 'barista',
          },
          {
            chinese: '隐士',
            english: 'the hermit',
          },
          {
            chinese: '牧羊人',
            english: 'makihitsuji',
          },
        ],
      },
      {
        type: '动漫',
        list: [
          {
            chinese: '宝可梦',
            english: 'pokemon',
          },
          {
            chinese: '泰迪熊',
            english: 'teddy bear',
          },
          {
            chinese: '马里奥',
            english: 'mario',
          },
          {
            chinese: '皮卡丘',
            english: 'pikachu',
          },
          {
            chinese: '新世纪福音战士',
            english: 'neon genesis evangelion',
          },
          {
            chinese: '初音未来',
            english: 'hatsune miku',
          },
          {
            chinese: '哈利波特',
            english: 'harry potter',
          },
          {
            chinese: '哆啦梦',
            english: 'A doraemon',
          },
          {
            chinese: '圣斗士星矢',
            english: 'saint seiya',
          },
          {
            chinese: '五条悟',
            english: 'gojou satoru',
          },
          {
            chinese: '复仇者联盟',
            english: 'avengers',
          },
          {
            chinese: '神奇女侠',
            english: 'mazinger',
          },
          {
            chinese: '美国队长',
            english: 'captain america',
          },
          {
            chinese: '蜡笔小新',
            english: 'crayon shin-chan',
          },
          {
            chinese: '灌篮高手',
            english: 'slam dunk',
          },
          {
            chinese: '孙悟空',
            english: 'sun wukong',
          },
          {
            chinese: '女巫',
            english: 'witch',
          },
          {
            chinese: '忍者',
            english: 'ninja',
          },
          {
            chinese: '吸血鬼',
            english: 'vampire',
          },
          {
            chinese: '骑士',
            english: 'knight',
          },
          {
            chinese: '魔法少女',
            english: 'magical_girl',
          },
          {
            chinese: '半兽人',
            english: 'orc',
          },
          {
            chinese: '德鲁伊',
            english: 'druid',
          },
          {
            chinese: '妖精',
            english: 'elf',
          },
          {
            chinese: '小精灵',
            english: 'fairy',
          },
          {
            chinese: '兽人',
            english: 'furry',
          },
          {
            chinese: '美人鱼',
            english: 'mermaid',
          },
          {
            chinese: '假面骑士',
            english: 'kamen rider',
          },
          {
            chinese: '魔导师',
            english: 'magister',
          },
          {
            chinese: '蜘蛛侠',
            english: 'spider-man',
          },
          {
            chinese: '圣诞老人',
            english: 'santa alter',
          },
        ],
      },
    ],
  },
  {
    name: '五官',
    times: 0,
    list: [
      {
        type: '眉毛',
        list: [
          {
            chinese: '浓眉',
            english: 'thick eyebrows',
          },
          {
            chinese: '眉毛翘起',
            english: 'cocked eyebrow',
          },
          {
            chinese: '短眉毛',
            english: 'short eyebrows',
          },
          {
            chinese: 'V 字眉',
            english: 'v-shaped eyebrows',
          },
        ],
      },
      {
        type: '眼睛',
        list: [
          {
            chinese: '空洞眼睛',
            english: 'empty eyes',
          },
          {
            chinese: '睁大眼睛',
            english: 'wide eyes',
          },
          {
            chinese: '闭上一只眼',
            english: 'one eye closed',
          },
          {
            chinese: '半闭眼睛',
            english: 'half-closed eyes',
          },
          {
            chinese: '渐变眼',
            english: 'gradient_eyes',
          },
          {
            chinese: '水汪汪大眼',
            english: 'aqua eyes',
          },
          {
            chinese: '翻白眼',
            english: 'rolling eyes',
          },
          {
            chinese: '斗鸡眼',
            english: 'cross-eyed',
          },
          {
            chinese: '猫眼',
            english: 'slit pupils',
          },
          {
            chinese: '布满血丝的眼睛',
            english: 'bloodshot eyes',
          },
          {
            chinese: '发光眼睛',
            english: 'glowing eyes',
          },
          {
            chinese: '吊眼角',
            english: 'tsurime',
          },
          {
            chinese: '垂眼角',
            english: 'tareme',
          },
          {
            chinese: '恶魔眼',
            english: 'devil eyes',
          },
          {
            chinese: '收缩的瞳孔',
            english: 'constricted pupils',
          },
          {
            chinese: '魔瞳',
            english: 'devil pupils',
          },
          {
            chinese: '蛇瞳',
            english: 'snake pupils',
          },
          {
            chinese: '闪闪发光瞳',
            english: 'pupils sparkling',
          },
          {
            chinese: '花形瞳',
            english: 'flower-shaped pupils',
          },
          {
            chinese: '爱心瞳',
            english: 'heart-shaped pupils',
          },
          {
            chinese: '异色瞳',
            english: 'heterochromia',
          },
          {
            chinese: '美瞳',
            english: 'color contact lenses',
          },
          {
            chinese: '长睫毛',
            english: 'longeyelashes',
          },
          {
            chinese: '彩色睫毛',
            english: 'colored eyelashes',
          },
          {
            chinese: '眼下痣',
            english: 'mole under eye',
          },
        ],
      },
      {
        type: '嘴巴',
        list: [
          {
            chinese: '栗子嘴',
            english: 'chestnut mouth',
          },
          {
            chinese: '厚嘴唇',
            english: 'thick lips',
          },
          {
            chinese: '嘴唇浮肿',
            english: 'puffy lips',
          },
          {
            chinese: '口红',
            english: 'lipstick',
          },
          {
            chinese: '心形嘴',
            english: 'heart-shaped mouth',
          },
          {
            chinese: '嘟嘴',
            english: 'pout',
          },
          {
            chinese: '张嘴',
            english: 'open mouth',
          },
          {
            chinese: '闭嘴',
            english: 'closed mouth',
          },
          {
            chinese: '猫咪嘴',
            english: '：3',
          },
          {
            chinese: '鲨鱼嘴',
            english: 'shark mouth',
          },
          {
            chinese: '吐舌头',
            english: ':p',
          },
          {
            chinese: '分开嘴唇',
            english: 'parted lips',
          },
          {
            chinese: '嘴下痣',
            english: 'mole under mouth',
          },
        ],
      },
      {
        type: '耳朵',
        list: [
          {
            chinese: '动物耳朵',
            english: 'fake animal ears',
          },
          {
            chinese: '猫耳朵',
            english: 'cat ears',
          },
          {
            chinese: '狗耳朵',
            english: 'dog ears',
          },
          {
            chinese: '狐狸耳朵',
            english: 'fox ears',
          },
          {
            chinese: '兔子耳朵',
            english: 'bunny ears',
          },
          {
            chinese: '熊耳朵',
            english: 'bear ears',
          },
        ],
      },
      {
        type: '胡子&牙',
        list: [
          {
            chinese: '胡须',
            english: 'beard',
          },
          {
            chinese: '小胡子',
            english: 'mustache',
          },
          {
            chinese: '山羊胡',
            english: 'goatee',
          },
          {
            chinese: '长鬓角',
            english: 'long sideburns',
          },
          {
            chinese: '尖牙',
            english: 'fangs',
          },
          {
            chinese: '虎牙',
            english: 'canine teeth',
          },
          {
            chinese: '咬紧牙关',
            english: 'clenched teeth',
          },
        ],
      },
    ],
  },
  {
    name: '表情',
    times: 0,
    list: [
      {
        type: '表情',
        list: [
          {
            chinese: '无表情',
            english: 'expressionless',
          },
          {
            chinese: '脸色苍白',
            english: 'turn pale',
          },
          {
            chinese: '脸红',
            english: '2D blush stickers',
          },
          {
            chinese: '脸红',
            english: 'blush',
          },
          {
            chinese: '两眼发直',
            english: 'blank stare',
          },
          {
            chinese: '青筋凸起',
            english: 'anger vein',
          },
          {
            chinese: '尴尬',
            english: 'embarrassed',
          },
          {
            chinese: '傲慢',
            english: 'hubrael',
          },
          {
            chinese: '郁闷',
            english: 'depressed',
          },
          {
            chinese: '畏缩',
            english: 'wince',
          },
          {
            chinese: '烦恼',
            english: 'kilesha',
          },
          {
            chinese: '阴暗脸',
            english: 'shaded face',
          },
          {
            chinese: '疼痛',
            english: 'pain',
          },
          {
            chinese: '尖叫',
            english: 'screaming',
          },
          {
            chinese: '叹息',
            english: 'sigh',
          },
          {
            chinese: '紧张',
            english: 'nervous',
          },
          {
            chinese: '困惑',
            english: 'confused',
          },
          {
            chinese: '害怕',
            english: 'scared',
          },
          {
            chinese: '喝醉',
            english: 'drunk',
          },
          {
            chinese: '哭',
            english: 'tears',
          },
          {
            chinese: '悲伤',
            english: 'sad',
          },
          {
            chinese: '生气',
            english: 'angry',
          },
          {
            chinese: '害羞',
            english: 'nose blush',
          },
          {
            chinese: '严肃',
            english: 'serious',
          },
          {
            chinese: '鄙夷',
            english: 'jitome',
          },
          {
            chinese: '疯狂',
            english: 'crazy',
          },
          {
            chinese: '黑化',
            english: 'dark_persona',
          },
          {
            chinese: '得意',
            english: 'smug',
          },
          {
            chinese: '思考中',
            english: 'thinking',
          },
          {
            chinese: '扬眉',
            english: 'raised eyebrow',
          },
          {
            chinese: '轻皱眉',
            english: 'light frown',
          },
          {
            chinese: '皱眉',
            english: 'frown',
          },
          {
            chinese: '调皮脸',
            english: 'naughty face',
          },
          {
            chinese: '做鬼脸',
            english: 'eyeid pull',
          },
          {
            chinese: '流鼻血',
            english: 'nosebleed',
          },
          {
            chinese: '困',
            english: 'sleepy',
          },
          {
            chinese: '眯眼',
            english: 'zzz',
          },
          {
            chinese: '流口水',
            english: 'drooling',
          },
        ],
      },
      {
        type: '笑容',
        list: [
          {
            chinese: '微笑',
            english: 'light smile',
          },
          {
            chinese: '假笑',
            english: 'false smile',
          },
          {
            chinese: '挑逗笑容',
            english: 'seductive smile',
          },
          {
            chinese: '疯狂笑容',
            english: 'crazy smile',
          },
          {
            chinese: '邪恶笑容',
            english: 'evil smile',
          },
          {
            chinese: '单侧嘴角上扬',
            english: 'smirk',
          },
          {
            chinese: '诱人笑容',
            english: 'seductive smile',
          },
          {
            chinese: '露齿笑',
            english: 'grin',
          },
          {
            chinese: '大笑',
            english: 'laughing',
          },
          {
            chinese: '杯型笑脸',
            english: ':d',
          },
        ],
      },
    ],
  },
  {
    name: '头发',
    times: 0,
    list: [
      {
        type: '长度',
        list: [
          {
            chinese: '短发',
            english: 'short hair',
          },
          {
            chinese: '中发',
            english: 'medium hair',
          },
          {
            chinese: '长发',
            english: 'long hair',
          },
          {
            chinese: '头发过肩',
            english: 'hair over shoulder',
          },
        ],
      },
      {
        type: '颜色',
        list: [
          {
            chinese: '白发',
            english: 'white hair',
          },
          {
            chinese: '金发',
            english: 'blonde hair',
          },
          {
            chinese: '银发',
            english: 'silver hair',
          },
          {
            chinese: '灰发',
            english: 'grey hair',
          },
          {
            chinese: '棕发',
            english: 'brown hair',
          },
          {
            chinese: '黑发',
            english: 'black hair',
          },
          {
            chinese: '紫发',
            english: 'purple hair',
          },
          {
            chinese: '红发',
            english: 'red hair',
          },
          {
            chinese: '蓝发',
            english: 'blue hair',
          },
          {
            chinese: '绿发',
            english: 'green hair',
          },
          {
            chinese: '粉发',
            english: 'pink hair',
          },
          {
            chinese: '橙发',
            english: 'orange hair',
          },
          {
            chinese: '挑染',
            english: 'streaked hair',
          },
          {
            chinese: '彩发',
            english: 'multicolored hair',
          },
          {
            chinese: '彩虹发',
            english: 'rainbow-like hair',
          },
        ],
      },
      {
        type: '刘海',
        list: [
          {
            chinese: '刘海',
            english: 'bangs',
          },
          {
            chinese: '交叉刘海',
            english: 'crossed bang',
          },
          {
            chinese: '眉间刘海',
            english: 'hair between eye',
          },
          {
            chinese: '齐刘海',
            english: 'blunt bangs',
          },
          {
            chinese: '斜刘海',
            english: 'diagonal bangs',
          },
          {
            chinese: '不对称刘海',
            english: 'asymmetrical bangs',
          },
          {
            chinese: '编织刘海',
            english: 'braided bangs',
          },
        ],
      },
      {
        type: '辫子',
        list: [
          {
            chinese: '短马尾',
            english: 'short ponytail',
          },
          {
            chinese: '侧马尾辫',
            english: 'side ponytail',
          },
          {
            chinese: '前马尾辫',
            english: 'front ponytail',
          },
          {
            chinese: '分裂马尾辫',
            english: 'split ponytail',
          },
          {
            chinese: '低马尾辩',
            english: 'low twintails',
          },
          {
            chinese: '短马尾辫',
            english: 'short twintails',
          },
          {
            chinese: '侧边辫子',
            english: 'side braid',
          },
          {
            chinese: '辫子',
            english: 'braid',
          },
          {
            chinese: '双辫子',
            english: 'twin braids',
          },
          {
            chinese: '马尾辫',
            english: 'ponytail',
          },
          {
            chinese: '编织马尾',
            english: 'braided ponytail',
          },
          {
            chinese: '法式辫',
            english: 'french braid',
          },
          {
            chinese: '麻花辫',
            english: 'twists',
          },
          {
            chinese: '高马尾',
            english: 'high ponytail',
          },
        ],
      },
      {
        type: '发型',
        list: [
          {
            chinese: '扎头发',
            english: 'tied hair',
          },
          {
            chinese: '单侧发髻',
            english: 'single side bun',
          },
          {
            chinese: '卷发',
            english: 'curly hair',
          },
          {
            chinese: '直发',
            english: 'straight hair',
          },
          {
            chinese: '波浪头',
            english: 'wavy hair',
          },
          {
            chinese: '波波头',
            english: 'bob hair',
          },
          {
            chinese: '侧分',
            english: 'slicked-back',
          },
          {
            chinese: '雷鬼头',
            english: 'Reggae hair',
          },
          {
            chinese: '蓬巴杜发型',
            english: 'pompadour',
          },
          {
            chinese: '莫西干头',
            english: 'Mohawk',
          },
          {
            chinese: '锅盖头',
            english: 'bowl cut',
          },
          {
            chinese: '呆毛',
            english: 'ahoge',
          },
          {
            chinese: '天线呆毛',
            english: 'antenna hair',
          },
          {
            chinese: '心形呆毛',
            english: 'heart ahoge',
          },
          {
            chinese: '公主卷',
            english: 'drill hair',
          },
          {
            chinese: '翼状发',
            english: 'hair wings',
          },
          {
            chinese: '蓬发',
            english: 'disheveled hair',
          },
          {
            chinese: '凌乱发',
            english: 'messy hair',
          },
          {
            chinese: '露颈盘发',
            english: 'chignon',
          },
          {
            chinese: '编织发髻',
            english: 'braided bun',
          },
          {
            chinese: '公主切',
            english: 'hime_cut',
          },
          {
            chinese: '妹妹切',
            english: 'bob cut',
          },
          {
            chinese: '刺猬头',
            english: 'spiked hair',
          },
          {
            chinese: '盘发',
            english: 'updo',
          },
          {
            chinese: '精灵短发',
            english: 'pixie cut',
          },
          {
            chinese: '长发绺',
            english: 'dreadlocks',
          },
          {
            chinese: '爆炸头',
            english: 'afro',
          },
          {
            chinese: '秃头',
            english: 'bald',
          },
          {
            chinese: '双丸子头',
            english: 'double bun',
          },
          {
            chinese: '美式寸头',
            english: 'buzz cut',
          },
          {
            chinese: '大体积蓬松头发',
            english: 'big hair',
          },
          {
            chinese: '闪亮的头发',
            english: 'shiny hair',
          },
          {
            chinese: '发光的头发',
            english: 'glowing hair',
          },
          {
            chinese: '眼睛间的头发',
            english: 'hair between eyes',
          },
          {
            chinese: '撩到耳后',
            english: 'hair behind ear',
          },
        ],
      },
    ],
  },
  {
    name: '装饰',
    times: 0,
    list: [
      {
        type: '发饰',
        list: [
          {
            chinese: '发带',
            english: 'hair ribbon',
          },
          {
            chinese: '头巾',
            english: 'head scarf',
          },
          {
            chinese: '动物头巾',
            english: 'animal hood',
          },
          {
            chinese: '蝴蝶结发饰',
            english: 'hair bow',
          },
          {
            chinese: '新月发饰',
            english: 'crescent hair ornament',
          },
          {
            chinese: '洛丽塔发饰',
            english: 'lolita hairband',
          },
          {
            chinese: '羽毛发饰',
            english: 'feather hair ornament',
          },
          {
            chinese: '头花',
            english: 'hair flower',
          },
          {
            chinese: '发髻',
            english: 'hair bun',
          },
          {
            chinese: '发夹',
            english: 'hairclip',
          },
          {
            chinese: '发箍',
            english: 'hair scrunchie',
          },
          {
            chinese: '发圈',
            english: 'hair rings',
          },
          {
            chinese: '发饰',
            english: 'hair ornament',
          },
          {
            chinese: '发棒',
            english: 'hair stick',
          },
          {
            chinese: '心形发饰',
            english: 'heart hair ornament',
          },
        ],
      },
      {
        type: '首饰',
        list: [
          {
            chinese: '手链',
            english: 'bracelet',
          },
          {
            chinese: '项圈',
            english: 'choker',
          },
          {
            chinese: '金属项圈',
            english: 'metal collar',
          },
          {
            chinese: '戒指',
            english: 'ring',
          },
          {
            chinese: '腕带',
            english: 'wristband',
          },
          {
            chinese: '吊坠',
            english: 'pendant',
          },
          {
            chinese: '胸针',
            english: 'brooch',
          },
          {
            chinese: '圈形耳环',
            english: 'hoop earrings',
          },
          {
            chinese: '手镯',
            english: 'bangle',
          },
          {
            chinese: '耳钉',
            english: 'stud earrings',
          },
          {
            chinese: '旭日形首饰',
            english: 'sunburst',
          },
          {
            chinese: '珍珠手链',
            english: 'pearl bracelet',
          },
          {
            chinese: '耳坠',
            english: 'drop earrings',
          },
          {
            chinese: '木偶戒指',
            english: 'puppet rings',
          },
          {
            chinese: '胸花',
            english: 'corsage',
          },
          {
            chinese: '蓝宝石胸针',
            english: 'sapphire brooch',
          },
          {
            chinese: '珠宝首饰',
            english: 'jewelry',
          },
          {
            chinese: '项链',
            english: 'necklace',
          },
        ],
      },
      {
        type: '装饰',
        list: [
          {
            chinese: '丝带',
            english: 'ribbon',
          },
          {
            chinese: '丝带饰边',
            english: 'ribbon trim',
          },
          {
            chinese: '蕾丝饰边',
            english: 'lace trim',
          },
          {
            chinese: '裙撑',
            english: 'skirt lift',
          },
          {
            chinese: '护手',
            english: 'gauntlets',
          },
          {
            chinese: '领巾',
            english: 'neckerchief',
          },
          {
            chinese: '红领巾',
            english: 'red neckerchief',
          },
          {
            chinese: '肩章',
            english: 'pauldrons',
          },
          {
            chinese: '臂带',
            english: 'arm strap',
          },
          {
            chinese: '臂镯',
            english: 'armlet',
          },
          {
            chinese: '细肩带',
            english: 'spaghetti strap',
          },
          {
            chinese: '般若面具',
            english: 'Prajna in mask',
          },
          {
            chinese: '面纱',
            english: 'veil',
          },
          {
            chinese: '新娘面纱',
            english: 'bridal veil',
          },
          {
            chinese: '皇冠',
            english: 'tiara',
          },
          {
            chinese: '迷你皇冠',
            english: 'mini crown',
          },
          {
            chinese: '耳罩',
            english: 'ear covers',
          },
          {
            chinese: '飞行员太阳镜',
            english: 'aviator sunglasses',
          },
          {
            chinese: '无边框眼镜',
            english: 'semi-rimless eyewear',
          },
          {
            chinese: '半无框眼镜',
            english: 'semi-rimless eyewear',
          },
          {
            chinese: '太阳镜',
            english: 'sunglasses',
          },
          {
            chinese: '风镜',
            english: 'goggles',
          },
          {
            chinese: '独眼眼罩',
            english: 'eyepatch',
          },
          {
            chinese: '黑色眼罩',
            english: 'black blindfold',
          },
          {
            chinese: '铁棘',
            english: 'metal thorns',
          },
          {
            chinese: '光环',
            english: 'halo',
          },
          {
            chinese: '口罩',
            english: 'mouth mask',
          },
          {
            chinese: '创口贴',
            english: 'bandaid hair ornament',
          },
          {
            chinese: '指甲油',
            english: 'nail polish',
          },
          {
            chinese: '玩偶关节',
            english: 'doll joints',
          },
          {
            chinese: '机械义肢',
            english: 'cybernetic prosthesis',
          },
          {
            chinese: '机械腿',
            english: 'mechanical legs',
          },
          {
            chinese: '沙滩巾',
            english: 'beach towel',
          },
          {
            chinese: '雨披',
            english: 'poncho',
          },
          {
            chinese: '浓妆',
            english: 'make up',
          },
        ],
      },
    ],
  },
  {
    name: '服饰',
    times: 0,
    list: [
      {
        type: '上装',
        list: [
          {
            chinese: '过手袖',
            english: 'sleeves_past_fingers',
          },
          {
            chinese: '背心',
            english: 'tank top',
          },
          {
            chinese: '白衬衫',
            english: 'white shirt',
          },
          {
            chinese: '水手衬衫',
            english: 'sailor shirt',
          },
          {
            chinese: '恤',
            english: 'T T-shirt',
          },
          {
            chinese: '毛衣',
            english: 'sweater',
          },
          {
            chinese: '夏日长裙',
            english: 'summer dress',
          },
          {
            chinese: '连帽衫',
            english: 'hoodie',
          },
          {
            chinese: '毛领',
            english: 'fur trimmed colla',
          },
          {
            chinese: '兜帽斗篷',
            english: 'hooded cloak',
          },
          {
            chinese: '夹克',
            english: 'jacket',
          },
          {
            chinese: '皮夹克',
            english: 'leather jacket',
          },
          {
            chinese: '探险家夹克',
            english: 'safari jacket',
          },
          {
            chinese: '兜帽',
            english: 'hood',
          },
          {
            chinese: '牛仔夹克',
            english: 'denim jacket',
          },
          {
            chinese: '高领夹克',
            english: 'turtleneck jacket',
          },
          {
            chinese: '消防员夹克',
            english: 'firefighter jacket',
          },
          {
            chinese: '透明夹克',
            english: 'see-through jacket',
          },
          {
            chinese: '战壕大衣',
            english: 'trench coat',
          },
          {
            chinese: '实验室外套',
            english: 'lab coat',
          },
          {
            chinese: '羽绒服',
            english: 'Down Jackets',
          },
          {
            chinese: '防弹盔甲',
            english: 'body armor',
          },
          {
            chinese: '防弹衣',
            english: 'flak jacket',
          },
          {
            chinese: '大衣',
            english: 'overcoat',
          },
          {
            chinese: '粗呢大衣',
            english: 'duffel coat',
          },
        ],
      },
      {
        type: '服装',
        list: [
          {
            chinese: '透视装',
            english: 'transparent clothes',
          },
          {
            chinese: '燕尾服',
            english: 'tailcoat',
          },
          {
            chinese: '女仆装',
            english: 'Victoria black maid dress',
          },
          {
            chinese: '水手服',
            english: 'sailor suit',
          },
          {
            chinese: '学生服',
            english: 'school uniform',
          },
          {
            chinese: '职场制服',
            english: 'bussiness suit',
          },
          {
            chinese: '西装',
            english: 'suit',
          },
          {
            chinese: '军装',
            english: 'military uniform',
          },
          {
            chinese: '礼服',
            english: 'lucency full dress',
          },
          {
            chinese: '汉服',
            english: 'hanfu',
          },
          {
            chinese: '旗袍',
            english: 'cheongsam',
          },
          {
            chinese: '和服',
            english: 'japanses clothes',
          },
          {
            chinese: '运动服',
            english: 'sportswear',
          },
          {
            chinese: '工装服',
            english: 'dungarees',
          },
          {
            chinese: '婚纱',
            english: 'wedding dress',
          },
          {
            chinese: '银色连衣裙',
            english: 'silvercleavage dress',
          },
          {
            chinese: '长袍',
            english: 'robe',
          },
          {
            chinese: '围裙',
            english: 'apron',
          },
          {
            chinese: '快餐制服',
            english: 'fast food uniform',
          },
          {
            chinese: '制服',
            english: 'JK JK',
          },
          {
            chinese: '健身服',
            english: 'gym_uniform',
          },
          {
            chinese: '巫女服',
            english: 'miko attire',
          },
          {
            chinese: '海军陆战队服',
            english: 'SWAT uniform',
          },
          {
            chinese: '无袖连衣裙',
            english: 'sleeveless dress',
          },
          {
            chinese: '雨衣',
            english: 'raincoat',
          },
          {
            chinese: '机甲衣',
            english: 'mech suit',
          },
          {
            chinese: '巫师法袍',
            english: 'wizard robe',
          },
          {
            chinese: '刺客装束',
            english: 'assassin-style',
          },
        ],
      },
      {
        type: '下装',
        list: [
          {
            chinese: '牛仔短裤',
            english: 'denim shorts',
          },
          {
            chinese: '百褶裙',
            english: 'pleated skirt',
          },
          {
            chinese: '热裤',
            english: 'short shorts',
          },
          {
            chinese: '铅笔裙',
            english: 'pencil skirt',
          },
          {
            chinese: '皮裙',
            english: 'leather skirt',
          },
          {
            chinese: '黑色紧身裤',
            english: 'black leggings',
          },
          {
            chinese: '和服下的裙子',
            english: 'skirt under kimono',
          },
        ],
      },
      {
        type: '其他服装',
        list: [
          {
            chinese: '褶边',
            english: 'frills',
          },
          {
            chinese: '花边',
            english: 'lace',
          },
          {
            chinese: '哥特风格',
            english: 'gothic',
          },
          {
            chinese: '洛丽塔风格',
            english: 'lolita fashion',
          },
          {
            chinese: '西部风格',
            english: 'western',
          },
          {
            chinese: '湿身',
            english: 'wet clothes',
          },
          {
            chinese: '露单肩',
            english: 'off_shoulder',
          },
          {
            chinese: '露双肩',
            english: 'bare_shoulders',
          },
          {
            chinese: '格子花纹',
            english: 'tartan',
          },
          {
            chinese: '横条花纹',
            english: 'striped',
          },
          {
            chinese: '披甲',
            english: 'armored skirt',
          },
          {
            chinese: '盔甲',
            english: 'armor',
          },
          {
            chinese: '金属盔甲',
            english: 'metal armor',
          },
          {
            chinese: '狂战士铠甲',
            english: 'berserker armor',
          },
          {
            chinese: '腰带',
            english: 'belt',
          },
          {
            chinese: '围巾',
            english: 'scarf',
          },
          {
            chinese: '披肩',
            english: 'cape',
          },
          {
            chinese: '皮草披肩',
            english: 'fur shawl',
          },
        ],
      },
    ],
  },
  {
    name: '鞋饰',
    times: 0,
    list: [
      {
        type: '帽饰',
        list: [
          {
            chinese: '棒球帽',
            english: 'Baseball cap',
          },
          {
            chinese: '针织帽',
            english: 'Beanie',
          },
          {
            chinese: '拿破仑帽',
            english: 'Bicorne',
          },
          {
            chinese: '太阳帽',
            english: 'Boater hat',
          },
          {
            chinese: '遮阳帽',
            english: 'Visor cap',
          },
          {
            chinese: '圆顶礼帽',
            english: 'Bowler hat',
          },
          {
            chinese: '报童帽',
            english: 'Cabbie hat',
          },
          {
            chinese: '渔夫帽',
            english: 'Bucket hat',
          },
          {
            chinese: '侦探帽',
            english: 'Fedora',
          },
          {
            chinese: '牛仔帽',
            english: 'Cowboy hat',
          },
          {
            chinese: '厨师帽',
            english: 'Chef hat',
          },
          {
            chinese: '军官帽',
            english: 'Military hat',
          },
          {
            chinese: '圣诞帽',
            english: 'Santa hat',
          },
          {
            chinese: '派对帽',
            english: 'Party hat',
          },
          {
            chinese: '小丑帽',
            english: 'Jester cap',
          },
          {
            chinese: '安全帽',
            english: 'Hardhat',
          },
          {
            chinese: '棒球头盔',
            english: 'Baseball helmet',
          },
          {
            chinese: '橄榄球头盔',
            english: 'Football helmet',
          },
          {
            chinese: '动物头盔',
            english: 'animal helmet',
          },
          {
            chinese: '女巫帽',
            english: 'witch hat',
          },
          {
            chinese: '贝雷帽',
            english: 'beret',
          },
          {
            chinese: '鸭舌帽',
            english: 'peaked cap',
          },
          {
            chinese: '草帽',
            english: 'Straw hat',
          },
        ],
      },
      {
        type: '鞋类',
        list: [
          {
            chinese: '裸足',
            english: 'bare_legs',
          },
          {
            chinese: '靴子',
            english: 'boots',
          },
          {
            chinese: '马丁靴',
            english: 'knee boots',
          },
          {
            chinese: '脚踝靴',
            english: 'ankle boots',
          },
          {
            chinese: '系带靴',
            english: 'cross-laced_footwear',
          },
          {
            chinese: '战斗靴',
            english: 'combat boots',
          },
          {
            chinese: '装甲靴',
            english: 'armored boots',
          },
          {
            chinese: '过膝靴',
            english: 'knee boots',
          },
          {
            chinese: '防水橡胶靴',
            english: 'rubber boots',
          },
          {
            chinese: '皮靴',
            english: 'leather boots',
          },
          {
            chinese: '雪地靴',
            english: 'snow boots',
          },
          {
            chinese: '圣诞靴',
            english: 'santa boots',
          },
          {
            chinese: '鞋子',
            english: 'shoes',
          },
          {
            chinese: '厚底鞋',
            english: 'platform footwear',
          },
          {
            chinese: '尖头鞋',
            english: 'pointy footwear',
          },
          {
            chinese: '芭蕾舞鞋',
            english: 'ballet slippers',
          },
          {
            chinese: '运动鞋',
            english: 'sneakers',
          },
          {
            chinese: '旱冰鞋',
            english: 'roller skates',
          },
          {
            chinese: '溜冰鞋',
            english: 'ice skates',
          },
          {
            chinese: '钉鞋',
            english: 'spiked shoes',
          },
          {
            chinese: '高跟鞋',
            english: 'high heels',
          },
          {
            chinese: '玛丽珍鞋',
            english: 'mary janes',
          },
          {
            chinese: '乐福鞋',
            english: 'loafers',
          },
          {
            chinese: '女式学生鞋',
            english: 'uwabaki',
          },
          {
            chinese: '凉鞋',
            english: 'sandals',
          },
          {
            chinese: '木屐',
            english: 'geta',
          },
          {
            chinese: '拖鞋',
            english: 'slippers',
          },
          {
            chinese: '人字拖',
            english: 'flip-flops',
          },
        ],
      },
      {
        type: '袜类',
        list: [
          {
            chinese: '不穿袜子',
            english: 'no socks',
          },
          {
            chinese: '短袜',
            english: 'socks',
          },
          {
            chinese: '日式厚底短袜',
            english: 'tabi',
          },
          {
            chinese: '丝袜',
            english: 'stockings',
          },
          {
            chinese: '圣诞袜',
            english: 'christmas stocking',
          },
          {
            chinese: '暖腿袜',
            english: 'leg warmers',
          },
          {
            chinese: '荷叶边袜子',
            english: 'frilled socks',
          },
          {
            chinese: '丝带边袜子',
            english: 'ribbon-trimmed legwear',
          },
          {
            chinese: '闪亮袜子',
            english: 'shiny legwear',
          },
          {
            chinese: '褶边长筒袜',
            english: 'frilled thighhighs',
          },
          {
            chinese: '过膝袜',
            english: 'thighhighs',
          },
          {
            chinese: '渔网袜',
            english: 'fishnet stockings',
          },
          {
            chinese: '堆堆袜',
            english: 'loose socks',
          },
          {
            chinese: '裤袜',
            english: 'leggings',
          },
          {
            chinese: '蕾丝裤袜',
            english: 'lace legwear',
          },
          {
            chinese: '罗纹裤袜',
            english: 'ribbed legwear',
          },
          {
            chinese: '湿连裤袜',
            english: 'wet pantyhose',
          },
          {
            chinese: '格子裤袜',
            english: 'plaid legwear',
          },
          {
            chinese: '透视裤袜',
            english: 'see-through legwear',
          },
          {
            chinese: '连裤袜',
            english: 'pantyhose',
          },
          {
            chinese: '撕裂的连裤袜',
            english: 'torn pantyhose',
          },
          {
            chinese: '单腿连裤袜',
            english: 'single leg pantyhose',
          },
          {
            chinese: '荷叶边连裤袜',
            english: 'frilled pantyhose',
          },
          {
            chinese: '柳丁吊袜带',
            english: 'studded garter belt',
          },
          {
            chinese: '吊袜带',
            english: 'sock dangle',
          },
          {
            chinese: '大腿系带',
            english: 'thigh strap',
          },
          {
            chinese: '腿部花边环',
            english: 'leg_garter',
          },
          {
            chinese: '包扎腿',
            english: 'bandaged leg',
          },
        ],
      },
    ],
  },
  {
    name: '姿势',
    times: 0,
    list: [
      {
        type: '姿态',
        list: [
          {
            chinese: '侧身坐',
            english: 'yokozuwari',
          },
          {
            chinese: '鸭子坐',
            english: 'ahirusuwari',
          },
          {
            chinese: '盘腿',
            english: 'indian style',
          },
          {
            chinese: '跪着',
            english: 'kneeling',
          },
          {
            chinese: '躬躯',
            english: 'arched back',
          },
          {
            chinese: '膝枕',
            english: 'lap pillow',
          },
          {
            chinese: '学猫叫',
            english: 'paw pose',
          },
          {
            chinese: '单膝跪地',
            english: 'one knee',
          },
          {
            chinese: '蜷起身子侧躺',
            english: 'fetal position',
          },
          {
            chinese: '仰卧',
            english: 'on back',
          },
          {
            chinese: '俯卧',
            english: 'on stomach',
          },
          {
            chinese: '坐着',
            english: 'sitting',
          },
          {
            chinese: '屈膝抱腿坐',
            english: 'hugging own legs',
          },
          {
            chinese: '立式跨骑',
            english: 'upright straddle',
          },
          {
            chinese: '站着',
            english: 'standing',
          },
          {
            chinese: '蹲着',
            english: 'squatting',
          },
          {
            chinese: '绑在十字架上',
            english: 'crucifixion',
          },
          {
            chinese: '双腿缠绕',
            english: 'leg lock',
          },
          {
            chinese: '四肢着地',
            english: 'all fours',
          },
          {
            chinese: '戴耳机',
            english: 'hand on headphones',
          },
          {
            chinese: '鬼姿势',
            english: 'ghost pose',
          },
          {
            chinese: '回头',
            english: 'turning around',
          },
          {
            chinese: '歪头',
            english: 'head tilt',
          },
          {
            chinese: '前倾',
            english: 'leaning forward',
          },
        ],
      },
      {
        type: '手势',
        list: [
          {
            chinese: '嘘手势',
            english: 'shushing',
          },
          {
            chinese: '翘大拇指',
            english: 'thumbs up',
          },
          {
            chinese: '手放脑后',
            english: 'arms behind head',
          },
          {
            chinese: '手放身后',
            english: 'arms behind back',
          },
          {
            chinese: '手插口袋',
            english: 'hand in pocket',
          },
          {
            chinese: '双手插口袋',
            english: 'hands in pocket',
          },
          {
            chinese: '十指相扣',
            english: 'interlocked fingers',
          },
          {
            chinese: 'V字手势',
            english: 'victory pose',
          },
          {
            chinese: '手在地板上',
            english: 'hand on floor',
          },
          {
            chinese: '手在额头上',
            english: 'hand on forehead',
          },
          {
            chinese: '手在肚子上',
            english: 'hand on own stomach',
          },
          {
            chinese: '手在肩膀上',
            english: 'arm over shoulder',
          },
          {
            chinese: '手搭别人的腿',
            english: 'hand on another\'s leg',
          },
          {
            chinese: '手搭别人的腰',
            english: 'hand on another\'s waist',
          },
          {
            chinese: '双手合十',
            english: 'own hands clasped',
          },
          {
            chinese: '翼展双臂',
            english: 'wide open arms',
          },
          {
            chinese: '手放嘴边',
            english: 'hand to mouth',
          },
          {
            chinese: '手枪手势',
            english: 'finger gun',
          },
          {
            chinese: '猫爪手势',
            english: 'cat pose',
          },
        ],
      },
      {
        type: '视线',
        list: [
          {
            chinese: '远眺',
            english: 'looking afar',
          },
          {
            chinese: '照镜子',
            english: 'looking at mirror',
          },
          {
            chinese: '看手机',
            english: 'looking at phone',
          },
          {
            chinese: '看向别处',
            english: 'looking away',
          },
          {
            chinese: '透过刘海看',
            english: 'visible through hair',
          },
          {
            chinese: '透过眼镜看',
            english: 'looking over glasses',
          },
          {
            chinese: '面向观者',
            english: 'look at viewer',
          },
          {
            chinese: '靠近观者',
            english: 'close to viewer',
          },
          {
            chinese: '动态角度',
            english: 'dynamic angle',
          },
          {
            chinese: '舞台角度',
            english: 'dramatic angle',
          },
          {
            chinese: '凝视',
            english: 'stare',
          },
          {
            chinese: '向上看',
            english: 'looking up',
          },
          {
            chinese: '向下看',
            english: 'looking down',
          },
          {
            chinese: '看向旁边',
            english: 'looking to the side',
          },
          {
            chinese: '移开目光',
            english: 'looking away',
          },
        ],
      },
    ],
  },
  {
    name: '动作',
    times: 0,
    list: [
      {
        type: '整体',
        list: [
          {
            chinese: '嗅闻',
            english: 'smelling',
          },
          {
            chinese: '公主抱',
            english: 'princess carry',
          },
          {
            chinese: '拥抱',
            english: 'hug',
          },
          {
            chinese: '背对背',
            english: 'back-to-back',
          },
          {
            chinese: '耶',
            english: 'peace symbol',
          },
          {
            chinese: '调整过膝袜',
            english: 'adjusting_thighhigh',
          },
          {
            chinese: '抓住',
            english: 'grabbing',
          },
          {
            chinese: '战斗姿态',
            english: 'fighting_stance',
          },
          {
            chinese: '走',
            english: 'walking',
          },
          {
            chinese: '跑',
            english: 'running',
          },
          {
            chinese: '跨坐',
            english: 'straddling',
          },
          {
            chinese: '跳',
            english: 'jump',
          },
          {
            chinese: '飞',
            english: 'fly',
          },
          {
            chinese: '靠墙',
            english: 'against wall',
          },
          {
            chinese: '躺',
            english: 'lie',
          },
          {
            chinese: '从背后抱',
            english: 'hug from behind',
          },
          {
            chinese: '遛狗',
            english: 'walk a dog',
          },
          {
            chinese: '提裙',
            english: 'skirt lift',
          },
          {
            chinese: '泡温泉',
            english: 'half body under water',
          },
          {
            chinese: '骑马',
            english: 'horse riding',
          },
          {
            chinese: '自拍',
            english: 'selfie',
          },
          {
            chinese: '一字马',
            english: 'standing split',
          },
          {
            chinese: '敬礼',
            english: 'salute',
          },
          {
            chinese: '祈祷',
            english: 'pray',
          },
          {
            chinese: '冥想',
            english: 'doing a meditation',
          },
        ],
      },
      {
        type: '上半身',
        list: [
          {
            chinese: '伸懒腰',
            english: 'stretch',
          },
          {
            chinese: '托腮',
            english: 'gill support',
          },
          {
            chinese: '牵手',
            english: 'holding hands',
          },
          {
            chinese: '单手叉腰',
            english: 'hand_on_hip',
          },
          {
            chinese: '双手叉腰',
            english: 'hands_on_hips',
          },
          {
            chinese: '招手',
            english: 'waving',
          },
          {
            chinese: '撮头发',
            english: 'hair scrunchie',
          },
          {
            chinese: '拉头发',
            english: 'hair_pull',
          },
          {
            chinese: '抓别人的头发',
            english: 'grabbing another\'s hair',
          },
          {
            chinese: '竖中指',
            english: 'middle_finger',
          },
          {
            chinese: '弯腰',
            english: 'bent over',
          },
          {
            chinese: '亲吻脸颊',
            english: 'kissing cheek',
          },
          {
            chinese: '亲吻额头',
            english: 'kissing forehead',
          },
          {
            chinese: '踮起脚尖吻',
            english: 'tiptoe kiss',
          },
          {
            chinese: '头顶水果',
            english: 'fruit on head',
          },
          {
            chinese: '咬手套',
            english: 'glove biting',
          },
          {
            chinese: '脸贴脸',
            english: 'cheek-to-cheek',
          },
          {
            chinese: '手牵手',
            english: 'hand on another\'s hand',
          },
          {
            chinese: '双手交叉',
            english: 'crossed arms',
          },
          {
            chinese: '双手张开伸直',
            english: 'spread arms',
          },
          {
            chinese: '挥动手臂',
            english: 'waving arms',
          },
          {
            chinese: '伸出手臂',
            english: 'outstretched arm',
          },
          {
            chinese: '用手臂支撑',
            english: 'carrying',
          },
          {
            chinese: '搂着手臂',
            english: 'arm hug',
          },
          {
            chinese: '拿着',
            english: 'holding',
          },
          {
            chinese: '拿着餐刀',
            english: 'holding knife',
          },
          {
            chinese: '拿着枪',
            english: 'holding gun',
          },
          {
            chinese: '拿着杯子',
            english: 'holding cup',
          },
          {
            chinese: '拿着食物',
            english: 'holding food',
          },
          {
            chinese: '拿着书',
            english: 'holding book',
          },
          {
            chinese: '拿着魔杖',
            english: 'holding wand',
          },
          {
            chinese: '打着伞',
            english: 'holding umbrella',
          },
          {
            chinese: '捧着花',
            english: 'holding flower',
          },
          {
            chinese: '拿着麦克风',
            english: 'holding microphone',
          },
          {
            chinese: '抱着物品',
            english: 'object hug',
          },
          {
            chinese: '抱着心',
            english: 'holding heart',
          },
        ],
      },
    ],
  },
  {
    name: '环境',
    times: 0,
    list: [
      {
        type: '四季朝暮',
        list: [
          {
            chinese: '春天',
            english: 'in spring',
          },
          {
            chinese: '夏天',
            english: 'in summer',
          },
          {
            chinese: '秋天',
            english: 'in autumn',
          },
          {
            chinese: '冬天',
            english: 'in winter',
          },
          {
            chinese: '黄昏',
            english: 'dusk',
          },
          {
            chinese: '夜晚',
            english: 'night',
          },
          {
            chinese: '秋景',
            english: '(autumn maple forest:1.3),(very few fallen leaves),(path)',
          },
        ],
      },
      {
        type: '日月星辰',
        list: [
          {
            chinese: '太阳',
            english: 'sun',
          },
          {
            chinese: '落日',
            english: 'sunset',
          },
          {
            chinese: '月亮',
            english: 'moon',
          },
          {
            chinese: '满月',
            english: 'full_moon',
          },
          {
            chinese: '星星',
            english: 'stars',
          },
          {
            chinese: '天空',
            english: 'sky',
          },
          {
            chinese: '多云',
            english: 'cloudy',
          },
          {
            chinese: '雨天',
            english: 'rain',
          },
          {
            chinese: '冰雪',
            english: 'snow,ice',
          },
          {
            chinese: '雪花',
            english: 'snowflakes',
          },
          {
            chinese: '闪电',
            english: 'lighting',
          },
          {
            chinese: '彩虹',
            english: 'rainbow',
          },
          {
            chinese: '流星雨',
            english: 'meteor shower',
          },
          {
            chinese: '宇宙',
            english: 'universe',
          },
        ],
      },
      {
        type: '天涯海角',
        list: [
          {
            chinese: '大海',
            english: 'sea',
          },
          {
            chinese: '山丘',
            english: 'hills',
          },
          {
            chinese: '草地',
            english: 'in a meadow',
          },
          {
            chinese: '海滩',
            english: 'on the beach',
          },
          {
            chinese: '水中',
            english: 'underwater',
          },
          {
            chinese: '海边',
            english: 'over the sea',
          },
          {
            chinese: '树林',
            english: 'grove',
          },
          {
            chinese: '沙漠',
            english: 'on a desert',
          },
          {
            chinese: '高原',
            english: 'plateau',
          },
          {
            chinese: '悬崖',
            english: 'cliff',
          },
          {
            chinese: '峡谷',
            english: 'canyon',
          },
          {
            chinese: '绿洲',
            english: 'oasis',
          },
          {
            chinese: '竹林',
            english: 'bamboo forest',
          },
          {
            chinese: '冰川',
            english: 'glacier',
          },
          {
            chinese: '浮岛',
            english: 'floating island',
          },
          {
            chinese: '火山',
            english: 'volcano',
          },
          {
            chinese: '大草原',
            english: 'savanna',
          },
          {
            chinese: '瀑布',
            english: 'waterfall',
          },
          {
            chinese: '溪流',
            english: 'stream',
          },
          {
            chinese: '荒地',
            english: 'wasteland',
          },
          {
            chinese: '稻田',
            english: 'rice paddy',
          },
          {
            chinese: '麦田',
            english: 'wheat field',
          },
          {
            chinese: '花田',
            english: 'flower field',
          },
          {
            chinese: '花海',
            english: 'flower sea',
          },
        ],
      },
      {
        type: '室内场景',
        list: [
          {
            chinese: '室内',
            english: 'indoor',
          },
          {
            chinese: '窗帘',
            english: 'curtain',
          },
          {
            chinese: '床',
            english: 'bed',
          },
          {
            chinese: '浴室',
            english: 'bathroom',
          },
          {
            chinese: '厕所隔间',
            english: 'toilet stall',
          },
          {
            chinese: '宅男房间',
            english: 'otaku room',
          },
          {
            chinese: '自助餐厅',
            english: 'cafeteria',
          },
          {
            chinese: '教室',
            english: 'classroom',
          },
          {
            chinese: '俱乐部',
            english: 'clubroom',
          },
          {
            chinese: '沙龙',
            english: 'salon',
          },
          {
            chinese: '酒吧',
            english: 'bar',
          },
          {
            chinese: '居酒屋',
            english: 'izakaya',
          },
          {
            chinese: '咖啡馆',
            english: 'cafe',
          },
          {
            chinese: '面包店',
            english: 'bakery',
          },
          {
            chinese: '便利店',
            english: 'convenience store',
          },
          {
            chinese: '超市',
            english: 'supermarket',
          },
          {
            chinese: '书店',
            english: 'bookstore',
          },
          {
            chinese: '药店',
            english: 'pharmacy',
          },
          {
            chinese: '剧院',
            english: 'theater',
          },
          {
            chinese: '电影院',
            english: 'movie theater',
          },
          {
            chinese: '温室',
            english: 'greenhouse',
          },
          {
            chinese: '地库',
            english: 'dungeon',
          },
          {
            chinese: '健身房',
            english: 'gym',
          },
          {
            chinese: '医务室',
            english: 'infirmary',
          },
          {
            chinese: '实验室',
            english: 'laboratory',
          },
          {
            chinese: '图书馆',
            english: 'library',
          },
          {
            chinese: '工作坊',
            english: 'workshop',
          },
          {
            chinese: '舞台',
            english: 'stage',
          },
          {
            chinese: '法庭',
            english: 'courtroom',
          },
        ],
      },
      {
        type: '城市建筑',
        list: [
          {
            chinese: '城堡',
            english: 'castle',
          },
          {
            chinese: '城市',
            english: 'city',
          },
          {
            chinese: '水上乐园',
            english: 'waterpark',
          },
          {
            chinese: '旋转木马',
            english: 'carousel',
          },
          {
            chinese: '摩天轮',
            english: 'ferris wheel',
          },
          {
            chinese: '水族馆',
            english: 'aquarium',
          },
          {
            chinese: '动物园',
            english: 'zoo',
          },
          {
            chinese: '保龄球馆',
            english: 'bowling alley',
          },
          {
            chinese: '美术馆',
            english: 'art gallery',
          },
          {
            chinese: '博物馆',
            english: 'museum',
          },
          {
            chinese: '天文馆',
            english: 'planetarium',
          },
          {
            chinese: '游泳池',
            english: 'swimming pool',
          },
          {
            chinese: '体育场',
            english: 'stadium',
          },
          {
            chinese: '寺庙',
            english: 'temple',
          },
          {
            chinese: '巴士车站',
            english: 'bus stop',
          },
          {
            chinese: '火车站',
            english: 'train station',
          },
          {
            chinese: '喷泉',
            english: 'fountain',
          },
          {
            chinese: '游乐场',
            english: 'playground',
          },
          {
            chinese: '市场摊位',
            english: 'market stall',
          },
          {
            chinese: '电话亭',
            english: 'phone booth',
          },
          {
            chinese: '铁轨',
            english: 'railroad tracks',
          },
          {
            chinese: '机场',
            english: 'airport',
          },
          {
            chinese: '隧道',
            english: 'tunnel',
          },
        ],
      },
      {
        type: '背景氛围',
        list: [
          {
            chinese: '新年',
            english: 'new year',
          },
          {
            chinese: '兔年',
            english: 'year of the rabbit',
          },
          {
            chinese: '情人节',
            english: 'valentine',
          },
          {
            chinese: '元宵节',
            english: 'lantern festival',
          },
          {
            chinese: '夏日祭',
            english: 'summer festival',
          },
          {
            chinese: '七夕节',
            english: 'tanabata',
          },
          {
            chinese: '中秋节',
            english: 'mid-autumn festival',
          },
          {
            chinese: '万圣节',
            english: 'halloween',
          },
          {
            chinese: '圣诞节',
            english: 'christmas',
          },
          {
            chinese: '爆炸',
            english: 'explosion',
          },
          {
            chinese: '蒸汽',
            english: 'water vapor',
          },
          {
            chinese: '焰火',
            english: 'fireworks',
          },
          {
            chinese: '落地窗',
            english: 'ceiling window',
          },
          {
            chinese: '彩色玻璃',
            english: 'colourful glass',
          },
          {
            chinese: '染色玻璃',
            english: 'stain glass',
          },
          {
            chinese: '涂鸦墙',
            english: 'Graffiti wall',
          },
          {
            chinese: '马赛克背景',
            english: 'mosaic background',
          },
          {
            chinese: '液体背景',
            english: 'liquid background, Sputtered water',
          },
          {
            chinese: '魔法环',
            english: 'magic circles',
          },
          {
            chinese: '荧光蘑菇森林',
            english: 'fluorescent mushroom forests background',
          },
          {
            chinese: '彩色泡泡',
            english: '(((colorful bubble)))',
          },
        ],
      },
    ],
  },
  {
    name: '风格',
    times: 0,
    list: [
      {
        type: '艺术风格',
        list: [
          {
            chinese: '游戏',
            english: '8bit 8 Bit Game',
          },
          {
            chinese: '年代动画',
            english: '80 1980s anime',
          },
          {
            chinese: '迪士尼电影',
            english: 'disney movie',
          },
          {
            chinese: '哥特摇滚',
            english: 'goth',
          },
          {
            chinese: '年代电影',
            english: '80 80s movie',
          },
          {
            chinese: '泡泡龙',
            english: 'bubble bobble',
          },
          {
            chinese: '皮克斯动画',
            english: 'style of Pixar',
          },
          {
            chinese: '宝丽来艺术',
            english: 'Polaroid art',
          },
          {
            chinese: '万花筒摄影',
            english: 'Kaleidoscope Photography',
          },
          {
            chinese: '欧泊渲染',
            english: 'opal render',
          },
          {
            chinese: '色谱图',
            english: 'chemigram',
          },
          {
            chinese: '吉卜力风格',
            english: 'Studio Ghibli',
          },
          {
            chinese: '梦幻',
            english: 'dreamlike',
          },
          {
            chinese: '签绘风格',
            english: '(faux traditional media)',
          },
          {
            chinese: '原神冲击',
            english: 'genshin impact',
          },
          {
            chinese: '碧蓝航线',
            english: 'azur lane',
          },
          {
            chinese: '舰队收藏',
            english: 'kantai collection',
          },
          {
            chinese: '边缘行者',
            english: 'rebecca (cyberpunk)',
          },
          {
            chinese: '电锯人',
            english: 'chainsaw man',
          },
          {
            chinese: '魔法旋涡',
            english: 'Magic Vortex',
          },
          {
            chinese: '柴油朋克',
            english: '((dieselpunk))',
          },
          {
            chinese: '四格',
            english: '4koma',
          },
          {
            chinese: '杂志扫描',
            english: 'magazine scan',
          },
          {
            chinese: '专辑封面',
            english: 'album cover',
          },
          {
            chinese: '线条变粗',
            english: '(lineart)',
          },
          {
            chinese: '蒸汽波',
            english: 'synthwave',
          },
          {
            chinese: '洛可可',
            english: '(illustration),(paper figure),(lococo),((impasto)),(shiny skin)',
          },
        ],
      },
      {
        type: '艺术类型',
        list: [
          {
            chinese: '单色图片',
            english: 'monochrome',
          },
          {
            chinese: '拼贴艺术',
            english: 'Collage',
          },
          {
            chinese: '彩色玻璃工艺',
            english: 'Dalle de verre',
          },
          {
            chinese: '像素画',
            english: 'pixel art',
          },
          {
            chinese: '瓷画',
            english: 'Encaustic painting',
          },
          {
            chinese: '水墨画',
            english: 'Ink wash painting',
          },
          {
            chinese: '铜版雕刻',
            english: 'Mezzotint',
          },
          {
            chinese: '剪影',
            english: 'silhouette',
          },
          {
            chinese: '插画',
            english: 'illustration',
          },
          {
            chinese: '水彩画',
            english: '(((ink))), ((watercolor))',
          },
          {
            chinese: '浮世绘',
            english: 'illustration,(((ukiyoe))),((sketch)),((japanese_art))',
          },
          {
            chinese: '中国风',
            english: '((wash painting)),((ink splashing)),((color splashing)),((((dyeing)))),((chinese style))',
          },
          {
            chinese: '油画',
            english: '((dyeing)),((oil painting)),((impasto))',
          },
          {
            chinese: '黑白草图',
            english: '(posing sketch), (monochrome)',
          },
          {
            chinese: '手画草稿',
            english: 'sketch',
          },
          {
            chinese: '铅笔速写',
            english: '(monochrome), (gray scale), (pencil sketch lines',
          },
          {
            chinese: '彩铅画',
            english: '(watercolor pencil)',
          },
        ],
      },
      {
        type: '艺术派系',
        list: [
          {
            chinese: '新艺术主义',
            english: '((art nouveau))',
          },
          {
            chinese: '古典主义',
            english: '((classicism))',
          },
          {
            chinese: '未来主义',
            english: '((futurism))',
          },
          {
            chinese: '达达主义',
            english: '((Dadaism))',
          },
          {
            chinese: '抽象艺术',
            english: '((abstract art))',
          },
          {
            chinese: '艺术',
            english: 'ASCII ((ASCII art))',
          },
        ],
      },
      {
        type: '艺术家风格',
        list: [
          {
            chinese: '穆夏风格',
            english: '((alphonse mucha))',
          },
          {
            chinese: '莫奈风格',
            english: '((Monet style))',
          },
        ],
      },
      {
        type: '光照',
        list: [
          {
            chinese: '轮廓光',
            english: 'rim light',
          },
          {
            chinese: '体积光',
            english: 'Volumetric Lighting',
          },
          {
            chinese: '霓虹灯',
            english: 'glowing neon lights',
          },
          {
            chinese: '电影级光照',
            english: 'Cinematic Lighting',
          },
          {
            chinese: '透镜光晕',
            english: 'lens flare',
          },
          {
            chinese: '金属光泽',
            english: 'metallic luster',
          },
          {
            chinese: '氛围光照',
            english: 'moody lighting',
          },
          {
            chinese: '丁达尔效应',
            english: 'Tyndall effect',
          },
          {
            chinese: '漏光光效',
            english: 'light leaks',
          },
          {
            chinese: '背景光',
            english: 'background light',
          },
          {
            chinese: '自然光',
            english: 'available light',
          },
        ],
      },
      {
        type: '镜头',
        list: [
          {
            chinese: '镜头光晕',
            english: 'lens flare',
          },
          {
            chinese: '过曝',
            english: 'overexposure',
          },
          {
            chinese: '背景散焦',
            english: 'bokeh',
          },
          {
            chinese: '焦散',
            english: 'caustics',
          },
          {
            chinese: '衍射十字星',
            english: 'diffraction spikes',
          },
          {
            chinese: '正前缩距透视法',
            english: 'foreshortening',
          },
          {
            chinese: '集中线',
            english: 'emphasis lines',
          },
          {
            chinese: '卫星鸟瞰',
            english: 'satellite image',
          },
          {
            chinese: '微距照片',
            english: 'macro photo',
          },
          {
            chinese: '360 度视角',
            english: '360 view',
          },
          {
            chinese: '广角',
            english: 'Wide-Angle',
          },
          {
            chinese: '超广角',
            english: 'Ultra-Wide Angle',
          },
          {
            chinese: '人眼视角拍摄',
            english: 'Eye-Level Shot',
          },
          {
            chinese: '光圈 F1.2',
            english: 'f/1.2',
          },
          {
            chinese: '光圈 F1.8',
            english: 'f/1.8',
          },
          {
            chinese: '光圈 F2.8',
            english: 'f/2.8',
          },
          {
            chinese: '光圈 F4.0',
            english: 'f/4.0',
          },
          {
            chinese: '光圈 F16',
            english: 'f/16',
          },
          {
            chinese: '焦距 35mm',
            english: '35mm',
          },
          {
            chinese: '焦距 85mm',
            english: '85mm',
          },
          {
            chinese: '焦距 135mm',
            english: '135mm',
          },
          {
            chinese: '尼康',
            english: 'Nikon',
          },
          {
            chinese: '佳能',
            english: 'Canon',
          },
          {
            chinese: '富士',
            english: 'Fujifilm',
          },
          {
            chinese: '哈数',
            english: 'Hasselblad',
          },
          {
            chinese: '索尼镜头',
            english: 'Sony FE',
          },
          {
            chinese: '索尼大师镜头',
            english: 'Sony FE GM',
          },
        ],
      },
      {
        type: '画面效果',
        list: [
          {
            chinese: '动态模糊',
            english: 'motion blur',
          },
          {
            chinese: '色差',
            english: 'chromatic aberration',
          },
          {
            chinese: '闪耀效果',
            english: 'sparkle',
          },
          {
            chinese: 'JPEG 压缩失真',
            english: 'jpeg artifacts',
          },
          {
            chinese: '模糊的',
            english: 'blurry',
          },
          {
            chinese: '荧光',
            english: 'glowing light',
          },
          {
            chinese: '神圣感顶光',
            english: 'god rays',
          },
          {
            chinese: '光线追踪',
            english: 'ray tracing',
          },
          {
            chinese: '反射光',
            english: 'reflection light',
          },
          {
            chinese: '逆光',
            english: 'backlighting',
          },
          {
            chinese: '混合',
            english: 'blending',
          },
          {
            chinese: '盛开',
            english: 'bloom',
          },
          {
            chinese: '色差滥用',
            english: 'chromatic aberration abuse',
          },
          {
            chinese: '抖动',
            english: 'dithering',
          },
          {
            chinese: '立绘阴影',
            english: 'drop shadow',
          },
          {
            chinese: '胶片颗粒感/老电影滤镜',
            english: 'film grain',
          },
          {
            chinese: '富士色彩',
            english: 'Fujicolor',
          },
          {
            chinese: '半调风格',
            english: 'halftone',
          },
          {
            chinese: '图像填充',
            english: 'image fill',
          },
          {
            chinese: '体现运动的线',
            english: 'motion lines',
          },
          {
            chinese: '多重单色',
            english: 'multiple monochrome',
          },
          {
            chinese: '视错觉',
            english: 'optical illusion',
          },
          {
            chinese: '互补色',
            english: 'anaglyph',
          },
          {
            chinese: '立体画',
            english: 'stereogram',
          },
          {
            chinese: '扫描线',
            english: 'scanlines',
          },
          {
            chinese: '剪影',
            english: 'silhouette',
          },
          {
            chinese: '速度线',
            english: 'speed lines',
          },
          {
            chinese: '晕影',
            english: 'vignetting',
          },
        ],
      },
    ],
  },
]

export const goddessList: ConfigItem[] = [
  {
    name: '人物',
    times: 0,
    list: [
      {
        type: '人物',
        list: [
          {
            chinese: '女性',
            english: 'female',
          },

          {
            chinese: '美少女',
            english: 'bishoujo',
          },

          {
            chinese: '辣妹',
            english: 'gyaru',
          },
          {
            chinese: '大小姐',
            english: 'ojousama',
          },

          {
            chinese: '女王',
            english: 'queen',
          },
          {
            chinese: '女神',
            english: 'goddess',
          },
          {
            chinese: '公主',
            english: 'princess',
          },

          {
            chinese: '新娘',
            english: 'bride',
          },

          {
            chinese: '偶像',
            english: 'idol',
          },
          {
            chinese: '兔女郎',
            english: 'bunny girl',
          },

          {
            chinese: '狐狸女孩',
            english: 'fox girl',
          },

        ],
      },
      {
        type: '视角',
        list: [
          {
            chinese: '第一人称视角',
            english: 'first-person view',
          },
          {
            chinese: '主观视角',
            english: 'pov',
          },
          {
            chinese: '三视图',
            english: 'three sided view',
          },
          {
            chinese: '多视图',
            english: 'multiple views',
          },
          {
            chinese: '插入画面',
            english: 'cut-in',
          },
          {
            chinese: '前景模糊',
            english: 'blurry foreground',
          },
          {
            chinese: '特写镜头',
            english: 'close-up',
          },
          {
            chinese: '七分身镜头',
            english: 'cowboy shot',
          },
          {
            chinese: '德式倾斜镜头',
            english: 'dutch angle',
          },
          {
            chinese: '鱼眼镜头',
            english: 'fisheye',
          },
          {
            chinese: '线影法(纹理)',
            english: 'hatching (texture)',
          },
          {
            chinese: '远景透视画法',
            english: 'vanishing point',
          },
          {
            chinese: '广角镜头',
            english: 'wide shot',
          },
          {
            chinese: '俯视镜头',
            english: 'from above',
          },
          {
            chinese: '背影',
            english: 'from behind',
          },
          {
            chinese: '仰视镜头',
            english: 'from below',
          },
          {
            chinese: '室外看向室内(的镜头)',
            english: 'from outside',
          },
          {
            chinese: '角色的侧面',
            english: 'from side',
          },
          {
            chinese: '大气距离感',
            english: 'atmospheric perspective',
          },
          {
            chinese: '全景',
            english: 'panorama',
          },
          {
            chinese: '透视画法',
            english: 'perspective',
          },
          {
            chinese: '经过旋转的',
            english: 'rotated',
          },
          {
            chinese: '横向显示的',
            english: 'sideways',
          },
          {
            chinese: '倒挂的',
            english: 'upside-down',
          },
        ],
      },
    ],
  },
  {
    name: '角色',
    times: 0,
    list: [
      {
        type: '职业',
        list: [
          {
            chinese: '科学家',
            english: 'scientist',
          },
          {
            chinese: '运动员',
            english: 'athletes',
          },
          {
            chinese: '职场女性',
            english: 'office lady',
          },

          {
            chinese: '修女',
            english: 'nun',
          },
          {
            chinese: '护士',
            english: 'nurse',
          },
          {
            chinese: '空姐',
            english: 'stewardess',
          },
          {
            chinese: '学生',
            english: 'student',
          },
          {
            chinese: '女服务员',
            english: 'waitress',
          },
          {
            chinese: '老师',
            english: 'teacher',
          },
          {
            chinese: '赛车手',
            english: 'racer',
          },

          {
            chinese: '啦啦队',
            english: 'cheerleader',
          },

          {
            chinese: '女演员',
            english: 'actress',
          },

          {
            chinese: '特工',
            english: 'agent',
          },

          {
            chinese: '舞女',
            english: 'dancing girl',
          },
          {
            chinese: '摩托车手',
            english: 'motorcyclist',
          },

          {
            chinese: '女仆',
            english: 'maid',
          },
        ],
      },
    ],
  },
  {
    name: '五官',
    times: 0,
    list: [
      {
        type: '眉毛',
        list: [
          {
            chinese: '浓眉',
            english: 'thick eyebrows',
          },
          {
            chinese: '眉毛翘起',
            english: 'cocked eyebrow',
          },
          {
            chinese: '短眉毛',
            english: 'short eyebrows',
          },

        ],
      },
      {
        type: '眼睛',
        list: [
          {
            chinese: '空洞眼睛',
            english: 'empty eyes',
          },
          {
            chinese: '睁大眼睛',
            english: 'wide eyes',
          },
          {
            chinese: '闭上一只眼',
            english: 'one eye closed',
          },
          {
            chinese: '半闭眼睛',
            english: 'half-closed eyes',
          },
          {
            chinese: '渐变眼',
            english: 'gradient_eyes',
          },
          {
            chinese: '水汪汪大眼',
            english: 'aqua eyes',
          },

          {
            chinese: '发光眼睛',
            english: 'glowing eyes',
          },

          {
            chinese: '美瞳',
            english: 'color contact lenses',
          },
          {
            chinese: '长睫毛',
            english: 'longeyelashes',
          },
          {
            chinese: '彩色睫毛',
            english: 'colored eyelashes',
          },
          {
            chinese: '眼下痣',
            english: 'mole under eye',
          },
        ],
      },
      {
        type: '嘴巴',
        list: [

          {
            chinese: '口红',
            english: 'lipstick',
          },

          {
            chinese: '嘟嘴',
            english: 'pout',
          },
          {
            chinese: '张嘴',
            english: 'open mouth',
          },
          {
            chinese: '闭嘴',
            english: 'closed mouth',
          },

          {
            chinese: '分开嘴唇',
            english: 'parted lips',
          },
          {
            chinese: '嘴下痣',
            english: 'mole under mouth',
          },
        ],
      },
    ],
  },
  {
    name: '表情',
    times: 0,
    list: [
      {
        type: '表情',
        list: [
          {
            chinese: '无表情',
            english: 'expressionless',
          },
          {
            chinese: '脸色苍白',
            english: 'turn pale',
          },
          {
            chinese: '脸红',
            english: 'blush',
          },

          {
            chinese: '哭',
            english: 'tears',
          },
          {
            chinese: '悲伤',
            english: 'sad',
          },
          {
            chinese: '生气',
            english: 'angry',
          },
          {
            chinese: '害羞',
            english: 'nose blush',
          },

          {
            chinese: '得意',
            english: 'smug',
          },
          {
            chinese: '思考中',
            english: 'thinking',
          },
          {
            chinese: '扬眉',
            english: 'raised eyebrow',
          },

          {
            chinese: '困',
            english: 'sleepy',
          },
          {
            chinese: '眯眼',
            english: 'zzz',
          },
        ],
      },
      {
        type: '笑容',
        list: [
          {
            chinese: '微笑',
            english: 'light smile',
          },
          {
            chinese: '假笑',
            english: 'false smile',
          },
          {
            chinese: '挑逗笑容',
            english: 'seductive smile',
          },
          {
            chinese: '单侧嘴角上扬',
            english: 'smirk',
          },
          {
            chinese: '诱人笑容',
            english: 'seductive smile',
          },
          {
            chinese: '露齿笑',
            english: 'grin',
          },
          {
            chinese: '大笑',
            english: 'laughing',
          },
        ],
      },
    ],
  },
  {
    name: '头发',
    times: 0,
    list: [
      {
        type: '长度',
        list: [
          {
            chinese: '短发',
            english: 'short hair',
          },
          {
            chinese: '中发',
            english: 'medium hair',
          },
          {
            chinese: '长发',
            english: 'long hair',
          },
          {
            chinese: '头发过肩',
            english: 'hair over shoulder',
          },
        ],
      },
      {
        type: '颜色',
        list: [
          {
            chinese: '黑发',
            english: 'black hair',
          },
        ],
      },
      {
        type: '刘海',
        list: [
          {
            chinese: '刘海',
            english: 'bangs',
          },
          {
            chinese: '交叉刘海',
            english: 'crossed bang',
          },
          {
            chinese: '眉间刘海',
            english: 'hair between eye',
          },
          {
            chinese: '齐刘海',
            english: 'blunt bangs',
          },
          {
            chinese: '斜刘海',
            english: 'diagonal bangs',
          },
          {
            chinese: '不对称刘海',
            english: 'asymmetrical bangs',
          },
          {
            chinese: '编织刘海',
            english: 'braided bangs',
          },
        ],
      },
      {
        type: '辫子',
        list: [
          {
            chinese: '短马尾',
            english: 'short ponytail',
          },
          {
            chinese: '侧马尾辫',
            english: 'side ponytail',
          },
          {
            chinese: '前马尾辫',
            english: 'front ponytail',
          },
          {
            chinese: '分裂马尾辫',
            english: 'split ponytail',
          },
          {
            chinese: '低马尾辩',
            english: 'low twintails',
          },
          {
            chinese: '短马尾辫',
            english: 'short twintails',
          },
          {
            chinese: '侧边辫子',
            english: 'side braid',
          },
          {
            chinese: '辫子',
            english: 'braid',
          },
          {
            chinese: '双辫子',
            english: 'twin braids',
          },
          {
            chinese: '马尾辫',
            english: 'ponytail',
          },
          {
            chinese: '编织马尾',
            english: 'braided ponytail',
          },
          {
            chinese: '法式辫',
            english: 'french braid',
          },
          {
            chinese: '麻花辫',
            english: 'twists',
          },
          {
            chinese: '高马尾',
            english: 'high ponytail',
          },
        ],
      },
      {
        type: '发型',
        list: [
          {
            chinese: '扎头发',
            english: 'tied hair',
          },
          {
            chinese: '单侧发髻',
            english: 'single side bun',
          },
          {
            chinese: '卷发',
            english: 'curly hair',
          },
          {
            chinese: '直发',
            english: 'straight hair',
          },
          {
            chinese: '波浪头',
            english: 'wavy hair',
          },
          {
            chinese: '波波头',
            english: 'bob hair',
          },
          {
            chinese: '侧分',
            english: 'slicked-back',
          },
          {
            chinese: '呆毛',
            english: 'ahoge',
          },
          {
            chinese: '天线呆毛',
            english: 'antenna hair',
          },
          {
            chinese: '心形呆毛',
            english: 'heart ahoge',
          },
          {
            chinese: '公主卷',
            english: 'drill hair',
          },
          {
            chinese: '蓬发',
            english: 'disheveled hair',
          },
          {
            chinese: '凌乱发',
            english: 'messy hair',
          },
          {
            chinese: '露颈盘发',
            english: 'chignon',
          },
          {
            chinese: '编织发髻',
            english: 'braided bun',
          },
          {
            chinese: '公主切',
            english: 'hime_cut',
          },
          {
            chinese: '妹妹切',
            english: 'bob cut',
          },
          {
            chinese: '刺猬头',
            english: 'spiked hair',
          },
          {
            chinese: '盘发',
            english: 'updo',
          },
          {
            chinese: '长发绺',
            english: 'dreadlocks',
          },
          {
            chinese: '爆炸头',
            english: 'afro',
          },

          {
            chinese: '双丸子头',
            english: 'double bun',
          },
          {
            chinese: '大体积蓬松头发',
            english: 'big hair',
          },
          {
            chinese: '闪亮的头发',
            english: 'shiny hair',
          },
          {
            chinese: '发光的头发',
            english: 'glowing hair',
          },
          {
            chinese: '眼睛间的头发',
            english: 'hair between eyes',
          },
          {
            chinese: '撩到耳后',
            english: 'hair behind ear',
          },
        ],
      },
    ],
  },
  {
    name: '装饰',
    times: 0,
    list: [
      {
        type: '发饰',
        list: [
          {
            chinese: '发带',
            english: 'hair ribbon',
          },
          {
            chinese: '头巾',
            english: 'head scarf',
          },
          {
            chinese: '蝴蝶结发饰',
            english: 'hair bow',
          },
          {
            chinese: '新月发饰',
            english: 'crescent hair ornament',
          },
          {
            chinese: '洛丽塔发饰',
            english: 'lolita hairband',
          },
          {
            chinese: '羽毛发饰',
            english: 'feather hair ornament',
          },
          {
            chinese: '头花',
            english: 'hair flower',
          },
          {
            chinese: '发髻',
            english: 'hair bun',
          },
          {
            chinese: '发夹',
            english: 'hairclip',
          },
          {
            chinese: '发箍',
            english: 'hair scrunchie',
          },
          {
            chinese: '发圈',
            english: 'hair rings',
          },
          {
            chinese: '发饰',
            english: 'hair ornament',
          },
          {
            chinese: '发棒',
            english: 'hair stick',
          },
          {
            chinese: '心形发饰',
            english: 'heart hair ornament',
          },
        ],
      },
    ],
  },
  {
    name: '服饰',
    times: 0,
    list: [
      {
        type: '上装',
        list: [
          {
            chinese: '过手袖',
            english: 'sleeves_past_fingers',
          },
          {
            chinese: '背心',
            english: 'tank top',
          },
          {
            chinese: '白衬衫',
            english: 'white shirt',
          },
          {
            chinese: '水手衬衫',
            english: 'sailor shirt',
          },
          {
            chinese: 'T恤',
            english: 'T-shirt',
          },
          {
            chinese: '毛衣',
            english: 'sweater',
          },
          {
            chinese: '夏日长裙',
            english: 'summer dress',
          },
          {
            chinese: '连帽衫',
            english: 'hoodie',
          },
          {
            chinese: '毛领',
            english: 'fur trimmed colla',
          },
          {
            chinese: '兜帽斗篷',
            english: 'hooded cloak',
          },
          {
            chinese: '夹克',
            english: 'jacket',
          },
          {
            chinese: '皮夹克',
            english: 'leather jacket',
          },
          {
            chinese: '探险家夹克',
            english: 'safari jacket',
          },
          {
            chinese: '兜帽',
            english: 'hood',
          },
          {
            chinese: '牛仔夹克',
            english: 'denim jacket',
          },
          {
            chinese: '高领夹克',
            english: 'turtleneck jacket',
          },
          {
            chinese: '消防员夹克',
            english: 'firefighter jacket',
          },
          {
            chinese: '透明夹克',
            english: 'see-through jacket',
          },
          {
            chinese: '战壕大衣',
            english: 'trench coat',
          },
          {
            chinese: '实验室外套',
            english: 'lab coat',
          },
          {
            chinese: '羽绒服',
            english: 'Down Jackets',
          },
          {
            chinese: '大衣',
            english: 'overcoat',
          },
          {
            chinese: '粗呢大衣',
            english: 'duffel coat',
          },
        ],
      },
      {
        type: '服装',
        list: [
          {
            chinese: '燕尾服',
            english: 'tailcoat',
          },
          {
            chinese: '女仆装',
            english: 'Victoria black maid dress',
          },
          {
            chinese: '水手服',
            english: 'sailor suit',
          },
          {
            chinese: '学生服',
            english: 'school uniform',
          },
          {
            chinese: '职场制服',
            english: 'bussiness suit',
          },
          {
            chinese: '西装',
            english: 'suit',
          },
          {
            chinese: '礼服',
            english: 'lucency full dress',
          },
          {
            chinese: '汉服',
            english: 'hanfu',
          },
          {
            chinese: '旗袍',
            english: 'cheongsam',
          },
          {
            chinese: '和服',
            english: 'japanses clothes',
          },
          {
            chinese: '运动服',
            english: 'sportswear',
          },
          {
            chinese: '工装服',
            english: 'dungarees',
          },
          {
            chinese: '婚纱',
            english: 'wedding dress',
          },
          {
            chinese: '银色连衣裙',
            english: 'silvercleavage dress',
          },
          {
            chinese: '长袍',
            english: 'robe',
          },
          {
            chinese: '围裙',
            english: 'apron',
          },
          {
            chinese: '快餐制服',
            english: 'fast food uniform',
          },
          {
            chinese: 'JK制服',
            english: 'JK',
          },
          {
            chinese: '健身服',
            english: 'gym_uniform',
          },
          {
            chinese: '无袖连衣裙',
            english: 'sleeveless dress',
          },
          {
            chinese: '雨衣',
            english: 'raincoat',
          },
        ],
      },
      {
        type: '下装',
        list: [
          {
            chinese: '牛仔短裤',
            english: 'denim shorts',
          },
          {
            chinese: '百褶裙',
            english: 'pleated skirt',
          },
          {
            chinese: '热裤',
            english: 'short shorts',
          },
          {
            chinese: '铅笔裙',
            english: 'pencil skirt',
          },
          {
            chinese: '皮裙',
            english: 'leather skirt',
          },
          {
            chinese: '黑色紧身裤',
            english: 'black leggings',
          },
          {
            chinese: '和服下的裙子',
            english: 'skirt under kimono',
          },
        ],
      },
      {
        type: '其他服装',
        list: [
          {
            chinese: '褶边',
            english: 'frills',
          },
          {
            chinese: '花边',
            english: 'lace',
          },
          {
            chinese: '哥特风格',
            english: 'gothic',
          },
          {
            chinese: '洛丽塔风格',
            english: 'lolita fashion',
          },
          {
            chinese: '西部风格',
            english: 'western',
          },
          {
            chinese: '湿身',
            english: 'wet clothes',
          },
          {
            chinese: '露单肩',
            english: 'off_shoulder',
          },
          {
            chinese: '露双肩',
            english: 'bare_shoulders',
          },
          {
            chinese: '格子花纹',
            english: 'tartan',
          },
          {
            chinese: '横条花纹',
            english: 'striped',
          },
          {
            chinese: '腰带',
            english: 'belt',
          },
          {
            chinese: '围巾',
            english: 'scarf',
          },
          {
            chinese: '披肩',
            english: 'cape',
          },
          {
            chinese: '皮草披肩',
            english: 'fur shawl',
          },
        ],
      },
    ],
  },
  {
    name: '鞋饰',
    times: 0,
    list: [
      {
        type: '袜类',
        list: [
          {
            chinese: '不穿袜子',
            english: 'no socks',
          },
          {
            chinese: '短袜',
            english: 'socks',
          },
          {
            chinese: '日式厚底短袜',
            english: 'tabi',
          },
          {
            chinese: '丝袜',
            english: 'stockings',
          },
          {
            chinese: '圣诞袜',
            english: 'christmas stocking',
          },
          {
            chinese: '暖腿袜',
            english: 'leg warmers',
          },
          {
            chinese: '荷叶边袜子',
            english: 'frilled socks',
          },
          {
            chinese: '丝带边袜子',
            english: 'ribbon-trimmed legwear',
          },
          {
            chinese: '闪亮袜子',
            english: 'shiny legwear',
          },
          {
            chinese: '褶边长筒袜',
            english: 'frilled thighhighs',
          },
          {
            chinese: '过膝袜',
            english: 'thighhighs',
          },
          {
            chinese: '渔网袜',
            english: 'fishnet stockings',
          },
          {
            chinese: '堆堆袜',
            english: 'loose socks',
          },
          {
            chinese: '裤袜',
            english: 'leggings',
          },
          {
            chinese: '蕾丝裤袜',
            english: 'lace legwear',
          },
          {
            chinese: '罗纹裤袜',
            english: 'ribbed legwear',
          },
          {
            chinese: '湿连裤袜',
            english: 'wet pantyhose',
          },
          {
            chinese: '格子裤袜',
            english: 'plaid legwear',
          },
          {
            chinese: '透视裤袜',
            english: 'see-through legwear',
          },
          {
            chinese: '连裤袜',
            english: 'pantyhose',
          },
          {
            chinese: '撕裂的连裤袜',
            english: 'torn pantyhose',
          },
          {
            chinese: '单腿连裤袜',
            english: 'single leg pantyhose',
          },
          {
            chinese: '荷叶边连裤袜',
            english: 'frilled pantyhose',
          },
          {
            chinese: '柳丁吊袜带',
            english: 'studded garter belt',
          },
          {
            chinese: '吊袜带',
            english: 'sock dangle',
          },
          {
            chinese: '大腿系带',
            english: 'thigh strap',
          },
          {
            chinese: '腿部花边环',
            english: 'leg_garter',
          },
          {
            chinese: '包扎腿',
            english: 'bandaged leg',
          },
        ],
      },
    ],
  },
  {
    name: '姿势',
    times: 0,
    list: [
      {
        type: '姿态',
        list: [
          {
            chinese: '侧身坐',
            english: 'yokozuwari',
          },
          {
            chinese: '鸭子坐',
            english: 'ahirusuwari',
          },
          {
            chinese: '盘腿',
            english: 'indian style',
          },
          {
            chinese: '跪着',
            english: 'kneeling',
          },
          {
            chinese: '躬躯',
            english: 'arched back',
          },
          {
            chinese: '膝枕',
            english: 'lap pillow',
          },
          {
            chinese: '学猫叫',
            english: 'paw pose',
          },
          {
            chinese: '单膝跪地',
            english: 'one knee',
          },
          {
            chinese: '蜷起身子侧躺',
            english: 'fetal position',
          },
          {
            chinese: '仰卧',
            english: 'on back',
          },
          {
            chinese: '俯卧',
            english: 'on stomach',
          },
          {
            chinese: '坐着',
            english: 'sitting',
          },
          {
            chinese: '屈膝抱腿坐',
            english: 'hugging own legs',
          },
          {
            chinese: '立式跨骑',
            english: 'upright straddle',
          },
          {
            chinese: '站着',
            english: 'standing',
          },
          {
            chinese: '蹲着',
            english: 'squatting',
          },
          {
            chinese: '戴耳机',
            english: 'hand on headphones',
          },
          {
            chinese: '回头',
            english: 'turning around',
          },
          {
            chinese: '歪头',
            english: 'head tilt',
          },
          {
            chinese: '前倾',
            english: 'leaning forward',
          },
        ],
      },
      {
        type: '视线',
        list: [
          {
            chinese: '远眺',
            english: 'looking afar',
          },
          {
            chinese: '照镜子',
            english: 'looking at mirror',
          },
          {
            chinese: '看手机',
            english: 'looking at phone',
          },
          {
            chinese: '看向别处',
            english: 'looking away',
          },
          {
            chinese: '透过刘海看',
            english: 'visible through hair',
          },
          {
            chinese: '透过眼镜看',
            english: 'looking over glasses',
          },
          {
            chinese: '面向观者',
            english: 'look at viewer',
          },
          {
            chinese: '靠近观者',
            english: 'close to viewer',
          },
          {
            chinese: '动态角度',
            english: 'dynamic angle',
          },
          {
            chinese: '舞台角度',
            english: 'dramatic angle',
          },
          {
            chinese: '凝视',
            english: 'stare',
          },
          {
            chinese: '向上看',
            english: 'looking up',
          },
          {
            chinese: '向下看',
            english: 'looking down',
          },
          {
            chinese: '看向旁边',
            english: 'looking to the side',
          },
          {
            chinese: '移开目光',
            english: 'looking away',
          },
        ],
      },
    ],
  },
  {
    name: '动作',
    times: 0,
    list: [
      {
        type: '整体',
        list: [
          {
            chinese: '嗅闻',
            english: 'smelling',
          },
          {
            chinese: '拥抱',
            english: 'hug',
          },
          {
            chinese: '耶',
            english: 'peace symbol',
          },
          {
            chinese: '调整过膝袜',
            english: 'adjusting_thighhigh',
          },
          {
            chinese: '抓住',
            english: 'grabbing',
          },
          {
            chinese: '走',
            english: 'walking',
          },
          {
            chinese: '跑',
            english: 'running',
          },
          {
            chinese: '跨坐',
            english: 'straddling',
          },
          {
            chinese: '跳',
            english: 'jump',
          },
          {
            chinese: '飞',
            english: 'fly',
          },
          {
            chinese: '靠墙',
            english: 'against wall',
          },
          {
            chinese: '躺',
            english: 'lie',
          },
          {
            chinese: '提裙',
            english: 'skirt lift',
          },
          {
            chinese: '自拍',
            english: 'selfie',
          },
        ],
      },
      {
        type: '上半身',
        list: [
          {
            chinese: '伸懒腰',
            english: 'stretch',
          },
          {
            chinese: '托腮',
            english: 'gill support',
          },
          {
            chinese: '牵手',
            english: 'holding hands',
          },
          {
            chinese: '单手叉腰',
            english: 'hand_on_hip',
          },
          {
            chinese: '双手叉腰',
            english: 'hands_on_hips',
          },
          {
            chinese: '招手',
            english: 'waving',
          },
          {
            chinese: '撮头发',
            english: 'hair scrunchie',
          },
          {
            chinese: '拉头发',
            english: 'hair_pull',
          },
          {
            chinese: '抓别人的头发',
            english: 'grabbing another\'s hair',
          },
          {
            chinese: '竖中指',
            english: 'middle_finger',
          },
          {
            chinese: '弯腰',
            english: 'bent over',
          },
          {
            chinese: '亲吻脸颊',
            english: 'kissing cheek',
          },
          {
            chinese: '亲吻额头',
            english: 'kissing forehead',
          },
          {
            chinese: '踮起脚尖吻',
            english: 'tiptoe kiss',
          },
          {
            chinese: '头顶水果',
            english: 'fruit on head',
          },
          {
            chinese: '咬手套',
            english: 'glove biting',
          },
          {
            chinese: '脸贴脸',
            english: 'cheek-to-cheek',
          },
          {
            chinese: '手牵手',
            english: 'hand on another\'s hand',
          },
          {
            chinese: '双手交叉',
            english: 'crossed arms',
          },
          {
            chinese: '双手张开伸直',
            english: 'spread arms',
          },
          {
            chinese: '挥动手臂',
            english: 'waving arms',
          },
          {
            chinese: '伸出手臂',
            english: 'outstretched arm',
          },
          {
            chinese: '用手臂支撑',
            english: 'carrying',
          },
          {
            chinese: '搂着手臂',
            english: 'arm hug',
          },
          {
            chinese: '拿着',
            english: 'holding',
          },
          {
            chinese: '拿着书',
            english: 'holding book',
          },
          {
            chinese: '打着伞',
            english: 'holding umbrella',
          },
          {
            chinese: '捧着花',
            english: 'holding flower',
          },
        ],
      },
    ],
  },
  {
    name: '环境',
    times: 0,
    list: [
      {
        type: '四季朝暮',
        list: [
          {
            chinese: '春天',
            english: 'in spring',
          },
          {
            chinese: '夏天',
            english: 'in summer',
          },
          {
            chinese: '秋天',
            english: 'in autumn',
          },
          {
            chinese: '冬天',
            english: 'in winter',
          },
          {
            chinese: '黄昏',
            english: 'dusk',
          },
          {
            chinese: '夜晚',
            english: 'night',
          },
          {
            chinese: '秋景',
            english: '(autumn maple forest:1.3),(very few fallen leaves),(path)',
          },
        ],
      },
      {
        type: '日月星辰',
        list: [
          {
            chinese: '太阳',
            english: 'sun',
          },
          {
            chinese: '落日',
            english: 'sunset',
          },
          {
            chinese: '月亮',
            english: 'moon',
          },
          {
            chinese: '满月',
            english: 'full_moon',
          },
          {
            chinese: '星星',
            english: 'stars',
          },
          {
            chinese: '天空',
            english: 'sky',
          },
          {
            chinese: '多云',
            english: 'cloudy',
          },
          {
            chinese: '雨天',
            english: 'rain',
          },
          {
            chinese: '冰雪',
            english: 'snow,ice',
          },
          {
            chinese: '雪花',
            english: 'snowflakes',
          },
          {
            chinese: '闪电',
            english: 'lighting',
          },
          {
            chinese: '彩虹',
            english: 'rainbow',
          },
        ],
      },
      {
        type: '天涯海角',
        list: [
          {
            chinese: '大海',
            english: 'sea',
          },
          {
            chinese: '山丘',
            english: 'hills',
          },
          {
            chinese: '草地',
            english: 'in a meadow',
          },
          {
            chinese: '海滩',
            english: 'on the beach',
          },
          {
            chinese: '水中',
            english: 'underwater',
          },
          {
            chinese: '海边',
            english: 'over the sea',
          },
          {
            chinese: '树林',
            english: 'grove',
          },
          {
            chinese: '沙漠',
            english: 'on a desert',
          },
          {
            chinese: '高原',
            english: 'plateau',
          },
          {
            chinese: '悬崖',
            english: 'cliff',
          },
          {
            chinese: '峡谷',
            english: 'canyon',
          },
          {
            chinese: '绿洲',
            english: 'oasis',
          },
          {
            chinese: '竹林',
            english: 'bamboo forest',
          },
          {
            chinese: '冰川',
            english: 'glacier',
          },
          {
            chinese: '浮岛',
            english: 'floating island',
          },
          {
            chinese: '火山',
            english: 'volcano',
          },
          {
            chinese: '大草原',
            english: 'savanna',
          },
          {
            chinese: '瀑布',
            english: 'waterfall',
          },
          {
            chinese: '溪流',
            english: 'stream',
          },
          {
            chinese: '荒地',
            english: 'wasteland',
          },
          {
            chinese: '稻田',
            english: 'rice paddy',
          },
          {
            chinese: '麦田',
            english: 'wheat field',
          },
          {
            chinese: '花田',
            english: 'flower field',
          },
          {
            chinese: '花海',
            english: 'flower sea',
          },
        ],
      },
      {
        type: '室内场景',
        list: [
          {
            chinese: '室内',
            english: 'indoor',
          },
          {
            chinese: '窗帘',
            english: 'curtain',
          },
          {
            chinese: '床',
            english: 'bed',
          },
          {
            chinese: '浴室',
            english: 'bathroom',
          },
          {
            chinese: '厕所隔间',
            english: 'toilet stall',
          },
          {
            chinese: '宅男房间',
            english: 'otaku room',
          },
          {
            chinese: '自助餐厅',
            english: 'cafeteria',
          },
          {
            chinese: '教室',
            english: 'classroom',
          },
          {
            chinese: '俱乐部',
            english: 'clubroom',
          },
          {
            chinese: '沙龙',
            english: 'salon',
          },
          {
            chinese: '酒吧',
            english: 'bar',
          },
          {
            chinese: '居酒屋',
            english: 'izakaya',
          },
          {
            chinese: '咖啡馆',
            english: 'cafe',
          },
          {
            chinese: '面包店',
            english: 'bakery',
          },
          {
            chinese: '便利店',
            english: 'convenience store',
          },
          {
            chinese: '超市',
            english: 'supermarket',
          },
          {
            chinese: '书店',
            english: 'bookstore',
          },
          {
            chinese: '药店',
            english: 'pharmacy',
          },
          {
            chinese: '剧院',
            english: 'theater',
          },
          {
            chinese: '电影院',
            english: 'movie theater',
          },
          {
            chinese: '温室',
            english: 'greenhouse',
          },
          {
            chinese: '地库',
            english: 'dungeon',
          },
          {
            chinese: '健身房',
            english: 'gym',
          },
          {
            chinese: '医务室',
            english: 'infirmary',
          },
          {
            chinese: '实验室',
            english: 'laboratory',
          },
          {
            chinese: '图书馆',
            english: 'library',
          },
          {
            chinese: '工作坊',
            english: 'workshop',
          },
          {
            chinese: '舞台',
            english: 'stage',
          },
          {
            chinese: '法庭',
            english: 'courtroom',
          },
        ],
      },
      {
        type: '城市建筑',
        list: [
          {
            chinese: '城堡',
            english: 'castle',
          },
          {
            chinese: '城市',
            english: 'city',
          },
          {
            chinese: '水上乐园',
            english: 'waterpark',
          },
          {
            chinese: '旋转木马',
            english: 'carousel',
          },
          {
            chinese: '摩天轮',
            english: 'ferris wheel',
          },
          {
            chinese: '水族馆',
            english: 'aquarium',
          },
          {
            chinese: '动物园',
            english: 'zoo',
          },
          {
            chinese: '保龄球馆',
            english: 'bowling alley',
          },
          {
            chinese: '美术馆',
            english: 'art gallery',
          },
          {
            chinese: '博物馆',
            english: 'museum',
          },
          {
            chinese: '天文馆',
            english: 'planetarium',
          },
          {
            chinese: '游泳池',
            english: 'swimming pool',
          },
          {
            chinese: '体育场',
            english: 'stadium',
          },
          {
            chinese: '寺庙',
            english: 'temple',
          },
          {
            chinese: '巴士车站',
            english: 'bus stop',
          },
          {
            chinese: '火车站',
            english: 'train station',
          },
          {
            chinese: '喷泉',
            english: 'fountain',
          },
          {
            chinese: '游乐场',
            english: 'playground',
          },
          {
            chinese: '市场摊位',
            english: 'market stall',
          },
          {
            chinese: '电话亭',
            english: 'phone booth',
          },
          {
            chinese: '铁轨',
            english: 'railroad tracks',
          },
          {
            chinese: '机场',
            english: 'airport',
          },
          {
            chinese: '隧道',
            english: 'tunnel',
          },
        ],
      },
    ],
  },
  {
    name: '风格',
    times: 0,
    list: [
      {
        type: '光照',
        list: [
          {
            chinese: '轮廓光',
            english: 'rim light',
          },
          {
            chinese: '体积光',
            english: 'Volumetric Lighting',
          },
          {
            chinese: '霓虹灯',
            english: 'glowing neon lights',
          },
          {
            chinese: '电影级光照',
            english: 'Cinematic Lighting',
          },
          {
            chinese: '透镜光晕',
            english: 'lens flare',
          },
          {
            chinese: '金属光泽',
            english: 'metallic luster',
          },
          {
            chinese: '氛围光照',
            english: 'moody lighting',
          },
          {
            chinese: '丁达尔效应',
            english: 'Tyndall effect',
          },
          {
            chinese: '漏光光效',
            english: 'light leaks',
          },
          {
            chinese: '背景光',
            english: 'background light',
          },
          {
            chinese: '自然光',
            english: 'available light',
          },
        ],
      },
      {
        type: '镜头',
        list: [
          {
            chinese: '镜头光晕',
            english: 'lens flare',
          },
          {
            chinese: '过曝',
            english: 'overexposure',
          },
          {
            chinese: '背景散焦',
            english: 'bokeh',
          },
          {
            chinese: '焦散',
            english: 'caustics',
          },
          {
            chinese: '衍射十字星',
            english: 'diffraction spikes',
          },
          {
            chinese: '正前缩距透视法',
            english: 'foreshortening',
          },
          {
            chinese: '集中线',
            english: 'emphasis lines',
          },
          {
            chinese: '卫星鸟瞰',
            english: 'satellite image',
          },
          {
            chinese: '微距照片',
            english: 'macro photo',
          },
          {
            chinese: '360 度视角',
            english: '360 view',
          },
          {
            chinese: '广角',
            english: 'Wide-Angle',
          },
          {
            chinese: '超广角',
            english: 'Ultra-Wide Angle',
          },
          {
            chinese: '人眼视角拍摄',
            english: 'Eye-Level Shot',
          },
          {
            chinese: '光圈 F1.2',
            english: 'f/1.2',
          },
          {
            chinese: '光圈 F1.8',
            english: 'f/1.8',
          },
          {
            chinese: '光圈 F2.8',
            english: 'f/2.8',
          },
          {
            chinese: '光圈 F4.0',
            english: 'f/4.0',
          },
          {
            chinese: '光圈 F16',
            english: 'f/16',
          },
          {
            chinese: '焦距 35mm',
            english: '35mm',
          },
          {
            chinese: '焦距 85mm',
            english: '85mm',
          },
          {
            chinese: '焦距 135mm',
            english: '135mm',
          },
          {
            chinese: '尼康',
            english: 'Nikon',
          },
          {
            chinese: '佳能',
            english: 'Canon',
          },
          {
            chinese: '富士',
            english: 'Fujifilm',
          },
          {
            chinese: '哈数',
            english: 'Hasselblad',
          },
          {
            chinese: '索尼镜头',
            english: 'Sony FE',
          },
          {
            chinese: '索尼大师镜头',
            english: 'Sony FE GM',
          },
        ],
      },
      {
        type: '画面效果',
        list: [
          {
            chinese: '动态模糊',
            english: 'motion blur',
          },
          {
            chinese: '色差',
            english: 'chromatic aberration',
          },
          {
            chinese: '闪耀效果',
            english: 'sparkle',
          },
          {
            chinese: 'JPEG 压缩失真',
            english: 'jpeg artifacts',
          },
          {
            chinese: '模糊的',
            english: 'blurry',
          },
          {
            chinese: '荧光',
            english: 'glowing light',
          },
          {
            chinese: '神圣感顶光',
            english: 'god rays',
          },
          {
            chinese: '光线追踪',
            english: 'ray tracing',
          },
          {
            chinese: '反射光',
            english: 'reflection light',
          },
          {
            chinese: '逆光',
            english: 'backlighting',
          },
          {
            chinese: '混合',
            english: 'blending',
          },
          {
            chinese: '盛开',
            english: 'bloom',
          },
          {
            chinese: '色差滥用',
            english: 'chromatic aberration abuse',
          },
          {
            chinese: '抖动',
            english: 'dithering',
          },
          {
            chinese: '立绘阴影',
            english: 'drop shadow',
          },
          {
            chinese: '胶片颗粒感/老电影滤镜',
            english: 'film grain',
          },
          {
            chinese: '富士色彩',
            english: 'Fujicolor',
          },
          {
            chinese: '半调风格',
            english: 'halftone',
          },
          {
            chinese: '图像填充',
            english: 'image fill',
          },
          {
            chinese: '体现运动的线',
            english: 'motion lines',
          },
          {
            chinese: '多重单色',
            english: 'multiple monochrome',
          },
          {
            chinese: '视错觉',
            english: 'optical illusion',
          },
          {
            chinese: '互补色',
            english: 'anaglyph',
          },
          {
            chinese: '立体画',
            english: 'stereogram',
          },
          {
            chinese: '扫描线',
            english: 'scanlines',
          },
          {
            chinese: '剪影',
            english: 'silhouette',
          },
          {
            chinese: '速度线',
            english: 'speed lines',
          },
          {
            chinese: '晕影',
            english: 'vignetting',
          },
        ],
      },
    ],
  },
]

export default configList
