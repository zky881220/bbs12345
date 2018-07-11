package com.harmonycloud.bbs.util;

public class ResponseUtil {

    private Boolean success;

    private String message;

    private Object data;

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public static ResponseUtil returnSuccess() {
        ResponseUtil returnMap = new ResponseUtil();
        returnMap.setSuccess(true);
        return returnMap;
    }

    public static ResponseUtil returnSuccessWithData(Object data) {
        ResponseUtil returnMap = new ResponseUtil();
        returnMap.setSuccess(true);
        returnMap.setData(data);
        return returnMap;
    }

    public static ResponseUtil returnSuccessWithDataMsg(Object data, String message) {
        ResponseUtil returnMap = new ResponseUtil();
        returnMap.setSuccess(true);
        returnMap.setData(data);
        returnMap.setMessage(message);
        return returnMap;
    }

    public static ResponseUtil returnError() {
        ResponseUtil returnMap = new ResponseUtil();
        returnMap.setSuccess(false);
        return returnMap;
    }


    public static ResponseUtil returnErrorWithMsg(String message) {
        ResponseUtil returnMap = new ResponseUtil();
        returnMap.setSuccess(false);
        returnMap.setMessage(message);
        return returnMap;
    }
}
