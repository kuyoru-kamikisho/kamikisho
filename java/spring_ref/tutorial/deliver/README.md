# Linux发布

    基于maven结构的spring-boot项目的发布

- [Linux发布](#linux发布)
  - [配置java环境](#配置java环境)
    - [检测系统架构](#检测系统架构)
    - [下载相应的jdk包](#下载相应的jdk包)
  - [发布/部署项目](#发布部署项目)
  - [结束语](#结束语)

## 配置java环境

    要选择适合你的Unix系统架构的jdk包，比如amd64（x86_64）或者arm64

### 检测系统架构

```shell
# 查看系统架构_方式1
uname -m

# 查看系统架构_方式2

dpkg --print-architecture

# 查看位数
getconf LONG_BIT
```

### 下载相应的jdk包

因为本项目使用的jdk版本为17，所以以17为例

1. [在此处选择合适的jdk包](https://www.oracle.com/java/technologies/downloads/#java17)

2. 上传到服务器，解压到你想要的目录，本例上传到/root
   
3. 解压
```shell
# 解压后目录名为 jdk-17.0.4.1
tar -zxvf jdk-17_linux-x64_bin.tar.gz
```

4. 配置环境变量
```shell
# jdk evn
JAVA_HOME=$HOME/jdk-17.0.4.1
PATH=$JAVA_HOME/bin:$PATH
CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

export JAVA_HOME
export PATH
export CLASSPATH

# The following configurations are unnecessary for the spring boot project
# tomcat evn
CATALINA_HOME=$HOME/tomcat8
export CATALINA_HOME
```

5. 使刚刚做的配置生效
```shell
source /etc/profile
```

6. 验证jdk是否配置成功
```shell
java -version
```

7. 如果需要配置tomcat

  **注意：** springboot项目部署不需要关心如何配置tomcat，因此本步骤可以忽略直接看第8步。

  - 在此下载合适的tomcat软件包
    - [tomcat官网](https://tomcat.apache.org/)
   
  - 解压，配置tomcat的catalina.sh文件
    - 进入tomcat的bin目录
  
      `cd $CATALINA_HOME/bin`
      
      `vi catalina.sh`

  - 找到 # OS specific support，然后在这行下面添加以下配置
  ```shell
   # OS specific support.  $var _must_ be set to either true or false.
   CATALINA_HOME=/root/tomcat8
   JAVA_HOME=/root/jdk-17.0.4.1
   #保存退出
  ```

  - 配置tomcat的环境变量
  
    在上面的 [配置java环境](#配置java环境) 章节中已经写到相关配置，不再赘述。
  
  - 试启动tomcat
  ```shell
  cd $CATALINA_HOME/bin
  . catalina.sh run
  ```

## 发布/部署项目

springboot的maven项目要确保有以下坐标：

```xml
    <build>
        <plugins>
            <plugin>
                <!-- spring boot 插件 -->
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
            <plugin>
                <!--排除测试类对打包的干扰-->
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <configuration>
                    <testFailureIgnore>true</testFailureIgnore>
                </configuration>
            </plugin>
        </plugins>
    </build>
```

1. idea中右键项目源码目录，运行 `maven package`
2.  执行完毕后target目录下会生成一个jar包，这就是我们想要的，注意，target目录与这个jar包是直系父子关系，不存在中间目录（如果需要输出到自定义目录请另行配置）
3.  把上述步骤生成的jar包上传至服务器
4.  运行 `java -jar the_package.jar` 即可
5.  如果需要更改端口，您可以更改spring boot项目的配置文件(yml)。

## 结束语

springboot内置tomcat确实让整个项目的构建与发布变得极其简单，我们不需要关注`context path`，想要修改端口或网站的根我们只需要修改yml配置文件，换言之我们只需要关注业务逻辑即可，真是太棒了。如果需要将运行日志保存至文件等其他操作，需要您具备一定的linux基础知识，本文不做详述。
