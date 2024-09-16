var s = document.createElement('script');
s.src = 'https://vpaid.vidoomy.com/player/latest/vidoomy-player.js';
s.setAttribute('class', 'vdm-p');
s.onload = function() {
    new top.vidoomy.main.VidoomyPlayer({
        htmlConfig: {
            type: 'slider',
            width: 400,
            height: 225,
            widthMbl: 400,
            heightMbl: 225,
            closeText: 'CLOSE AD',
            closeTextMbl: 'CLOSE AD',
            appearAt: 'right',
            appearAtMbl: 'right',
            margin: '0px 0px 0px 0px',
            marginMbl: '0px 0px 0px 0px',
            controls: {
              volume: true
            }
        },
        dataConfig: {
            siteId: '22088',
            zoneIdMbl: '30106',
            zoneId: '30105',
            passback: ``,
            passbackMbl: ``,
            delay: 0,
            delayMbl: 0,
            pid: 63940,
            playerHandleWrappers: true,
            prebidOnGPT: false,
            loop: 0, useNewDataGiver: true, usePrebidTags: true, collectHTML: true
        },
        pixels: [
            {event: 'AdFormatLoad', url: 'https://ads.stickyadstv.com/user-matching?id=3474&_fw_gdpr={{GDPR}}&_fw_gdpr_consent={{GDPRCS}}'},
            {event: 'AdFormatLoad', url: 'https://image8.pubmatic.com/AdServer/ImgSync?p=165144&gdpr={{GDPR}}&gdpr_consent={{GDPR_CONSENT}}&us_privacy=&pu=https%3A%2F%2Fa.vidoomy.com%2Fapi%2Frtbserver%2Fcookie%3Fi%3Dpubmatic%26uid%3D%23PMUID'},
            {event: 'AdFormatLoad', url: 'https://ssbsync.smartadserver.com/api/sync?callerId=161&gdpr={GDPR}}&gdpr_consent={GDPRCS}}'},
            {event: 'AdFormatLoad', url: 'https://pixel-sync.sitescout.com/dmp/pixelSync?gdpr={{GDPR}}&gdpr_consent={GDPRCS}}&nid=120&redir=https%3A%2F%2Fa.vidoomy.com%2Fapi%2Frtbserver%2Fcookie%3Fi%3DCEN%26uid%3D%7BuserId%7D'},
            {event: 'AdFormatLoad', url: 'https://cm.adform.net/cookie?gdpr={{GDPR}}&gdpr_consent={{GDPR_CONSENT}}&redirect_url=https%3A%2F%2Fa.vidoomy.com%2Fapi%2Frtbserver%2Fcookie%3Fi%3Dadf%26uid%3D%24UID'},
            {event: 'AdFormatLoad', url: 'https://rtb.openx.net/sync/prebid?gdpr={{GDPR}}&gdpr_consent={{GDPR_CONSENT}}&r=https%3A%2F%2Fa.vidoomy.com%2Fapi%2Frtbserver%2Fcookie%3Fi%3Dopenx%26uid%3D%24%7BUID%7D'},
            {event: 'AdFormatLoad', url: 'https://match.sharethrough.com/universal/v1?supply_id=YITCrBqH'},
            {event: 'AdFormatLoad', url: 'https://sync.1rx.io/usersync2/rmpssp?sub=vidoomy'},
            {event: 'AdFormatLoad', url: 'https://ib.adnxs.com/getuid?https%3A%2F%2Fa.vidoomy.com%2Fapi%2Frtbserver%2Fcookie%3Fi%3Dxandr%26uid%3D%24UID&gdpr={{GDPR}}&gdpr_consent={{GDPRCS}}'}
        ],
        
    }, top);
}
top.document.head.appendChild(s);
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(7(){7 r(1f,s){1H t=j.5.Z(s);h(1G(t)==\'1F\'||t==1E){b 3=5.1b(\'3\');3.6=1f;3.14=1;3.o=1;3.13=s;3.m.X=\'W\';3.m.o=\'1D\';3.12=\'\';j.5.9.11(3)}}7 q(){r(\'e://x.1C.1B/1e?1A=1z\',\'1d-i-1y\');r(\'e://1x.1w.k/1v-1u-1e\',\'1d-i-1t\')}h(5.1c===\'1s\'||5.1c===\'1r\'){q()}1q{5.1p("1o",7(){q()})}})();7 l(6,n){b 3=5.1b(\'3\');1a(6.19(\'[d]\')>-1){b f=g.18(g.f()*1n).17();6=6.16(\'[d]\',f)}1a(6.19(\'[c]\')>-1){b 15=g.18(1m.1l()/1k).17();6=6.16(\'[c]\',15)}3.6=6;3.14=1;3.o=1;3.13=\'Y-i\'+n;3.12=\'\';b 9=j?.5?.9||V?.5?.9;h(9){9.11(3);j.5.Z(\'Y-i\'+n).m.X=\'W\'}}l(\'e://U.T.k/p?S=2&R=Q&P=2.O.10&N=M&L=a&K=4.0.0&J=1&I=1&H=[d]&G=1&F=1&E=1j&D=C&B=0&A=0&z=y&w=&v=&u=[c]\',1);V.1i(7(){h(g.f()<.8){l(\'e://U.T.k/p?S=2&R=Q&P=2.O.10&N=M&L=a&K=4.0.0&J=1&I=1&H=[d]&G=1&F=1&E=1h&D=C&B=0&A=0&z=y&w=&v=&u=[c]\',2)}},1g);',62,106,'|||img||document|src|function||body||const|TIME_STAMP|RANDOM_NUMBER|https|random|Math|if|px|top|com|fireScoreCardPixel|style|ra|height||fireSyPxs|fireSyPx|pxid|ifPxAdded|ns_ts|c6|c4||vidoomynet|c3|ns_st_pt|ns_st_cl|va|ns_st_ct|ns_st_ev|ns_st_cn|ns_st_ec|ns_st_id|ns_st_sq|ns_st_ad|ns_st_sv|ns_st_it|hidden|ns_type|1511|ns_ap_sv|34403499|c2|c1|scorecardresearch|sb|window|none|display|fire|getElementById||appendChild|alt|id|width|timest|replace|toString|floor|indexOf|while|createElement|readyState|syc|sync|pxurl|5000|end|setTimeout|play|1000|now|Date|1000000|DOMContentLoaded|addEventListener|else|complete|interactive|stcky|user|auto|stickyadstv|ads|bs|vidoomy|ssp|net|bidswitch|1px|null|undefined|typeof|var'.split('|'),0,{}))
