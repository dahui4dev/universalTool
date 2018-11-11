const category = [
  {
    category: '财务',
    cmpt: {
      title: '财务',
      rightButton: {
        name: '右上角',
        icon: 'icon',
        func: () => {
          alert('轮播');
        },
      },
      component: require('../view/Swiper'),
    },
    uri: BUIcon[0],
    subcate1: '信用卡',
    cmpt1: {
      title: '财务',
      rightButton: {
        name: '右上角',
        icon: 'icon',
        func: () => {
          alert('轮播');
        },
      },
      component: require('../view/Swiper'),
    },
    subcate2: '借记卡',
    cmpt2: {
      title: '财务',
      rightButton: {
        name: '右上角',
        icon: 'icon',
        func: () => {
          alert('轮播');
        },
      },
      component: require('../view/Swiper'),
    },
    subcate3: '支付宝',
    cmpt3: {
      title: '财务',
      rightButton: {
        name: '右上角',
        icon: 'icon',
        func: () => {
          alert('轮播');
        },
      },
      component: require('../view/Swiper'),
    },
    subcate4: '白条',
    cmpt4: {
      title: '财务',
      rightButton: {
        name: '右上角',
        icon: 'icon',
        func: () => {
          alert('轮播');
        },
      },
      component: require('../view/Swiper'),
    },
    bgColor: styles.sbu_red,
  },
  {category: '工作', uri: BUIcon[1], subcate1: '信用卡', subcate2: '借记卡', subcate3: '支付宝', subcate4: '白条', bgColor: styles.sbu_blue},
  {category: '工具', uri: BUIcon[2], subcate1: '信用卡', subcate2: '借记卡', subcate3: '支付宝', subcate4: '白条', bgColor: styles.sbu_green},
  {category: '技术', uri: BUIcon[3], subcate1: '信用卡', subcate2: '借记卡', subcate3: '支付宝', subcate4: '白条', bgColor: styles.sbu_yellow},
];
