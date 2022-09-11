package com.kuyoru.services;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;

/**
 * @author Kty
 * 查询服务，该服务从数据库中查询指定用户是否存在，
 * 并验证口令的正确性
 */
@WebServlet("/Login")
public class Login extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        System.out.println("测试");

        String queryId = request.getParameter("queryId");
        String queryPwd = request.getParameter("queryPwd");

        response.setStatus(200);
        response.setContentType("text/html;charset=utf-8");
        response.setHeader("content-type", "text/html;charset=utf-8");
        PrintWriter out = response.getWriter();
        out.write("success");

        out.close();
        System.out.println("本服务结束");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }
}
