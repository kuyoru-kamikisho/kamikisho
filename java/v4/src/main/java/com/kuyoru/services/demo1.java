package com.kuyoru.services;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;

@WebServlet("/demo1")
public class demo1 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        System.out.println(request.getParameter("id"));
        response.setStatus(200);
        response.setContentType("text/html;charset=utf-8");
        response.setHeader("content-type","text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.write("success");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }
}
