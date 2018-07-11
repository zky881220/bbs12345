package com.harmonycloud.bbs.mapper;

import com.harmonycloud.bbs.entity.User;
import org.apache.ibatis.annotations.Mapper;

/**
 * Created by riven on 17-10-18.
 */
@Mapper
public interface UserMapper {
    User selectUser(String username);
}
