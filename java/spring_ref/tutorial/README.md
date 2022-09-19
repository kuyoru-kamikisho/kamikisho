# Spring-Boot零基础上手

    本教程仅面向萌新，比如我；教程源：https://www.bilibili.com/video/BV15b4y1a7yG

<hr/>

## 快速入门

![img.png](img.png)

![img_1.png](img_1.png)

![img_2.png](img_2.png)

![img_3.png](img_3.png)

![img_4.png](img_4.png)

![img_5.png](img_5.png)

![img_6.png](img_6.png)

![img_7.png](img_7.png)

    上面方式需要IDEA联网，如果IDEA无法联网，则还可以使用下面这种方式：

![img_8.png](img_8.png)

    阿里云版：

![img_9.png](img_9.png)

![img_10.png](img_10.png)

    如果您的电脑本身无法联网，也可以选择手工创建，
    但是maven导包需要联网，这是一个相悖的情况。

![img_11.png](img_11.png)

![img_12.png](img_12.png)

![img_13.png](img_13.png)

![img_14.png](img_14.png)

    默认情况下IDEA并不会对我们实际上不会进行编辑的文件进行隐藏，
    如果您想隐藏一些文件，您可以选择下面这种方式

![img_15.png](img_15.png)

    为什么选择Spring boot ？

![img_16.png](img_16.png)

    parent 的作用：
    在实际开发中我们不可避免地会导入一些相同的坐标，
    比如工程A和工程B，这是两个相同的工程，意味着他们有两个一模一样的pom文件，
    面对这样的情况spring boot提出了一种坐标、版本号集中管理的方式

![img_17.png](img_17.png)

![img_18.png](img_18.png)

![img_19.png](img_19.png)

    普通的管理方式在依赖非常多的情况下意味着你需要书写太多的版本号
    同时，在不同的项目进行融合时你不知道到底是对方采用的版本号更加稳定还是自己选的更加稳定
    在spring boot 里我们无需操心版本号问题，spring boot 会自动择优录取

![img_21.png](img_21.png)

![img_20.png](img_20.png)

    starter讲解：

![img_22.png](img_22.png)

![img_23.png](img_23.png)

![img_25.png](img_25.png)

![img_24.png](img_24.png)

![img_26.png](img_26.png)

    但需要注意的是引导类不启动web服务

![img_28.png](img_28.png)

![img_27.png](img_27.png)

    内嵌tomcat：实际上是spring boot的辅助功能

![img_29.png](img_29.png)

![img_31.png](img_31.png)

    如果您不想使用tomcat作为服务器中间件，
    那么您只需要按照下图的方式为tomcat添加一个
    exclusion标签来把他排除掉
    再添加一个别的服务器即可

![img_30.png](img_30.png)

    Spring内嵌支持的服务器

![img_32.png](img_32.png)

![img_33.png](img_33.png)

![img_34.png](img_34.png)

## 什么是Rest开发？

    Rest实际上隶属于Spring MVC这方面的课程，在这里只讲加下基础。

![img_35.png](img_35.png)

    简介：在下图讲解了什么是Rest风格，其中涉及到 /saveUser 会被 /user 代替，那么 /deleteUser 呢？
    rest 也会用user代表，如何区分？根据请求行为：

![img_36.png](img_36.png)

![img_37.png](img_37.png)

![img_38.png](img_38.png)

    根据Rest风格“访问资源”称之为 Restful

    请求的方式很多 SpringBoot 支持8种。

![img_39.png](img_39.png)

    Restful 传递 url参数
    如 : .../userDelete?id=1
    变成: .../user/1

    如何指定这个参数来自请求路径呢？下图

![img_40.png](img_40.png)

### 总结

![img_41.png](img_41.png)

![img_42.png](img_42.png)

![img_43.png](img_43.png)

![img_44.png](img_44.png)

![img_45.png](img_45.png)

### 快速开发

    如下图，重复代码

