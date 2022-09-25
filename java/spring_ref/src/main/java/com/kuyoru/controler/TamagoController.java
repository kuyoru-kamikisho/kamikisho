package com.kuyoru.controler;

import com.kuyoru.mapper.TamagoMapper;
import com.kuyoru.pojo.Tamago;
import com.kuyoru.utils.KTool;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author Kty
 * 请求的参数有v1,v2,h1,h2...
 */
@Slf4j
@RestController
@RequestMapping("/Tamago")
public class TamagoController {
    @Autowired
    private TamagoMapper tamagoMapper;

    @PostMapping
    public String net(@RequestParam String type, @RequestParam String auth) {
        switch (type) {
            case "v1":
                log.info("v1 has been asked." + "\t口令：" + auth);
                return callKey(auth, "tamago-key.v1.json");
            case "v2":
                log.info("v2 has been asked." + "\t口令：" + auth);
                return callKey(auth, "tamago-key.v2.json");
            case "h1":
                log.info("h1 has been asked." + "\t口令：" + auth);
                return callKey(auth, "tamago-key.h1.json");
            case "h2":
                log.info("h2 has been asked." + "\t口令：" + auth);
                return callKey(auth, "tamago-key.h2.json");
            default:
                return "Something error";
        }
    }

    private String callKey(String auth, String jsonFile) {
        if (tamagoAuthV1(auth)) {
            return KTool.tamago(jsonFile);
        } else {
            return "耀眼的金砂旋转了几圈之后，又重归原样，看来神机枢管理者将这个文书的权限设置的很低，导致你无法拿到任何钥匙";
        }

    }

    /**
     * <strong>Tamago专用</strong>
     * <br> 验证授权
     *
     * @param auth 验证文书
     * @return 布尔值，文书的有效性
     */
    private boolean tamagoAuthV1(String auth) {
        Tamago tamago = tamagoMapper.queryAuth(auth);
        if (tamago != null) {
            if (tamago.getV1()) {
                return true;
            }
        }
        return false;
    }

    /**
     * <strong>Tamago专用</strong>
     * <br> 验证授权
     *
     * @param auth 验证文书
     * @return 布尔值，文书的有效性
     */
    private boolean tamagoAuthV2(String auth) {
        Tamago tamago = tamagoMapper.queryAuth(auth);
        if (tamago != null) {
            if (tamago.getV2()) {
                return true;
            }
        }
        return false;
    }

    /**
     * <strong>Tamago专用</strong>
     * <br> 验证授权
     *
     * @param auth 验证文书
     * @return 布尔值，文书的有效性
     */
    private boolean tamagoAuthH1(String auth) {
        Tamago tamago = tamagoMapper.queryAuth(auth);
        if (tamago != null) {
            if (tamago.getH1()) {
                return true;
            }
        }
        return false;
    }

    /**
     * <strong>Tamago专用</strong>
     * <br> 验证授权
     *
     * @param auth 验证文书
     * @return 布尔值，文书的有效性
     */
    private boolean tamagoAuthH2(String auth) {
        Tamago tamago = tamagoMapper.queryAuth(auth);
        if (tamago != null) {
            if (tamago.getH2()) {
                return true;
            }
        }
        return false;
    }

}
