function cert_check() {
        var acc = 0;
        d0 = document.getElementById('display_id').value.charAt(0);
        d1 = document.getElementById('display_id').value.charAt(1);
        d2 = document.getElementById('display_id').value.charAt(2);
        d3 = document.getElementById('display_id').value.charAt(3);
        d4 = document.getElementById('display_id').value.charAt(4);
        d5 = document.getElementById('display_id').value.charAt(5);
        d6 = document.getElementById('display_id').value.charAt(6);
        d7 = document.getElementById('display_id').value.charAt(7);
        d8 = document.getElementById('display_id').value.charAt(8);
        d9 = document.getElementById('display_id').value.charAt(9);
        if ((d0 == "A") || (d0 == "a")) { acc = 10; }
        else if ((d0 == "B") || (d0 == "b")) { acc = 11; }
        else if ((d0 == "C") || (d0 == "c")) { acc = 12; }
        else if ((d0 == "D") || (d0 == "d")) { acc = 13; }
        else if ((d0 == "E") || (d0 == "e")) { acc = 14; }
        else if ((d0 == "F") || (d0 == "f")) { acc = 15; }
        else if ((d0 == "G") || (d0 == "g")) { acc = 16; }
        else if ((d0 == "H") || (d0 == "h")) { acc = 17; }
        else if ((d0 == "J") || (d0 == "j")) { acc = 18; }
        else if ((d0 == "K") || (d0 == "k")) { acc = 19; }
        else if ((d0 == "L") || (d0 == "l")) { acc = 20; }
        else if ((d0 == "M") || (d0 == "m")) { acc = 21; }
        else if ((d0 == "N") || (d0 == "n")) { acc = 22; }
        else if ((d0 == "P") || (d0 == "p")) { acc = 23; }
        else if ((d0 == "Q") || (d0 == "q")) { acc = 24; }
        else if ((d0 == "R") || (d0 == "r")) { acc = 25; }
        else if ((d0 == "S") || (d0 == "s")) { acc = 26; }
        else if ((d0 == "T") || (d0 == "t")) { acc = 27; }
        else if ((d0 == "U") || (d0 == "u")) { acc = 28; }
        else if ((d0 == "V") || (d0 == "v")) { acc = 29; }
        else if ((d0 == "X") || (d0 == "x")) { acc = 30; }
        else if ((d0 == "Y") || (d0 == "y")) { acc = 31; }
        else if ((d0 == "W") || (d0 == "w")) { acc = 32; }
        else if ((d0 == "Z") || (d0 == "z")) { acc = 33; }
        else if ((d0 == "I") || (d0 == "i")) { acc = 34; }
        else if ((d0 == "O") || (d0 == "o")) { acc = 35; }
        if (acc == 0) {
                //alert("請輸入『身份證號碼』的第一個英文字母！");
                return false;
        } else {
                accstr = new String(acc);
                acc_1 = (accstr).charAt(0);
                acc_2 = (accstr).charAt(1);
                certsum = 1*acc_1 + 9*acc_2 + 8*d1 + 7*d2 + 6*d3 + 5*d4 + 4*d5 + 3*d6 + 2*d7 + 1*d8;
                certsum_2 = parseInt(certsum%10);
                certsum_3 = 10 - certsum_2;
				if(certsum_2 == 0){
					certsum_3 = 0;
				}

                if (certsum_3 != d9) {
                		//alert("您的身份證字號的規格不符！");
                       return false;
                }else{
                       return true;
		}
				
				
        }
}		

//確認是否為Email
function checkEmail(strEmail) {
	emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;	
	if(strEmail.search(emailRule)!= -1){
		return true;
	}else{
		return false; 
	}
}

