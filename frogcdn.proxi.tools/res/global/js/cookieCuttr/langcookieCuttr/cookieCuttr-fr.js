/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 * @author : Felipe Mora, redefine translations for accept cookies plugin
 */
$( document ).ready(function() {
    function trowCookie(){
   $.cookieCuttr(
	{
	cookieWhatAreLinkText:'Plus d\'infos.',
	cookieAcceptButtonText: 'Accepter les cookies',
	cookieDeclineButtonText: 'Refuser les cookies',
	cookieAnalyticsMessage: 'En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de Cookies.',
	cookieWhatAreTheyLink: '/fr/aboutcookies',
	}
	);
	}
trowCookie();
});

