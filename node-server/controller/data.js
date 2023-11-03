const listJson = {
  'data': {
    'list': [
      {
        'id': '44a3676b-33d6-4d69-ac08-59b8738df4b9',
        'createTime': '2023-10-25 17:41:21',
        'title': '微信小程序通过gulp把scss文件编译为wxss文件',
        'pic': 'https://qn.image.wkmblog.com/a042a450-731a-11ee-acca-bb545fbd328e.jpg',
        'publishTime': '2023-10-25 17:41:23',
        'status': 2,
        'articleColumn': {
          'id': '4da6666b-dfc3-4e44-9c81-e3d129610456',
          'name': '微信小程序'
        }
      },
      {
        'id': 'a2bf2487-502d-4e3c-bf9c-b37c3faafe8e',
        'createTime': '2023-10-25 17:37:05',
        'title': 'JS 获取url参数并保存在对象中',
        'pic': 'https://qn.image.wkmblog.com/e6155b40-7319-11ee-acca-bb545fbd328e.jpg',
        'publishTime': '2023-10-25 17:37:07',
        'status': 2,
        'articleColumn': {
          'id': 'b61d1552-4399-4556-8688-da768f74d8d0',
          'name': 'JavaScript'
        }
      },
      {
        'id': '4fb32582-9bf5-48f7-84eb-5185b1a0b536',
        'createTime': '2023-10-25 17:36:02',
        'title': '判断是否微信浏览器',
        'pic': 'https://qn.image.wkmblog.com/e6155b40-7319-11ee-acca-bb545fbd328e.jpg',
        'publishTime': '2023-10-25 17:36:05',
        'status': 2,
        'articleColumn': {
          'id': 'b61d1552-4399-4556-8688-da768f74d8d0',
          'name': 'JavaScript'
        }
      },
      {
        'id': 'f9867a3c-6da1-4f89-8ca7-3bdf76a08350',
        'createTime': '2023-10-25 17:34:33',
        'title': '微信小程序使用Canvas（2d）绘制图片',
        'pic': 'https://qn.image.wkmblog.com/4e782f60-7319-11ee-acca-bb545fbd328e.jpg',
        'publishTime': '2023-10-25 17:34:35',
        'status': 2,
        'articleColumn': {
          'id': '4da6666b-dfc3-4e44-9c81-e3d129610456',
          'name': '微信小程序'
        }
      },
      {
        'id': '5269da62-8cdc-4791-85f7-4527c56a6bed',
        'createTime': '2023-10-25 17:32:06',
        'title': '微信小程序在Page、Component中获取Canvas（2d）实例',
        'pic': 'https://qn.image.wkmblog.com/4e782f60-7319-11ee-acca-bb545fbd328e.jpg',
        'publishTime': '2023-10-25 17:32:09',
        'status': 2,
        'articleColumn': {
          'id': '4da6666b-dfc3-4e44-9c81-e3d129610456',
          'name': '微信小程序'
        }
      },
      {
        'id': 'c80e9b45-a54c-4f41-a7b0-414704ca6aa9',
        'createTime': '2023-10-25 17:25:33',
        'title': 'JavaScript验证身份证号码',
        'pic': 'https://qn.image.wkmblog.com/18df97e0-7318-11ee-8818-355afdd61b7e.jpg',
        'publishTime': '2023-10-25 17:25:28',
        'status': 2,
        'articleColumn': {
          'id': 'b61d1552-4399-4556-8688-da768f74d8d0',
          'name': 'JavaScript'
        }
      },
      {
        'id': '0ea14741-a3db-4e52-b5ba-0ec4f176a96e',
        'createTime': '2023-10-25 17:23:22',
        'title': 'JavaScript小数计算保证精度',
        'pic': 'https://qn.image.wkmblog.com/18df97e0-7318-11ee-8818-355afdd61b7e.jpg',
        'publishTime': '2023-10-25 17:18:31',
        'status': 2,
        'articleColumn': {
          'id': 'b61d1552-4399-4556-8688-da768f74d8d0',
          'name': 'JavaScript'
        }
      }
    ],
    'pages': 1,
    'total': 7
  },
  'code': 200,
  'message': 'success'
}

const infoJson = {
  'data': {
    'id': '44a3676b-33d6-4d69-ac08-59b8738df4b9',
    'title': '微信小程序通过gulp把scss文件编译为wxss文件',
    'view': 7,
    'description': '微信小程序通过gulp把scss文件编译为wxss文件',
    'keywords': '',
    'content': '<p>一、全局下载gulp</p>\n<pre class="language-shell-session"><code>npm i gulp -g</code></pre>\n<p>二、初始化npm</p>\n<pre class="language-shell-session"><code>npm init -y</code></pre>\n<p>三、项目根目录下载相关依赖</p>\n<pre class="language-shell-session"><code>npm i gulp gulp-changed gulp-rename gulp-sass gulp-watch sass -D</code></pre>\n<p>四、项目根目录创建gulpfile.js文件</p>\n<pre class="language-javascript"><code>const gulp = require(\'gulp\')\nconst sass = require(\'gulp-sass\')(require(\'sass\'))\nconst rename = require(\'gulp-rename\')\nconst changed = require(\'gulp-changed\')\nconst watcher = require(\'gulp-watch\')\n\ngulp.task(\'default\', gulp.series(function () {\n  watcher(\'../mini-code/pages/**/*.scss\', function () {\n    miniSass(\'pages\')\n  })\n  watcher(\'../mini-code/component/**/*.scss\', function () {\n    miniSass(\'component\')\n  })\n}))\n\ngulp.task(\'sass\', function () {\n  miniSass(\'pages\')\n  miniSass(\'component\')\n})\n\nfunction miniSass(folder) {\n  return gulp.src(\'../mini-code/\' + folder + \'/**/*.scss\')\n    .pipe(sass({\n      outputStyle: \'compressed\'\n    }))\n    .pipe(rename((path) =&gt; {\n      path.extname = \'.wxss\'\n    }))\n    .pipe(changed(\'../mini-code/\' + folder))\n    .pipe(gulp.dest(\'../mini-code/\' + folder))\n    .pipe(rename(path =&gt; {\n      console.log(\'编译完成文件：\' + \'..\\\\mini-code\\\\\' + folder + \'\\\\\' + path.dirname + \'\\\\\' + path.basename + \'.scss\')\n    }))\n}</code></pre>\n<p>命令行输入 gulp 就可以运行了，如果scss文件语法错误会停止监听以及编译，修改为正确的语法，重新输入 gulp 就行。</p>\n<p>目前使用这种方法同时监听pages和component两个文件夹下的scss文件，但是存在一些问题，正在寻找解决方案。</p>',
    'publishTime': '2023-10-25 17:41:23',
    'articleColumn': {
      'id': '4da6666b-dfc3-4e44-9c81-e3d129610456',
      'name': '微信小程序'
    }
  },
  'code': 200,
  'message': 'success'
}

module.exports = {
  listJson,
  infoJson
}
