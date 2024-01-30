package com.example.kzu.util;

public class EnvironmentCoreC {
    public static final String currentPath = System.getProperty("user.dir");
    public static final String getProgramPath(){
        String classPath = System.getProperty("java.class.path");
        String[] paths = classPath.split(System.getProperty("path.separator"));
        String programPath = null;

        if (paths.length > 0) {
            programPath = paths[0];
        }

        return programPath;
    }
}