//檢查必填
function checkJoin(){
	
	var checkCount = 0;
	
	//姓名
	if( $("form#sendForm #display_name").val() == "" ){
		alert("請輸入您的真實姓名！");
		$("form#sendForm #display_name").focus();
		return false;
	}else{
		var name = $("form#sendForm #display_name").val();
		if (name.search(/^[\u4e00-\u9fa5a-zA-Z]+$/)!=-1) {
		}else{
			alert("姓名格式不符，不可含有數字與特殊符號！");
			$("form#sendForm #display_name").focus();
			return false;
		}
	}
	
	//性別
	var itemGender = $('input[name=gender]:checked').val();
	if((typeof itemGender == "undefined") | (typeof itemGender == "")){
		alert("請選擇您的性別！");
		$("input[name=gender]")[0].focus();
		return false;
	}
	
	//身分證字號
	if( $("form#sendForm #display_id").val() == "" ){
		alert("請輸入您的身分證字號！");
		$("form#sendForm #display_id").focus();
		return false;
	}else{
		var data = $("form#sendForm #display_id").val();
		if(data.length != 10){
			alert("請填入正確的身份證字號(字元數共10位)！");
			$("form#sendForm #display_id").focus();
			return false;
		}
		
		data1=data.substr(0,1);
		data1=data1.match(/[a-zA-Z]{1}/)
		
		if(data1==null){
			alert("身份證字號第一個字元必須為英文字母！");
			$("form#sendForm #display_id").focus();
			return false;
		}
		
		data2=data.substr(1,9);
		data3=data2.match(/\d{9}/);
		if(data3 == null){
			alert("英文字的後面九位數要為數字！");
			$("form#sendForm #display_id").focus();
			return false;
		}
		
		if(cert_check()){
			//設定性別
			var sexCheck = data.substr(1,1);
			if(sexCheck == '1'){
				$("input[name=gender][value='1']").prop('checked',true);
			}else if(sexCheck == '2'){
				$("input[name=gender][value='2']").prop('checked',true);
			}
			//return true;
		}else{
			alert("請填入正確的身份證字號！");
			$("form#sendForm #display_id").focus();
			return false;
		}
	}
	
	//生日
	if( $("form#sendForm #birthday").val() != "" ){
		dstText = $("form#sendForm #birthday").val();
		data = dstText.match(/^\d{4}\d{2}\d{2}/);
		if(data != dstText){
			alert("請輸入正確的生日；格式為19810125！");
			$("form#sendForm #birthday").focus();
			return false;
		}
		var year = dstText.slice(0,4);
		var month = parseInt(dstText.slice(4,6), 10);
		var day = parseInt(dstText.slice(6,8), 10);
	
		if(year <= 1910){
			alert("請輸入正確的生日年度；格式為19810125！");
			$("form#sendForm #birthday").focus();
			return false;
		}
		if((month <= 0) || (month >= 13)){
			alert("請輸入正確的生日月份；格式為19810125！");
			$("form#sendForm #birthday").focus();
			return false;
		}
		if((day <= 0) || (day >= 32)){
			alert("請輸入正確的生日日期；格式為19810125！");
			$("form#sendForm #birthday").focus();
			return false;
		}
	
	}else{
		alert("請輸入生日西元年月日共八碼(如19820125)");
		$("form#sendForm #birthday").focus();
		return false;
	}	
	
	//行動電話
	if( $("form#sendForm #phone").val() != "" ){
		var str = $("form#sendForm #phone").val();
		var re = /^09[0-9]{8}$/; 
		if (!re.test(str)) { 
			alert("行動電話格式錯誤；格式為0910123456！");
			$("form#sendForm #phone").focus();
			return false;
		}	
	}else{
		alert("請輸入您的手機號碼(如0910123456)");
		$("form#sendForm #phone").focus();
		return false;
	}	
	
	//電子信箱
	if( $("form#sendForm #email").val() == "" ){
		alert("請輸入您的有效EMAIL！");
		$("form#sendForm #email").focus();
		return false;
	}else{
		var strEmail = $("form#sendForm #email").val();
		if(!checkEmail(strEmail)){
			alert("電子信箱格式有誤！請填寫正確的電子信箱！");
			$("form#sendForm #email").focus();
			return false;
		}
	}
	
	//條約內容
	if($( "#skm_memberClause" ).prop('checked')){
	}else{
		alert("請先閱讀新光三越美食會員權益及使用約定條款！");
		$("form#sendForm #skm_memberClause").focus();
		return false;
	}
	
	
	$("#bottonDataId").addClass("button_change");
	$("#bottonDataId").html('<img src="images/loading.gif" border="0" align="absmiddle">　資料送出中，請稍後..');
	
	$.ajax({
		type: "POST",
		url: "ajax/add_member_ws.php",
		data: $("#sendForm").serialize(),
		dataType: "json",
		cache: false,
		success: function(data) {
			
			$("#bottonDataId").removeClass("button_change");
			$("#bottonDataId").html('<input type="button" name="submit_button" id="submit_button" value="確認送出" onclick="checkJoin();">');
			
			if((data['status'] == "Y") | (data['status'] == "N7")){
				alert("已開通美食地圖會員。");
				location.href = "https://rsv.skm.com.tw/";
			}else if(data['status'] == "N1"){
				alert("會員帳號或密碼不正確，請重新填寫！");
			}else if(data['status'] == "N2"){
				alert("會員帳號重覆，請重新填寫！");
			}else if(data['status'] == "N3"){
				alert("系統發生錯誤，請稍後再試！");
			}else if(data['status'] == "N4"){
				alert("身份證字號或生日不正確！");
			}else if(data['status'] == "N5"){
				alert("您已填寫過線上申請單或您已是貴賓卡/美食會員；請前往任一分店完成發卡作業，或直接登入。");
				location.href = "https://rsv.skm.com.tw/";
			}else if(data['status'] == "N6"){
				alert("系統忙碌中，請稍後再試！");
			}else if(data['status'] == "A"){
				alert("申請人未滿20歲須法定代理人簽名同意，請您填寫紙本申請書申辦！");
			}else if(data['status'] == "B"){
				alert("申請人須滿16歲以上，方可申辦美食地圖會員！");
			}else if(data['status'] == "N"){
				alert("系統忙碌中，請稍後再試！");
			}else if(data['status'] == "error_link"){
				alert("系統忙碌中，請稍後再試！");
			}
			
		},
		error: function(msg){
			alert("系統忙碌中，請稍後再試！");
		}
	});
	
}

//檢查年齡
function checkAge(){
	
	var birthday = $("form#sendForm #birthday").val();
	
	$.ajax({
		type: "POST",
		url: "ajax/check_member_age.php",
		data: {
			birthday: birthday
		},
		dataType: "json",
		cache: false,
		success: function(data) {
			if(data == "A"){
				alert("申請人未滿20歲須法定代理人簽名同意，請您填寫紙本申請書申辦！");
			}else if(data == "B"){
				alert("申請人須滿16歲以上，方可申辦美食地圖會員！");
			}
		}
	});
}