![img_46.png](img_46.png)

    简化，假如类当中的 “所有” 处理请求的方法都有 @ResponseBody 注解
    那么您可以将这个注解只写到这个类上面，删去方法上的该注解

    如果 @Controller @ResponseBody 两个注解都存在，则可以使用
    @RestController代替

    请求方式的匹配也可以不手写，直接添加相应的方式注解
    如 @GetMapping

    注意，不同的java类种如果有写相同的url路径映射，则可能会冲突

![img_47.png](img_47.png)

![img_48.png](img_48.png)

![img_49.png](img_49.png)

## 优雅の复制工程

![img_50.png](img_50.png)

![img_51.png](img_51.png)

## 属性配置

![img_52.png](img_52.png)

    所有配置哪里看？

![img_53.png](img_53.png)

![img_54.png](img_54.png)

    每项配置实质上是工程依赖的引用

![img_55.png](img_55.png)

![img_56.png](img_56.png)

    痛点

![img_57.png](img_57.png)

    解决：yaml来清晰明了的配置

![img_58.png](img_58.png)

![img_59.png](img_59.png)

![img_60.png](img_60.png)

![img_61.png](img_61.png)

![img_62.png](img_62.png)

    解决yml配置文件没有提示的痛点：

![img_63.png](img_63.png)

![img_64.png](img_64.png)

![img_65.png](img_65.png)

![img_66.png](img_66.png)

    yml配置文件的格式要求 name 与 value 之间必须有空格

![img_67.png](img_67.png)

### Yaml格式讲解

![img_68.png](img_68.png)

![img_69.png](img_69.png)

![img_70.png](img_70.png)

![img_71.png](img_71.png)

![img_72.png](img_72.png)

![img_73.png](img_73.png)

![img_74.png](img_74.png)

### Yaml数据读取

![img_75.png](img_75.png)

![img_76.png](img_76.png)

![img_77.png](img_77.png)

![img_78.png](img_78.png)

![img_79.png](img_79.png)

![img_80.png](img_80.png)

    为解决上述问题读取全部属性，boot支持下述方式
    涉及的知识点：自动装配

![img_81.png](img_81.png)

![img_82.png](img_82.png)

    新痛点：封装的是全部，然而我们可能只需要其中一小部分

![img_83.png](img_83.png)

    解决：

![img_84.png](img_84.png)

    用途：

![img_85.png](img_85.png)

![img_86.png](img_86.png)

## 整合第三方技术

![img_87.png](img_87.png)

### Junit

![img_88.png](img_88.png)

![img_89.png](img_89.png)

![img_90.png](img_90.png)

    在上述方式存在小坑，与测试类的路径有关
    当测试类的路径和被测试的启动类的路径不匹配时，会报错

![img_91.png](img_91.png)

    在springboot当中如果测试类与被测试启动类所处路径不匹配，就拿不到spring这个容器，也就无法进行测试

![img_92.png](img_92.png)

![img_93.png](img_93.png)

![img_94.png](img_94.png)

### 整合Mybatis

    需要哪些信息？

![img_95.png](img_95.png)

    spring boot 新建模块的情况下

![img_96.png](img_96.png)

    spring boot start自带依赖的格式
    与整合第三方依赖的坐标id格式的不同：

![img_97.png](img_97.png)

    整合步骤1：导入starter依赖

![img_98.png](img_98.png)

    整合步骤2：写配置

![img_99.png](img_99.png)

    整合步骤3：写数据层(Mapper映射接口类)、用于装数据的实体类
    注意：数据层的类不要忘记添加@Mapper注解哦

![img_100.png](img_100.png)

    整合步骤4：测试
    你会发现我们不需要去创建mapper.xml文件
    也不需要去创建mybatis.xml配置文件

    总结：

![img_101.png](img_101.png)

    整合啥第三方框架，就导入啥坐标

![img_102.png](img_102.png)

![img_103.png](img_103.png)

![img_104.png](img_104.png)

![img_105.png](img_105.png)

![img_106.png](img_106.png)

