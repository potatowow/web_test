<!DOCTYPE html>
	<html lang="zh-Hant-TW">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="skm_signup_styles.css">
        <script type="text/javascript" src="scripts/jquery-1.10.2.min.js"></script>
        <script type="text/javascript" src="scripts/check_join.js"></script>
        
		<script language="javascript" type="text/javascript">
        $(function(){
            // 先取得 #terms 及其各種高度
            // 判斷是否停用 $submit
            var $terms = $('#terms'),
                _height = $terms.height(), 
                _scrollHeight =  $terms.prop('scrollHeight'), 
                _maxScrollHeight = _scrollHeight - _height - 20;
                _least = 10, // 距離底部多少就可以, 0 表示得完全到底部
                $submit = $('#skm_memberClause').prop('disabled', _maxScrollHeight > _least);
        
            // 當 #terms 中捲軸捲動時
            $('#terms').scroll(function(){
                var $this = $(this);
                // 如果高度已經達到指定的高度就啟用 $submit
                if((_maxScrollHeight - $this.scrollTop()) <= _least){
                    $('#skm_memberClause').removeProp('disabled');
                }		
            });
            
        });
		
		$(document).ready(function() {
		
			$('#display_id').blur(function(event){
				
				//身分證字號
				if( $("form#sendForm #display_id").val() == "" ){
					alert("請輸入您的身分證字號！");
					return false;
				}else{
					var data = $("form#sendForm #display_id").val();
					if(data.length != 10){
						alert("請填入正確的身份證字號(字元數共10位)！");
						return false;
					}
					
					data1=data.substr(0,1);
					data1=data1.match(/[a-zA-Z]{1}/)
					
					if(data1==null){
						alert("身份證字號第一個字元必須為英文字母！");
						return false;
					}
					
					data2=data.substr(1,9);
					data3=data2.match(/\d{9}/);
					if(data3 == null){
						alert("英文字的後面九位數要為數字！");
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
						return false;
					}
					
				}
				
			 });	
		});
        </script>
	</head>
	<body>
		<div class="signin_form">
			<div class="form_body">
				<h3>新光三越美食地圖會員申請單<br><span class="notice red-star">*為必填欄位</span></h3>
				<form method="POST" name="sendForm" id="sendForm">
					<div class="form_block">
						<label for="display_name" class="input_title">
							<span class="red-star">*</span>姓名
						</label>
						<div class="input_form">
							<input type="text" class="form_styles" name="display_name" id="display_name" placeholder="請輸入您的真實姓名">
						</div>
						<div class="clear"></div>
					</div>
					<div class="form_block">
						<label for="gender" class="input_title">
							<span class="red-star">*</span>性別
						</label>
						<div class="radio_styles">
							<input type="radio" name="gender" value="1"><span>男</span>
							<input type="radio" name="gender" value="2"><span>女</span>
						</div>
						<div class="clear"></div>
					</div>
					<div class="form_block">
						<label for="display_id" class="input_title">
							<span class="red-star">*</span>身分證字號
						</label>
						<!--
                        <div class="radio_styles">
							<input type="radio" name="nation" value="0" checked="checked"><span>身分證字號</span>
							<input type="radio" name="nation" value="1"><span>護照號碼</span>
						</div>
                        -->
						<div class="input_form">
							<input type="text" class="form_styles" name="display_id" id="display_id" placeholder="請輸入您的身分證字號">
						</div>
						<div class="clear"></div>
					</div>
					<div class="form_block">
						<label for="birthday" class="input_title">
							<span class="red-star">*</span>西元年生日<br>
                            <span style="color:#ff0000;font-size:12px;">此為登入密碼</span>
						</label>
						<div class="input_form">
							<input type="text" class="form_styles" name="birthday" id="birthday" placeholder="請輸入生日西元年月日共八碼(如19820125)" onblur="checkAge();">
						</div>
						<div class="clear"></div>
					</div>
					<div class="form_block">
						<label for="phone" class="input_title">
							<span class="red-star">*</span>行動電話
						</label>
						<div class="input_form">
							<input type="text" class="form_styles" name="phone" id="phone" placeholder="請輸入您的手機號碼(如0910123456)">
						</div>
						<div class="clear"></div>
					</div>
					<div class="form_block">
						<label for="phone" class="input_title">
							<span class="red-star">*</span>電子信箱
						</label>
						<div class="input_form">
							<input type="text" class="form_styles" name="email" id="email" placeholder="請輸入您的有效EMAIL">
						</div>
						<div class="clear"></div>
					</div>
					<div class="skm_memberClause">
						<label for="skm_memberClause" class="treatbox_title">
							<span class="red-star">*</span>新光三越美食地圖會員權益及使用約定條款
						</label>
						<div class="treatbox" id="terms">
							<div class="treatbox_content">
								<div>一. 新光三越美食地圖會員權益</div>
								<ol>
									<li>線上訂位服務：享有部分餐廳線上訂位服務。</li>
									<li>線上候位服務：享有部分餐廳線上候位服務。</li>
									<li>訂候位記錄查詢：可查詢訂位與候位記錄。</li>
								</ol>
								<div>二. 約定條款及個資說明書</div>
								<ul>
									<li>第一條 會員資格<br>申請人須年滿十六歲以上，且完整填寫個人資料，經新光三越驗證後即可申辦。</li>
									<li>第二條 申請辦法
										<ol>
											<li>本會員限非新光三越貴賓卡會員，且僅供享有線上訂候位之服務。若需申辦新光三越貴賓卡會員，請至新光三越官網或各店服務台辦理。</li>
											<li>本會員自辦理新光三越貴賓卡後其美食地圖會員身份立即失效，以貴賓卡身分登入即可，並以新光三越貴賓卡身份代替原有權益。</li>
										</ol>
									</li>
									<li>
										第三條 權利之保留及變更
										<ol>
											<li>新光三越保有本會員之核准、停用、註銷及隨時修改、變更或終止訂候位相關服務之權利。</li>
											<li>新光三越得隨時修改或變更會員權益及相關辦法，並將修改或變更於新光三越百貨商場或新光三越官網公告後立即生效；有關本會員各項最新使用規則、會員權益、標識符號、合作廠商、活動內容等相關資訊，以新光三越公告或新光三越官網訊息為準，新光三越將不定期更新或變更之。</li>
											<li>本申請書如有部分無效時，不影響其他有效條款之效力。</li>
										</ol>
									</li>
									<li>
										第四條 個人資料提供及新光三越告知事項<br>
										申請人同意新光三越蒐集會員資料及個人訂候位記錄等相關資料，將依個人資料保護法第八條規定，蒐集、處理及使用，並告知如下：
										<ol>
											<li>個人資料蒐集目的：行銷、法人對本會員名冊之內部管理、調查、統計與研究分析、非公務機關依法定義務所進行個人資料之蒐集處理及利用、契約、類似契約或其他法律關係事務、消費者、客戶管理與服務、稅務行政、網路購物及其他電子商務服務。</li>
											<li>本會員同意新光三越、新光三越之關係企業得於前述蒐集目的範圍內，蒐集、處理及利用申請人個人資料;並得提供申請人全部或部分個人資料予合作廠商，以便提供各項優惠權益及獲得各種促銷活動訊息。</li>
											<li>個人資料之類別：姓名、生日、身分證字號、手機號瑪、訂候位記錄時間、店點等餐廳訂候位資料。</li>
											<li>個人資料利用之地區、期間：新光三越營運地區及依法保存會計憑證期限內。</li>
											<li>本人知悉依個人資料保護法及相關法令之規定，本人就所提供之個人資料得行使：
												<br>A. 查詢或請求閱覽
												<br>B. 請求補充或更正
												<br>C. 請求停止蒐集、處理或利用
												<br>D. 請求刪除
											</li>
											<li>本會員退會或要求刪除個人資料時，將無法享有美食地圖線上會員之權益，也無法再繼續申辦。</li>
										</ol>
									</li>
									<li>第五條 準據法及管轄法院<br>本會員權益之解釋以中華民國法律為準據法。倘因此涉訟時，合意以台灣台北地方法院為第一審管轄法院。</li>
									<li>第六條 效益<br>本人已詳閱會員權益及前述說明，並充分了解相關內容。本人認知如不願意提供完整個人資料給新光三越，將無法成為會員享有新光三越美食訂候位之服務。</li>
								</ul>
							</div>
						</div>
						<div>
							<input type="checkbox" name="skm_memberClause" id="skm_memberClause" class="radio_styles" value="Y" disabled><span>我已詳閱、了解並接受上述權益與約定條款</span>
						</div>
					</div>
					<div class="notice">
						<p>*此會員申請僅提供美食地圖訂候位服務，若需申請新光三越貴賓卡請至官網申請辦理</p>
					</div>
					<div id="bottonDataId">
						<input type="button" name="submit_button" id="submit_button" value="確認送出" onclick="checkJoin();">
					</div>
				</form>
			</div>
		</div>
	</body>
	</html>	