package com.harmonycloud.bbs.service.impl;

import com.harmonycloud.bbs.entity.User;
import com.harmonycloud.bbs.mapper.UserMapper;
import com.harmonycloud.bbs.service.UserService;
import com.harmonycloud.bbs.util.Md5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by riven on 17-10-18.
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public User selectUser(String username, String password) throws Exception {
        User user = userMapper.selectUser(username);
        if(user!=null){
            if(user.getPassword().equals(Md5Util.convertToMD5(password))){
              return user;
            }
        }
        return null;
    }
}
