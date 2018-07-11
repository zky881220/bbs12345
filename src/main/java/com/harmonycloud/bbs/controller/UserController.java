package com.harmonycloud.bbs.controller;

import com.harmonycloud.bbs.entity.User;
import com.harmonycloud.bbs.service.UserService;
import com.harmonycloud.bbs.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

/**
 * Created by riven on 17-10-18.
 */
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseUtil login(@RequestParam("username") String username,
                              @RequestParam("password") String password,
                              HttpSession httpSession){
        try {
            User user = userService.selectUser(username,password);
            if(user!=null){
                httpSession.setAttribute("user",user);
                return ResponseUtil.returnSuccessWithDataMsg(user,"登录成功");
            }
            return ResponseUtil.returnErrorWithMsg("用户名或密码不正确");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseUtil.returnErrorWithMsg("系统错误");
        }
    }

    @GetMapping("/isAuth")
    public ResponseUtil isAuth(HttpSession httpSession){
        try {
            User user = (User) httpSession.getAttribute("user");
            if (user != null) {
                return ResponseUtil.returnSuccessWithDataMsg(user, "该用户存在该权限成功");
            } else {
                return ResponseUtil.returnError();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseUtil.returnErrorWithMsg("该用户存在该权限失败");
        }
    }

    @GetMapping("/logout")
    public ResponseUtil logout(HttpSession httpSession){
        try {
            httpSession.removeAttribute("user");
            return ResponseUtil.returnSuccess();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseUtil.returnErrorWithMsg("该用户存在该权限失败");
        }
    }
}