### 整合Mybatis常见问题

![img_107.png](img_107.png)

    方案其1：

![img_108.png](img_108.png)

![img_109.png](img_109.png)

### 整合Mybatis-plus

    国人开发，spring官方未收录，因此没有可以勾选的项

![img_110.png](img_110.png)

![img_111.png](img_111.png)

    但是我们可以去使用阿里巴巴，此时mybatis、mybatis plus都要勾选

![img_112.png](img_112.png)

    另外一种方法，直接去Maven仓库查（推荐）：

![img_113.png](img_113.png)

![img_114.png](img_114.png)

![img_115.png](img_115.png)

![img_116.png](img_116.png)

![img_118.png](img_118.png)

![img_117.png](img_117.png)

### Druid

![img_119.png](img_119.png)

![img_120.png](img_120.png)

![img_121.png](img_121.png)

![img_122.png](img_122.png)

## 模块创建

    SSMP开始学习

![img_123.png](img_123.png)

    今后创建模块只需要勾选Sql 和 Web，我们使用MP来，所以不勾选mybatis

![img_124.png](img_124.png)

## 实体类快速开发（LomBok）

![img_125.png](img_125.png)

![img_126.png](img_126.png)

![img_127.png](img_127.png)

## 数据层快速开发

![img_128.png](img_128.png)

![img_129.png](img_129.png)

![img_130.png](img_130.png)

![img_131.png](img_131.png)

![img_132.png](img_132.png)

    需要插入数据时：

![img_133.png](img_133.png)

![img_134.png](img_134.png)

![img_135.png](img_135.png)

    base mapper千万别忘了指定泛型

![img_136.png](img_136.png)

![img_137.png](img_137.png)

![img_138.png](img_138.png)

## MP日志（选学）

![img_139.png](img_139.png)

![img_140.png](img_140.png)

## 分页

![img_141.png](img_141.png)

    需要添加MP阻拦器才能生效
    另建一个config包，包下写这个配置
    作用，动态生成sql

![img_142.png](img_142.png)

    原理解释：

![img_143.png](img_143.png)

    总结

![img_144.png](img_144.png)

![img_145.png](img_145.png)

![img_146.png](img_146.png)

## 条件查询（数据层标准开发）

![img_147.png](img_147.png)

![img_148.png](img_148.png)

![img_149.png](img_149.png)

## 业务层标准开发（CRUD）

    如登录是业务层，select是数据层

![img_150.png](img_150.png)

![img_151.png](img_151.png)

![img_152.png](img_152.png)

![img_153.png](img_153.png)

    总结：

![img_154.png](img_154.png)

![img_155.png](img_155.png)

![img_156.png](img_156.png)

![img_157.png](img_157.png)

## 业务层快速开发-MP

![img_158.png](img_158.png)

![img_160.png](img_160.png)

    第一个泛型是你用的实现类,第二个是对应的模型类

![img_159.png](img_159.png)

    总结

![img_161.png](img_161.png)

![img_162.png](img_162.png)

![img_163.png](img_163.png)

![img_164.png](img_164.png)

![img_165.png](img_165.png)

## 表现层标准开发

![img_166.png](img_166.png)

![img_167.png](img_167.png)

![img_168.png](img_168.png)

![img_169.png](img_169.png)

![img_170.png](img_170.png)

![img_171.png](img_171.png)

## 表现层消息类型一致性处理

    痛点:

![img_172.png](img_172.png)

    统一:

![img_173.png](img_173.png)

![img_174.png](img_174.png)

![img_175.png](img_175.png)

    类:

![img_176.png](img_176.png)

![img_177.png](img_177.png)

    使用示例:

![img_178.png](img_178.png)

![img_180.png](img_180.png)

![img_179.png](img_179.png)

![img_181.png](img_181.png)

## 前后端协议联调

    clean:maven clean
    静态资源，即前端文件放在resource/static目录下

![img_182.png](img_182.png)

![img_183.png](img_183.png)

![img_184.png](img_184.png)

