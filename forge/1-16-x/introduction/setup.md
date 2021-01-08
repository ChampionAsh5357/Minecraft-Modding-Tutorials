<link rel="stylesheet" href="../../../tabs/style.css">
<script src="../../../tabs/handler.js"></script>

# Workplace Setup
---

Hello and welcome to Minecraft modding for 1.16.x. I'm going to take this abstract to point out some information of the structuring of this and subsequent tutorials. All tutorials will be independent of each other. This means that at any time, you should be able to jump in given you have completed the prerequisites. Another thing to note is that these tutorials will be more condensed compared to previous iterations as not everything I have discussed in the past was specifically on topic. Finally, all tutorials will be handled in the latest grammar and syntax provided by the library and the language itself. This is to ensure that no time is wasted explaining known concepts and to stress on the library's design.

With that, let's get started.

## Prerequisites
---

### Java Development Kit 8

Minecraft is developed and published using Java 8. As such, you must have a valid JDK 8 instance installed on your computer. 

### Java IDE

There are a number of IDEs that can support Java. Some have integrated Gradle support as well. The ones discussed here will be [Eclipse](https://www.eclipse.org/downloads/packages/), [IntelliJ IDEA](https://www.jetbrains.com/idea/download/#section=windows), and [Visual Studio Code](https://code.visualstudio.com/), although any IDE will do fine. These three are the ones Forge has already written scripts for generating runs for however.

### Forge MDK

The [Mod Development Kit (MDK)](https://files.minecraftforge.net/) used with Forge should always be the latest. New additions to the code could provide easier and more compatible methods with creating concepts within the game itself.

The MDK is only a easy startup package for making mods. As such, it is technically optional assuming you can create a gradle project on your computer.

## Initial Extraction
---

First, you will need to extract the MDK to a directory. This holds a bunch of helper files that removes certain files from being uploaded to git or contain information about Forge itself. However, only four of these files are needed: three of which is required by Gradle. This is the `gradle` folder, `build.gradle`, `gradlew`, and `gradlew.bat`. The optional files are `src` which contains an example mod, `.gitattributes` and `gradle.properties` which provides attributes or properties respectively, `.gitignore` which prevents a file from being committed to Git, and the other files which are simply Forge related text files.

At a bare minimum, you would need the following file structure:
```
...
├── gradle
├── build.gradle
├── gradlew
└── gradlew.bat
```

The following section is a breakdown of the Gradle buildscript. I suggest reading through to get an understanding on how parts of ForgeGradle works. It also contains some useful variable changes that should be adjusted for the specific user. This will allow a user to write a minimum viable buildscript from scratch.

### Gradle Buildscript

The Gradle buildscript is what allows us to build and automate certain actions such as setting up a valid workspace or publishing a Jar. Note that the explanations here will be relatively minimal as the [user manual](https://docs.gradle.org/current/userguide/userguide.html) should be consulted whenever doing related processes. As we are using Forge, we will also be using [ForgeGradle](https://github.com/MinecraftForge/ForgeGradle) to correctly setup and utilize a workspace.

#### Migrating from 4.10.3 to 5.6.4

If you are using the MDK, it is currently shipped with Gradle 4.10.3. To upgrade this parameter to the latest working version, you need to locate `gradle/wrapper/gradle-wrapper.properties`. Within the file, you should find a `distributionUrl` which declares the location to grab the necessary version from. Replace the `gradle-X.X.X-bin.zip` with the appropriate numbers (e.g. `gradle-5.6.4-bin.zip`). Gradle 6.X currently has some compatibility issues and as such, will not be used here.

Now let's open `build.gradle` and get started.

<div class="tab">
  <button class="tablinks" onclick="openSection(event, 'Groovy')" id="defaultOpen">Groovy</button>
  <button class="tablinks" onclick="openSection(event, 'Kotlin')">Kotlin</button>
</div>

<div id="Groovy" class="tabcontent" markdown="1">
  <h3>build.gradle</h3>

  ```java
  public static void main(String[] args) {
    System.out.println("Test 1");
  }
  ```
</div>

<div id="Kotlin" class="tabcontent" markdown="1">
  <h3>build.gradle.kts</h3>
  
  ```java
  public static void main(String[] args) {
    System.out.println("Test 2");
  }
  ```
</div>

## Integrated Development Environment (IDE)
---

### Eclipse

### IntelliJ IDEA

### Visual Studio Code

---
Back to [Forge - 1.16.x](../)  
Back to [Forge Mod Loader](../../)  
Back to [Home](../../../)

<script>document.getElementById("defaultOpen").click();</script>