import React from "react";
import "../styles/TeaGifts.css";
import TeaLogo1 from "../images/TeaGifts_Images/happy-holidays.png";
import TeaLogo2 from "../images/TeaGifts_Images/wedding.png";

function TeaGifts() {
	return (
		<div className="tea__gifts">
			<h1 id="heading">Tea Gifts</h1>

			<div className="container">
				<p id="content">
					If you are looking for a small and attractive tea gift for your special
					occasions-be it corporate events like holidays or farewells, or family events
					like marriages, we can help you! Send us your message and design, artwork, logos, etc., we generate
					the custom labels, and send you your tea packets ready to be gifted. Please see our page <a href='/private-label-teas'>Private Label Teas</a> for more details. Below are a
					couple of examples of the tea gift labels we have done; the <a href='/private-label-teas'>Private Label Teas</a> page has more
					examples.</p>

				<table border="0" cellPadding="0" cellSpacing="0" bordercolor="#111111" width="70%" id="AutoNumber4">
					<tbody>
						<tr>
							<td width="30%" align="center" valign="top">
								&nbsp;</td>
							<td width="70%" align="center" valign="top">
								<img border="0" src={TeaLogo1} width="278" height="104" />&nbsp;</td>
							<td width="50%" align="center" valign="top">
								<img border="0" src={TeaLogo2} width="279" height="105" /></td>
						</tr>
						<tr>
							<td width="30%" align="center">&nbsp;</td>
							<td width="70%" align="center">
								&nbsp;</td>
							<td width="50%" align="center">&nbsp;</td>
						</tr>
					</tbody>
				</table>
				<h5>Questions?
					<p>Please email us or call us!</p></h5>
				<hr></hr>
			</div>
		</div>
	);
}

export default TeaGifts;
