package com.harmonycloud.bbs.service;

import com.harmonycloud.bbs.entity.User;

/**
 * Created by riven on 17-10-18.
 */
public interface UserService {

    User selectUser(String username,String password) throws Exception;
}
