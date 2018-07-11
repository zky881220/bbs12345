package com.harmonycloud.bbs.util;

import java.security.MessageDigest;

public class Md5Util {
	
	
	/**
	 * MD5加密
	 * @param string
	 * @return
	 * @throws Exception
	 */
	public static String convertToMD5(String string) throws Exception{
		
		if(string==null || string.equals("")){
			return null;
		}
		
		char hexDigits[]={'0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'};
        try {
            byte[] btInput = string.getBytes();
            MessageDigest mdInst = MessageDigest.getInstance("MD5");
            mdInst.update(btInput);
            byte[] md = mdInst.digest();
            int j = md.length;
            char str[] = new char[j * 2];
            int k = 0;
            for (int i = 0; i < j; i++) {
                byte byte0 = md[i];
                str[k++] = hexDigits[byte0 >>> 4 & 0xf];
                str[k++] = hexDigits[byte0 & 0xf];
            }
            return new String(str);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }	
	}
	
}
