package com.kuyoru.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.kuyoru.pojo.Tamago;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface TamagoMapper extends BaseMapper<Tamago> {
    @Select("select * from tamago where auth = #{auth};")
    Tamago queryAuth(@Param("auth") String auth);
}
