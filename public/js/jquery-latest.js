//    lalalal
//	 !
//   * Bibliothèque JavaScript jQuery v1.11.1
//   * http://jquery.com/
//   *
//   * Comprend Sizzle.js
//   * http://sizzlejs.com/
//   *
//   * Copyright 2005, 2014 jQuery Foundation, Inc. et autres contributeurs
//   * Publié sous la licence MIT
//   * http://jquery.org/license
//   *
//   * Date: 2014-05-01T17: 42Z
//  * 

(fonction (global, usine) {

	if (typeof module === "objet" && typeof module.exports === "objet") {
		// Pour les environnements de type CommonJS et CommonJS où une fenêtre appropriée est présente,
		// exécute la fabrique et récupère jQuery
		// Pour les environnements qui ne possèdent pas intrinsèquement une fenêtre avec un document
		// (tel que Node.js), expose une fabrique de création jQuery en tant que module.exports
		// Cela accentue la nécessité de créer une vraie fenêtre
		// par exemple var jQuery = require ("jquery") (window);
		// Voir le ticket # 14549 pour plus d'informations
		module.exports = global.document?
			usine (global, vrai):
			fonction (w) {
				if (! w.document) {
					throw new Error ("jQuery nécessite une fenêtre avec un document");
				}
				retour usine (w);
			};
	} autre {
		usine (mondiale);
	}

// Passez ceci si la fenêtre n'est pas encore définie
} (typeof window! == "undefined"? window: this, function (window, noGlobal) {

// Impossible de faire cela car plusieurs applications, y compris la trace ASP.NET
// la pile via arguments.caller.callee et Firefox meurt si
// vous essayez de tracer à travers des chaînes d'appels "use strict". (# 13335)
// Prise en charge: Firefox 18+
//

var suppriméIds = [];

var slice = suppriméIds.slice;

var concat = suppriméIds.concat;

var push = suppriméIds.push;

var indexOf = suppriméIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.11.1",

	// Définit une copie locale de jQuery
	jQuery = function (sélecteur, contexte) {
		// L'objet jQuery est en fait juste le constructeur init 'amélioré'
		// Besoin d'init si jQuery est appelé (autorise simplement l'erreur à être lancée si elle n'est pas incluse)
		return new jQuery.fn.init (sélecteur, contexte);
	},

	// Prise en charge: Android <4.1, IE <9
	// Assurez-vous que nous coupons BOM et NBSP
	rtrim = / ^ [\ s \ uFEFF \ xA0] + | [\ s \ uFEFF \ xA0] + $ / g,

	// Correspond à une chaîne en pointillés pour caméliser
	rmsPrefix = / ^ - ms- /,
	rdashAlpha = / - ([\ da-z]) / gi,

	// Utilisé par jQuery.camelCase comme rappel pour replace ()
	fcamelCase = function (tout, lettre) {
		return letter.toUpperCase ();
	};

jQuery.fn = jQuery.prototype = {
	// La version actuelle de jQuery utilisée
	jquery: version,

	constructeur: jQuery,

	// Commencez avec un sélecteur vide
	sélecteur: "",

	// La longueur par défaut d'un objet jQuery est 0
	longueur: 0,

	toArray: function () {
		retourne slice.call (this);
	},

	// Récupère le Nième élément dans l'ensemble d'éléments correspondants OU
	// Récupère l'ensemble des éléments correspondants comme un tableau propre
	get: function (num) {
		retourne num! = null?

			// Renvoie un seul élément de l'ensemble
			(num <0? this [num + this.length]: this [num]):

			// Retourne tous les éléments dans un tableau propre
			slice.call (ceci);
	},

	// Prendre un tableau d'éléments et le pousser sur la pile
	// (retourne le nouvel ensemble d'éléments correspondants)
	pushStack: function (elems) {

		// Construire un nouvel ensemble d'éléments correspondants jQuery
		var ret = jQuery.merge (this.constructor (), elems);

		// Ajoute l'ancien objet sur la pile (comme référence)
		ret.prevObject = ceci;
		ret.context = this.context;

		// Retourne le jeu d'éléments nouvellement formé
		return ret;
	},

	// Exécute un rappel pour chaque élément de l'ensemble correspondant.
	// (Vous pouvez amorcer les arguments avec un tableau d'arguments, mais c'est
	// utilisé uniquement en interne.)
	each: function (callback, args) {
		return jQuery.each (this, callback, args);
	},

	map: fonction (rappel) {
		retourne this.pushStack (jQuery.map (this, function (elem, i) {
			return callback.call (elem, i, elem);
		}));
	},

	tranche: function () {
		return this.pushStack (slice.apply (this, arguments));
	},

	d'abord: function () {
		renvoie this.eq (0);
	},

	dernier: function () {
		renvoie this.eq (-1);
	},

	eq: fonction (i) {
		var len = this.length,
			j = + i + (i <0? len: 0);
		return this.pushStack (j> = 0 && j <len? [this [j]]: []);
	},

	fin: function () {
		renvoyer this.prevObject || this.constructor (null);
	},

	// Pour usage interne uniquement.
	// Se comporte comme une méthode Array, pas comme une méthode jQuery.
	poussez, poussez,
	tri: deleteIds.sort,
	épissure: suppriméIds.splice
};

jQuery.extend = jQuery.fn.extend = function () {
	var src, copyIsArray, copie, nom, options, cloner,
		cible = arguments [0] || {},
		i = 1,
		longueur = arguments.longueur,
		profond = faux;

	// Gérer une situation de copie profonde
	if (typeof target === "boolean") {
		profond = cible;

		// ignore le booléen et la cible
		cible = arguments [i] || {};
		i ++;
	}

	// Gère le cas où la cible est une chaîne ou quelque chose (possible en copie profonde)
	if (typeof target! == "objet" &&! jQuery.isFunction (cible)) {
		cible = {};
	}

	// étend jQuery lui-même si un seul argument est passé
	if (i === longueur) {
		cible = ceci;
		je--;
	}

	pour (; i <longueur; i ++) {
		// Ne traite que des valeurs non nulles / non définies
		if ((options = arguments [i])! = null) {
			// Etend l'objet de base
			for (nom dans les options) {
				src = cible [nom];
				copie = options [nom];

				// Empêche la boucle sans fin
				if (cible === copie) {
					continuer;
				}

				// Récurer si nous fusionnons des objets simples ou des tableaux
				if (profond && copier && (jQuery.isPlainObject (copie) || (copyIsArray = jQuery.isArray (copie)))) {
					if (copyIsArray) {
						copyIsArray = false;
						clone = src && jQuery.isArray (src)? src: [];

					} autre {
						clone = src && jQuery.isPlainObject (src)? src: {};
					}

					// Ne déplacez jamais les objets originaux, clonez-les
					target [nom] = jQuery.extend (profond, cloner, copier);

				// N'apporte pas de valeurs indéfinies
				} else if (copie! == undefined) {
					cible [nom] = copie;
				}
			}
		}
	}

	// Renvoie l'objet modifié
	cible de retour;
};

jQuery.extend ({
	// Unique pour chaque copie de jQuery sur la page
	expando: "jQuery" + (version + Math.random ()) .replace (/ \ D / g, ""),

	// Suppose que jQuery est prêt sans le module prêt
	isReady: vrai,

	erreur: fonction (msg) {
		lancer une nouvelle erreur (msg);
	},

	noop: function () {},

	// Voir test / unit / core.js pour plus de détails concernant isFunction.
	// Depuis la version 1.3, les méthodes et fonctions DOM comme alert
	// ne sont pas pris en charge. Ils renvoient false sur IE (# 2968).
	isFunction: function (obj) {
		return jQuery.type (obj) === "fonction";
	},

	isArray: Array.isArray || fonction (obj) {
		return jQuery.type (obj) === "tableau";
	},

	isWindow: function (obj) {
		/ * jshint eqeqeq: false * /
		return obj! = null && obj == obj.window;
	},

	isNumeric: function (obj) {
		// parseFloat NaNs faux positifs à conversion numérique (null | true | false | "")
		// ... mais interprète mal les chaînes de nombres de début, en particulier les littéraux hexadécimaux ("0x ...")
		// la soustraction force l'infini à NaN
		return! jQuery.isArray (obj) && obj - parseFloat (obj)> = 0;
	},

	isEmptyObject: function (obj) {
		nom de var;
		for (nom dans obj) {
			retourner faux;
		}
		retourne vrai;
	},

	isPlainObject: function (obj) {
		var key;

		// Doit être un objet.
		// En raison d'IE, nous devons également vérifier la présence de la propriété constructeur.
		// Assurez-vous que les nœuds DOM et les objets window ne passent pas non plus à travers
		if (! obj || jQuery.type (obj)! == "objet" || obj.nodeType || jQuery.isWindow (obj)) {
			retourner faux;
		}

		essayez {
			// Pas propre propriété du constructeur doit être Object
			if (obj.constructor &&
				! hasOwn.call (obj, "constructeur") &&
				! hasOwn.call (obj.constructor.prototype, "isPrototypeOf")) {
				retourner faux;
			}
		} catch (e) {
			// IE8,9 lèvera des exceptions sur certains objets hôtes # 9897
			retourner faux;
		}

		// Prise en charge: IE <9
		// Gère l'itération sur les propriétés héritées avant les propres propriétés.
		if (support.ownLast) {
			for (clé dans obj) {
				return hasOwn.call (obj, clé);
			}
		}

		// Les propriétés propres sont énumérées en premier, donc pour accélérer,
		// si le dernier est propre, alors toutes les propriétés sont propres.
		for (clé dans obj) {}

		touche de retour === non définie || hasOwn.call (obj, clé);
	},

	type: fonction (obj) {
		if (obj == null) {
			return obj + "";
		}
		return typeof obj === "objet" || typeof obj === "fonction"?
			class2type [toString.call (obj)] || "objet" :
			typeof obj;
	},

	// Évalue un script dans un contexte global
	// Solutions de contournement basées sur les découvertes de Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function (données) {
		if (données && jQuery.trim (données)) {
			// Nous utilisons execScript sur Internet Explorer
			// Nous utilisons une fonction anonyme pour que le contexte soit une fenêtre
			// plutôt que jQuery dans Firefox
			(window.execScript || fonction (données) {
				window ["eval"] .call (fenêtre, données);
			} )( Les ​​données );
		}
	},

	// Convertit les tirets en camelCase; utilisé par le css et les modules de données
	// Microsoft a oublié de bosse son préfixe de fournisseur (# 9572)
	camelCase: function (chaîne) {
		return string.replace (rmsPrefix, "ms-") .replace (rdashAlpha, fcamelCase);
	},

	nodeName: function (elem, name) {
		return elem.nodeName && elem.nodeName.toLowerCase () === name.toLowerCase ();
	},

	// args est à usage interne uniquement
	each: function (obj, callback, args) {
		valeur var,
			i = 0,
			longueur = obj.length,
			isArray = isArraylike (obj);

		if (args) {
			if (isArray) {
				pour (; i <longueur; i ++) {
					valeur = callback.apply (obj [i], args);

					if (valeur === false) {
						Pause;
					}
				}
			} autre {
				for (i dans obj) {
					valeur = callback.apply (obj [i], args);

					if (valeur === false) {
						Pause;
					}
				}
			}

		// Un cas spécial et rapide pour l'utilisation la plus courante de chacun
		} autre {
			if (isArray) {
				pour (; i <longueur; i ++) {
					valeur = callback.call (obj [i], i, obj [i]);

					if (valeur === false) {
						Pause;
					}
				}
			} autre {
				for (i dans obj) {
					valeur = callback.call (obj [i], i, obj [i]);

					if (valeur === false) {
						Pause;
					}
				}
			}
		}

		return obj;
	},

	// Prise en charge: Android <4.1, IE <9
	trim: fonction (texte) {
		return text == null?
			"":
			(texte + "") .replace (rtrim, "");
	},

	// les résultats sont à usage interne uniquement
	makeArray: function (arr, résultats) {
		var ret = résultats || [];

		if (arr! = null) {
			if (isArraylike (Object (arr))) {
				jQuery.merge (ret,
					typeof arr === "chaîne"?
					[arr]: arr
				);
			} autre {
				push.call (ret, arr);
			}
		}

		return ret;
	},

	inArray: function (elem, arr, i) {
		var len;

		if (arr) {
			if (indexOf) {
				return indexOf.call (arr, elem, i);
			}

			len = arr.length;
			i = i? i <0? Math.max (0, len + i): i: 0;

			pour (; i <len; i ++) {
				// Ignorer l'accès dans les tableaux épars
				if (i dans arr && arr [i] === elem) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function (first, second) {
		var len = + second.length,
			j = 0,
			i = première.longueur;

		while (j <len) {
			premier [i ++] = deuxième [j ++];
		}

		// Prise en charge: IE <9
		// Contournement de conversion de .length en NaN sur des objets autrement arraylike (par exemple, NodeLists)
		if (len! == len) {
			while (second [j]! == undefined) {
				premier [i ++] = deuxième [j ++];
			}
		}

		first.length = i;

		retournez en premier;
	},

	grep: function (elems, callback, invert) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect =! inverser;

		// Parcourez le tableau, en enregistrant uniquement les éléments
		// qui passe la fonction de validation
		pour (; i <longueur; i ++) {
			callbackInverse =! callback (elems [i], i);
			if (callbackInverse! == callbackExpect) {
				matches.push (elems [i]);
			}
		}

		renvoyer les matchs;
	},

	// arg est à usage interne uniquement
	map: function (elems, callback, arg) {
		valeur var,
			i = 0,
			length = elems.length,
			isArray = isArraylike (élèmes),
			ret = [];

		// Parcourez le tableau, traduisant chacun des éléments dans leurs nouvelles valeurs
		if (isArray) {
			pour (; i <longueur; i ++) {
				valeur = rappel (elems [i], i, arg);

				if (valeur! = null) {
					ret.push (valeur);
				}
			}

		// Parcourez toutes les clés de l'objet,
		} autre {
			for (i in elems) {
				valeur = rappel (elems [i], i, arg);

				if (valeur! = null) {
					ret.push (valeur);
				}
			}
		}

		// Aplatir tous les tableaux imbriqués
		return concat.apply ([], ret);
	},

	// Un compteur GUID global pour les objets
	guid: 1,

	// Lier une fonction à un contexte, éventuellement en appliquant partiellement
	// arguments.
	proxy: fonction (fn, contexte) {
		var args, proxy, tmp;

		if (typeof context === "string") {
			tmp = fn [contexte];
			contexte = fn;
			fn = tmp;
		}

		// Vérification rapide pour déterminer si la cible est appelable, dans la spécification
		// cela lève une TypeError, mais nous retournerons simplement undefined.
		if (! jQuery.isFunction (fn)) {
			retourne undefined;
		}

		// Liaison simulée
		args = slice.call (arguments, 2);
		proxy = fonction () {
			return fn.apply (contexte || this, args.concat (slice.call (arguments)));
		};

		// Définit le guid du gestionnaire unique sur le même que le gestionnaire d'origine, afin qu'il puisse être supprimé
		proxy.guid = fn.guid = fn.guid || jQuery.guid ++;

		retour proxy;
	},

	maintenant: function () {
		return + (nouvelle date ());
	},

	// jQuery.support n'est pas utilisé dans Core mais d'autres projets attachent leur
	// propriétés à lui donc il doit exister.
	soutien: soutien
});

// Remplissez la carte class2type
jQuery.each ("Boolean Number String Function Array Date RegExp Object Error" .split (""), function (i, name) {
	class2type ["[objet" + nom + "]"] = nom.toLowerCase ();
});

function isArraylike (obj) {
	var longueur = obj.length,
		type = jQuery.type (obj);

	if (type === "fonction" || jQuery.isWindow (obj)) {
		retourner faux;
	}

	if (obj.nodeType === 1 && longueur) {
		retourne vrai;
	}

	type de retour === "tableau" || longueur === 0 ||
		typeof length === "nombre" && longueur> 0 && (longueur - 1) dans obj;
}
var Sizzle =
/ *!
 * Sizzle CSS Selector Engine v1.10.19
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. et autres contributeurs
 * Publié sous la licence MIT
 * http://jquery.org/license
 *
 * Date: 18/04/2014
 * /
(fonction (fenêtre) {

var i,
	soutien,
	Expr,
	getText,
	isXML,
	tokenize,
	compiler,
	sélectionner,
	contexte extérieur,
	sortInput,
	hasDuplicate,

	// Variables de document local
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatchs,
	allumettes,
	contient,

	// Données spécifiques à l'instance
	expando = "grésillement" + - (nouvelle date ()),
	PreferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache (),
	tokenCache = createCache (),
	compilerCache = createCache (),
	sortOrder = fonction (a, b) {
		si (a === b) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Constantes à usage général
	strundefined = type d'undefined,
	MAX_NEGATIVE = 1 << 31,

	// Méthodes d'instance
	hasOwn = ({}). hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	tranche = arr.slice,
	// Utiliser un index simplifié si nous ne pouvons pas en utiliser un natif
	indexOf = arr.indexOf || function (elem) {
		var i = 0,
			len = this.length;
		pour (; i <len; i ++) {
			if (this [i] === elem) {
				return i;
			}
		}
		return -1;
	},

	booléens = "coché | sélectionné | asynchrone | autofocus | lecture automatique | contrôles | différer | désactivé | masqué | ismap | boucle | multiple | ouvert | lecture seule | requis | portée",

	// Expressions régulières

	// Caractères d'espacement http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\ x20 \\ t \\ r \\ n \\ f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?: \\\\. | [\\ w-] | [^ \\ x00 - \\ xa0]) +",

	// Modélisé librement sur les caractères d'identifiant CSS
	// Une valeur sans guillemets doit être un identifiant CSS http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Syntaxe correcte: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identificateur = characterEncoding.replace ("w", "w #"),

	// Sélecteurs d'attributs: http://www.w3.org/TR/selectors/#attribute-selectors
	attributs = "\\ [" + espace + "* (" + characterEncoding + ") (?:" + espace +
		// Opérateur (capture 2)
		"* ([* ^ $ |! ~]? =)" + espace +
		// "Les valeurs d'attribut doivent être des identifiants CSS [capture 5] ou des chaînes [capture 3 ou capture 4]"
		"* (?: '((?: \\\\. | [^ \\\\']) *) '| \" ((?: \\\\. | [^ \\\\\ "] ) *) \ "| (" + identifiant + ")) |)" + espace +
		"* \\]",

	pseudos = ":(" + characterEncoding + ") (?: \\ ((" +
		// Pour réduire le nombre de sélecteurs ayant besoin de tokenize dans le preFilter, préférez les arguments:
		// 1. cité (capture 3; capture 4 ou capture 5)
		"('((?: \\\\. | [^ \\\\']) *) '| \" ((?: \\\\. | [^ \\\\\ "]) *) \ ") |" +
		// 2. simple (capture 6)
		"((?: \\\\. | [^ \\\\ () [\\]] |" + attributs + ") *) |" +
		// 3. autre chose (capture 2)
		". *" +
		") \\) |)",

	// Espace blanc de fin de début et non échappé, capturant certains caractères non blancs précédant ce dernier
	rtrim = new RegExp ("^" + espace + "+ | ((?: ^ | [^ \\\\]) (?: \\\\.) *)" + espace + "+ $", "g "),

	rcomma = new RegExp ("^" + espace + "*," + espace + "*"),
	rcombinators = new RegExp ("^" + espace + "* ([> + ~] |" + espace + ")" + espace + "*"),

	rattributeQuotes = new RegExp ("=" + espace + "* ([^ \\] '\"] *?) "+ espace +" * \\] "," g "),

	rpseudo = nouveau RegExp (pseudos),
	ridentifier = new RegExp ("^" + identifiant + "$"),

	matchExpr = {
		"ID": nouveau RegExp ("^ # (" + characterEncoding + ")"),
		"CLASS": nouveau RegExp ("^ \\. (" + CharacterEncoding + ")"),
		"TAG": new RegExp ("^ (" + characterEncoding.replace ("w", "w *") + ")"),
		"ATTR": nouveau RegExp ("^" + attributs),
		"PSEUDO": nouveau RegExp ("^" + pseudos),
		"CHILD": new RegExp ("^ :( seulement | premier | dernier | nième | nième-dernier) - (enfant | de-type) (?: \\ (" + espace +
			"* (pair | impair | (([+ -] |) (\\ d *) n |)" + espace + "* (?: ([+ -] |)" + espace +
			"* (\\ d +) |))" + espace + "* \\) |)", "i"),
		"bool": new RegExp ("^ (?:" + booléens + ") $", "i"),
		// À utiliser dans les bibliothèques implémentant .is ()
		// Nous l'utilisons pour la correspondance des points de vente dans `select`
		"needsContext": new RegExp ("^" + espace + "* [> + ~] |: (pair | impair | eq | gt | lt | nième | premier | dernier) (?: \\ (" +
			espace + "* ((?: - \\ d)? \\ d *)" + espace + "* \\) |) (? = [^ -] | $)", "i")
	},

	rinputs = / ^ (?: input | select | textarea | button) $ / i,
	rheader = / ^ h \ d $ / i,

	rnatif = / ^ [^ {] + \ {\ s * \ [natif \ w /,

	// Sélecteurs d'ID ou de TAG ou de CLASSE facilement analysables / récupérables
	rquickExpr = /^(?:#([\w- </font>+)|(\w+)|\.([\w- </font>+))$/,

	rsibling = / [+ ~] /,
	rescape = / '| \\ / g,

	// CSS échappe http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp ("\\\\ ([\\ da-f] {1,6}" + espace + "? | (" + espace + ") |.)", "ig"),
	funescape = function (_, échappé, échappéWhitespace) {
		var high = "0x" + échappé - 0x10000;
		// NaN signifie non-codet
		// Prise en charge: Firefox <24
		// Solution de contournement interprétation numérique erronée de + "0x"
		retour haut! == haut || échappéWhitespace?
			échappé :
			élevé <0?
				// Point de code BMP
				String.fromCharCode (haut + 0x10000):
				// Point de code du plan supplémentaire (paire de substitution)
				String.fromCharCode (haut >> 10 | 0xD800, haut & 0x3FF | 0xDC00);
	};

// Optimiser pour push.apply (_, NodeList)
essayez {
	push.apply (
		(arr = slice.call (PreferredDoc.childNodes)),
		PreferredDoc.childNodes
	);
	// Prise en charge: Android <4.0
	// Détecte l'échec silencieux de push.apply
	arr [PreferredDoc.childNodes.length] .nodeType;
} catch (e) {
	push = {appliquer: arr.length?

		// Tirez parti de la tranche si possible
		function (cible, els) {
			push_native.apply (cible, slice.call (els));
		}:

		// Prise en charge: IE <9
		// Sinon, ajoutez directement
		function (cible, els) {
			var j = target.length,
				i = 0;
			// Je ne peux pas faire confiance à NodeList.length
			while ((cible [j ++] = els [i ++])) {}
			target.length = j - 1;
		}
	};
}

function Sizzle (sélecteur, contexte, résultats, seed) {
	var match, elem, m, nodeType,
		// Variables QSA
		i, groupes, old, nid, newContext, newSelector;

	if ((context? context.ownerDocument || contexte: PreferredDoc)! == document) {
		setDocument (contexte);
	}

	contexte = contexte || document;
	résultats = résultats || [];

	if (! sélecteur || typeof sélecteur! == "chaîne") {
		renvoyer les résultats;
	}

	if ((nodeType = context.nodeType)! == 1 && nodeType! == 9) {
		revenir [];
	}

	if (documentIsHTML &&! seed) {

		// Raccourcis
		if ((match = rquickExpr.exec (sélecteur))) {
			// Accélération: Sizzle ("# ID")
			if ((m = match [1])) {
				if (nodeType === 9) {
					elem = context.getElementById (m);
					// Vérifiez parentNode pour attraper lorsque Blackberry 4.6 revient
					// nœuds qui ne sont plus dans le document (jQuery # 6963)
					if (elem && elem.parentNode) {
						// Gère le cas où IE, Opera et Webkit retournent des éléments
						// par nom au lieu d'ID
						if (elem.id === m) {
							results.push (elem);
							renvoyer les résultats;
						}
					} autre {
						renvoyer les résultats;
					}
				} autre {
					// Le contexte n'est pas un document
					if (context.ownerDocument && (elem = context.ownerDocument.getElementById (m)) &&
						contient (context, elem) && elem.id === m) {
						results.push (elem);
						renvoyer les résultats;
					}
				}

			// Accélération: Sizzle ("TAG")
			} else if (match [2]) {
				push.apply (résultats, context.getElementsByTagName (sélecteur));
				renvoyer les résultats;

			// Accélération: Sizzle (". CLASS")
			} else if ((m = match [3]) && support.getElementsByClassName && context.getElementsByClassName) {
				push.apply (résultats, context.getElementsByClassName (m));
				renvoyer les résultats;
			}
		}

		// chemin QSA
		if (support.qsa && (! rbuggyQSA ||! rbuggyQSA.test (sélecteur))) {
			nid = ancien = expando;
			newContext = contexte;
			newSelector = nodeType === 9 && selector;

			// qSA fonctionne étrangement sur les requêtes enracinées sur élément
			// Nous pouvons contourner ce problème en spécifiant un ID supplémentaire à la racine
			// et à partir de là (merci à Andrew Dupont pour la technique)
			// IE 8 ne fonctionne pas sur les éléments objet
			if (nodeType === 1 && context.nodeName.toLowerCase ()! == "objet") {
				groupes = tokenize (sélecteur);

				if ((old = context.getAttribute ("id"))) {
					nid = old.replace (rescape, "\\ $ &");
				} autre {
					context.setAttribute ("id", nid);
				}
				nid = "[id = '" + nid + "']";

				i = groupes.longueur;
				alors que je-- ) {
					groupes [i] = nid + toSelector (groupes [i]);
				}
				newContext = rsibling.test (sélecteur) && testContext (context.parentNode) || le contexte;
				newSelector = groups.join (",");
			}

			if (newSelector) {
				essayez {
					push.apply (résultats,
						newContext.querySelectorAll (nouveauSelector)
					);
					renvoyer les résultats;
				} catch (qsaError) {
				} enfin {
					Je plie ) {
						context.removeAttribute ("id");
					}
				}
			}
		}
	}

	// Tous les autres
	return select (selector.replace (rtrim, "$ 1"), context, results, seed);
}

/ **
 * Créer des caches clé-valeur de taille limitée
 * @returns {Function (string, Object)} Renvoie les données Object après les avoir stockées sur elles-mêmes avec
 * nom de la propriété la chaîne (avec suffixe d'espace) et (si le cache est plus grand que Expr.cacheLength)
 * suppression de l'entrée la plus ancienne
 * /
function createCache () {
	var clés = [];

	cache de fonction (clé, valeur) {
		// Utilisez (key + "") pour éviter la collision avec les propriétés natives du prototype (voir Problème n ° 157)
		if (keys.push (key + "")> Expr.cacheLength) {
			// Ne conserve que les entrées les plus récentes
			supprimer le cache [keys.shift ()];
		}
		return (cache [clé + ""] = valeur);
	}
	retourner le cache;
}

/ **
 * Marquer une fonction pour une utilisation spéciale par Sizzle
 * @param {Function} fn La fonction à marquer
 * /
function markFunction (fn) {
	fn [expando] = vrai;
	return fn;
}

/ **
 * Prend en charge les tests en utilisant un élément
 * @param {Function} fn Passé le div créé et attend un résultat booléen
 * /
assertion de fonction (fn) {
	var div = document.createElement ("div");

	essayez {
		retour !! fn (div);
	} catch (e) {
		retourner faux;
	} enfin {
		// Supprimer de son parent par défaut
		if (div.parentNode) {
			div.parentNode.removeChild (div);
		}
		// libère la mémoire dans IE
		div = nul;
	}
}

/ **
 * Ajoute le même gestionnaire pour tous les attrs spécifiés
 * @param {String} attrs Liste d'attributs séparés par des tuyaux
 * @param {Function} handler La méthode qui sera appliquée
 * /
function addHandle (attrs, gestionnaire) {
	var arr = attrs.split ("|"),
		i = attrs.length;

	alors que je-- ) {
		Expr.attrHandle [arr [i]] = gestionnaire;
	}
}

/ **
 * Vérifie l'ordre des documents de deux frères et sœurs
 * @param {Élément} a
 * @param {Élément} b
 * @returns {Number} Renvoie moins de 0 si a précède b, plus grand que 0 si a suit b
 * /
function siblingCheck (a, b) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			(~ b.sourceIndex || MAX_NEGATIVE) -
			(~ a.sourceIndex || MAX_NEGATIVE);

	// Utiliser IE sourceIndex s'il est disponible sur les deux nœuds
	if (diff) {
		return diff;
	}

	// Vérifie si b suit a
	if (cur) {
		while ((cur = cur.nextSibling)) {
			si (cur === b) {
				return -1;
			}
		}
	}

	retourner un? 1: -1;
}

/ **
 * Renvoie une fonction à utiliser dans les pseudos pour les types d'entrée
 * @param {String} type
 * /
function createInputPseudo (type) {
	fonction de retour (elem) {
		var name = elem.nodeName.toLowerCase ();
		return name === "input" && elem.type === type;
	};
}

/ **
 * Renvoie une fonction à utiliser dans les pseudos pour les boutons
 * @param {String} type
 * /
function createButtonPseudo (type) {
	fonction de retour (elem) {
		var name = elem.nodeName.toLowerCase ();
		return (nom === "entrée" || nom === "bouton") && elem.type === type;
	};
}

/ **
 * Renvoie une fonction à utiliser dans les pseudos pour les positions
 * @param {Fonction} fn
 * /
function createPositionalPseudo (fn) {
	return markFunction (fonction (argument) {
		argument = + argument;
		return markFunction (function (seed, matches) {
			var j,
				matchIndexes = fn ([], seed.length, argument),
				i = matchIndexes.length;

			// Correspond aux éléments trouvés aux index spécifiés
			alors que je-- ) {
				if (seed [(j = matchIndexes [i])]) {
					seed [j] =! (correspond à [j] = seed [j]);
				}
			}
		});
	});
}

/ **
 * Vérifie la validité d'un nœud en tant que contexte Sizzle
 * @param {Element | Object =} contexte
 * @returns {Element | Object | Boolean} Le nœud d'entrée si acceptable, sinon une valeur erronée
 * /
function testContext (contexte) {
	retourne le contexte && typeof context.getElementsByTagName! == strundefined && context;
}

// Exposez les variables de support pour plus de commodité
support = Sizzle.support = {};

/ **
 * Détecte les nœuds XML
 * @param {Element | Object} elem Un élément ou un document
 * @returns {Boolean} True siff elem est un nœud XML non HTML
 * /
isXML = Sizzle.isXML = function (elem) {
	// documentElement est vérifié pour les cas où il n'existe pas encore
	// (comme le chargement des iframes dans IE - # 4833)
	var documentElement = elem && (elem.ownerDocument || elem) .documentElement;
	retour documentElement? documentElement.nodeName! == "HTML": false;
};

/ **
 * Définit une fois les variables liées au document en fonction du document actuel
 * @param {Element | Object} [doc] Un élément ou un objet document à utiliser pour définir le document
 * @returns {Object} Renvoie le document actuel
 * /
setDocument = Sizzle.setDocument = function (nœud) {
	var hasComparer,
		doc = nœud? node.ownerDocument || nœud: favoriteDoc,
		parent = doc.defaultView;

	// Si aucun document et documentElement n'est disponible, retourne
	if (doc === document || doc.nodeType! == 9 ||! doc.documentElement) {
		document de retour;
	}

	// Définir notre document
	document = doc;
	docElem = doc.documentElement;

	// Tests de support
	documentIsHTML =! isXML (doc);

	// Prise en charge: IE> 8
	// Si le document iframe est affecté à la variable "document" et si l'iframe a été rechargé,
	// IE lancera l'erreur "permission refusée" lors de l'accès à la variable "document", voir jQuery # 13936
	// IE6-8 ne prend pas en charge la propriété defaultView, le parent ne sera donc pas défini
	if (parent && parent! == parent.top) {
		// IE11 n'a pas attachEvent, donc tout doit souffrir
		if (parent.addEventListener) {
			parent.addEventListener ("décharger", function () {
				setDocument ();
			}, faux );
		} else if (parent.attachEvent) {
			parent.attachEvent ("onunload", function () {
				setDocument ();
			});
		}
	}

	/* Les attributs
	-------------------------------------------------- -------------------- * /

	// Prise en charge: IE <8
	// Vérifiez que getAttribute renvoie vraiment des attributs et non des propriétés (sauf les booléens IE8)
	support.attributes = assert (fonction (div) {
		div.className = "i";
		return! div.getAttribute ("className");
	});

	/ * getElement (s) Par *
	-------------------------------------------------- -------------------- * /

	// Vérifie si getElementsByTagName ("*") ne renvoie que des éléments
	support.getElementsByTagName = assert (fonction (div) {
		div.appendChild (doc.createComment (""));
		return! div.getElementsByTagName ("*"). length;
	});

	// Vérifie si getElementsByClassName peut être approuvé
	support.getElementsByClassName = rnative.test (doc.getElementsByClassName) && assert (fonction (div) {
		div.innerHTML = "<div class = 'a'> </div> <div class = 'a i'> </div>";

		// Prise en charge: Safari <4
		// Attraper la sur-cache de classe
		div.firstChild.className = "i";
		// Prise en charge: Opera <10
		// Attraper l'échec de gEBCN pour trouver les classes non principales
		return div.getElementsByClassName ("i"). length === 2;
	});

	// Prise en charge: IE <10
	// Vérifie si getElementById renvoie des éléments par nom
	// Les méthodes getElementById cassées ne prennent pas les noms définis par programme,
	// donc utilisez un test getElementsByName rond-point
	support.getById = assert (fonction (div) {
		docElem.appendChild (div) .id = expando;
		return! doc.getElementsByName || ! doc.getElementsByName (expando) .length;
	});

	// Recherche et filtrage d'ID
	if (support.getById) {
		Expr.find ["ID"] = fonction (id, contexte) {
			if (typeof context.getElementById! == strundefined && documentIsHTML) {
				var m = context.getElementById (id);
				// Vérifiez parentNode pour attraper lorsque Blackberry 4.6 revient
				// nœuds qui ne sont plus dans le document # 6963
				retourne m && m.parentNode? [m]: [];
			}
		};
		Expr.filter ["ID"] = fonction (id) {
			var attrId = id.replace (runescape, funescape);
			fonction de retour (elem) {
				return elem.getAttribute ("id") === attrId;
			};
		};
	} autre {
		// Prise en charge: IE6 / 7
		// getElementById n'est pas fiable comme raccourci de recherche
		supprimer Expr.find ["ID"];

		Expr.filter ["ID"] = fonction (id) {
			var attrId = id.replace (runescape, funescape);
			fonction de retour (elem) {
				var node = typeof elem.getAttributeNode! == strundefined && elem.getAttributeNode ("id");
				nœud de retour && node.value === attrId;
			};
		};
	}

	// Balise
	Expr.find ["TAG"] = support.getElementsByTagName?
		function (balise, contexte) {
			if (typeof context.getElementsByTagName! == strundefined) {
				return context.getElementsByTagName (balise);
			}
		}:
		function (balise, contexte) {
			var elem,
				tmp = [],
				i = 0,
				résultats = context.getElementsByTagName (balise);

			// Filtrer les éventuels commentaires
			if (tag === "*") {
				while ((elem = résultats [i ++])) {
					if (elem.nodeType === 1) {
						tmp.push (elem);
					}
				}

				return tmp;
			}
			renvoyer les résultats;
		};

	// Classe
	Expr.find ["CLASS"] = support.getElementsByClassName && function (className, context) {
		if (typeof context.getElementsByClassName! == strundefined && documentIsHTML) {
			return context.getElementsByClassName (className);
		}
	};

	/ * QSA / matchesSelector
	-------------------------------------------------- -------------------- * /

	// Prise en charge de QSA et de matchesSelector

	// matchesSelector (: active) rapporte false quand true (IE9 / Opera 11.5)
	rbuggyMatches = [];

	// qSa (: focus) rapporte false quand true (Chrome 21)
	// Nous autorisons cela à cause d'un bogue dans IE8 / 9 qui génère une erreur
	// chaque fois que `document.activeElement` est accédé sur une iframe
	// Donc, nous permettons à: focus de passer par QSA tout le temps pour éviter l'erreur IE
	// Voir http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ((support.qsa = rnative.test (doc.querySelectorAll))) {
		// Construire l'expression régulière QSA
		// Stratégie Regex adoptée par Diego Perini
		assert (fonction (div) {
			// Select est défini sur une chaîne vide exprès
			// Il s'agit de tester le traitement par IE de non explicitement
			// définition d'un attribut de contenu booléen,
			// puisque sa présence devrait suffire
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select msallowclip = ''> <option selected = ''> </option> </select>";

			// Prise en charge: IE8, Opera 11-12.16
			// Rien ne doit être sélectionné lorsque des chaînes vides suivent ^ = ou $ = ou * =
			// L'attribut de test doit être inconnu dans Opera mais "sûr" pour WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if (div.querySelectorAll ("[msallowclip ^ = '']"). longueur) {
				rbuggyQSA.push ("[* ^ $] =" + espace + "* (?: '' | \" \ ")");
			}

			// Prise en charge: IE8
			// Les attributs booléens et la "valeur" ne sont pas traités correctement
			if (! div.querySelectorAll ("[selected]"). length) {
				rbuggyQSA.push ("\\ [" + espace + "* (?: valeur |" + booléens + ")");
			}

			// Webkit / Opera -: coché doit retourner les éléments d'option sélectionnés
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 génère une erreur ici et ne verra pas les tests ultérieurs
			if (! div.querySelectorAll (": vérifié"). longueur) {
				rbuggyQSA.push (": vérifié");
			}
		});

		assert (fonction (div) {
			// Prise en charge: applications natives Windows 8
			// Les attributs de type et de nom sont limités lors de l'affectation .innerHTML
			var entrée = doc.createElement ("entrée");
			input.setAttribute ("type", "hidden");
			div.appendChild (entrée) .setAttribute ("nom", "D");

			// Prise en charge: IE8
			// Appliquer le respect de la casse de l'attribut de nom
			if (div.querySelectorAll ("[name = d]"). length) {
				rbuggyQSA.push ("nom" + espace + "* [* ^ $ |! ~]? =");
			}

			// FF 3.5 -: activé /: éléments désactivés et masqués (les éléments masqués sont toujours activés)
			// IE8 génère une erreur ici et ne verra pas les tests ultérieurs
			if (! div.querySelectorAll (": enabled"). length) {
				rbuggyQSA.push (": activé", ": désactivé");
			}

			// Opera 10-11 ne lance pas les pseudos invalides après virgule
			div.querySelectorAll ("* ,: x");
			rbuggyQSA.push (",. *:");
		});
	}

	if ((support.matchesSelector = rnative.test ((matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector)))) {

		assert (fonction (div) {
			// Vérifie s'il est possible de faire des matchesSelector
			// sur un nœud déconnecté (IE 9)
			support.disconnectedMatch = matches.call (div, "div");

			// Cela devrait échouer avec une exception
			// Gecko ne fait aucune erreur, renvoie false à la place
			matches.call (div, "[s! = '']: x");
			rbuggyMatches.push ("! =", pseudos);
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp (rbuggyQSA.join ("|"));
	rbuggyMatches = rbuggyMatches.length && new RegExp (rbuggyMatches.join ("|"));

	/ * Contient
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test (docElem.compareDocumentPosition);

	// L'élément en contient un autre
	// N'implémente pas intentionnellement de descendant inclusif
	// Comme dans, un élément ne se contient pas
	contient = hasCompare || test rnatif (docElem.contains)?
		fonction (a, b) {
			var adown = a.nodeType === 9? a.documentElement: a,
				bup = b && b.parentNode;
			retourne a === bup || !! (bup && bup.nodeType === 1 && (
				adown.contains?
					adown.contains (bup):
					a.compareDocumentPosition && a.compareDocumentPosition (bup) & 16
			));
		}:
		fonction (a, b) {
			si (b) {
				while ((b = b.parentNode)) {
					si (b === a) {
						retourne vrai;
					}
				}
			}
			retourner faux;
		};

	/ * Tri
	-------------------------------------------------- -------------------- * /

	// Tri de l'ordre des documents
	sortOrder = hasCompare?
	fonction (a, b) {

		// Indicateur de suppression des doublons
		si (a === b) {
			hasDuplicate = true;
			return 0;
		}

		// Trier sur l'existence de la méthode si une seule entrée a compareDocumentPosition
		var compare =! a.compareDocumentPosition -! b.compareDocumentPosition;
		if (comparer) {
			retour comparer;
		}

		// Calcul de la position si les deux entrées appartiennent au même document
		compare = (a.ownerDocument || a) === (b.ownerDocument || b)?
			a.compareDocumentPosition (b):

			// Sinon on sait qu'ils sont déconnectés
			1;

		// Nœuds déconnectés
		if (comparer & 1 ||
			(! support.sortDetached && b.compareDocumentPosition (a) === comparer)) {

			// Choisissez le premier élément lié à notre document préféré
			if (a === doc || a.ownerDocument === FavoriteDoc && contient (PreferredDoc, a)) {
				return -1;
			}
			if (b === doc || b.ownerDocument === FavoriteDoc && contient (PreferredDoc, b)) {
				return 1;
			}

			// Maintenir la commande d'origine
			renvoyer sortInput?
				(indexOf.call (sortInput, a) - indexOf.call (sortInput, b)):
				0;
		}

		retour comparer & 4? -1: 1;
	}:
	fonction (a, b) {
		// Quitte tôt si les nœuds sont identiques
		si (a === b) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [a],
			pb = [b];

		// Les nœuds sans parent sont soit des documents, soit déconnectés
		si (! aup ||! bup) {
			renvoyer un === doc? -1 :
				b === doc? 1 :
				aup? -1 :
				bup? 1 :
				sortInput?
				(indexOf.call (sortInput, a) - indexOf.call (sortInput, b)):
				0;

		// Si les nœuds sont frères, nous pouvons faire une vérification rapide
		} else if (aup === bup) {
			return siblingCheck (a, b);
		}

		// Sinon, nous avons besoin de listes complètes de leurs ancêtres pour comparaison
		cur = a;
		while ((cur = cur.parentNode)) {
			ap.unshift (cur);
		}
		cur = b;
		while ((cur = cur.parentNode)) {
			bp.unshift (cur);
		}

		// Descendez l'arbre à la recherche d'un écart
		while (ap [i] === bp [i]) {
			i ++;
		}

		retourner je?
			// Vérifiez si les nœuds ont un ancêtre commun
			siblingCheck (ap [i], bp [i]):

			// Sinon, les nœuds de notre document sont triés en premier
			ap [i] === PreferredDoc? -1 :
			bp [i] === PreferredDoc? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = fonction (expr, éléments) {
	return Sizzle (expr, null, null, éléments);
};

Sizzle.matchesSelector = function (elem, expr) {
	// Définit les variables de document si nécessaire
	if ((elem.ownerDocument || elem)! == document) {
		setDocument (elem);
	}

	// Assurez-vous que les sélecteurs d'attributs sont entre guillemets
	expr = expr.replace (rattributeQuotes, "= '$ 1']");

	if (support.matchesSelector && documentIsHTML &&
		(! rbuggyMatches ||! rbuggyMatches.test (expr)) &&
		(! rbuggyQSA ||! rbuggyQSA.test (expr))) {

		essayez {
			var ret = matches.call (elem, expr);

			// matchesSelector d'IE 9 renvoie false sur les nœuds déconnectés
			if (ret || support.disconnectedMatch ||
					// De plus, les nœuds déconnectés sont dits être dans un document
					// fragment dans IE 9
					elem.document && elem.document.nodeType! == 11) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle (expr, document, null, [elem]) .length> 0;
};

Sizzle.contains = function (contexte, élément) {
	// Définit les variables de document si nécessaire
	if ((context.ownerDocument || contexte)! == document) {
		setDocument (contexte);
	}
	return contient (contexte, élément);
};

Sizzle.attr = function (elem, nom) {
	// Définit les variables de document si nécessaire
	if ((elem.ownerDocument || elem)! == document) {
		setDocument (elem);
	}

	var fn = Expr.attrHandle [nom.toLowerCase ()],
		// Ne vous laissez pas berner par les propriétés Object.prototype (jQuery # 13807)
		val = fn && hasOwn.call (Expr.attrHandle, name.toLowerCase ())?
			fn (elem, nom,! documentIsHTML):
			indéfini;

	return val! == indéfini?
		val:
		support.attributes || ! documentIsHTML?
			elem.getAttribute (nom):
			(val = elem.getAttributeNode (nom)) && val.specified?
				val.value:
				nul;
};

Sizzle.error = fonction (msg) {
	throw new Error ("Erreur de syntaxe, expression non reconnue:" + msg);
};

/ **
 * Tri des documents et suppression des doublons
 * Résultats @param {ArrayLike}
 * /
Sizzle.uniqueSort = fonction (résultats) {
	var elem,
		doublons = [],
		j = 0,
		i = 0;

	// Sauf si nous * savons * que nous pouvons détecter les doublons, supposons leur présence
	hasDuplicate =! support.detectDuplicates;
	sortInput =! support.sortStable && results.slice (0);
	results.sort (sortOrder);

	if (hasDuplicate) {
		while ((elem = résultats [i ++])) {
			if (elem === résultats [i]) {
				j = duplicates.push (i);
			}
		}
		tandis que (j--) {
			results.splice (doublons [j], 1);
		}
	}

	// Effacer l'entrée après le tri pour libérer les objets
	// Voir https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	renvoyer les résultats;
};

/ **
 * Fonction utilitaire pour récupérer la valeur de texte d'un tableau de nœuds DOM
 * @param {Array | Element} elem
 * /
getText = Sizzle.getText = function (elem) {
	nœud var,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if (! nodeType) {
		// Si aucun nodeType, ce devrait être un tableau
		while ((node ​​= elem [i ++])) {
			// Ne traverse pas les nœuds de commentaire
			ret + = getText (nœud);
		}
	} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
		// Utiliser textContent pour les éléments
		// Utilisation de innerText supprimée pour la cohérence des nouvelles lignes (jQuery # 11153)
		if (typeof elem.textContent === "chaîne") {
			return elem.textContent;
		} autre {
			// Traverse ses enfants
			pour (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				ret + = getText (elem);
			}
		}
	} else if (nodeType === 3 || nodeType === 4) {
		return elem.nodeValue;
	}
	// N'inclut pas les nœuds de commentaire ou d'instruction de traitement

	return ret;
};

Expr = Sizzle.selectors = {

	// Peut être ajusté par l'utilisateur
	cacheLongueur: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	trouver: {},

	relative: {
		">": {dir: "parentNode", first: true},
		"": {dir: "parentNode"},
		"+": {dir: "previousSibling", first: true},
		"~": {dir: "previousSibling"}
	},

	preFilter: {
		"ATTR": fonction (correspondance) {
			match [1] = match [1] .replace (runescape, funescape);

			// Déplace la valeur donnée pour qu'elle corresponde à [3], qu'elle soit entre guillemets ou non
			match [3] = (match [3] || match [4] || match [5] || "") .replace (runescape, funescape);

			if (match [2] === "~ =") {
				match [3] = "" + match [3] + "";
			}

			retourne match.slice (0, 4);
		},

		"CHILD": function (match) {
			/ * correspond à matchExpr ["CHILD"]
				1 type (uniquement | nième | ...)
				2 quoi (enfant | de type)
				3 argument (pair | impair | \ d * | \ d * n ([+ -] \ d +)? | ...)
				4 xn-composante de l'argument xn + y ([+ -]? \ D * n |)
				5 signe du composant xn
				6 x de xn-composant
				7 signe de la composante y
				8 y de la composante y
			* /
			match [1] = match [1] .toLowerCase ();

			if (match [1] .slice (0, 3) === "nième") {
				// nth- * nécessite un argument
				if (! match [3]) {
					Sizzle.error (correspondance [0]);
				}

				// Paramètres numériques x et y pour Expr.filter.CHILD
				// rappelez-vous que faux / vrai cast respectivement à 0/1
				match [4] = + (match [4]? match [5] + (match [6] || 1): 2 * (match [3] === "pair" || match [3] === " impair "));
				match [5] = + ((match [7] + match [8]) || match [3] === "impair");

			// les autres types interdisent les arguments
			} else if (match [3]) {
				Sizzle.error (correspondance [0]);
			}

			revanche;
		},

		"PSEUDO": fonction (correspondance) {
			var excès,
				sans guillemets =! match [6] && match [2];

			if (matchExpr ["CHILD"]. test (match [0])) {
				return null;
			}

			// Accepte les arguments entre guillemets tels quels
			if (match [3]) {
				match [2] = match [4] || match [5] || "";

			// Supprime les caractères en excès des arguments non entre guillemets
			} else if (sans guillemets && rpseudo.test (sans guillemets) &&
				// Obtient l'excédent de tokenize (récursivement)
				(excédent = tokenize (sans guillemets, vrai)) &&
				// passe à la prochaine parenthèse fermante
				(excédent = sans guillemets.indexOf (")", sans guillemets.longueur - excédent) - sans guillemets.longueur)) {

				// l'excès est un indice négatif
				match [0] = match [0] .slice (0, excès);
				match [2] = sans guillemets.slice (0, excédent);
			}

			// Renvoie uniquement les captures nécessaires à la méthode du pseudo-filtre (type et argument)
			retourne match.slice (0, 3);
		}
	},

	filtre: {

		"TAG": function (nodeNameSelector) {
			var nodeName = nodeNameSelector.replace (runescape, funescape) .toLowerCase ();
			renvoyer nodeNameSelector === "*"?
				function () {return true; }:
				function (elem) {
					return elem.nodeName && elem.nodeName.toLowerCase () === nodeName;
				};
		},

		"CLASS": function (className) {
			var pattern = classCache [nom_classe + ""];

			motif de retour ||
				(modèle = new RegExp ("(^ |" + espace + ")" + nom_classe + "(" + espace + "| $)")) &&
				classCache (className, function (elem) {
					return pattern.test (typeof elem.className === "string" && elem.className || typeof elem.getAttribute! == strundefined && elem.getAttribute ("class") || "");
				});
		},

		"ATTR": fonction (nom, opérateur, chèque) {
			fonction de retour (elem) {
				var result = Sizzle.attr (elem, nom);

				if (résultat == null) {
					opérateur de retour === "! =";
				}
				if (! opérateur) {
					retourne vrai;
				}

				résultat + = "";

				opérateur de retour === "="? résultat === vérifier:
					opérateur === "! ="? résultat! == vérifier:
					opérateur === "^ ="? check && result.indexOf (check) === 0:
					opérateur === "* ="? check && result.indexOf (check)> -1:
					opérateur === "$ ="? check && result.slice (-check.length) === vérifier:
					opérateur === "~ ="? ("" + résultat + "") .indexOf (vérifier)> -1:
					opérateur === "| ="? résultat === vérifier || result.slice (0, check.length + 1) === check + "-":
					faux;
			};
		},

		"CHILD": fonction (type, quoi, argument, premier, dernier) {
			var simple = type.slice (0, 3)! == "nième",
				forward = type.slice (-4)! == "dernier",
				ofType = quoi === "de-type";

			retourne en premier === 1 && dernier === 0?

				// Raccourci pour: nth - * (n)
				function (elem) {
					return !! elem.parentNode;
				}:

				function (elem, contexte, xml) {
					var cache, externalCache, node, diff, nodeIndex, start,
						dir = simple! == en avant? "nextSibling": "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase (),
						useCache =! xml &&! ofType;

					if (parent) {

						//: (premier | dernier | seulement) - (enfant | de type)
						if (simple) {
							while (dir) {
								node = elem;
								while ((node ​​= node [dir])) {
									if (ofType? node.nodeName.toLowerCase () === nom: node.nodeType === 1) {
										retourner faux;
									}
								}
								// Inverser la direction pour: only- * (si nous ne l'avons pas encore fait)
								start = dir = type === "uniquement" &&! start && "nextSibling";
							}
							retourne vrai;
						}

						start = [avancer? parent.firstChild: parent.lastChild];

						// non-xml: nth-child (...) stocke les données de cache sur `parent`
						if (forward && useCache) {
							// Recherche `elem` à partir d'un index précédemment mis en cache
							externalCache = parent [expando] || (parent [expando] = {});
							cache = cache externe [type] || [];
							nodeIndex = cache [0] === dirruns && cache [1];
							diff = cache [0] === dirruns && cache [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							while ((node ​​= ++ nodeIndex && node && node [dir] ||

								// Revenir à la recherche de `elem` depuis le début
								(diff = nodeIndex = 0) || start.pop ())) {

								// Une fois trouvé, cache les index sur `parent` et break
								if (node.nodeType === 1 && ++ diff && node === elem) {
									externalCache [type] = [dirruns, nodeIndex, diff];
									Pause;
								}
							}

						// Utiliser l'index d'élément précédemment mis en cache si disponible
						} else if (useCache && (cache = (elem [expando] || (elem [expando] = {})) [type]) && cache [0] === dirruns) {
							diff = cache [1];

						// xml: nth-child (...) ou: nth-last-child (...) or: nth (-last)? - of-type (...)
						} autre {
							// Utilisez la même boucle que ci-dessus pour rechercher `elem` depuis le début
							while ((node ​​= ++ nodeIndex && node && node [dir] ||
								(diff = nodeIndex = 0) || start.pop ())) {

								if ((ofType? node.nodeName.toLowerCase () === nom: node.nodeType === 1) && ++ diff) {
									// Cache l'index de chaque élément rencontré
									if (useCache) {
										(node ​​[expando] || (node ​​[expando] = {})) [type] = [dirruns, diff];
									}

									if (node ​​=== elem) {
										Pause;
									}
								}
							}
						}

						// Incorporer le décalage, puis vérifier par rapport à la taille du cycle
						diff - = dernier;
						retourne diff === d'abord || (diff% premier === 0 && diff / premier> = 0);
					}
				};
		},

		"PSEUDO": fonction (pseudo, argument) {
			// les noms de pseudo-classes sont insensibles à la casse
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioriser en respectant la casse au cas où des pseudos personnalisés seraient ajoutés avec des lettres majuscules
			// Rappelez-vous que setFilters hérite des pseudos
			var args,
				fn = Expr.pseudos [pseudo] || Expr.setFilters [pseudo.toLowerCase ()] ||
					Sizzle.error ("pseudo non pris en charge:" + pseudo);

			// L'utilisateur peut utiliser createPseudo pour indiquer que
			// des arguments sont nécessaires pour créer la fonction de filtre
			// tout comme Sizzle
			if (fn [expando]) {
				return fn (argument);
			}

			// Mais maintenez le support des anciennes signatures
			if (fn.length> 1) {
				args = [pseudo, pseudo, "", argument];
				renvoie Expr.setFilters.hasOwnProperty (pseudo.toLowerCase ())?
					markFunction (function (seed, matches) {
						var idx,
							matched = fn (graine, argument),
							i = matched.length;
						alors que je-- ) {
							idx = indexOf.call (valeur de départ, correspondant [i]);
							seed [idx] =! (correspond à [idx] = correspond à [i]);
						}
					}):
					function (elem) {
						return fn (elem, 0, args);
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Pseudos potentiellement complexes
		"not": markFunction (function (selector) {
			// Trim le sélecteur passé à la compilation
			// pour éviter de traiter le début et la fin
			// espaces comme combinateurs
			var entrée = [],
				résultats = [],
				matcher = compile (selector.replace (rtrim, "$ 1"));

			renvoyer le matcher [expando]?
				markFunction (function (seed, matches, context, xml) {
					var elem,
						unmatched = matcher (seed, null, xml, []),
						i = longueur de la graine;

					// Faire correspondre les éléments sans correspondance avec `matcher`
					alors que je-- ) {
						if ((elem = inégalé [i])) {
							seed [i] =! (correspond à [i] = elem);
						}
					}
				}):
				function (elem, contexte, xml) {
					entrée [0] = elem;
					matcher (entrée, null, xml, résultats);
					return! results.pop ();
				};
		}),

		"has": markFunction (function (selector) {
			fonction de retour (elem) {
				return Sizzle (sélecteur, élem) .length> 0;
			};
		}),

		"contient": markFunction (function (text) {
			fonction de retour (elem) {
				return (elem.textContent || elem.innerText || getText (elem)) .indexOf (texte)> -1;
			};
		}),

		// "Si un élément est représenté par un sélecteur: lang ()
		// est basé uniquement sur la valeur de langue de l'élément
		// étant égal à l'identifiant C,
		// ou commençant par l'identifiant C immédiatement suivi de "-".
		// La mise en correspondance de C avec la valeur de langage de l'élément est effectuée sans tenir compte de la casse.
		// L'identifiant C ne doit pas être un nom de langue valide. "
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction (function (lang) {
			// la valeur de la langue doit être un identifiant valide
			if (! ridentifier.test (lang || "")) {
				Sizzle.error ("lang non pris en charge:" + lang);
			}
			lang = lang.replace (runescape, funescape) .toLowerCase ();
			fonction de retour (elem) {
				var elemLang;
				faire {
					if ((elemLang = documentIsHTML?
						elem.lang:
						elem.getAttribute ("xml: lang") || elem.getAttribute ("lang"))) {

						elemLang = elemLang.toLowerCase ();
						retourne elemLang === lang || elemLang.indexOf (lang + "-") === 0;
					}
				} while ((elem = elem.parentNode) && elem.nodeType === 1);
				retourner faux;
			};
		}),

		// Divers
		"target": function (elem) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice (1) === elem.id;
		},

		"root": function (elem) {
			return elem === docElem;
		},

		"focus": function (elem) {
			return elem === document.activeElement && (! document.hasFocus || document.hasFocus ()) && !! (elem.type || elem.href || ~ elem.tabIndex);
		},

		// Propriétés booléennes
		"enabled": function (elem) {
			return elem.disabled === false;
		},

		"disabled": function (elem) {
			return elem.disabled === true;
		},

		"vérifié": function (elem) {
			// En CSS3,: coché doit retourner les éléments cochés et sélectionnés
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase ();
			return (nodeName === "entrée" && !! elem.checked) || (nodeName === "option" && !! elem.selected);
		},

		"selected": function (elem) {
			// L'accès à cette propriété rend la sélection par défaut
			// les options de Safari fonctionnent correctement
			if (elem.parentNode) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contenu
		"vide": function (elem) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			//: vide est annulé par l'élément (1) ou les nœuds de contenu (texte: 3; cdata: 4; ref entité: 5),
			// mais pas par d'autres (commentaire: 8; instruction de traitement: 7; etc.)
			// nodeType <6 fonctionne car les attributs (2) n'apparaissent pas en tant qu'enfants
			pour (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				if (elem.nodeType <6) {
					retourner faux;
				}
			}
			retourne vrai;
		},

		"parent": function (elem) {
			return! Expr.pseudos ["vide"] (elem);
		},

		// Types d'élément / d'entrée
		"header": function (elem) {
			return rheader.test (elem.nodeName);
		},

		"input": function (elem) {
			return rinputs.test (elem.nodeName);
		},

		"bouton": fonction (elem) {
			var name = elem.nodeName.toLowerCase ();
			retourne le nom === "input" && elem.type === "button" || nom === "bouton";
		},

		"text": function (elem) {
			var attr;
			retourne elem.nodeName.toLowerCase () === "entrée" &&
				elem.type === "texte" &&

				// Prise en charge: IE <8
				// Les nouvelles valeurs d'attribut HTML5 (par exemple, "recherche") apparaissent avec elem.type === "text"
				((attr = elem.getAttribute ("type")) == null || attr.toLowerCase () === "texte");
		},

		// Position dans la collection
		"premier": createPositionalPseudo (function () {
			return [0];
		}),

		"dernier": createPositionalPseudo (function (matchIndexes, length) {
			return [longueur - 1];
		}),

		"eq": createPositionalPseudo (function (matchIndexes, length, argument) {
			return [argument <0? argument + longueur: argument];
		}),

		"even": createPositionalPseudo (function (matchIndexes, length) {
			var i = 0;
			pour (; i <longueur; i + = 2) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"impair": createPositionalPseudo (function (matchIndexes, length) {
			var i = 1;
			pour (; i <longueur; i + = 2) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo (function (matchIndexes, length, argument) {
			var i = argument <0? argument + longueur: argument;
			pour (; --i> = 0;) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo (function (matchIndexes, length, argument) {
			var i = argument <0? argument + longueur: argument;
			pour (; ++ i <longueur;) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos ["nth"] = Expr.pseudos ["eq"];

// Ajouter des pseudos de bouton / type d'entrée
for (i in {radio: true, checkbox: true, file: true, password: true, image: true}) {
	Expr.pseudos [i] = createInputPseudo (i);
}
for (i in {submit: true, reset: true}) {
	Expr.pseudos [i] = createButtonPseudo (i);
}

// API facile pour créer de nouveaux setFilters
function setFilters () {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters ();

tokenize = Sizzle.tokenize = function (sélecteur, parseOnly) {
	var correspondant, match, jetons, type,
		soFar, groupes, pré-filtres,
		cached = tokenCache [sélecteur + ""];

	if (mis en cache) {
		return parseOnly? 0: cached.slice (0);
	}

	soFar = sélecteur;
	groupes = [];
	preFilters = Expr.preFilter;

	while (soFar) {

		// Virgule et première exécution
		if (! matched || (match = rcomma.exec (soFar))) {
			if (match) {
				// Ne pas utiliser les virgules de fin comme valides
				soFar = soFar.slice (correspond à [0] .length) || jusque là;
			}
			groups.push ((jetons = []));
		}

		apparié = faux;

		// Combinateurs
		if ((match = rcombinators.exec (soFar))) {
			matched = match.shift ();
			tokens.push ({
				valeur: appariée,
				// Cast combinateurs descendants dans l'espace
				type: match [0] .replace (rtrim, "")
			});
			soFar = soFar.slice (matched.length);
		}

		// Filtres
		for (tapez Expr.filter) {
			if ((match = matchExpr [type] .exec (soFar)) && (! preFilters [type] ||
				(match = preFilters [type] (match)))) {
				matched = match.shift ();
				tokens.push ({
					valeur: appariée,
					type: type,
					matchs: match
				});
				soFar = soFar.slice (matched.length);
			}
		}

		if (! correspondu) {
			Pause;
		}
	}

	// Renvoie la longueur de l'excédent invalide
	// si nous analysons juste
	// Sinon, lancer une erreur ou renvoyer des jetons
	return parseOnly?
		soFar.length:
		jusque là ?
			Sizzle.error (sélecteur):
			// Cache les jetons
			tokenCache (sélecteur, groupes) .slice (0);
};

function toSelector (jetons) {
	var i = 0,
		len = tokens.length,
		sélecteur = "";
	pour (; i <len; i ++) {
		sélecteur + = jetons [i] .valeur;
	}
	sélecteur de retour;
}

function addCombinator (matcher, combinator, base) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done ++;

	retourner combinator.first?
		// Vérifier par rapport à l'ancêtre le plus proche / à l'élément précédent
		function (elem, contexte, xml) {
			while ((elem = elem [dir])) {
				if (elem.nodeType === 1 || checkNonElements) {
					return matcher (elem, contexte, xml);
				}
			}
		}:

		// Vérifier par rapport à tous les éléments ancêtres / précédents
		function (elem, contexte, xml) {
			var oldCache, externalCache,
				newCache = [dirruns, doneName];

			// Nous ne pouvons pas définir de données arbitraires sur les nœuds XML, ils ne bénéficient donc pas de la mise en cache des répertoires
			if (xml) {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						if (matcher (elem, context, xml)) {
							retourne vrai;
						}
					}
				}
			} autre {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						externalCache = elem [expando] || (elem [expando] = {});
						if ((oldCache = externalCache [dir]) &&
							oldCache [0] === dirruns && oldCache [1] === doneName) {

							// Assigner à newCache pour que les résultats se propagent vers les éléments précédents
							return (newCache [2] = oldCache [2]);
						} autre {
							// Réutiliser newcache pour que les résultats se propagent aux éléments précédents
							externalCache [dir] = newCache;

							// Une correspondance signifie que nous avons terminé; un échec signifie que nous devons continuer à vérifier
							if ((newCache [2] = matcher (elem, context, xml))) {
								retourne vrai;
							}
						}
					}
				}
			}
		};
}

function elementMatcher (matchers) {
	renvoyer matchers.length> 1?
		function (elem, contexte, xml) {
			var i = matchers.length;
			alors que je-- ) {
				if (! matchers [i] (elem, context, xml)) {
					retourner faux;
				}
			}
			retourne vrai;
		}:
		matchers [0];
}

function multipleContexts (sélecteur, contextes, résultats) {
	var i = 0,
		len = contextes.length;
	pour (; i <len; i ++) {
		Sizzle (sélecteur, contextes [i], résultats);
	}
	renvoyer les résultats;
}

function condenser (inégalé, carte, filtre, contexte, xml) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = longueur.inégalée,
		mappé = carte! = null;

	pour (; i <len; i ++) {
		if ((elem = inégalé [i])) {
			if (! filtre || filtre (elem, contexte, xml)) {
				newUnmatched.push (elem);
				if (mappé) {
					map.push (i);
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher (preFilter, selector, matcher, postFilter, postFinder, postSelector) {
	if (postFilter &&! postFilter [expando]) {
		postFilter = setMatcher (postFilter);
	}
	if (postFinder &&! postFinder [expando]) {
		postFinder = setMatcher (postFinder, postSelector);
	}
	return markFunction (function (seed, résultats, contexte, xml) {
		var temp, je, elem,
			preMap = [],
			postMap = [],
			préexistant = résultats.longueur,

			// Récupère les éléments initiaux de la graine ou du contexte
			elems = graine || multipleContexts (sélecteur || "*", context.nodeType? [contexte]: contexte, []),

			// Préfiltre pour obtenir l'entrée du matcher, préservant une carte pour la synchronisation des résultats de départ
			matcherIn = preFilter && (seed ||! selector)?
				condenser (elems, preMap, preFilter, context, xml):
				élèmes,

			matcherOut = matcher?
				// Si nous avons un postFinder, ou une graine filtrée, ou un postFilter non-seed ou des résultats préexistants,
				postFinder || (graine? preFilter: préexistant || postFilter)?

					// ... un traitement intermédiaire est nécessaire
					[]:

					// ... sinon utiliser les résultats directement
					résultats :
				matcherIn;

		// Trouver les correspondances principales
		if (matcher) {
			matcher (matcherIn, matcherOut, contexte, xml);
		}

		// Appliquer postFilter
		if (postFilter) {
			temp = condenser (matcherOut, postMap);
			postFilter (temp, [], contexte, xml);

			// Annuler la correspondance des éléments défaillants en les replaçant dans matcherIn
			i = longueur de température;
			alors que je-- ) {
				if ((elem = temp [i])) {
					matcherOut [postMap [i]] =! (matcherIn [postMap [i]] = elem);
				}
			}
		}

		if (graine) {
			if (postFinder || preFilter) {
				if (postFinder) {
					// Récupère le matcherOut final en condensant cet intermédiaire dans des contextes postFinder
					temp = [];
					i = matcherOut.length;
					alors que je-- ) {
						if ((elem = matcherOut [i])) {
							// Restaure matcherIn car elem n'est pas encore une correspondance finale
							temp.push ((matcherIn [i] = elem));
						}
					}
					postFinder (null, (matcherOut = []), temp, xml);
				}

				// Déplacer les éléments correspondants de la graine aux résultats pour les garder synchronisés
				i = matcherOut.length;
				alors que je-- ) {
					if ((elem = matcherOut [i]) &&
						(temp = postFinder? indexOf.call (seed, elem): preMap [i])> -1) {

						seed [temp] =! (résultats [temp] = elem);
					}
				}
			}

		// Ajouter des éléments aux résultats, via postFinder si défini
		} autre {
			matcherOut = condenser (
				matcherOut === résultats?
					matcherOut.splice (préexistant, matcherOut.length):
					matcherOut
			);
			if (postFinder) {
				postFinder (null, résultats, matcherOut, xml);
			} autre {
				push.apply (résultats, matcherOut);
			}
		}
	});
}

function matcherFromTokens (jetons) {
	var checkContext, matcher, j,
		len = tokens.length,
		LeadingRelative = Expr.relative [tokens [0] .type],
		implicitRelative = LeadingRelative || Expr.relative [""],
		i = leader relatif? dix,

		// Le matcher de base garantit que les éléments sont accessibles à partir du (des) contexte (s) de niveau supérieur
		matchContext = addCombinator (fonction (elem) {
			return elem === checkContext;
		}, implicitRelative, true),
		matchAnyContext = addCombinator (function (elem) {
			return indexOf.call (checkContext, elem)> -1;
		}, implicitRelative, true),
		matchers = [function (elem, context, xml) {
			return (! LeadingRelative && (xml || contexte! == outermostContext)) || (
				(checkContext = context) .nodeType?
					matchContext (elem, contexte, xml):
					matchAnyContext (elem, contexte, xml));
		}];

	pour (; i <len; i ++) {
		if ((matcher = Expr.relative [tokens [i] .type])) {
			matchers = [addCombinator (elementMatcher (matchers), matcher)];
		} autre {
			matcher = Expr.filter [tokens [i] .type] .apply (null, tokens [i] .matches);

			// Retour spécial en voyant un correcteur de position
			if (matcher [expando]) {
				// Trouver le prochain opérateur relatif (le cas échéant) pour une manipulation correcte
				j = ++ i;
				pour (; j <len; j ++) {
					if (Expr.relative [tokens [j] .type]) {
						Pause;
					}
				}
				retourne setMatcher (
					i> 1 && elementMatcher (matchers),
					i> 1 && toSelector (
						// Si le jeton précédent était un combinateur descendant, insérez un élément quelconque implicite `*`
						tokens.slice (0, i - 1) .concat ({valeur: tokens [i - 2] .type === ""? "*": ""})
					) .replace (rtrim, "$ 1"),
					matcher,
					i <j && matcherFromTokens (tokens.slice (i, j)),
					j <len && matcherFromTokens ((tokens = tokens.slice (j))),
					j <len && toSelector (jetons)
				);
			}
			matchers.push (matcher);
		}
	}

	return elementMatcher (matchers);
}

function matcherFromGroupMatchers (elementMatchers, setMatchers) {
	var bySet = setMatchers.length> 0,
		byElement = elementMatchers.length> 0,
		superMatcher = fonction (graine, contexte, xml, résultats, la plus externe) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				sans correspondance = graine && [],
				setMatched = [],
				contextBackup = outermostContext,
				// Nous devons toujours avoir des éléments de départ ou un contexte le plus extérieur
				elems = graine || byElement && Expr.find ["TAG"] ("*", à l'extérieur),
				// Utilisez des dirruns entiers ssi c'est le matcher le plus externe
				dirrunsUnique = (dirruns + = contextBackup == null? 1: Math.random () || 0.1),
				len = elems.length;

			if (à l'extérieur) {
				outermostContext = context! == document && context;
			}

			// Ajout des éléments en passant elementMatchers directement aux résultats
			// Gardez `i` une chaîne s'il n'y a pas d'éléments, donc` matchedCount` sera "00" ci-dessous
			// Prise en charge: IE <9, Safari
			// Tolère les propriétés NodeList (IE: "length"; Safari: <number>) éléments correspondants par id
			pour (; i! == len && (elem = elems [i])! = null; i ++) {
				if (byElement && elem) {
					j = 0;
					while ((matcher = elementMatchers [j ++])) {
						if (matcher (elem, context, xml)) {
							results.push (elem);
							Pause;
						}
					}
					if (à l'extérieur) {
						dirruns = dirrunsUnique;
					}
				}

				// Suivi des éléments sans correspondance pour les filtres définis
				if (bySet) {
					// Ils seront passés par tous les matchers possibles
					if ((elem =! matcher && elem)) {
						matchedCount--;
					}

					// Allonge le tableau pour chaque élément, correspondant ou non
					if (graine) {
						unmatched.push (elem);
					}
				}
			}

			// Appliquer des filtres définis à des éléments sans correspondance
			matchedCount + = i;
			if (bySet && i! == matchedCount) {
				j = 0;
				while ((matcher = setMatchers [j ++])) {
					matcher (inégalé, setMatched, context, xml);
				}

				if (graine) {
					// Réintègre les correspondances d'éléments pour éliminer le besoin de tri
					if (matchedCount> 0) {
						alors que je-- ) {
							if (! (sans correspondance [i] || setMatched [i])) {
								setMatched [i] = pop.call (résultats);
							}
						}
					}

					// Ignorer les valeurs d'espace réservé d'index pour obtenir uniquement les correspondances réelles
					setMatched = condenser (setMatched);
				}

				// Ajouter des correspondances aux résultats
				push.apply (résultats, setMatched);

				// Les correspondances d'ensemble sans pépins qui succèdent à plusieurs correspondants réussis stipulent le tri
				if (la plus externe &&! seed && setMatched.length> 0 &&
					(matchedCount + setMatchers.length)> 1) {

					Sizzle.uniqueSort (résultats);
				}
			}

			// Remplacer la manipulation des globaux par des correspondants imbriqués
			if (à l'extérieur) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			retour inégalé;
		};

	revenir par Set?
		markFunction (superMatcher):
		superMatcher;
}

compile = Sizzle.compile = function (selector, match / * Usage interne uniquement * /) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache [sélecteur + ""];

	if (! mis en cache) {
		// Génère une fonction de fonctions récursives qui peuvent être utilisées pour vérifier chaque élément
		if (! match) {
			match = tokenize (sélecteur);
		}
		i = match.length;
		alors que je-- ) {
			cached = matcherFromTokens (match [i]);
			if (mis en cache [expando]) {
				setMatchers.push (mis en cache);
			} autre {
				elementMatchers.push (mis en cache);
			}
		}

		// Cache la fonction compilée
		cached = compilerCache (sélecteur, matcherFromGroupMatchers (elementMatchers, setMatchers));

		// Enregistrer le sélecteur et la tokenisation
		cached.selector = sélecteur;
	}
	retour en cache;
};

/ **
 * Une fonction de sélection de bas niveau qui fonctionne avec la compilation de Sizzle
 * fonctions de sélection
 * @param {String | Function} selector Un sélecteur ou un pré-compilé
 * fonction de sélection construite avec Sizzle.compile
 * @param {Element} contexte
 * @param {Array} [résultats]
 * @param {Array} [seed] Un ensemble d'éléments à comparer
 * /
select = Sizzle.select = function (sélecteur, contexte, résultats, graine) {
	var i, jetons, jeton, type, trouver,
		compiled = typeof selector === "function" && selector,
		match =! seed && tokenize ((selector = compiled.selector || selector));

	résultats = résultats || [];

	// Essayez de minimiser les opérations s'il n'y a pas de départ et un seul groupe
	if (match.length === 1) {

		// Prendre un raccourci et définir le contexte si le sélecteur racine est un ID
		tokens = match [0] = match [0] .slice (0);
		if (tokens.length> 2 && (token = tokens [0]). type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative [tokens [1] .type]) {

			context = (Expr.find ["ID"] (token.matches [0] .replace (runescape, funescape), context) || []) [0];
			if (! contexte) {
				renvoyer les résultats;

			// Les correspondants précompilés vérifieront toujours l'ascendance, alors augmentez d'un niveau
			} else if (compilé) {
				context = context.parentNode;
			}

			selector = selector.slice (tokens.shift (). value.length);
		}

		// Récupère un ensemble de départ pour une correspondance de droite à gauche
		i = matchExpr ["needsContext"]. test (sélecteur)? 0: tokens.length;
		alors que je-- ) {
			jeton = jetons [i];

			// Abandonner si nous frappons un combinateur
			if (Expr.relative [(type = token.type)]) {
				Pause;
			}
			if ((find = Expr.find [type])) {
				// Recherche, élargissement du contexte pour les principaux combinateurs frères
				si ((graine = trouver (
					token.matches [0] .replace (runescape, funescape),
					rsibling.test (jetons [0] .type) && testContext (context.parentNode) || le contexte
				))) {

					// Si la graine est vide ou s'il ne reste aucun jeton, nous pouvons revenir plus tôt
					tokens.splice (i, 1);
					selector = seed.length && toSelector (jetons);
					if (! sélecteur) {
						push.apply (résultats, semences);
						renvoyer les résultats;
					}

					Pause;
				}
			}
		}
	}

	// Compile et exécute une fonction de filtrage si aucune n'est fournie
	// Fournit `match` pour éviter la retokenisation si nous avons modifié le sélecteur ci-dessus
	(compilé || compile (sélecteur, correspondance)) (
		la graine,
		le contexte,
		! documentIsHTML,
		résultats,
		rsibling.test (sélecteur) && testContext (context.parentNode) || le contexte
	);
	renvoyer les résultats;
};

// Affectations ponctuelles

// Stabilité du tri
support.sortStable = expando.split (""). sort (sortOrder) .join ("") === expando;

// Prise en charge: Chrome <14
// Suppose toujours les doublons s'ils ne sont pas passés à la fonction de comparaison
support.detectDuplicates = !! hasDuplicate;

// Initialisation par rapport au document par défaut
setDocument ();

// Support: Webkit <537.32 - Safari 6.0.3 / Chrome 25 (corrigé dans Chrome 27)
// Les nœuds détachés se suivent de manière * confuse *
support.sortDetached = assert (fonction (div1) {
	// Doit retourner 1, mais renvoie 4 (suivant)
	retourne div1.compareDocumentPosition (document.createElement ("div")) & 1;
});

// Prise en charge: IE <8
// Empêcher l'attribut / propriété "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if (! assert (fonction (div) {
	div.innerHTML = "<a href='#'> </a>";
	return div.firstChild.getAttribute ("href") === "#";
})) {
	addHandle ("type | href | hauteur | largeur", function (elem, name, isXML) {
		if (! isXML) {
			return elem.getAttribute (nom, nom.toLowerCase () === "type"? 1: 2);
		}
	});
}

// Prise en charge: IE <9
// Utiliser defaultValue à la place de getAttribute ("value")
if (! support.attributes ||! assert (fonction (div) {
	div.innerHTML = "<entrée />";
	div.firstChild.setAttribute ("valeur", "");
	return div.firstChild.getAttribute ("valeur") === "";
})) {
	addHandle ("value", function (elem, name, isXML) {
		if (! isXML && elem.nodeName.toLowerCase () === "entrée") {
			return elem.defaultValue;
		}
	});
}

// Prise en charge: IE <9
// Utilisez getAttributeNode pour récupérer les booléens lorsque getAttribute ment
if (! assert (fonction (div) {
	return div.getAttribute ("disabled") == null;
})) {
	addHandle (booléens, function (elem, name, isXML) {
		var val;
		if (! isXML) {
			return elem [nom] === vrai? name.toLowerCase ():
					(val = elem.getAttributeNode (nom)) && val.specified?
					val.value:
				nul;
		}
	});
}

retournez Sizzle;

})( la fenêtre );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr [":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/ ^ <(\ w +) \ s * \ /?> (?: <\ / \ 1> |) $ /);



var risSimple = /^.

// Implémente la fonctionnalité identique pour le filtre et non
function winnow (éléments, qualificatif, non) {
	if (jQuery.isFunction (qualificatif)) {
		return jQuery.grep (éléments, fonction (elem, i) {
			/ * jshint -W018 * /
			return !! qualifier.call (elem, i, elem)! == not;
		});

	}

	if (qualifier.nodeType) {
		return jQuery.grep (éléments, fonction (elem) {
			return (elem === qualificatif)! == non;
		});

	}

	if (typeof qualifier === "chaîne") {
		if (risSimple.test (qualificatif)) {
			return jQuery.filter (qualificatif, éléments, non);
		}

		qualifier = jQuery.filter (qualificatif, éléments);
	}

	return jQuery.grep (éléments, fonction (elem) {
		return (jQuery.inArray (elem, qualifier)> = 0)! == non;
	});
}

jQuery.filter = function (expr, elems, not) {
	var elem = elems [0];

	si non ) {
		expr = ": not (" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1?
		jQuery.find.matchesSelector (elem, expr)? [elem]: []:
		jQuery.find.matches (expr, jQuery.grep (elems, function (elem) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend ({
	find: function (sélecteur) {
		var i,
			ret = [],
			soi = ceci,
			len = self.length;

		if (typeof selector! == "string") {
			renvoyer this.pushStack (jQuery (sélecteur) .filter (function () {
				pour (i = 0; i <len; i ++) {
					if (jQuery.contains (self [i], this)) {
						retourne vrai;
					}
				}
			}));
		}

		pour (i = 0; i <len; i ++) {
			jQuery.find (sélecteur, self [i], ret);
		}

		// Nécessaire car $ (selector, context) devient $ (context) .find (selector)
		ret = this.pushStack (len> 1? jQuery.unique (ret): ret);
		ret.selector = this.selector? this.selector + "" + selector: selector;
		return ret;
	},
	filtre: fonction (sélecteur) {
		return this.pushStack (winnow (this, sélecteur || [], false));
	},
	not: function (sélecteur) {
		return this.pushStack (winnow (this, sélecteur || [], true));
	},
	est: function (selector) {
		retour !! winnow (
			ce,

			// S'il s'agit d'un sélecteur positionnel / relatif, vérifiez l'appartenance à l'ensemble renvoyé
			// donc $ ("p: first"). is ("p: last") ne retournera pas true pour un doc avec deux "p".
			typeof selector === "string" && rneedsContext.test (selector)?
				jQuery (sélecteur):
				sélecteur || [],
			faux
		).longueur;
	}
});


// Initialise un objet jQuery


// Une référence centrale à la racine jQuery (document)
var rootjQuery,

	// Utiliser le bon document en conséquence avec l'argument window (sandbox)
	document = window.document,

	// Un moyen simple de vérifier les chaînes HTML
	// Prioriser #id sur <tag> pour éviter XSS via location.hash (# 9521)
	// Reconnaissance HTML stricte (# 11290: doit commencer par <)
	rquickExpr = / ^ (?: \ s * (<[\ w \ W] +>) [^>] * | # ([\ w -] *)) $ /,

	init = jQuery.fn.init = function (sélecteur, contexte) {
		var match, elem;

		// POIGNEE: $ (""), $ (null), $ (non défini), $ (faux)
		if (! sélecteur) {
			renvoyer ceci;
		}

		// Gérer les chaînes HTML
		if (sélecteur typeof === "chaîne") {
			if (selector.charAt (0) === "<" && selector.charAt (selector.length - 1) === ">" && selector.length> = 3) {
				// Supposons que les chaînes commençant et finissant par <> soient HTML et ignorent la vérification de l'expression régulière
				match = [nul, sélecteur, nul];

			} autre {
				match = rquickExpr.exec (sélecteur);
			}

			// Correspond au html ou assurez-vous qu'aucun contexte n'est spécifié pour #id
			if (match && (match [1] ||! contexte)) {

				// MANIPULER: $ (html) -> $ (tableau)
				if (match [1]) {
					context = instance de contexte de jQuery? contexte [0]: contexte;

					// les scripts sont vrais pour la rétro-compatibilité
					// Laisse intentionnellement l'erreur être renvoyée si parseHTML n'est pas présent
					jQuery.merge (ceci, jQuery.parseHTML (
						match [1],
						context && context.nodeType? context.ownerDocument || contexte: document,
						vrai
					));

					// POIGNÉE: $ (html, accessoires)
					if (rsingleTag.test (match [1]) && jQuery.isPlainObject (contexte)) {
						for (correspondance en contexte) {
							// Les propriétés du contexte sont appelées comme méthodes si possible
							if (jQuery.isFunction (this [match])) {
								this [match] (contexte [match]);

							// ... et autrement défini comme attributs
							} autre {
								this.attr (correspondance, contexte [correspondance]);
							}
						}
					}

					renvoyer ceci;

				// POIGNEE: $ (# id)
				} autre {
					elem = document.getElementById (match [2]);

					// Vérifiez parentNode pour attraper lorsque Blackberry 4.6 revient
					// nœuds qui ne sont plus dans le document # 6963
					if (elem && elem.parentNode) {
						// Gère le cas où IE et Opera retournent des éléments
						// par nom au lieu d'ID
						if (elem.id! == match [2]) {
							return rootjQuery.find (sélecteur);
						}

						// Sinon, on injecte l'élément directement dans l'objet jQuery
						this.length = 1;
						this [0] = elem;
					}

					this.context = document;
					this.selector = sélecteur;
					renvoyer ceci;
				}

			// POIGNEE: $ (expr, $ (...))
			} else if (! context || context.jquery) {
				return (contexte || rootjQuery) .find (sélecteur);

			// POIGNEE: $ (expr, contexte)
			// (qui est juste équivalent à: $ (context) .find (expr)
			} autre {
				renvoie this.constructor (contexte) .find (sélecteur);
			}

		// POIGNEE: $ (DOMElement)
		} else if (selector.nodeType) {
			this.context = this [0] = sélecteur;
			this.length = 1;
			renvoyer ceci;

		// POIGNEE: $ (fonction)
		// Raccourci pour le document prêt
		} else if (jQuery.isFunction (sélecteur)) {
			return typeof rootjQuery.ready! == "non défini"?
				rootjQuery.ready (sélecteur):
				// Exécute immédiatement si prêt n'est pas présent
				sélecteur (jQuery);
		}

		if (selector.selector! == undefined) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray (sélecteur, this);
	};

// Donne à la fonction init le prototype jQuery pour une instanciation ultérieure
init.prototype = jQuery.fn;

// Initialisation de la référence centrale
rootjQuery = jQuery (document);


var rparentsprev = / ^ (?: parents | prev (?: Jusqu'à | Tout)) /,
	// méthodes garantissant de produire un ensemble unique en partant d'un ensemble unique
	garantiUnique = {
		enfants: vrai,
		contenu: vrai,
		suivant: vrai,
		prev: vrai
	};

jQuery.extend ({
	dir: function (elem, dir, until) {
		var matched = [],
			cur = elem [dir];

		while (cur && cur.nodeType! == 9 && (jusqu'à === undefined || cur.nodeType! == 1 ||! jQuery (cur) .is (jusqu'à))) {
			if (cur.nodeType === 1) {
				matched.push (cur);
			}
			cur = cur [dir];
		}
		retour correspondant;
	},

	frère: function (n, elem) {
		var r = [];

		pour (; n; n = n.nextSibling) {
			if (n.nodeType === 1 && n! == elem) {
				r.push (n);
			}
		}

		return r;
	}
});

jQuery.fn.extend ({
	has: function (cible) {
		var i,
			cibles = jQuery (cible, ceci),
			len = cibles.longueur;

		retourne this.filter (function () {
			pour (i = 0; i <len; i ++) {
				if (jQuery.contains (this, cibles [i])) {
					retourne vrai;
				}
			}
		});
	},

	le plus proche: fonction (sélecteurs, contexte) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test (sélecteurs) || typeof sélecteurs! == "chaîne"?
				jQuery (sélecteurs, contexte || this.context):
				0;

		pour (; i <l; i ++) {
			for (cur = this [i]; cur && cur! == context; cur = cur.parentNode) {
				// Toujours ignorer les fragments de document
				si (cur.nodeType <11 && (pos?
					pos.index (cur)> -1:

					// Ne passe pas de non-éléments à Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector (cur, sélecteurs))) {

					matched.push (cur);
					Pause;
				}
			}
		}

		return this.pushStack (matched.length> 1? jQuery.unique (matched): matched);
	},

	// Détermine la position d'un élément dans
	// l'ensemble d'éléments correspondants
	index: function (elem) {

		// Aucun argument, retourne l'index dans le parent
		if (! elem) {
			return (this [0] && this [0] .parentNode)? this.first (). prevAll (). length: -1;
		}

		// index dans le sélecteur
		if (typeof elem === "chaîne") {
			return jQuery.inArray (this [0], jQuery (elem));
		}

		// Localiser la position de l'élément souhaité
		retourne jQuery.inArray (
			// S'il reçoit un objet jQuery, le premier élément est utilisé
			elem.jquery? elem [0]: elem, this);
	},

	add: function (sélecteur, contexte) {
		retourne this.pushStack (
			jQuery.unique (
				jQuery.merge (this.get (), jQuery (sélecteur, contexte))
			)
		);
	},

	addBack: function (sélecteur) {
		renvoie this.add (selector == null?
			this.prevObject: this.prevObject.filter (sélecteur)
		);
	}
});

frère de fonction (cur, dir) {
	faire {
		cur = cur [dir];
	} while (cur && cur.nodeType! == 1);

	return cur;
}

jQuery.each ({
	parent: function (elem) {
		var parent = elem.parentNode;
		retourne le parent && parent.nodeType! == 11? parent: nul;
	},
	parents: function (elem) {
		return jQuery.dir (elem, "parentNode");
	},
	parentsUntil: function (elem, i, until) {
		return jQuery.dir (elem, "parentNode", jusqu'à);
	},
	suivant: function (elem) {
		return sibling (elem, "nextSibling");
	},
	prev: function (elem) {
		return frère (elem, "previousSibling");
	},
	nextAll: function (elem) {
		return jQuery.dir (elem, "nextSibling");
	},
	prevAll: function (elem) {
		return jQuery.dir (elem, "previousSibling");
	},
	nextUntil: function (elem, i, until) {
		return jQuery.dir (elem, "nextSibling", jusqu'à);
	},
	prevUntil: function (elem, i, until) {
		return jQuery.dir (elem, "previousSibling", jusqu'à);
	},
	frères et sœurs: function (elem) {
		return jQuery.sibling ((elem.parentNode || {}) .firstChild, elem);
	},
	enfants: function (elem) {
		return jQuery.sibling (elem.firstChild);
	},
	contenu: function (elem) {
		return jQuery.nodeName (elem, "iframe")?
			elem.contentDocument || elem.contentWindow.document:
			jQuery.merge ([], elem.childNodes);
	}
}, fonction (nom, fn) {
	jQuery.fn [nom] = fonction (jusqu'à, sélecteur) {
		var ret = jQuery.map (ceci, fn, jusqu'à);

		if (nom.slice (-5)! == "Jusqu'à") {
			sélecteur = jusqu'à;
		}

		if (sélecteur && typeof sélecteur === "chaîne") {
			ret = jQuery.filter (sélecteur, ret);
		}

		if (this.length> 1) {
			// Supprimer les doublons
			if (! garantiUnique [nom]) {
				ret = jQuery.unique (ret);
			}

			// Ordre inverse pour les parents * et les dérivés précédents
			if (rparentsprev.test (nom)) {
				ret = ret.reverse ();
			}
		}

		return this.pushStack (ret);
	};
});
var rnotwhite = (/ \ S + / g);



// Cache de format des options de chaîne en objet
var optionsCache = {};

// Convertit les options au format String en options au format objet et les stocke dans le cache
function createOptions (options) {
	var object = optionsCache [options] = {};
	jQuery.each (options.match (rnotwhite) || [], fonction (_, indicateur) {
		objet [drapeau] = vrai;
	});
	objet de retour;
}

/ *
 * Créez une liste de rappel en utilisant les paramètres suivants:
 *
 * options: une liste optionnelle d'options séparées par des espaces qui changeront la façon
 * la liste de rappel se comporte ou un objet option plus traditionnel
 *
 * Par défaut, une liste de rappel agira comme une liste de rappel d'événement et peut être
 * "tiré" plusieurs fois.
 *
 * Options possibles:
 *
 * une fois: garantira que la liste de rappel ne peut être déclenchée qu'une seule fois (comme un différé)
 *
 * mémoire: gardera une trace des valeurs précédentes et appellera tout rappel ajouté
 * après que la liste a été déclenchée tout de suite avec le dernier "mémorisé"
 * valeurs (comme un différé)
 *
 * unique: garantira qu'un rappel ne pourra être ajouté qu'une seule fois (pas de doublon dans la liste)
 *
 * stopOnFalse: interrompre les appels lorsqu'un rappel retourne false
 *
 * /
jQuery.Callbacks = fonction (options) {

	// Convertit les options de format chaîne en format objet si nécessaire
	// (nous vérifions d'abord le cache)
	options = typeof options === "chaîne"?
		(optionsCache [options] || createOptions (options)):
		jQuery.extend ({}, options);

	var // Indicateur pour savoir si la liste est en cours de déclenchement
		cuisson,
		// Dernière valeur de feu (pour les listes non oubliables)
		Mémoire,
		// Indicateur pour savoir si la liste a déjà été déclenchée
		mis à la porte,
		// Fin de la boucle lors du tir
		longueur de tir,
		// Index du rappel en cours de déclenchement (modifié par remove si nécessaire)
		firingIndex,
		// Premier rappel au feu (utilisé en interne par add et fireWith)
		départ,
		// Liste de rappel réelle
		liste = [],
		// Stack of fire appelle à des listes répétables
		stack =! options.once && [],
		// Rappels d'incendie
		feu = fonction (données) {
			mémoire = options.memory && data;
			tiré = vrai;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = liste.longueur;
			tir = vrai;
			for (; list && firingIndex <firingLength; firingIndex ++) {
				if (list [firingIndex] .apply (data [0], data [1]) === false && options.stopOnFalse) {
					mémoire = faux; // Pour empêcher d'autres appels en utilisant add
					Pause;
				}
			}
			tir = faux;
			if (liste) {
				if (pile) {
					if (stack.length) {
						feu (stack.shift ());
					}
				} else if (mémoire) {
					liste = [];
				} autre {
					auto.disable ();
				}
			}
		},
		// Objet Rappels réels
		soi = {
			// Ajout d'un callback ou d'une collection de callbacks à la liste
			ajouter: function () {
				if (liste) {
					// Tout d'abord, nous sauvegardons la longueur actuelle
					var start = list.length;
					(fonction add (args) {
						jQuery.each (args, fonction (_, arg) {
							var type = jQuery.type (arg);
							if (type === "fonction") {
								if (! options.unique ||! self.has (arg)) {
									list.push (arg);
								}
							} else if (arg && arg.length && type! == "string") {
								// Inspecter récursivement
								ajouter (arg);
							}
						});
					})( arguments );
					// Avons-nous besoin d'ajouter les rappels au
					// lot de tir actuel?
					if (tir) {
						firingLength = liste.longueur;
					// Avec mémoire, si nous ne tirons pas alors
					// nous devrions appeler tout de suite
					} else if (mémoire) {
						firingStart = début;
						feu (mémoire);
					}
				}
				renvoyer ceci;
			},
			// Supprimer un rappel de la liste
			supprimer: function () {
				if (liste) {
					jQuery.each (arguments, fonction (_, arg) {
						index var;
						while ((index = jQuery.inArray (arg, liste, index))> -1) {
							list.splice (index, 1);
							// Gérer les index de déclenchement
							if (tir) {
								if (index <= firingLength) {
									firingLength--;
								}
								if (index <= firingIndex) {
									firingIndex--;
								}
							}
						}
					});
				}
				renvoyer ceci;
			},
			// Vérifie si un rappel donné est dans la liste.
			// Si aucun argument n'est donné, retourne si la liste a ou non des rappels attachés.
			a: function (fn) {
				retourner fn? jQuery.inArray (fn, liste)> -1: !! (liste && list.length);
			},
			// Supprime tous les rappels de la liste
			vide: function () {
				liste = [];
				firingLength = 0;
				renvoyer ceci;
			},
			// Que la liste ne fasse plus rien
			désactiver: function () {
				liste = pile = mémoire = non définie;
				renvoyer ceci;
			},
			// Est-il désactivé?
			désactivé: function () {
				retour! liste;
			},
			// Verrouille la liste dans son état actuel
			lock: function () {
				pile = indéfini;
				if (! mémoire) {
					auto.disable ();
				}
				renvoyer ceci;
			},
			// Est-ce verrouillé?
			verrouillé: function () {
				return! stack;
			},
			// Appelle tous les callbacks avec le contexte et les arguments donnés
			fireWith: fonction (contexte, arguments) {
				if (liste && (! déclenché || pile)) {
					args = args || [];
					args = [contexte, args.slice? args.slice (): args];
					if (tir) {
						stack.push (args);
					} autre {
						feu (args);
					}
				}
				renvoyer ceci;
			},
			// Appelle tous les callbacks avec les arguments donnés
			feu: function () {
				self.fireWith (ceci, arguments);
				renvoyer ceci;
			},
			// Pour savoir si les callbacks ont déjà été appelés au moins une fois
			déclenché: function () {
				retour !! tiré;
			}
		};

	revenir soi-même;
};


jQuery.extend ({

	Différé: function (func) {
		var tuples = [
				// action, ajouter un auditeur, liste d'auditeurs, état final
				["résoudre", "terminé", jQuery.Callbacks ("une fois la mémoire"), "résolu"],
				["rejeter", "échouer", jQuery.Callbacks ("une fois la mémoire"), "rejeté"],
				["notifier", "progresser", jQuery.Callbacks ("mémoire")]
			],
			état = "en attente",
			promesse = {
				fonction d'état() {
					état de retour;
				},
				toujours: function () {
					deferred.done (arguments) .fail (arguments);
					renvoyer ceci;
				},
				alors: function (/ * fnDone, fnFail, fnProgress * /) {
					var fns = arguments;
					return jQuery.Deferred (fonction (newDefer) {
						jQuery.each (tuples, fonction (i, tuple) {
							var fn = jQuery.isFunction (fns [i]) && fns [i];
							// différé [terminé | échouer | progress] pour transmettre les actions à newDefer
							différé [tuple [1]] (function () {
								var retourné = fn && fn.apply (ceci, arguments);
								if (retourné && jQuery.isFunction (returned.promise)) {
									return.promise ()
										.done (newDefer.resolve)
										.fail (newDefer.reject)
										.progress (newDefer.notify);
								} autre {
									newDefer [tuple [0] + "With"] (this === promise? newDefer.promise (): this, fn? [return]: arguments);
								}
							});
						});
						fns = nul;
					}).promettre();
				},
				// Obtenez une promesse pour ce différé
				// Si obj est fourni, l'aspect promesse est ajouté à l'objet
				promesse: fonction (obj) {
					renvoie obj! = null? jQuery.extend (obj, promise): promesse;
				}
			},
			différé = {};

		// Garder le tube pour la rétro-compatibilité
		promise.pipe = promise.then;

		// Ajout de méthodes spécifiques à la liste
		jQuery.each (tuples, fonction (i, tuple) {
			var list = tuple [2],
				stateString = tuple [3];

			// promesse [faite | échouer | progress] = list.add
			promise [tuple [1]] = list.add;

			// État de la poignée
			if (stateString) {
				list.add (fonction () {
					// état = [résolu | rejeté]
					état = stateString;

				// [liste_ rejet | resolution_list] .disable; progress_list.lock
				}, tuples [i ^ 1] [2] .disable, tuples [2] [2] .lock);
			}

			// différé [résoudre | rejeter | notifier]
			différé [tuple [0]] = function () {
				différé [tuple [0] + "Avec"] (ceci === différé? promesse: ceci, arguments);
				renvoyer ceci;
			};
			deferred [tuple [0] + "With"] = list.fireWith;
		});

		// Faire du différé une promesse
		promesse.promise (différée);

		// Appelle la fonction donnée le cas échéant
		if (func) {
			func.call (différé, différé);
		}

		// Terminé!
		retour différé;
	},

	// Assistant différé
	quand: fonction (subordonné / *, ..., subordonnéN * /) {
		var i = 0,
			resolutionValues ​​= slice.call (arguments),
			length = resolutionValues.length,

			// le nombre de subordonnés non terminés
			restant = longueur! == 1 || (subordonné && jQuery.isFunction (subordonné.promise))? longueur: 0,

			// le maître différé. Si resolValues ​​se compose d'un seul Deferred, utilisez-le simplement.
			différé = restant === 1? subordonné: jQuery.Deferred (),

			// Fonction de mise à jour pour les valeurs de résolution et de progression
			updateFunc = function (i, contextes, valeurs) {
				fonction de retour (valeur) {
					contextes [i] = ceci;
					valeurs [i] = arguments.longueur> 1? slice.call (arguments): valeur;
					if (valeurs === progressValues) {
						deferred.notifyWith (contextes, valeurs);

					} else if (! (- restant)) {
						deferred.resolveWith (contextes, valeurs);
					}
				};
			},

			progressValues, progressContexts, resolutionContexts;

		// ajoute des écouteurs aux subordonnés différés; traiter les autres comme résolus
		if (longueur> 1) {
			progressValues ​​= new Array (longueur);
			progressContexts = nouveau tableau (longueur);
			résoudreContexts = nouveau tableau (longueur);
			pour (; i <longueur; i ++) {
				if (resolutionValues ​​[i] && jQuery.isFunction (resolutionValues ​​[i] .promise)) {
					résoudreValeurs [i] .promise ()
						.done (updateFunc (i, resolContextes, valeurs de résolution))
						.fail (différé.rejet)
						.progress (updateFunc (i, progressContexts, progressValues));
				} autre {
					--restant;
				}
			}
		}

		// si nous n'attendons rien, résolvez le maître
		if (! restant) {
			deferred.resolveWith (resolutionContexts, resolutionValues);
		}

		return deferred.promise ();
	}
});


// Le différé utilisé sur DOM prêt
var readyList;

jQuery.fn.ready = fonction (fn) {
	// Ajout du rappel
	jQuery.ready.promise (). done (fn);

	renvoyer ceci;
};

jQuery.extend ({
	// Le DOM est-il prêt à être utilisé? Défini sur true une fois que cela se produit.
	isReady: faux,

	// Un compteur pour suivre le nombre d'éléments à attendre avant
	// l'événement prêt se déclenche. Voir # 6781
	readyWait: 1,

	// Maintient (ou libère) l'événement prêt
	holdReady: function (maintenir) {
		if (maintenir) {
			jQuery.readyWait ++;
		} autre {
			jQuery.ready (vrai);
		}
	},

	// Gère quand le DOM est prêt
	prêt: fonction (attendre) {

		// Abandonner s'il y a des suspensions ou si nous sommes déjà prêts
		if (wait === true? --jQuery.readyWait: jQuery.isReady) {
			revenir;
		}

		// Assurez-vous que le corps existe, au moins, au cas où IE deviendrait un peu trop zélé (ticket # 5443).
		if (! document.body) {
			return setTimeout (jQuery.ready);
		}

		// N'oubliez pas que le DOM est prêt
		jQuery.isReady = true;

		// Si un événement DOM Ready normal est déclenché, décrémentez et attendez si nécessaire
		if (wait! == true && --jQuery.readyWait> 0) {
			revenir;
		}

		// S'il y a des fonctions liées, exécuter
		readyList.resolveWith (document, [jQuery]);

		// Déclenche tous les événements prêts liés
		if (jQuery.fn.triggerHandler) {
			jQuery (document) .triggerHandler ("prêt");
			jQuery (document) .off ("prêt");
		}
	}
});

/ **
 * Méthode de nettoyage pour les événements prêts pour dom
 * /
function detach () {
	if (document.addEventListener) {
		document.removeEventListener ("DOMContentLoaded", terminé, faux);
		window.removeEventListener ("charger", terminé, faux);

	} autre {
		document.detachEvent ("onreadystatechange", terminé);
		window.detachEvent ("onload", terminé);
	}
}

/ **
 * Le gestionnaire d'événements prêt et la méthode d'auto-nettoyage
 * /
fonction terminée () {
	// readyState === "complete" est assez bon pour que nous appelions le dom ready dans oldIE
	if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
		détacher();
		jQuery.ready ();
	}
}

jQuery.ready.promise = fonction (obj) {
	if (! readyList) {

		readyList = jQuery.Deferred ();

		// Attrape les cas où $ (document) .ready () est appelé après que l'événement du navigateur s'est déjà produit.
		// nous avons déjà essayé d'utiliser readyState "interactive" ici, mais cela a causé des problèmes comme celui-ci
		// découvert par ChrisS ici: http://bugs.jquery.com/ticket/12282#comment:15
		if (document.readyState === "complete") {
			// Gérez-le de manière asynchrone pour permettre aux scripts de retarder la préparation
			setTimeout (jQuery.ready);

		// Les navigateurs basés sur des standards prennent en charge DOMContentLoaded
		} else if (document.addEventListener) {
			// Utilisez le rappel d'événement pratique
			document.addEventListener ("DOMContentLoaded", terminé, faux);

			// Une solution de secours à window.onload, qui fonctionnera toujours
			window.addEventListener ("charger", terminé, faux);

		// Si le modèle d'événement IE est utilisé
		} autre {
			// Assure le tir avant le chargement, peut-être tard mais aussi sûr pour les iframes
			document.attachEvent ("onreadystatechange", terminé);

			// Une solution de secours à window.onload, qui fonctionnera toujours
			window.attachEvent ("onload", terminé);

			// Si IE et pas un cadre
			// vérifie continuellement si le document est prêt
			var top = faux;

			essayez {
				top = window.frameElement == null && document.documentElement;
			} catch (e) {}

			if (top && top.doScroll) {
				(fonction doScrollCheck () {
					if (! jQuery.isReady) {

						essayez {
							// Utilisez l'astuce de Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll ("gauche");
						} catch (e) {
							return setTimeout (doScrollCheck, 50);
						}

						// détache tous les événements prêts pour dom
						détacher();

						// et exécutez toutes les fonctions en attente
						jQuery.ready ();
					}
				}) ();
			}
		}
	}
	return readyList.promise (obj);
};


var strundefined = type d'undefined;



// Prise en charge: IE <9
// Itération sur les propriétés héritées de l'objet avant les siennes
var i;
for (i dans jQuery (support)) {
	Pause;
}
support.ownLast = i! == "0";

// Remarque: la plupart des tests de support sont définis dans leurs modules respectifs.
// false jusqu'à ce que le test soit exécuté
support.inlineBlockNeedsLayout = false;

// Exécuter dès que possible au cas où nous aurions besoin de définir body.style.zoom
jQuery (fonction () {
	// Minifié: var a, b, c, d
	var val, div, corps, conteneur;

	body = document.getElementsByTagName ("corps") [0];
	if (! corps ||! body.style) {
		// Retourne pour les documents de jeu de cadres qui n'ont pas de corps
		revenir;
	}

	// Installer
	div = document.createElement ("div");
	container = document.createElement ("div");
	container.style.cssText = "position: absolue; bordure: 0; largeur: 0; hauteur: 0; haut: 0; gauche: -9999px";
	body.appendChild (conteneur) .appendChild (div);

	if (typeof div.style.zoom! == strundefined) {
		// Prise en charge: IE <8
		// Vérifie si les éléments de niveau bloc nativement agissent comme des blocs en ligne
		// éléments lors de la définition de leur affichage sur `` en ligne '' et en donnant
		// leur disposition
		div.style.cssText = "affichage: en ligne; marge: 0; bordure: 0; remplissage: 1px; largeur: 1px; zoom: 1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if (val) {
			// Empêcher IE 6 d'affecter la mise en page des éléments positionnés # 11048
			// Empêche IE de rétrécir le corps en mode IE 7 # 12869
			// Prise en charge: IE <8
			body.style.zoom = 1;
		}
	}

	body.removeChild (conteneur);
});




(fonction() {
	var div = document.createElement ("div");

	// Exécute le test uniquement s'il n'est pas déjà exécuté dans un autre module.
	if (support.deleteExpando == null) {
		// Prise en charge: IE <9
		support.deleteExpando = true;
		essayez {
			supprimer div.test;
		} catch (e) {
			support.deleteExpando = false;
		}
	}

	// Éléments nuls pour éviter les fuites dans IE.
	div = nul;
}) ();


/ **
 * Détermine si un objet peut avoir des données
 * /
jQuery.acceptData = function (elem) {
	var noData = jQuery.noData [(elem.nodeName + "") .toLowerCase ()],
		nodeType = + elem.nodeType || 1;

	// Ne définissez pas de données sur des nœuds DOM non élémentaires car elles ne seront pas effacées (# 8335).
	renvoie nodeType! == 1 && nodeType! == 9?
		faux :

		// Les nœuds acceptent les données sauf indication contraire; le rejet peut être conditionnel
		! noData || noData! == true && elem.getAttribute ("classid") === noData;
};


var rbrace = / ^ (?: \ {[\ w \ W] * \} | \ [[[\ w \ W] * \]) $ /,
	rmultiDash = / ([AZ]) / g;

function dataAttr (elem, key, data) {
	// Si rien n'a été trouvé en interne, essayez d'en récupérer
	// données de l'attribut HTML5 data- *
	if (data === undefined && elem.nodeType === 1) {

		var name = "data-" + key.replace (rmultiDash, "- $ 1") .toLowerCase ();

		data = elem.getAttribute (nom);

		if (typeof data === "string") {
			essayez {
				data = data === "vrai"? vrai :
					data === "faux"? faux :
					data === "null"? nul :
					// Convertir uniquement en nombre si cela ne change pas la chaîne
					+ données + "" === données? + données:
					rbrace.test (données)? jQuery.parseJSON (données):
					Les données;
			} catch (e) {}

			// Assurez-vous que nous définissons les données pour qu'elles ne soient pas modifiées ultérieurement
			jQuery.data (élément, clé, données);

		} autre {
			data = indéfini;
		}
	}

	renvoyer des données;
}

// vérifie la vacuité d'un objet cache
function isEmptyDataObject (obj) {
	nom de var;
	for (nom dans obj) {

		// si l'objet de données public est vide, le privé est toujours vide
		if (nom === "données" && jQuery.isEmptyObject (obj [nom])) {
			continuer;
		}
		if (nom! == "toJSON") {
			retourner faux;
		}
	}

	retourne vrai;
}

function internalData (elem, name, data, pvt / * Usage interne uniquement * /) {
	if (! jQuery.acceptData (elem)) {
		revenir;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// Nous devons gérer les nœuds DOM et les objets JS différemment car IE6-7
		// ne peut pas faire correctement référence aux objets GC à travers la limite DOM-JS
		isNode = elem.nodeType,

		// Seuls les nœuds DOM ont besoin du cache jQuery global; Les données d'objet JS sont
		// attaché directement à l'objet pour que GC puisse se produire automatiquement
		cache = isNode? jQuery.cache: elem,

		// La définition d'un ID pour les objets JS uniquement si son cache existe déjà permet
		// le code à raccourcir sur le même chemin qu'un nœud DOM sans cache
		id = isNode? elem [internalKey]: elem [internalKey] && internalKey;

	// Évitez de faire plus de travail que nécessaire lorsque vous essayez d'obtenir des données sur un
	// objet qui n'a aucune donnée
	if ((! id ||! cache [id] || (! pvt &&! cache [id] .data)) && data === undefined && typeof name === "string") {
		revenir;
	}

	if (! id) {
		// Seuls les nœuds DOM ont besoin d'un nouvel ID unique pour chaque élément depuis leurs données
		// finit dans le cache global
		if (isNode) {
			id = elem [internalKey] = deletedIds.pop () || jQuery.guid ++;
		} autre {
			id = internalKey;
		}
	}

	if (! cache [id]) {
		// Évitez d'exposer les métadonnées jQuery sur des objets JS simples lorsque l'objet
		// est sérialisé à l'aide de JSON.stringify
		cache [id] = isNode? {}: {toJSON: jQuery.noop};
	}

	// Un objet peut être passé à jQuery.data au lieu d'une paire clé / valeur; cela obtient
	// superficiel copié sur le cache existant
	if (type de nom === "objet" || type de nom === "fonction") {
		if (pvt) {
			cache [id] = jQuery.extend (cache [id], nom);
		} autre {
			cache [id] .data = jQuery.extend (cache [id] .data, nom);
		}
	}

	thisCache = cache [id];

	// jQuery data () est stocké dans un objet séparé à l'intérieur des données internes de l'objet
	// cache afin d'éviter les collisions de clés entre les données internes et définies par l'utilisateur
	// Les données.
	if (! pvt) {
		if (! thisCache.data) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if (data! == undefined) {
		thisCache [jQuery.camelCase (nom)] = données;
	}

	// Vérifie les noms de propriétés de données converties en chameau et non converties
	// Si une propriété de données a été spécifiée
	if (typeof nom === "chaîne") {

		// Essayez d'abord de trouver les données de propriété telles quelles
		ret = thisCache [nom];

		// Test de null | données de propriété non définies
		if (ret == null) {

			// Essayez de trouver la propriété camelCased
			ret = thisCache [jQuery.camelCase (nom)];
		}
	} autre {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData (elem, nom, pvt) {
	if (! jQuery.acceptData (elem)) {
		revenir;
	}

	var thisCache, je,
		isNode = elem.nodeType,

		// Voir jQuery.data pour plus d'informations
		cache = isNode? jQuery.cache: elem,
		id = isNode? elem [jQuery.expando]: jQuery.expando;

	// S'il n'y a déjà aucune entrée de cache pour cet objet, il n'y a pas
	// but de continuer
	if (! cache [id]) {
		revenir;
	}

	if (nom) {

		thisCache = pvt? cache [id]: cache [id] .data;

		if (thisCache) {

			// Prend en charge les noms de tableau ou de chaîne séparés par des espaces pour les clés de données
			if (! jQuery.isArray (nom)) {

				// essaie la chaîne comme clé avant toute manipulation
				if (nom dans thisCache) {
					name = [nom];
				} autre {

					// divise la version camel cased par des espaces sauf si une clé avec les espaces existe
					name = jQuery.camelCase (nom);
					if (nom dans thisCache) {
						name = [nom];
					} autre {
						nom = nom.split ("");
					}
				}
			} autre {
				// Si "nom" est un tableau de clés ...
				// Lors de la création initiale des données, via la signature ("key", "val"),
				// les clés seront converties en camelCase.
				// Puisqu'il n'y a aucun moyen de dire à _comment_ qu'une clé a été ajoutée, supprimez
				// à la fois la clé simple et la clé camelCase. # 12786
				// Cela ne pénalisera que le chemin de l'argument du tableau.
				nom = nom.concat (jQuery.map (nom, jQuery.camelCase));
			}

			i = nom.longueur;
			alors que je-- ) {
				supprimer thisCache [nom [i]];
			}

			// S'il n'y a plus de données dans le cache, nous voulons continuer
			// et laissez l'objet du cache lui-même détruit
			if (pvt?! isEmptyDataObject (thisCache):! jQuery.isEmptyObject (thisCache)) {
				revenir;
			}
		}
	}

	// Voir jQuery.data pour plus d'informations
	if (! pvt) {
		supprimer le cache [id] .data;

		// Ne détruisez pas le cache parent à moins que l'objet de données interne
		// avait été la seule chose qui restait dedans
		if (! isEmptyDataObject (cache [id])) {
			revenir;
		}
	}

	// Détruire le cache
	if (isNode) {
		jQuery.cleanData ([elem], vrai);

	// Utiliser delete lorsqu'il est pris en charge pour expandos ou `cache` n'est pas une fenêtre par isWindow (# 10080)
	/ * jshint eqeqeq: false * /
	} else if (support.deleteExpando || cache! = cache.window) {
		/ * jshint eqeqeq: vrai * /
		supprimer le cache [id];

	// Quand tout le reste échoue, null
	} autre {
		cache [id] = null;
	}
}

jQuery.extend ({
	cache: {},

	// Les éléments suivants (avec suffixe d'espace pour éviter les collisions Object.prototype)
	// lève des exceptions inaccessibles si vous essayez de définir des propriétés expando
	pas de données: {
		"applet": vrai,
		"incorporer": vrai,
		// ... mais les objets Flash (qui ont cet identifiant de classe) * peuvent * gérer les expandos
		"object": "clsid: D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function (elem) {
		elem = elem.nodeType? jQuery.cache [elem [jQuery.expando]]: elem [jQuery.expando];
		return !! elem &&! isEmptyDataObject (elem);
	},

	data: function (elem, name, data) {
		return internalData (élément, nom, données);
	},

	removeData: function (elem, nom) {
		return internalRemoveData (elem, nom);
	},

	// Pour usage interne uniquement.
	_data: function (élément, nom, données) {
		return internalData (elem, nom, données, vrai);
	},

	_removeData: function (elem, nom) {
		return internalRemoveData (elem, nom, vrai);
	}
});

jQuery.fn.extend ({
	data: function (clé, valeur) {
		var i, nom, données,
			elem = ceci [0],
			attrs = elem && elem.attributes;

		// Les attentes spéciales de .data contrarient fondamentalement jQuery.access,
		// donc implémenter nous-mêmes le comportement pertinent

		// Obtient toutes les valeurs
		if (clé === non définie) {
			if (this.length) {
				data = jQuery.data (elem);

				if (elem.nodeType === 1 &&! jQuery._data (elem, "parsedAttrs")) {
					i = attrs.length;
					alors que je-- ) {

						// Prise en charge: IE11 +
						// Les éléments attrs peuvent être nuls (# 14894)
						if (attrs [i]) {
							nom = attrs [i] .nom;
							if (name.indexOf ("data-") === 0) {
								nom = jQuery.camelCase (nom.slice (5));
								dataAttr (élément, nom, données [nom]);
							}
						}
					}
					jQuery._data (elem, "parsedAttrs", true);
				}
			}

			renvoyer des données;
		}

		// Définit plusieurs valeurs
		if (typeof key === "objet") {
			retourne this.each (function () {
				jQuery.data (this, clé);
			});
		}

		renvoie arguments.length> 1?

			// Définit une valeur
			this.each (fonction () {
				jQuery.data (ceci, clé, valeur);
			}):

			// Obtient une valeur
			// Essayez d'abord de récupérer toutes les données stockées en interne
			elem? dataAttr (elem, key, jQuery.data (elem, key)): undefined;
	},

	removeData: function (clé) {
		retourne this.each (function () {
			jQuery.removeData (this, clé);
		});
	}
});


jQuery.extend ({
	queue: function (elem, type, data) {
		var queue;

		if (elem) {
			type = (type || "fx") + "queue";
			queue = jQuery._data (elem, type);

			// Accélérez le retrait de la file d'attente en sortant rapidement s'il ne s'agit que d'une recherche
			if (données) {
				if (! queue || jQuery.isArray (données)) {
					queue = jQuery._data (elem, type, jQuery.makeArray (données));
				} autre {
					queue.push (données);
				}
			}
			file d'attente de retour || [];
		}
	},

	dequeue: function (elem, type) {
		type = type || "fx";

		var queue = jQuery.queue (elem, type),
			startLength = queue.length,
			fn = queue.shift (),
			hooks = jQuery._queueHooks (elem, type),
			suivant = fonction () {
				jQuery.dequeue (elem, type);
			};

		// Si la file d'attente fx est retirée de la file d'attente, supprimez toujours la sentinelle de progression
		if (fn === "en cours") {
			fn = queue.shift ();
			startLength--;
		}

		si (fn) {

			// Ajout d'une sentinelle de progression pour empêcher la file d'attente fx d'être
			// retiré automatiquement de la file d'attente
			if (type === "fx") {
				queue.unshift ("en cours");
			}

			// efface la dernière fonction d'arrêt de la file d'attente
			supprimer hooks.stop;
			fn.call (elem, next, hooks);
		}

		if (! startLength && hooks) {
			hooks.empty.fire ();
		}
	},

	// non destiné à la consommation publique - génère un objet queueHooks ou retourne celui en cours
	_queueHooks: function (elem, type) {
		var key = type + "queueHooks";
		return jQuery._data (elem, clé) || jQuery._data (elem, clé, {
			vide: jQuery.Callbacks ("une fois la mémoire"). add (function () {
				jQuery._removeData (elem, type + "queue");
				jQuery._removeData (élément, clé);
			})
		});
	}
});

jQuery.fn.extend ({
	queue: fonction (type, données) {
		var setter = 2;

		if (typeof type! == "chaîne") {
			données = type;
			type = "fx";
			setter--;
		}

		if (arguments.length <setter) {
			return jQuery.queue (this [0], type);
		}

		renvoyer des données === indéfini?
			ce :
			this.each (fonction () {
				var queue = jQuery.queue (this, type, data);

				// assure un hook pour cette file d'attente
				jQuery._queueHooks (ce type);

				if (type === "fx" && queue [0]! == "inprogress") {
					jQuery.dequeue (ce type);
				}
			});
	},
	dequeue: function (type) {
		retourne this.each (function () {
			jQuery.dequeue (ce type);
		});
	},
	clearQueue: fonction (type) {
		renvoyer this.queue (type || "fx", []);
	},
	// Obtenir une promesse résolue lorsque les files d'attente d'un certain type
	// sont vidés (fx est le type par défaut)
	promesse: fonction (type, obj) {
		var tmp,
			compte = 1,
			defer = jQuery.Deferred (),
			elements = ceci,
			i = this.length,
			résoudre = fonction () {
				if (! (--count)) {
					defer.resolveWith (éléments, [éléments]);
				}
			};

		if (typeof type! == "chaîne") {
			obj = type;
			type = non défini;
		}
		type = type || "fx";

		alors que je-- ) {
			tmp = jQuery._data (éléments [i], type + "queueHooks");
			if (tmp && tmp.empty) {
				count ++;
				tmp.empty.add (résoudre);
			}
		}
		résoudre();
		return defer.promise (obj);
	}
});
var pnum = (/[+- </font>?(?:\d*\.|)\d+(?:[eE[+- </font>?\d+|)/).source;

var cssExpand = ["Haut", "Droite", "Bas", "Gauche"];

var isHidden = function (elem, el) {
		// isHidden peut être appelé à partir de la fonction de filtre jQuery #;
		// dans ce cas, l'élément sera le deuxième argument
		elem = el || elem;
		retourne jQuery.css (elem, "display") === "none" || ! jQuery.contains (elem.ownerDocument, elem);
	};



// Méthode multifonctionnelle pour obtenir et définir les valeurs d'une collection
// La valeur / s peut éventuellement être exécutée s'il s'agit d'une fonction
var access = jQuery.access = function (elems, fn, key, value, chainable, emptyGet, raw) {
	var i = 0,
		length = elems.length,
		bulk = clé == null;

	// Définit de nombreuses valeurs
	if (jQuery.type (clé) === "objet") {
		chaînable = vrai;
		for (i in key) {
			jQuery.access (elems, fn, i, key [i], true, emptyGet, raw);
		}

	// Définit une valeur
	} else if (valeur! == undefined) {
		chaînable = vrai;

		if (! jQuery.isFunction (valeur)) {
			raw = vrai;
		}

		if (en vrac) {
			// Les opérations en masse s'exécutent sur l'ensemble complet
			if (brut) {
				fn.call (elems, valeur);
				fn = nul;

			// ... sauf lors de l'exécution des valeurs de fonction
			} autre {
				bulk = fn;
				fn = fonction (élément, clé, valeur) {
					return bulk.call (jQuery (elem), valeur);
				};
			}
		}

		si (fn) {
			pour (; i <longueur; i ++) {
				fn (elems [i], clé, brute? valeur: valeur.call (elems [i], i, fn (elems [i], clé)));
			}
		}
	}

	retour chaînable?
		élèmes:

		// Obtient
		en vrac?
			fn.call (elems):
			longueur? fn (elems [0], clé): emptyGet;
};
var rcheckableType = (/ ^ (?: case à cocher | radio) $ / i);



(fonction() {
	// Minifié: var a, b, c
	var input = document.createElement ("input"),
		div = document.createElement ("div"),
		fragment = document.createDocumentFragment ();

	// Installer
	div.innerHTML = "<link/><table> </table> <a href='/a'> a </a> <input type = 'checkbox' />";

	// IE supprime les espaces de début lorsque .innerHTML est utilisé
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Assurez-vous que les éléments tbody ne sont pas insérés automatiquement
	// IE les insérera dans des tables vides
	support.tbody =! div.getElementsByTagName ("tbody") .length;

	// Assurez-vous que les éléments de lien sont correctement sérialisés par innerHTML
	// Cela nécessite un élément wrapper dans IE
	support.htmlSerialize = !! div.getElementsByTagName ("lien") .length;

	// S'assure que le clonage d'un élément html5 ne pose pas de problèmes
	// Là où externalHTML n'est pas défini, cela fonctionne toujours
	support.html5Clone =
		document.createElement ("nav") .cloneNode (true) .outerHTML! == "<: nav> </: nav>";

	// Vérifier si une case à cocher déconnectée conservera sa case cochée
	// valeur de true après ajout au DOM (IE6 / 7)
	input.type = "case à cocher";
	input.checked = vrai;
	fragment.appendChild (entrée);
	support.appendChecked = input.checked;

	// Assurez-vous que textarea (et la case à cocher) defaultValue est correctement clonée
	// Prise en charge: IE6-IE11 +
	div.innerHTML = "<textarea> x </textarea>";
	support.noCloneChecked = !! div.cloneNode (true) .lastChild.defaultValue;

	// # 11217 - WebKit perd la vérification lorsque le nom est après l'attribut vérifié
	fragment.appendChild (div);
	div.innerHTML = "<input type = 'radio' checked = 'checked' name = 't' />";

	// Prise en charge: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// l'ancien WebKit ne clone pas correctement l'état vérifié dans les fragments
	support.checkClone = div.cloneNode (vrai) .cloneNode (vrai) .lastChild.checked;

	// Prise en charge: IE <9
	// Opera ne clone pas les événements (et le type de div.attachEvent === undefined).
	// IE9-10 clone les événements liés via attachEvent, mais ils ne se déclenchent pas avec .click ()
	support.noCloneEvent = true;
	if (div.attachEvent) {
		div.attachEvent ("onclick", function () {
			support.noCloneEvent = false;
		});

		div.cloneNode (vrai) .click ();
	}

	// Exécute le test uniquement s'il n'est pas déjà exécuté dans un autre module.
	if (support.deleteExpando == null) {
		// Prise en charge: IE <9
		support.deleteExpando = true;
		essayez {
			supprimer div.test;
		} catch (e) {
			support.deleteExpando = false;
		}
	}
}) ();


(fonction() {
	var i, nom de l'événement,
		div = document.createElement ("div");

	// Support: IE <9 (manque de bulle de soumission / modification), Firefox 23+ (manque de focus dans l'événement)
	for (i in {submit: true, change: true, focusin: true}) {
		eventName = "sur" + i;

		if (! (support [i + "Bubbles"] = eventName dans la fenêtre)) {
			// Méfiez-vous des restrictions CSP (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute (eventName, "t");
			support [i + "Bubbles"] = div.attributes [eventName] .expando === false;
		}
	}

	// Éléments nuls pour éviter les fuites dans IE.
	div = nul;
}) ();


var rformElems = / ^ (?: input | select | textarea) $ / i,
	rkeyEvent = / ^ clé /,
	rmouseEvent = / ^ (?: souris | pointeur | menu contextuel) | cliquez /,
	rfocusMorph = / ^ (?: focusinfocus | focusoutblur) $ /,
	rtypenamespace = /^([^..

function returnTrue () {
	retourne vrai;
}

function returnFalse () {
	retourner faux;
}

function safeActiveElement () {
	essayez {
		return document.activeElement;
	} catch (err) {}
}

/ *
 * Fonctions d'assistance pour la gestion des événements - ne faisant pas partie de l'interface publique.
 * Accessoires à la bibliothèque addEvent de Dean Edwards pour de nombreuses idées.
 * /
jQuery.event = {

	global: {},

	add: function (elem, types, handler, data, selector) {
		var tmp, événements, t, handleObjIn,
			special, eventHandle, handleObj,
			gestionnaires, type, espaces de noms, origType,
			elemData = jQuery._data (elem);

		// Ne pas attacher d'événements aux nœuds noData ou texte / commentaire (mais autorise les objets simples)
		if (! elemData) {
			revenir;
		}

		// L'appelant peut transmettre un objet de données personnalisées à la place du gestionnaire
		if (handler.handler) {
			handleObjIn = gestionnaire;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Assurez-vous que le gestionnaire a un ID unique, utilisé pour le trouver / le supprimer plus tard
		if (! handler.guid) {
			handler.guid = jQuery.guid ++;
		}

		// Initie la structure d'événement et le gestionnaire principal de l'élément, s'il s'agit du premier
		if (! (events = elemData.events)) {
			events = elemData.events = {};
		}
		if (! (eventHandle = elemData.handle)) {
			eventHandle = elemData.handle = function (e) {
				// Ignore le deuxième événement d'un jQuery.event.trigger () et
				// lorsqu'un événement est appelé après le déchargement d'une page
				renvoie le type de jQuery! == strundefined && (! e || jQuery.event.triggered! == e.type)?
					jQuery.event.dispatch.apply (eventHandle.elem, arguments):
					indéfini;
			};
			// Ajouter elem en tant que propriété du handle fn pour éviter une fuite de mémoire avec des événements non natifs d'IE
			eventHandle.elem = elem;
		}

		// Gère plusieurs événements séparés par un espace
		types = (types || "") .match (rnotwhite) || [""];
		t = types.length;
		tandis que (t--) {
			tmp = rtypenamespace.exec (types [t]) || [];
			type = origType = tmp [1];
			espaces de noms = (tmp [2] || "") .split (".") .sort ();

			// Il * doit * y avoir un type, aucun gestionnaire d'espace de noms uniquement
			if (! type) {
				continuer;
			}

			// Si l'événement change de type, utilisez les gestionnaires d'événements spéciaux pour le type modifié
			special = jQuery.event.special [type] || {};

			// Si le sélecteur est défini, détermine le type d'API d'événement spécial, sinon le type est donné
			type = (sélecteur? special.delegateType: special.bindType) || type;

			// Mise à jour spéciale basée sur le type nouvellement réinitialisé
			special = jQuery.event.special [type] || {};

			// handleObj est passé à tous les gestionnaires d'événements
			handleObj = jQuery.extend ({
				type: type,
				origType: origType,
				données: données,
				gestionnaire: gestionnaire,
				guid: handler.guid,
				sélecteur: sélecteur,
				needsContext: sélecteur && jQuery.expr.match.needsContext.test (sélecteur),
				espace de noms: namespaces.join (".")
			}, handleObjIn);

			// Lance la file d'attente du gestionnaire d'événements si nous sommes les premiers
			if (! (gestionnaires = événements [type])) {
				gestionnaires = événements [type] = [];
				handlers.delegateCount = 0;

				// N'utilisez addEventListener / attachEvent que si le gestionnaire d'événements spéciaux renvoie false
				if (! special.setup || special.setup.call (elem, data, namespaces, eventHandle) === false) {
					// Lier le gestionnaire d'événements global à l'élément
					if (elem.addEventListener) {
						elem.addEventListener (type, eventHandle, false);

					} else if (elem.attachEvent) {
						elem.attachEvent ("on" + type, eventHandle);
					}
				}
			}

			if (special.add) {
				special.add.call (elem, handleObj);

				if (! handleObj.handler.guid) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Ajouter à la liste des gestionnaires de l'élément, délégués devant
			if (sélecteur) {
				handlers.splice (handlers.delegateCount ++, 0, handleObj);
			} autre {
				handlers.push (handleObj);
			}

			// Gardez une trace des événements qui ont déjà été utilisés, pour l'optimisation des événements
			jQuery.event.global [type] = true;
		}

		// Nullify elem pour éviter les fuites de mémoire dans IE
		elem = nul;
	},

	// Détacher un événement ou un ensemble d'événements d'un élément
	remove: function (elem, types, handler, selector, mappedTypes) {
		var j, handleObj, tmp,
			origCount, t, événements,
			spécial, gestionnaires, type,
			espaces de noms, origType,
			elemData = jQuery.hasData (elem) && jQuery._data (elem);

		if (! elemData ||! (events = elemData.events)) {
			revenir;
		}

		// Une fois pour chaque type.namespace dans les types; le type peut être omis
		types = (types || "") .match (rnotwhite) || [""];
		t = types.length;
		tandis que (t--) {
			tmp = rtypenamespace.exec (types [t]) || [];
			type = origType = tmp [1];
			espaces de noms = (tmp [2] || "") .split (".") .sort ();

			// Annule la liaison de tous les événements (sur cet espace de noms, s'il est fourni) pour l'élément
			if (! type) {
				pour (saisissez les événements) {
					jQuery.event.remove (elem, type + types [t], handler, selector, true);
				}
				continuer;
			}

			special = jQuery.event.special [type] || {};
			type = (sélecteur? special.delegateType: special.bindType) || type;
			gestionnaires = événements [type] || [];
			tmp = tmp [2] && new RegExp ("(^ | \\.)" + namespaces.join ("\\. (?:. * \\. |)") + "(\\. | $)" );

			// Supprimer les événements correspondants
			origCount = j = handlers.length;
			tandis que (j--) {
				handleObj = gestionnaires [j];

				if ((mappedTypes || origType === handleObj.origType) &&
					(! handler || handler.guid === handleObj.guid) &&
					(! tmp || tmp.test (handleObj.namespace)) &&
					(! selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
					handlers.splice (j, 1);

					if (handleObj.selector) {
						handlers.delegateCount--;
					}
					if (special.remove) {
						special.remove.call (elem, handleObj);
					}
				}
			}

			// Suppression du gestionnaire d'événements générique si nous avons supprimé quelque chose et qu'il n'y a plus de gestionnaire
			// (évite le potentiel de récursivité sans fin lors de la suppression des gestionnaires d'événements spéciaux)
			if (origCount &&! handlers.length) {
				if (! special.teardown || special.teardown.call (elem, namespaces, elemData.handle) === false) {
					jQuery.removeEvent (elem, type, elemData.handle);
				}

				supprimer des événements [type];
			}
		}

		// Supprime le expando s'il n'est plus utilisé
		if (jQuery.isEmptyObject (événements)) {
			delete elemData.handle;

			// removeData vérifie également la vacuité et efface le expando s'il est vide
			// donc utilisez-le au lieu de supprimer
			jQuery._removeData (elem, "événements");
		}
	},

	trigger: function (event, data, elem, onlyHandlers) {
		poignée var, ontype, cur,
			bubbleType, spécial, tmp, i,
			eventPath = [elem || document],
			type = hasOwn.call (événement, "type")? event.type: événement,
			namespaces = hasOwn.call (événement, "namespace")? event.namespace.split ("."): [];

		cur = tmp = elem = elem || document;

		// Ne pas faire d'événements sur les nœuds de texte et de commentaire
		if (elem.nodeType === 3 || elem.nodeType === 8) {
			revenir;
		}

		// focus / flou se transforme en focusin / out; assurez-vous que nous ne les renvoyons pas maintenant
		if (rfocusMorph.test (type + jQuery.event.triggered)) {
			revenir;
		}

		if (type.indexOf (".")> = 0) {
			// Déclencheur d'espacement de nom; créer une expression régulière pour correspondre au type d'événement dans handle ()
			espaces de noms = type.split (".");
			type = namespaces.shift ();
			namespaces.sort ();
		}
		ontype = type.indexOf (":") <0 && "on" + type;

		// L'appelant peut transmettre un objet jQuery.Event, un objet ou simplement une chaîne de type événement
		événement = événement [jQuery.expando]?
			un événement :
			new jQuery.Event (type, typeof event === "objet" && événement);

		// Déclenche le masque de bits: & 1 pour les gestionnaires natifs; & 2 pour jQuery (toujours vrai)
		event.isTrigger = onlyHandlers? 2: 3;
		event.namespace = namespaces.join (".");
		event.namespace_re = event.namespace?
			new RegExp ("(^ | \\.)" + namespaces.join ("\\. (?:. * \\. |)") + "(\\. | $)"):
			nul;

		// Nettoie l'événement au cas où il serait réutilisé
		event.result = indéfini;
		if (! event.target) {
			event.target = elem;
		}

		// Clonez toutes les données entrantes et ajoutez l'événement au début, créant la liste des arguments du gestionnaire
		data = data == null?
			[ un événement ] :
			jQuery.makeArray (données, [événement]);

		// Permettre aux événements spéciaux de se dessiner en dehors des lignes
		special = jQuery.event.special [type] || {};
		if (! onlyHandlers && special.trigger && special.trigger.apply (elem, data) === false) {
			revenir;
		}

		// Déterminer à l'avance le chemin de propagation des événements, conformément aux spécifications des événements W3C (# 9951)
		// Bulle jusqu'au document, puis à la fenêtre; rechercher un propriétaire globalDocument var (# 9724)
		if (! onlyHandlers &&! special.noBubble &&! jQuery.isWindow (elem)) {

			bubbleType = special.delegateType || type;
			if (! rfocusMorph.test (bubbleType + type)) {
				cur = cur.parentNode;
			}
			pour (; cur; cur = cur.parentNode) {
				eventPath.push (cur);
				tmp = cur;
			}

			// N'ajoute une fenêtre que si nous sommes arrivés au document (par exemple, pas d'obj simple ou DOM détaché)
			if (tmp === (elem.ownerDocument || document)) {
				eventPath.push (tmp.defaultView || tmp.parentWindow || fenêtre);
			}
		}

		// Gestionnaires d'incendie sur le chemin de l'événement
		i = 0;
		while ((cur = eventPath [i ++]) &&! event.isPropagationStopped ()) {

			event.type = i> 1?
				bubbleType:
				special.bindType || type;

			// gestionnaire jQuery
			handle = (jQuery._data (cur, "events") || {}) [event.type] && jQuery._data (cur, "handle");
			if (handle) {
				handle.apply (cur, données);
			}

			// Gestionnaire natif
			handle = ontype && cur [ontype];
			if (gérer && handle.apply && jQuery.acceptData (cur)) {
				event.result = handle.apply (cur, données);
				if (event.result === false) {
					event.preventDefault ();
				}
			}
		}
		event.type = type;

		// Si personne n'a empêché l'action par défaut, faites-le maintenant
		if (! onlyHandlers &&! event.isDefaultPrevented ()) {

			if ((! special._default || special._default.apply (eventPath.pop (), data) === false) &&
				jQuery.acceptData (elem)) {

				// Appel d'une méthode DOM native sur la cible avec le même nom que l'événement.
				// Impossible d'utiliser une vérification .isFunction () ici car IE6 / 7 échoue à ce test.
				// Ne pas faire d'actions par défaut sur la fenêtre, c'est là que se trouvent les variables globales (# 6170)
				if (ontype && elem [type] &&! jQuery.isWindow (elem)) {

					// Ne pas re-déclencher un événement onFOO lorsque nous appelons sa méthode FOO ()
					tmp = elem [ontype];

					if (tmp) {
						elem [ontype] = null;
					}

					// Empêche le redéclenchement du même événement, puisque nous l'avons déjà mis en bulles ci-dessus
					jQuery.event.triggered = type;
					essayez {
						elem [type] ();
					} catch (e) {
						// IE <9 meurt lors de la mise au point / flou à l'élément caché (# 1486, # 12518)
						// reproductible uniquement sur winXP IE8 natif, pas IE9 en mode IE8
					}
					jQuery.event.triggered = non défini;

					if (tmp) {
						elem [ontype] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function (événement) {

		// Créer un jQuery.Event accessible en écriture à partir de l'objet événement natif
		event = jQuery.event.fix (événement);

		var i, ret, handleObj, apparié, j,
			handlerQueue = [],
			args = slice.call (arguments),
			handlers = (jQuery._data (this, "events") || {}) [event.type] || [],
			special = jQuery.event.special [event.type] || {};

		// Utilisez le jQuery.Event corrigé plutôt que l'événement natif (en lecture seule)
		args [0] = événement;
		event.delegateTarget = ceci;

		// Appelez le hook preDispatch pour le type mappé, et laissez-le se libérer si vous le souhaitez
		if (special.preDispatch && special.preDispatch.call (this, event) === false) {
			revenir;
		}

		// Déterminer les gestionnaires
		handlerQueue = jQuery.event.handlers.call (this, event, handlers);

		// Exécutez les délégués en premier; ils peuvent vouloir arrêter la propagation sous nous
		i = 0;
		while ((matched = handlerQueue [i ++]) &&! event.isPropagationStopped ()) {
			event.currentTarget = matched.elem;

			j = 0;
			while ((handleObj = matched.handlers [j ++]) &&! event.isImmediatePropagationStopped ()) {

				// L'événement déclenché doit soit 1) ne pas avoir d'espace de noms, ou
				// 2) ont un (des) espace (s) de noms un sous-ensemble ou égal à ceux de l'événement lié (les deux peuvent ne pas avoir d'espace de noms).
				if (! event.namespace_re || event.namespace_re.test (handleObj.namespace)) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ((jQuery.event.special [handleObj.origType] || {}). handle || handleObj.handler)
							.apply (matched.elem, args);

					if (ret! == undefined) {
						if ((event.result = ret) === false) {
							event.preventDefault ();
							event.stopPropagation ();
						}
					}
				}
			}
		}

		// Appelez le hook postDispatch pour le type mappé
		if (special.postDispatch) {
			special.postDispatch.call (ceci, événement);
		}

		return event.result;
	},

	gestionnaires: function (événement, gestionnaires) {
		var sel, handleObj, correspond, i,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Recherche des gestionnaires de délégués
		// Arbres d'instances <use> SVG de trou noir (# 13180)
		// Évitez les bulles non-clic gauche dans Firefox (# 3861)
		if (delegateCount && cur.nodeType && (! event.button || event.type! == "clic")) {

			/ * jshint eqeqeq: false * /
			pour (; cur! = this; cur = cur.parentNode || this) {
				/ * jshint eqeqeq: vrai * /

				// Ne pas vérifier les non-éléments (# 13208)
				// Ne pas traiter les clics sur les éléments désactivés (# 6911, # 8165, # 11382, # 11764)
				if (cur.nodeType === 1 && (cur.disabled! == true || event.type! == "clic")) {
					correspond = [];
					pour (i = 0; i <delegateCount; i ++) {
						handleObj = gestionnaires [i];

						// Ne pas entrer en conflit avec les propriétés Object.prototype (# 13203)
						sel = handleObj.selector + "";

						if (correspond à [sel] === undefined) {
							correspond à [sel] = handleObj.needsContext?
								jQuery (sel, this) .index (cur)> = 0:
								jQuery.find (sel, this, null, [cur]) .length;
						}
						if (correspond à [sel]) {
							matches.push (handleObj);
						}
					}
					if (matches.length) {
						handlerQueue.push ({elem: cur, handlers: matches});
					}
				}
			}
		}

		// Ajout des gestionnaires restants (directement liés)
		if (delegateCount <handlers.length) {
			handlerQueue.push ({elem: this, handlers: handlers.slice (delegateCount)});
		}

		return handlerQueue;
	},

	correction: fonction (événement) {
		if (événement [jQuery.expando]) {
			événement de retour;
		}

		// Crée une copie accessible en écriture de l'objet événement et normalise certaines propriétés
		var i, accessoire, copie,
			type = event.type,
			originalEvent = événement,
			fixHook = this.fixHooks [type];

		if (! fixHook) {
			this.fixHooks [type] = fixHook =
				rmouseEvent.test (type)? this.mouseHooks:
				rkeyEvent.test (type)? this.keyHooks:
				{};
		}
		copy = fixHook.props? this.props.concat (fixHook.props): this.props;

		event = new jQuery.Event (originalEvent);

		i = copie.longueur;
		alors que je-- ) {
			prop = copie [i];
			event [prop] = originalEvent [prop];
		}

		// Prise en charge: IE <9
		// Correction de la propriété cible (# 1925)
		if (! event.target) {
			event.target = originalEvent.srcElement || document;
		}

		// Prise en charge: Chrome 23+, Safari?
		// La cible ne doit pas être un nœud de texte (# 504, # 13143)
		if (event.target.nodeType === 3) {
			event.target = event.target.parentNode;
		}

		// Prise en charge: IE <9
		// Pour les événements souris / touches, metaKey == false s'il n'est pas défini (# 3368, # 11328)
		event.metaKey = !! event.metaKey;

		retourner fixHook.filter? fixHook.filter (événement, originalEvent): événement;
	},

	// Inclut quelques accessoires d'événement partagés par KeyEvent et MouseEvent
	props: "altKey bulles annulables ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey cible timeStamp view which" .split (""),

	fixHooks: {},

	keyHooks: {
		accessoires: "char charCode key keyCode" .split (""),
		filtre: fonction (événement, original) {

			// Ajouter lequel pour les événements clés
			if (event.which == null) {
				event.which = original.charCode! = null? original.charCode: original.keyCode;
			}

			événement de retour;
		}
	},

	mouseHooks: {
		accessoires: "bouton boutons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement" .split (""),
		filtre: fonction (événement, original) {
			corps var, eventDoc, doc,
				bouton = bouton.original,
				fromElement = original.fromElement;

			// Calculer pageX / Y s'il manque et clientX / Y disponible
			if (event.pageX == null && original.clientX! = null) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				bo dy = eventDoc.body;

				event.pageX = original.clientX + (doc && doc.scrollLeft || corps && body.scrollLeft || 0) - (doc && doc.clientLeft || corps && body.clientLeft || 0);
				event.pageY = original.clientY + (doc && doc.scrollTop || corps && body.scrollTop || 0) - (doc && doc.clientTop || corps && body.clientTop || 0);
			}

			// Ajouter relatedTarget, si nécessaire
			if (! event.relatedTarget && fromElement) {
				event.relatedTarget = fromElement === event.target? original.toElement: fromElement;
			}

			// Ajoutez lequel pour le clic: 1 === gauche; 2 === milieu; 3 === droite
			// Remarque: le bouton n'est pas normalisé, donc ne l'utilisez pas
			if (! event.which && button! == undefined) {
				event.which = (bouton & 1? 1: (bouton & 2? 3: (bouton & 4? 2: 0)));
			}

			événement de retour;
		}
	},

	spécial: {
		charge: {
			// Empêche les événements image.load déclenchés de se propager dans window.load
			noBubble: vrai
		},
		concentrer: {
			// Déclenche un événement natif si possible pour que la séquence de flou / mise au point soit correcte
			déclencheur: function () {
				if (this! == safeActiveElement () && this.focus) {
					essayez {
						this.focus ();
						retourner faux;
					} catch (e) {
						// Prise en charge: IE <9
						// Si nous nous trompons sur le focus sur l'élément caché (# 1486, # 12518),
						// laisse .trigger () exécuter les gestionnaires
					}
				}
			},
			delegateType: "focusin"
		},
		flou: {
			déclencheur: function () {
				if (this === safeActiveElement () && this.blur) {
					this.blur ();
					retourner faux;
				}
			},
			delegateType: "focusout"
		},
		Cliquez sur: {
			// Pour la case à cocher, déclencher l'événement natif afin que l'état vérifié soit correct
			déclencheur: function () {
				if (jQuery.nodeName (this, "input") && this.type === "checkbox" && this.click) {
					this.click ();
					retourner faux;
				}
			},

			// Pour la cohérence entre les navigateurs, ne lancez pas le .click () natif sur les liens
			_default: function (événement) {
				return jQuery.nodeName (event.target, "a");
			}
		},

		avant le déchargement: {
			postDispatch: function (événement) {

				// Prise en charge: Firefox 20+
				// Firefox n'alerte pas si le champ returnValue n'est pas défini.
				if (event.result! == undefined && event.originalEvent) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simuler: fonction (type, élément, événement, bulle) {
		// Piggyback sur un événement donateur pour en simuler un autre.
		// Fake originalEvent pour éviter l'arrêt du donateur Propagation, mais si le
		// événement simulé empêche la valeur par défaut alors nous faisons de même sur le donneur.
		var e = jQuery.extend (
			nouveau jQuery.Event (),
			un événement,
			{
				type: type,
				isSimulated: vrai,
				originalEvent: {}
			}
		);
		if (bulle) {
			jQuery.event.trigger (e, null, elem);
		} autre {
			jQuery.event.dispatch.call (elem, e);
		}
		if (e.isDefaultPrevented ()) {
			event.preventDefault ();
		}
	}
};

jQuery.removeEvent = document.removeEventListener?
	function (elem, type, handle) {
		if (elem.removeEventListener) {
			elem.removeEventListener (type, handle, false);
		}
	}:
	function (elem, type, handle) {
		var name = "on" + type;

		if (elem.detachEvent) {

			// # 8545, # 7054, empêchant les fuites de mémoire pour les événements personnalisés dans IE6-8
			// detachEvent avait besoin de la propriété sur l'élément, par nom de cet événement, pour l'exposer correctement au GC
			if (typeof elem [nom] === strundefined) {
				elem [nom] = null;
			}

			elem.detachEvent (nom, poignée);
		}
	};

jQuery.Event = fonction (src, accessoires) {
	// Autoriser l'instanciation sans le mot clé 'new'
	if (! (cette instance de jQuery.Event)) {
		return new jQuery.Event (src, props);
	}

	// Objet événement
	if (src && src.type) {
		this.originalEvent = src;
		this.type = src.type;

		// Les événements bouillonnant dans le document peuvent avoir été marqués comme empêchés
		// par un gestionnaire plus bas dans l'arbre; reflètent la valeur correcte.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === non défini &&
				// Prise en charge: IE <9, Android <4.0
				src.returnValue === false?
			returnTrue:
			returnFalse;

	// Type d'événement
	} autre {
		this.type = src;
	}

	// Mettre les propriétés explicitement fournies sur l'objet événement
	if (accessoires) {
		jQuery.extend (ceci, accessoires);
	}

	// Créer un horodatage si l'événement entrant n'en a pas
	this.timeStamp = src && src.timeStamp || jQuery.now ();

	// Marquer comme corrigé
	this [jQuery.expando] = vrai;
};

// jQuery.Event est basé sur les événements DOM3 comme spécifié par la liaison de langage ECMAScript
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function () {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		si (! e) {
			revenir;
		}

		// Si preventDefault existe, exécutez-le sur l'événement d'origine
		if (e.preventDefault) {
			e.preventDefault ();

		// Prise en charge: IE
		// Sinon, définissez la propriété returnValue de l'événement d'origine sur false
		} autre {
			e.returnValue = faux;
		}
	},
	stopPropagation: function () {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;
		si (! e) {
			revenir;
		}
		// Si stopPropagation existe, exécutez-le sur l'événement d'origine
		if (e.stopPropagation) {
			e.stopPropagation ();
		}

		// Prise en charge: IE
		// Définit la propriété cancelBubble de l'événement d'origine sur true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function () {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if (e && e.stopImmediatePropagation) {
			e.stopImmediatePropagation ();
		}

		this.stopPropagation ();
	}
};

// Créer des événements mouseenter / quitter en utilisant mouseover / out et des vérifications de l'heure des événements
jQuery.each ({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, fonction (orig, correction) {
	jQuery.event.special [orig] = {
		DelegateType: corriger,
		bindType: corriger,

		handle: function (événement) {
			var ret,
				cible = ceci,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// Pour mousenter / laisser appeler le gestionnaire si le lien est en dehors de la cible.
			// NB: Pas de cible liée si la souris a quitté / est entré dans la fenêtre du navigateur
			if (! related || (related! == target &&! jQuery.contains (target, related))) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply (ceci, arguments);
				event.type = correction;
			}
			return ret;
		}
	};
});

// IE soumet la délégation
if (! support.submitBubbles) {

	jQuery.event.special.submit = {
		configuration: function () {
			// Nécessaire uniquement pour les événements de soumission de formulaires délégués
			if (jQuery.nodeName (this, "form")) {
				retourner faux;
			}

			// Lazy-ajouter un gestionnaire d'envoi lorsqu'un formulaire descendant peut potentiellement être soumis
			jQuery.event.add (ceci, "click._submit keypress._submit", function (e) {
				// La vérification du nom du nœud évite un crash lié à VML dans IE (# 9807)
				var elem = e.target,
					form = jQuery.nodeName (elem, "input") || jQuery.nodeName (elem, "bouton")? elem.form: indéfini;
				if (formulaire &&! jQuery._data (formulaire, "submitBubbles")) {
					jQuery.event.add (formulaire, "soumettre._submit", fonction (événement) {
						event._submit_bubble = true;
					});
					jQuery._data (formulaire, "submitBubbles", true);
				}
			});
			// retourne undefined car nous n'avons pas besoin d'un écouteur d'événement
		},

		postDispatch: function (événement) {
			// Si le formulaire a été soumis par l'utilisateur, faire remonter l'événement dans l'arborescence
			if (event._submit_bubble) {
				supprimer l'événement._submit_bubble;
				if (this.parentNode &&! event.isTrigger) {
					jQuery.event.simulate ("soumettre", this.parentNode, événement, true);
				}
			}
		},

		démontage: function () {
			// Nécessaire uniquement pour les événements de soumission de formulaires délégués
			if (jQuery.nodeName (this, "form")) {
				retourner faux;
			}

			// Supprimer les gestionnaires délégués; cleanData récupère finalement les gestionnaires de soumission attachés ci-dessus
			jQuery.event.remove (ceci, "._submit");
		}
	};
}

// Délégation de changement IE et case à cocher / correction radio
if (! support.changeBubbles) {

	jQuery.event.special.change = {

		configuration: function () {

			if (rformElems.test (this.nodeName)) {
				// IE ne déclenche pas de changement sur un chèque / radio jusqu'à ce que le flou; déclenchez-le au clic
				// après un changement de propriété. Mangez le changement de flou dans special.change.handle.
				// Cela se déclenche toujours lors de la modification une deuxième fois pour le contrôle / la radio après le flou.
				if (this.type === "checkbox" || this.type === "radio") {
					jQuery.event.add (this, "propertychange._change", function (event) {
						if (event.originalEvent.propertyName === "vérifié") {
							this._just_changed = vrai;
						}
					});
					jQuery.event.add (this, "click._change", function (event) {
						if (this._just_changed &&! event.isTrigger) {
							this._just_changed = faux;
						}
						// Autoriser les événements de changement déclenchés et simulés (# 11500)
						jQuery.event.simulate ("change", this, event, true);
					});
				}
				retourner faux;
			}
			// Événement délégué; lazy-ajouter un gestionnaire de modification sur les entrées descendantes
			jQuery.event.add (this, "beforeactivate._change", function (e) {
				var elem = e.target;

				if (rformElems.test (elem.nodeName) &&! jQuery._data (elem, "changeBubbles")) {
					jQuery.event.add (elem, "change._change", fonction (événement) {
						if (this.parentNode &&! event.isSimulated &&! event.isTrigger) {
							jQuery.event.simulate ("change", this.parentNode, event, true);
						}
					});
					jQuery._data (elem, "changeBubbles", true);
				}
			});
		},

		handle: function (événement) {
			var elem = event.target;

			// Avalez les événements de changement natifs de la case à cocher / de la radio, nous les avons déjà déclenchés ci-dessus
			if (this! == elem || event.isSimulated || event.isTrigger || (elem.type! == "radio" && elem.type! == "checkbox")) {
				return event.handleObj.handler.apply (ceci, arguments);
			}
		},

		démontage: function () {
			jQuery.event.remove (ceci, "._change");

			return! rformElems.test (this.nodeName);
		}
	};
}

// Créer des événements de focus et de flou "bouillonnants"
if (! support.focusinBubbles) {
	jQuery.each ({focus: "focusin", blur: "focusout"}, function (orig, fix) {

		// Joindre un seul gestionnaire de capture sur le document pendant que quelqu'un veut focusin / focusout
		var handler = function (événement) {
				jQuery.event.simulate (correction, event.target, jQuery.event.fix (événement), true);
			};

		jQuery.event.special [fix] = {
			configuration: function () {
				var doc = this.ownerDocument || ce,
					attaches = jQuery._data (doc, correction);

				if (! attache) {
					doc.addEventListener (orig, handler, true);
				}
				jQuery._data (doc, fix, (joint || 0) + 1);
			},
			démontage: function () {
				var doc = this.ownerDocument || ce,
					attaches = jQuery._data (doc, fix) - 1;

				if (! attache) {
					doc.removeEventListener (orig, handler, true);
					jQuery._removeData (doc, correction);
				} autre {
					jQuery._data (doc, fix, joint);
				}
			}
		};
	});
}

jQuery.fn.extend ({

	on: function (types, sélecteur, données, fn, / * INTERNAL * / one) {
		var type, origFn;

		// Les types peuvent être une carte de types / gestionnaires
		if (typeof types === "objet") {
			// (types-Object, sélecteur, données)
			if (typeof selector! == "string") {
				// (types-Objet, données)
				data = data || sélecteur;
				sélecteur = indéfini;
			}
			for (tapez les types) {
				this.on (type, sélecteur, données, types [type], un);
			}
			renvoyer ceci;
		}

		if (données == null && fn == null) {
			// (types, fn)
			fn = sélecteur;
			data = sélecteur = indéfini;
		} else if (fn == null) {
			if (sélecteur typeof === "chaîne") {
				// (types, sélecteur, fn)
				fn = données;
				data = indéfini;
			} autre {
				// (types, données, fn)
				fn = données;
				data = sélecteur;
				sélecteur = indéfini;
			}
		}
		si (fn === faux) {
			fn = returnFalse;
		} else if (! fn) {
			renvoyer ceci;
		}

		if (un === 1) {
			origFn = fn;
			fn = fonction (événement) {
				// Peut utiliser un ensemble vide, car l'événement contient les informations
				jQuery (). off (événement);
				retourne origFn.apply (ceci, arguments);
			};
			// Utilisez le même GUID pour que l'appelant puisse supprimer en utilisant origFn
			fn.guid = origFn.guid || (origFn.guid = jQuery.guid ++);
		}
		retourne this.each (function () {
			jQuery.event.add (ceci, types, fn, données, sélecteur);
		});
	},
	un: fonction (types, sélecteur, données, fn) {
		retourne this.on (types, sélecteur, données, fn, 1);
	},
	off: fonction (types, sélecteur, fn) {
		var handleObj, type;
		if (types && types.preventDefault && types.handleObj) {
			// (événement) distribué jQuery.Event
			handleObj = types.handleObj;
			jQuery (types.delegateTarget) .off (
				handleObj.namespace? handleObj.origType + "." + handleObj.namespace: handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			renvoyer ceci;
		}
		if (typeof types === "objet") {
			// (types-objet [, sélecteur])
			for (tapez les types) {
				this.off (type, sélecteur, types [type]);
			}
			renvoyer ceci;
		}
		if (selector === false || typeof selector === "fonction") {
			// (types [, fn])
			fn = sélecteur;
			sélecteur = indéfini;
		}
		si (fn === faux) {
			fn = returnFalse;
		}
		retourne this.each (function () {
			jQuery.event.remove (ceci, types, fn, sélecteur);
		});
	},

	déclencheur: fonction (type, données) {
		retourne this.each (function () {
			jQuery.event.trigger (type, données, ceci);
		});
	},
	triggerHandler: function (type, données) {
		var elem = this [0];
		if (elem) {
			return jQuery.event.trigger (type, data, elem, true);
		}
	}
});


function createSafeFragment (document) {
	var list = nodeNames.split ("|"),
		safeFrag = document.createDocumentFragment ();

	if (safeFrag.createElement) {
		while (list.length) {
			safeFrag.createElement (
				list.pop ()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr | article | side | audio | bdi | canvas | data | datalist | details | figcaption | figure | footer |" +
		"header | hgroup | mark | meter | nav | output | progress | section | summary | time | video",
	rinlinejQuery = / jQuery \ d + = "(?: null | \ d +)" / g,
	rnoshimcache = new RegExp ("<(?:" + nodeNames + ") [\\ s />]", "i"),
	rleadingWhitespace = / ^ \ s + /,
	rxhtmlTag = / <(?! area | br | col | embed | hr | img | input | link | meta | param) (([\ w:] +) [^>] *) \ /> / gi,
	rtagName = / <([\ w:] +) /,
	rtbody = / <tbody / i,
	rhtml = / <| & #? \ w +; /,
	rnoInnerhtml = / <(?: script | style | lien) / i,
	// vérifié = "vérifié" ou vérifié
	rchecked = /checked\s*(?:[^= </font>|=\s*.checked.)/i,
	rscriptType = / ^ $ | \ / (?: java | ecma) script / i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = / ^ \ s * <! (?: \ [CDATA \ [| -) | (?: \] \] | -)> \ s * $ / g,

	// Nous devons fermer ces balises pour prendre en charge XHTML (# 13200)
	wrapMap = {
		option: [1, "<select multiple = 'multiple'>", "</select>"],
		légende: [1, "<fieldset>", "</fieldset>"],
		zone: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table> <tbody>", "</tbody> </table>"],
		col: [2, "<table> <tbody> </tbody> <colgroup>", "</colgroup> </table>"],
		td: [3, "<table> <tbody> <tr>", "</tr> </tbody> </table>"],

		// IE6-8 ne peut pas sérialiser le lien, le script, le style ou les balises html5 (NoScope),
		// à moins d'être enveloppé dans un div avec des caractères insécables devant lui.
		_default: support.htmlSerialize? [0, "", ""]: [1, "X <div>", "</div>"]
	},
	safeFragment = createSafeFragment (document),
	fragmentDiv = safeFragment.appendChild (document.createElement ("div"));

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

function getAll (contexte, balise) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName! == strundefined? context.getElementsByTagName (balise || "*"):
			typeof context.querySelectorAll! == strundefined? context.querySelectorAll (balise || "*"):
			indéfini;

	si trouvé ) {
		for (found = [], elems = context.childNodes || context; (elem = elems [i])! = null; i ++) {
			if (! tag || jQuery.nodeName (elem, tag)) {
				found.push (elem);
			} autre {
				jQuery.merge (trouvé, getAll (elem, tag));
			}
		}
	}

	tag de retour === non défini || tag && jQuery.nodeName (contexte, tag)?
		jQuery.merge ([contexte], trouvé):
		a trouvé;
}

// Utilisé dans buildFragment, corrige la propriété defaultChecked
function fixDefaultChecked (elem) {
	if (rcheckableType.test (elem.type)) {
		elem.defaultChecked = elem.checked;
	}
}

// Prise en charge: IE <8
// La manipulation des tables nécessite un tbody
function manipulationTarget (elem, content) {
	retourne jQuery.nodeName (elem, "table") &&
		jQuery.nodeName (content.nodeType! == 11? contenu: content.firstChild, "tr")?

		elem.getElementsByTagName ("tbody") [0] ||
			elem.appendChild (elem.ownerDocument.createElement ("tbody")):
		elem;
}

// Remplace / restaure l'attribut type des éléments de script pour une manipulation du DOM en toute sécurité
function disableScript (elem) {
	elem.type = (jQuery.find.attr (elem, "type")! == null) + "/" + elem.type;
	return elem;
}
function restoreScript (elem) {
	var match = rscriptTypeMasked.exec (elem.type);
	if (match) {
		elem.type = match [1];
	} autre {
		elem.removeAttribute ("type");
	}
	return elem;
}

// Marquer les scripts comme ayant déjà été évalués
function setGlobalEval (elems, refElements) {
	var elem,
		i = 0;
	pour (; (elem = elems [i])! = null; i ++) {
		jQuery._data (elem, "globalEval",! refElements || jQuery._data (refElements [i], "globalEval"));
	}
}

function cloneCopyEvent (src, dest) {

	if (dest.nodeType! == 1 ||! jQuery.hasData (src)) {
		revenir;
	}

	type var, i, l,
		oldData = jQuery._data (src),
		curData = jQuery._data (dest, oldData),
		events = oldData.events;

	if (événements) {
		supprimer curData.handle;
		curData.events = {};

		pour (saisissez les événements) {
			for (i = 0, l = events [type] .length; i <l; i ++) {
				jQuery.event.add (dest, type, événements [type] [i]);
			}
		}
	}

	// fait de l'objet de données publiques cloné une copie de l'original
	if (curData.data) {
		curData.data = jQuery.extend ({}, curData.data);
	}
}

function fixCloneNodeIssues (src, dest) {
	var nodeName, e, données;

	// Nous n'avons rien à faire pour les non-éléments
	if (dest.nodeType! == 1) {
		revenir;
	}

	nodeName = dest.nodeName.toLowerCase ();

	// IE6-8 copie les événements liés via attachEvent lors de l'utilisation de cloneNode.
	if (! support.noCloneEvent && dest [jQuery.expando]) {
		data = jQuery._data (dest);

		for (e dans data.events) {
			jQuery.removeEvent (dest, e, data.handle);
		}

		// Les données d'événement sont référencées au lieu d'être copiées si l'expansion est également copiée
		dest.removeAttribute (jQuery.expando);
	}

	// IE efface le contenu lors du clonage de scripts et essaie d'évaluer le texte nouvellement défini
	if (nodeName === "script" && dest.text! == src.text) {
		disableScript (dest) .text = src.text;
		restoreScript (dest);

	// IE6-10 clone incorrectement les enfants des éléments d'objet en utilisant classid.
	// IE10 génère NoModificationAllowedError si le parent est nul, # 12132.
	} else if (nodeName === "objet") {
		if (dest.parentNode) {
			dest.outerHTML = src.outerHTML;
		}

		// Ce chemin semble inévitable pour IE9. Lors du clonage d'un objet
		// élément dans IE9, la stratégie externalHTML ci-dessus n'est pas suffisante.
		// Si le src a innerHTML et que la destination n'en a pas,
		// copie le src.innerHTML dans le dest.innerHTML. # 10324
		if (support.html5Clone && (src.innerHTML &&! jQuery.trim (dest.innerHTML))) {
			dest.innerHTML = src.innerHTML;
		}

	} else if (nodeName === "input" && rcheckableType.test (src.type)) {
		// IE6-8 ne parvient pas à conserver l'état vérifié d'une case à cocher clonée
		// ou bouton radio. Pire encore, IE6-7 ne parvient pas à donner l'élément cloné
		// une apparence vérifiée si la valeur defaultChecked n'est pas également définie

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 devient confus et finit par définir la valeur d'un cloné
		// case à cocher / bouton radio vers une chaîne vide au lieu de "on"
		if (valeur.dest! == valeur_src.) {
			dest.value = src.value;
		}

	// IE6-8 ne parvient pas à remettre l'option sélectionnée à la valeur par défaut sélectionnée
	// état lors du clonage des options
	} else if (nodeName === "option") {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 ne parvient pas à définir defaultValue sur la valeur correcte lorsque
	// clonage d'autres types de champs d'entrée
	} else if (nodeName === "input" || nodeName === "textarea") {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend ({
	clone: ​​function (elem, dataAndEvents, deepDataAndEvents) {
		var destElements, nœud, clone, i, srcElements,
			inPage = jQuery.contains (elem.ownerDocument, elem);

		if (support.html5Clone || jQuery.isXMLDoc (elem) ||! rnoshimcache.test ("<" + elem.nodeName + ">")) {
			clone = elem.cloneNode (vrai);

		// IE <= 8 ne clone pas correctement les nœuds d'élément détachés et inconnus
		} autre {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild (clone = fragmentDiv.firstChild);
		}

		if ((! support.noCloneEvent ||! support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) &&! jQuery.isXMLDoc (elem)) {

			// Nous évitons Sizzle ici pour des raisons de performances: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll (clone);
			srcElements = getAll (elem);

			// Résoudre tous les problèmes de clonage IE
			for (i = 0; (node ​​= srcElements [i])! = null; ++ i) {
				// Assurez-vous que le nœud de destination n'est pas nul; Corrections # 9587
				if (destElements [i]) {
					fixCloneNodeIssues (nœud, destElements [i]);
				}
			}
		}

		// Copie les événements de l'original vers le clone
		if (dataAndEvents) {
			if (deepDataAndEvents) {
				srcElements = srcElements || getAll (elem);
				destElements = destElements || getAll (clone);

				for (i = 0; (node ​​= srcElements [i])! = null; i ++) {
					cloneCopyEvent (nœud, destElements [i]);
				}
			} autre {
				cloneCopyEvent (elem, clone);
			}
		}

		// Préserver l'historique d'évaluation des scripts
		destElements = getAll (clone, "script");
		if (destElements.length> 0) {
			setGlobalEval (destElements,! inPage && getAll (elem, "script"));
		}

		destElements = srcElements = node = null;

		// Renvoie l'ensemble cloné
		retourne le clone;
	},

	buildFragment: function (éléments, contexte, scripts, sélection) {
		var j, elem, contient,
			tmp, tag, tbody, wrap,
			l = élems.length,

			// Assurer un fragment sûr
			safe = createSafeFragment (contexte),

			nœuds = [],
			i = 0;

		pour (; i <l; i ++) {
			elem = elems [i];

			if (elem || elem === 0) {

				// Ajouter des nœuds directement
				if (jQuery.type (elem) === "objet") {
					jQuery.merge (nœuds, elem.nodeType? [elem]: elem);

				// Convertit le non-html en un nœud de texte
				} else if (! rhtml.test (elem)) {
					nodes.push (context.createTextNode (elem));

				// Convertit le HTML en nœuds DOM
				} autre {
					tmp = tmp || safe.appendChild (context.createElement ("div"));

					// Désérialiser une représentation standard
					tag = (rtagName.exec (elem) || ["", ""]) [1] .toLowerCase ();
					wrap = wrapMap [tag] || wrapMap._default;

					tmp.innerHTML = wrap [1] + elem.replace (rxhtmlTag, "<$ 1> </ $ 2>") + wrap [2];

					// Descendre à travers les wrappers jusqu'au bon contenu
					j = wrap [0];
					tandis que (j--) {
						tmp = tmp.lastChild;
					}

					// Ajout manuel des espaces blancs supprimés par IE
					if (! support.leadingWhitespace && rleadingWhitespace.test (elem)) {
						nodes.push (context.createTextNode (rleadingWhitespace.exec (elem) [0]));
					}

					// Supprime le <tbody> inséré automatiquement d'IE des fragments de table
					if (! support.tbody) {

						// La chaîne était une <table>, * peut * avoir un <tbody> faux
						elem = tag === "table" &&! rtbody.test (elem)?
							tmp.firstChild:

							// La chaîne était un <thead> ou un <tfoot> nu
							wrap [1] === "<table>" &&! rtbody.test (elem)?
								tmp:
								0;

						j = elem && elem.childNodes.length;
						tandis que (j--) {
							if (jQuery.nodeName ((tbody = elem.childNodes [j]), "tbody") &&! tbody.childNodes.length) {
								elem.removeChild (tbody);
							}
						}
					}

					jQuery.merge (nœuds, tmp.childNodes);

					// Correction # 12392 pour WebKit et IE> 9
					tmp.textContent = "";

					// Correction # 12392 pour oldIE
					while (tmp.firstChild) {
						tmp.removeChild (tmp.firstChild);
					}

					// N'oubliez pas le conteneur de niveau supérieur pour un nettoyage correct
					tmp = safe.lastChild;
				}
			}
		}

		// Correction # 11356: Effacer les éléments du fragment
		if (tmp) {
			safe.removeChild (tmp);
		}

		// Réinitialiser la valeur par défaut Vérifié pour toutes les radios et cases à cocher
		// sur le point d'être ajouté au DOM dans IE 6/7 (# 8060)
		if (! support.appendChecked) {
			jQuery.grep (getAll (nœuds, "entrée"), fixDefaultChecked);
		}

		i = 0;
		while ((elem = nodes [i ++])) {

			// # 4087 - Si les éléments d'origine et de destination sont identiques, c'est
			// cet élément, ne fais rien
			if (selection && jQuery.inArray (elem, selection)! == -1) {
				continuer;
			}

			contient = jQuery.contains (elem.ownerDocument, elem);

			// Ajouter au fragment
			tmp = getAll (safe.appendChild (elem), "script");

			// Préserver l'historique d'évaluation des scripts
			if (contient) {
				setGlobalEval (tmp);
			}

			// Capturer les exécutables
			if (scripts) {
				j = 0;
				while ((elem = tmp [j ++])) {
					if (rscriptType.test (elem.type || "")) {
						scripts.push (elem);
					}
				}
			}
		}

		tmp = nul;

		rentrez bien;
	},

	cleanData: function (elems, / * interne * / acceptData) {
		var elem, type, id, données,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			deleteExpando = support.deleteExpando,
			special = jQuery.event.special;

		pour (; (elem = elems [i])! = null; i ++) {
			if (acceptData || jQuery.acceptData (elem)) {

				id = elem [clé interne];
				data = id && cache [id];

				if (données) {
					if (data.events) {
						for (saisissez data.events) {
							if (spécial [type]) {
								jQuery.event.remove (elem, type);

							// Ceci est un raccourci pour éviter la surcharge de jQuery.event.remove
							} autre {
								jQuery.removeEvent (elem, type, data.handle);
							}
						}
					}

					// Supprimer le cache uniquement s'il n'a pas déjà été supprimé par jQuery.event.remove
					if (cache [id]) {

						supprimer le cache [id];

						// IE ne nous permet pas de supprimer les propriétés expando des nœuds,
						// il n'a pas non plus de fonction removeAttribute sur les nœuds Document;
						// nous devons gérer tous ces cas
						if (deleteExpando) {
							supprimer elem [internalKey];

						} else if (typeof elem.removeAttribute! == strundefined) {
							elem.removeAttribute (internalKey);

						} autre {
							elem [internalKey] = null;
						}

						suppriméIds.push (id);
					}
				}
			}
		}
	}
});

jQuery.fn.extend ({
	text: function (valeur) {
		retourne l'accès (this, function (value) {
			valeur de retour === non définie?
				jQuery.text (ceci):
				this.empty (). append ((this [0] && this [0] .ownerDocument || document) .createTextNode (value));
		}, null, valeur, arguments.length);
	},

	append: function () {
		renvoie this.domManip (arguments, fonction (elem) {
			if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
				var cible = manipulationTarget (this, elem);
				target.appendChild (elem);
			}
		});
	},

	préfixer: function () {
		renvoie this.domManip (arguments, fonction (elem) {
			if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
				var cible = manipulationTarget (this, elem);
				target.insertBefore (elem, target.firstChild);
			}
		});
	},

	avant: function () {
		renvoie this.domManip (arguments, fonction (elem) {
			if (this.parentNode) {
				this.parentNode.insertBefore (elem, this);
			}
		});
	},

	après: function () {
		renvoie this.domManip (arguments, fonction (elem) {
			if (this.parentNode) {
				this.parentNode.insertBefore (elem, this.nextSibling);
			}
		});
	},

	remove: function (selector, keepData / * Usage interne uniquement * /) {
		var elem,
			elems = sélecteur? jQuery.filter (sélecteur, ceci): ceci,
			i = 0;

		pour (; (elem = elems [i])! = null; i ++) {

			if (! keepData && elem.nodeType === 1) {
				jQuery.cleanData (getAll (elem));
			}

			if (elem.parentNode) {
				if (keepData && jQuery.contains (elem.ownerDocument, elem)) {
					setGlobalEval (getAll (elem, "script"));
				}
				elem.parentNode.removeChild (elem);
			}
		}

		renvoyer ceci;
	},

	vide: function () {
		var elem,
			i = 0;

		pour (; (elem = this [i])! = null; i ++) {
			// Suppression des nœuds d'élément et prévention des fuites de mémoire
			if (elem.nodeType === 1) {
				jQuery.cleanData (getAll (elem, false));
			}

			// Supprimer tous les nœuds restants
			while (elem.firstChild) {
				elem.removeChild (elem.firstChild);
			}

			// S'il s'agit d'une sélection, assurez-vous qu'elle affiche vide (# 12336)
			// Prise en charge: IE <9
			if (elem.options && jQuery.nodeName (elem, "select")) {
				elem.options.length = 0;
			}
		}

		renvoyer ceci;
	},

	clone: ​​function (dataAndEvents, deepDataAndEvents) {
		dataAndEvents = dataAndEvents == null? false: dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null? dataAndEvents: deepDataAndEvents;

		renvoie this.map (function () {
			return jQuery.clone (this, dataAndEvents, deepDataAndEvents);
		});
	},

	html: function (valeur) {
		retourne l'accès (this, function (value) {
			var elem = this [0] || {},
				i = 0,
				l = this.length;

			if (valeur === non définie) {
				return elem.nodeType === 1?
					elem.innerHTML.replace (rinlinejQuery, ""):
					indéfini;
			}

			// Voir si nous pouvons prendre un raccourci et utiliser simplement innerHTML
			if (typeof value === "string" &&! rnoInnerhtml.test (value) &&
				(support.htmlSerialize ||! rnoshimcache.test (valeur)) &&
				(support.leadingWhitespace ||! rleadingWhitespace.test (valeur)) &&
				! wrapMap [(rtagName.exec (valeur) || ["", ""]) [1] .toLowerCase ()]) {

				value = value.replace (rxhtmlTag, "<$ 1> </ $ 2>");

				essayez {
					pour (; i <l; i ++) {
						// Suppression des nœuds d'élément et prévention des fuites de mémoire
						elem = ce [i] || {};
						if (elem.nodeType === 1) {
							jQuery.cleanData (getAll (elem, false));
							elem.innerHTML = valeur;
						}
					}

					elem = 0;

				// Si l'utilisation de innerHTML lève une exception, utilisez la méthode de secours
				} catch (e) {}
			}

			if (elem) {
				this.empty (). append (valeur);
			}
		}, null, valeur, arguments.length);
	},

	replaceWith: function () {
		var arg = arguments [0];

		// Apportez les modifications, en remplaçant chaque élément de contexte par le nouveau contenu
		this.domManip (arguments, fonction (elem) {
			arg = this.parentNode;

			jQuery.cleanData (getAll (this));

			si (arg) {
				arg.replaceChild (elem, this);
			}
		});

		// Forcer la suppression s'il n'y avait pas de nouveau contenu (par exemple, à partir d'arguments vides)
		renvoie arg && (arg.length || arg.nodeType)? ceci: this.remove ();
	},

	detach: function (sélecteur) {
		return this.remove (sélecteur, vrai);
	},

	domManip: fonction (args, rappel) {

		// Aplatir tous les tableaux imbriqués
		args = concat.apply ([], args);

		var d'abord, noeud, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = this.length,
			set = ceci,
			iNoClone = l - 1,
			valeur = args [0],
			isFunction = jQuery.isFunction (valeur);

		// Nous ne pouvons pas cloneNode fragments qui contiennent vérifié, dans WebKit
		if (isFunction ||
				(l> 1 && typeof valeur === "chaîne" &&
					! support.checkClone && rchecked.test (valeur))) {
			retourne this.each (function (index) {
				var self = set.eq (index);
				if (isFunction) {
					args [0] = value.call (this, index, self.html ());
				}
				self.domManip (args, rappel);
			});
		}

		si (l) {
			fragment = jQuery.buildFragment (args, this [0] .ownerDocument, false, this);
			premier = fragment.firstChild;

			if (fragment.childNodes.length === 1) {
				fragment = premier;
			}

			if (first) {
				scripts = jQuery.map (getAll (fragment, "script"), disableScript);
				hasScripts = scripts.length;

				// Utilise le fragment original pour le dernier élément au lieu du premier car il peut finir
				// en cours de vidage incorrect dans certaines situations (# 8070).
				pour (; i <l; i ++) {
					nœud = fragment;

					if (i! == iNoClone) {
						node = jQuery.clone (node, true, true);

						// Conserve les références aux scripts clonés pour une restauration ultérieure
						if (hasScripts) {
							jQuery.merge (scripts, getAll (nœud, "script"));
						}
					}

					callback.call (this [i], node, i);
				}

				if (hasScripts) {
					doc = scripts [scripts.length - 1] .ownerDocument;

					// Réactiver les scripts
					jQuery.map (scripts, restoreScript);

					// Évaluer les scripts exécutables lors de la première insertion de document
					pour (i = 0; i <hasScripts; i ++) {
						nœud = scripts [i];
						if (rscriptType.test (node.type || "") &&
							! jQuery._data (nœud, "globalEval") && jQuery.contains (doc, nœud)) {

							if (node.src) {
								// Dépendance AJAX facultative, mais n'exécutera pas de scripts s'il n'est pas présent
								if (jQuery._evalUrl) {
									jQuery._evalUrl (node.src);
								}
							} autre {
								jQuery.globalEval ((node.text || node.textContent || node.innerHTML || "") .replace (rcleanScript, ""));
							}
						}
					}
				}

				// Correction # 11809: éviter les fuites de mémoire
				fragment = premier = nul;
			}
		}

		renvoyer ceci;
	}
});

jQuery.each ({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "avant",
	insertAfter: "après",
	replaceAll: "replaceWith"
}, fonction (nom, original) {
	jQuery.fn [nom] = fonction (sélecteur) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery (sélecteur),
			dernier = insert.length - 1;

		pour (; i <= dernier; i ++) {
			elems = i === dernier? this: this.clone (vrai);
			jQuery (insérer [i]) [original] (elems);

			// Les navigateurs modernes peuvent appliquer des collections jQuery sous forme de tableaux, mais oldIE a besoin d'un .get ()
			push.apply (ret, elems.get ());
		}

		return this.pushStack (ret);
	};
});


var iframe,
	elemdisplay = {};

/ **
 * Récupérer l'affichage réel d'un élément
 * @param {String} nom nodeName de l'élément
 * @param {Object} doc Objet de document
 * /
// Appelé uniquement à partir de defaultDisplay
function actualDisplay (nom, doc) {
	style var,
		elem = jQuery (doc.createElement (nom)) .appendTo (doc.body),

		// getDefaultComputedStyle peut être utilisé de manière fiable uniquement sur l'élément attaché
		display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle (elem [0]))?

			// L'utilisation de cette méthode est un correctif temporaire (plus comme l'optimisation) jusqu'à ce que quelque chose de mieux arrive,
			// car il a été supprimé de la spécification et pris en charge uniquement dans FF
			style.display: jQuery.css (elem [0], "display");

	// Nous n'avons aucune donnée stockée sur l'élément,
	// donc utilisez la méthode "detach" comme moyen rapide de se débarrasser de l'élément
	elem.detach ();

	affichage de retour;
}

/ **
 * Essayez de déterminer la valeur d'affichage par défaut d'un élément
 * @param {String} nodeName
 * /
function defaultDisplay (nodeName) {
	var doc = document,
		display = elemdisplay [nodeName];

	if (! affichage) {
		display = actualDisplay (nodeName, doc);

		// Si la méthode simple échoue, lire depuis l'intérieur d'une iframe
		if (affichage === "aucun" ||! affichage) {

			// Utilisez l'iframe déjà créé si possible
			iframe = (iframe || jQuery ("<iframe frameborder = '0' width = '0' height = '0' />")). appendTo (doc.documentElement);

			// Toujours écrire un nouveau squelette HTML pour que Webkit et Firefox ne s'étouffent pas lors de la réutilisation
			doc = (iframe [0] .contentWindow || iframe [0] .contentDocument) .document;

			// Prise en charge: IE
			doc.write ();
			doc.close ();

			display = actualDisplay (nodeName, doc);
			iframe.detach ();
		}

		// Stocke l'affichage par défaut correct
		elemdisplay [nodeName] = affichage;
	}

	affichage de retour;
}


(fonction() {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function () {
		if (shrinkWrapBlocksVal! = null) {
			return shrinkWrapBlocksVal;
		}

		// Sera changé plus tard si nécessaire.
		shrinkWrapBlocksVal = false;

		// Minifié: var b, c, d
		var div, corps, conteneur;

		body = document.getElementsByTagName ("corps") [0];
		if (! corps ||! body.style) {
			// Test lancé trop tôt ou dans un environnement non pris en charge, quitte.
			revenir;
		}

		// Installer
		div = document.createElement ("div");
		container = document.createElement ("div");
		container.style.cssText = "position: absolue; bordure: 0; largeur: 0; hauteur: 0; haut: 0; gauche: -9999px";
		body.appendChild (conteneur) .appendChild (div);

		// Prise en charge: IE6
		// Vérifie si les éléments avec mise en page enveloppent leurs enfants
		if (typeof div.style.zoom! == strundefined) {
			// Réinitialiser CSS: box-sizing; afficher; marge; frontière
			div.style.cssText =
				// Prise en charge: Firefox <29, Android 2.3
				// Dimensionnement de la boîte de préfixe du fournisseur
				"-webkit-box-sizing: content-box; -moz-box-sizing: content-box;" +
				"dimensionnement de la boîte: boîte de contenu; affichage: bloc; marge: 0; bordure: 0;" +
				"remplissage: 1px; largeur: 1px; zoom: 1";
			div.appendChild (document.createElement ("div")) .style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth! == 3;
		}

		body.removeChild (conteneur);

		return shrinkWrapBlocksVal;
	};

}) ();
var rmargin = (/ ^ marge /);

var rnumnonpx = new RegExp ("^ (" + pnum + ") (?! px) [az%] + $", "i");



var getStyles, curCSS,
	rposition = / ^ (haut | droite | bas | gauche) $ /;

if (window.getComputedStyle) {
	getStyles = function (elem) {
		return elem.ownerDocument.defaultView.getComputedStyle (elem, null);
	};

	curCSS = fonction (élément, nom, calculé) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		calculé = calculé || getStyles (elem);

		// getPropertyValue n'est nécessaire que pour .css ('filter') dans IE9, voir # 12537
		ret = calculé? computed.getPropertyValue (nom) || calculé [nom]: non défini;

		if (calculé) {

			if (ret === "" &&! jQuery.contains (elem.ownerDocument, elem)) {
				ret = jQuery.style (elem, nom);
			}

			// Un hommage au "super hack de Dean Edwards"
			// Chrome <17 et Safari 5.0 utilise "valeur calculée" au lieu de "valeur utilisée" pour la marge droite
			// Safari 5.1.7 (au moins) renvoie le pourcentage pour un plus grand ensemble de valeurs, mais la largeur semble être de manière fiable des pixels
			// cela va à l'encontre du brouillon de spécification CSSOM: http://dev.w3.org/csswg/cssom/#resolved-values
			if (rnumnonpx.test (ret) && rmargin.test (nom)) {

				// Souvenez-vous des valeurs d'origine
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Insérez les nouvelles valeurs pour obtenir une valeur calculée
				style.minWidth = style.maxWidth = style.width = ret;
				ret = largeur.calculée;

				// Rétablir les valeurs modifiées
				style.width = largeur;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		// Prise en charge: IE
		// IE renvoie la valeur zIndex sous forme d'entier.
		return ret === indéfini?
			ret:
			ret + "";
	};
} else if (document.documentElement.currentStyle) {
	getStyles = function (elem) {
		return elem.currentStyle;
	};

	curCSS = fonction (élément, nom, calculé) {
		var gauche, rs, rsLeft, ret,
			style = elem.style;

		calculé = calculé || getStyles (elem);
		ret = calculé? calculé [nom]: non défini;

		// Évitez de définir ret sur une chaîne vide ici
		// donc nous ne sommes pas par défaut sur auto
		if (ret == null && style && style [nom]) {
			ret = style [nom];
		}

		// Du génial hack de Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// Si nous n'avons pas affaire à un nombre de pixels régulier
		// mais un nombre qui a une fin bizarre, nous devons le convertir en pixels
		// mais pas les attributs de position css, car ils sont proportionnels à l'élément parent à la place
		// et nous ne pouvons pas mesurer le parent à la place car cela pourrait déclencher un problème de "stacking dolls"
		if (rnumnonpx.test (ret) &&! rposition.test (nom)) {

			// Souvenez-vous des valeurs d'origine
			gauche = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Insérez les nouvelles valeurs pour obtenir une valeur calculée
			if (rsLeft) {
				rs.left = elem.currentStyle.left;
			}
			style.left = nom === "fontSize"? "1em": ret;
			ret = style.pixelLeft + "px";

			// Rétablir les valeurs modifiées
			style.left = gauche;
			if (rsLeft) {
				rs.left = rsLeft;
			}
		}

		// Prise en charge: IE
		// IE renvoie la valeur zIndex sous forme d'entier.
		return ret === indéfini?
			ret:
			ret + "" || "auto";
	};
}




function addGetHookIf (conditionFn, hookFn) {
	// Définissez le hook, nous vérifierons à la première exécution s'il est vraiment nécessaire.
	revenir {
		get: function () {
			var condition = conditionFn ();

			if (condition == null) {
				// Le test n'était pas prêt à ce stade; vis le crochet cette fois
				// mais vérifiez à nouveau si nécessaire la prochaine fois.
				revenir;
			}

			if (condition) {
				// Hook n'est pas nécessaire (ou il n'est pas possible de l'utiliser en raison d'une dépendance manquante),
				// enlevez-le.
				// Puisqu'il n'y a pas d'autres hooks pour marginRight, supprimez tout l'objet.
				supprimer this.get;
				revenir;
			}

			// Crochet nécessaire; redéfinissez-le pour que le test de support ne soit pas exécuté à nouveau.

			return (this.get = hookFn) .apply (this, arguments);
		}
	};
}


(fonction() {
	// Minifié: var b, c, d, e, f, g, h, i
	var div, style, a, pixelPositionVal, boxSizingReliableVal,
		fiableHiddenOffsetsVal, fiableMarginRightVal;

	// Installer
	div = document.createElement ("div");
	div.innerHTML = "<link/><table> </table> <a href='/a'> a </a> <input type = 'checkbox' />";
	a = div.getElementsByTagName ("a") [0];
	style = a && a.style;

	// Terminer tôt dans les environnements limités (sans navigateur)
	if (! style) {
		revenir;
	}

	style.cssText = "float: gauche; opacité: .5";

	// Prise en charge: IE <9
	// Assurez-vous que l'opacité de l'élément existe (par opposition au filtre)
	support.opacity = style.opacity === "0.5";

	// Vérifier l'existence du flottant de style
	// (IE utilise styleFloat au lieu de cssFloat)
	support.cssFloat = !! style.cssFloat;

	div.style.backgroundClip = "boîte de contenu";
	div.cloneNode (true) .style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	// Prise en charge: Firefox <29, Android 2.3
	// Dimensionnement de la boîte de préfixe du fournisseur
	support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" ||
		style.WebkitBoxSizing === "";

	jQuery.extend (support, {
		fiableHiddenOffsets: function () {
			if (fiableHiddenOffsetsVal == null) {
				computeStyleTests ();
			}
			return fiableHiddenOffsetsVal;
		},

		boxSizingReliable: function () {
			if (boxSizingReliableVal == null) {
				computeStyleTests ();
			}
			return boxSizingReliableVal;
		},

		pixelPosition: function () {
			if (pixelPositionVal == null) {
				computeStyleTests ();
			}
			return pixelPositionVal;
		},

		// Prise en charge: Android 2.3
		fiableMarginRight: function () {
			if (fiableMarginRightVal == null) {
				computeStyleTests ();
			}
			return fiableMarginRightVal;
		}
	});

	function computeStyleTests () {
		// Minifié: var b, c, d, j
		var div, corps, conteneur, contenu;

		body = document.getElementsByTagName ("corps") [0];
		if (! corps ||! body.style) {
			// Test lancé trop tôt ou dans un environnement non pris en charge, quitte.
			revenir;
		}

		// Installer
		div = document.createElement ("div");
		container = document.createElement ("div");
		container.style.cssText = "position: absolue; bordure: 0; largeur: 0; hauteur: 0; haut: 0; gauche: -9999px";
		body.appendChild (conteneur) .appendChild (div);

		div.style.cssText =
			// Prise en charge: Firefox <29, Android 2.3
			// Dimensionnement de la boîte de préfixe du fournisseur
			"-webkit-box-sizing: border-box; -moz-box-sizing: border-box;" +
			"box-sizing: border-box; display: block; margin-top: 1%; top: 1%;" +
			"bordure: 1px; remplissage: 1px; largeur: 4px; position: absolue";

		// Prise en charge: IE <9
		// Suppose des valeurs raisonnables en l'absence de getComputedStyle
		pixelPositionVal = boxSizingReliableVal = false;
		fiableMarginRightVal = vrai;

		// Vérifiez getComputedStyle pour que ce code ne soit pas exécuté dans IE <9.
		if (window.getComputedStyle) {
			pixelPositionVal = (window.getComputedStyle (div, null) || {}) .top! == "1%";
			boxSizingReliableVal =
				(window.getComputedStyle (div, null) || {largeur: "4px"}) .width === "4px";

			// Prise en charge: Android 2.3
			// Div avec une largeur explicite et pas de marge droite incorrectement
			// obtient la marge droite calculée en fonction de la largeur du conteneur (# 3333)
			// Bogue WebKit 13343 - getComputedStyle renvoie une valeur incorrecte pour margin-right
			contents = div.appendChild (document.createElement ("div"));

			// Réinitialiser CSS: box-sizing; afficher; marge; frontière; rembourrage
			contents.style.cssText = div.style.cssText =
				// Prise en charge: Firefox <29, Android 2.3
				// Dimensionnement de la boîte de préfixe du fournisseur
				"-webkit-box-sizing: content-box; -moz-box-sizing: content-box;" +
				"dimensionnement de la boîte: boîte de contenu; affichage: bloc; marge: 0; bordure: 0; remplissage: 0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			fiableMarginRightVal =
				! parseFloat ((window.getComputedStyle (contenu, null) || {}) .marginRight);
		}

		// Prise en charge: IE8
		// Vérifie si les cellules du tableau ont toujours offsetWidth / Height lorsqu'elles sont définies
		// à afficher: aucun et il y a encore d'autres cellules de tableau visibles dans un
		// ligne de table; si c'est le cas, offsetWidth / Height ne sont pas fiables pour une utilisation lorsque
		// déterminer si un élément a été masqué directement en utilisant
		// affichage: aucun (il est toujours sûr d'utiliser des décalages si un élément parent est
		// caché; enfilez des lunettes de sécurité et consultez le bogue n ° 4512 pour plus d'informations).
		div.innerHTML = "<table> <tr> <td> </td> <td> t </td> </tr> </table>";
		contents = div.getElementsByTagName ("td");
		contents [0] .style.cssText = "marge: 0; bordure: 0; remplissage: 0; affichage: aucun";
		fiableHiddenOffsetsVal = contenu [0] .offsetHeight === 0;
		if (fiableHiddenOffsetsVal) {
			contenu [0] .style.display = "";
			contents [1] .style.display = "aucun";
			fiableHiddenOffsetsVal = contenu [0] .offsetHeight === 0;
		}

		body.removeChild (conteneur);
	}

}) ();


// Une méthode pour permuter rapidement les propriétés CSS d'entrée / sortie pour obtenir des calculs corrects.
jQuery.swap = function (elem, options, callback, args) {
	var ret, nom,
		ancien = {};

	// Rappelez-vous les anciennes valeurs et insérez les nouvelles
	for (nom dans les options) {
		old [nom] = elem.style [nom];
		elem.style [nom] = options [nom];
	}

	ret = callback.apply (elem, args || []);

	// Rétablir les anciennes valeurs
	for (nom dans les options) {
		elem.style [nom] = ancien [nom];
	}

	return ret;
};


var
		ralpha = / alpha \ ([^)] * \) / i,
	ropacity = / opacity \ s * = \ s * ([^)] *) /,

	// échangeable si l'affichage est nul ou commence par un tableau sauf "table", "table-cell" ou "table-caption"
	// voir ici pour les valeurs d'affichage: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[eaedral).+)/,
	rnumsplit = new RegExp ("^ (" + pnum + ") (. *) $", "i"),
	rrelNum = new RegExp ("^ ([+ -]) = (" + pnum + ")", "i"),

	cssShow = {position: "absolu", visibilité: "caché", affichage: "bloc"},
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = ["Webkit", "O", "Moz", "ms"];


// retourne une propriété css mappée à une propriété potentiellement préfixée par le fournisseur
function vendorPropName (style, nom) {

	// raccourci pour les noms qui ne sont pas préfixés par le fournisseur
	if (nom avec style) {
		nom de retour;
	}

	// recherche les noms préfixés par le fournisseur
	var capName = nom.charAt (0) .toUpperCase () + nom.slice (1),
		origName = nom,
		i = cssPrefixes.length;

	alors que je-- ) {
		name = cssPrefixes [i] + capName;
		if (nom avec style) {
			nom de retour;
		}
	}

	return origName;
}

function showHide (elements, show) {
	affichage var, elem, caché,
		valeurs = [],
		index = 0,
		longueur = éléments.longueur;

	for (; index <longueur; index ++) {
		elem = éléments [index];
		if (! elem.style) {
			continuer;
		}

		values ​​[index] = jQuery._data (elem, "olddisplay");
		display = elem.style.display;
		if (montrer) {
			// Réinitialise l'affichage en ligne de cet élément pour savoir s'il est
			// être masqué par des règles en cascade ou non
			if (! values ​​[index] && display === "aucun") {
				elem.style.display = "";
			}

			// Définit les éléments qui ont été remplacés avec display: none
			// dans une feuille de style quel que soit le style de navigateur par défaut
			// pour un tel élément
			if (elem.style.display === "" && isHidden (elem)) {
				values ​​[index] = jQuery._data (elem, "olddisplay", defaultDisplay (elem.nodeName));
			}
		} autre {
			hidden = isHidden (elem);

			if (afficher && afficher! == "aucun" ||! masqué) {
				jQuery._data (elem, "olddisplay", hidden? display: jQuery.css (elem, "display"));
			}
		}
	}

	// Définit l'affichage de la plupart des éléments dans une seconde boucle
	// pour éviter la redistribution constante
	for (index = 0; index <longueur; index ++) {
		elem = éléments [index];
		if (! elem.style) {
			continuer;
		}
		if (! show || elem.style.display === "aucun" || elem.style.display === "") {
			elem.style.display = montrer? valeurs [index] || "" : "aucun";
		}
	}

	éléments de retour;
}

function setPositiveNumber (elem, value, soustract) {
	var correspond = rnumsplit.exec (valeur);
	retour des matchs?
		// Protège contre les "soustract" indéfinis, par exemple, lorsqu'il est utilisé comme dans cssHooks
		Math.max (0, correspond à [1] - (soustrait || 0)) + (correspond à [2] || "px"):
		valeur;
}

function augmentWidthOrHeight (elem, name, extra, isBorderBox, styles) {
	var i = extra === (isBorderBox? "border": "content")?
		// Si nous avons déjà la bonne mesure, évitez l'augmentation
		4:
		// Sinon initialiser pour les propriétés horizontales ou verticales
		nom === "largeur"? dix,

		val = 0;

	pour (; i <4; i + = 2) {
		// les deux modèles de boîte excluent la marge, alors ajoutez-la si nous le voulons
		if (extra === "margin") {
			val + = jQuery.css (elem, extra + cssExpand [i], true, styles);
		}

		if (isBorderBox) {
			// border-box inclut un remplissage, alors supprimez-le si nous voulons du contenu
			if (extra === "contenu") {
				val - = jQuery.css (elem, "padding" + cssExpand [i], true, styles);
			}

			// à ce stade, extra n'est ni bordure ni marge, donc supprimez la bordure
			if (extra! == "margin") {
				val - = jQuery.css (elem, "border" + cssExpand [i] + "Width", true, styles);
			}
		} autre {
			// à ce stade, le supplément n'est pas contenu, alors ajoutez un remplissage
			val + = jQuery.css (elem, "padding" + cssExpand [i], true, styles);

			// à ce stade, extra n'est ni contenu ni remplissage, alors ajoutez une bordure
			if (extra! == "padding") {
				val + = jQuery.css (elem, "border" + cssExpand [i] + "Width", true, styles);
			}
		}
	}

	return val;
}

function getWidthOrHeight (elem, nom, extra) {

	// Commencez par la propriété offset, qui équivaut à la valeur de la zone de bordure
	var valueIsBorderBox = true,
		val = nom === "largeur"? elem.offsetWidth: elem.offsetHeight,
		styles = getStyles (elem),
		isBorderBox = support.boxSizing && jQuery.css (elem, "boxSizing", false, styles) === "border-box";

	// certains éléments non html renvoient undefined pour offsetWidth, donc vérifiez pour null / undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	si (val <= 0 || val == null) {
		// Revenir au CSS calculé puis non calculé si nécessaire
		val = curCSS (élément, nom, styles);
		si (val <0 || val == null) {
			val = elem.style [nom];
		}

		// L'unité calculée n'est pas les pixels. Arrêtez-vous ici et revenez.
		if (rnumnonpx.test (val)) {
			return val;
		}

		// nous avons besoin de la vérification du style dans le cas où un navigateur renvoie des valeurs non fiables
		// pour getComputedStyle revient silencieusement à l'élément fiable elem.style
		valueIsBorderBox = isBorderBox && (support.boxSizingReliable () || val === elem.style [nom]);

		// Normaliser "", auto et se préparer à extra
		val = parseFloat (val) || 0;
	}

	// utilise le modèle de dimensionnement de la boîte actif pour ajouter / soustraire des styles non pertinents
	retour (val +
		augmentWidthOrHeight (
			elem,
			Nom,
			extra || (isBorderBox? "border": "content"),
			valueIsBorderBox,
			modes
		)
	) + "px";
}

jQuery.extend ({
	// Ajout de crochets de propriété de style pour remplacer la valeur par défaut
	// comportement d'obtention et de définition d'une propriété de style
	cssHooks: {
		opacité: {
			get: function (elem, calculé) {
				if (calculé) {
					// Nous devrions toujours récupérer un nombre d'opacité
					var ret = curCSS (elem, "opacité");
					retourne ret === ""? "1": ret;
				}
			}
		}
	},

	// N'ajoute pas automatiquement "px" à ces propriétés éventuellement sans unité
	cssNumber: {
		"columnCount": vrai,
		"fillOpacity": vrai,
		"flexGrow": vrai,
		"flexShrink": vrai,
		"fontWeight": vrai,
		"lineHeight": vrai,
		"opacité": vrai,
		"ordre": vrai,
		"orphelins": vrai,
		"veuves": vrai,
		"zIndex": vrai,
		"zoom": vrai
	},

	// Ajoutez les propriétés dont vous souhaitez corriger les noms avant
	// définition ou obtention de la valeur
	cssProps: {
		// normaliser la propriété css float
		"float": support.cssFloat? "cssFloat": "styleFloat"
	},

	// Récupère et définit la propriété style sur un nœud DOM
	style: function (elem, name, value, extra) {
		// Ne pas définir de styles sur les nœuds de texte et de commentaire
		if (! elem || elem.nodeType === 3 || elem.nodeType === 8 ||! elem.style) {
			revenir;
		}

		// Assurez-vous que nous travaillons avec le bon nom
		var ret, type, crochets,
			origName = jQuery.camelCase (nom),
			style = elem.style;

		name = jQuery.cssProps [origName] || (jQuery.cssProps [origName] = vendorPropName (style, origName));

		// obtient le hook pour la version préfixée
		// suivi de la version sans préfixe
		hooks = jQuery.cssHooks [nom] || jQuery.cssHooks [origName];

		// Vérifie si nous définissons une valeur
		if (valeur! == indéfini) {
			type = type de valeur;

			// convertit les chaînes de nombres relatifs (+ = ou - =) en nombres relatifs. # 7345
			if (type === "chaîne" && (ret = rrelNum.exec (valeur))) {
				valeur = (ret [1] + 1) * ret [2] + parseFloat (jQuery.css (elem, nom));
				// Corrige le bogue # 9237
				type = "nombre";
			}

			// Assurez-vous que les valeurs null et NaN ne sont pas définies. Voir: # 7116
			if (valeur == null || valeur! == valeur) {
				revenir;
			}

			// Si un nombre a été passé, ajoutez 'px' au (sauf pour certaines propriétés CSS)
			if (type === "nombre" &&! jQuery.cssNumber [origName]) {
				valeur + = "px";
			}

			// Corrige # 8908, cela peut être fait plus correctement en spécifiant des setters dans cssHooks,
			// mais cela signifierait définir huit (pour chaque propriété problématique) fonctions identiques
			if (! support.clearCloneStyle && value === "" && name.indexOf ("background") === 0) {
				style [name] = "hériter";
			}

			// Si un hook a été fourni, utilisez cette valeur, sinon définissez simplement la valeur spécifiée
			if (! hooks ||! ("set" in hooks) || (value = hooks.set (elem, value, extra))! == non défini) {

				// Prise en charge: IE
				// Avalez les erreurs de valeurs CSS "invalides" (# 5509)
				essayez {
					style [nom] = valeur;
				} catch (e) {}
			}

		} autre {
			// Si un hook a été fourni, récupérez la valeur non calculée à partir de là
			if (hooks && "get" dans les hooks && (ret = hooks.get (elem, false, extra))! == undefined) {
				return ret;
			}

			// Sinon, récupère simplement la valeur de l'objet style
			style de retour [nom];
		}
	},

	css: function (elem, name, extra, styles) {
		var num, val, crochets,
			origName = jQuery.camelCase (nom);

		// Assurez-vous que nous travaillons avec le bon nom
		name = jQuery.cssProps [origName] || (jQuery.cssProps [origName] = vendorPropName (elem.style, origName));

		// obtient le hook pour la version préfixée
		// suivi de la version sans préfixe
		hooks = jQuery.cssHooks [nom] || jQuery.cssHooks [origName];

		// Si un hook a été fourni, récupérez la valeur calculée à partir de là
		if (hooks && "get" in hooks) {
			val = hooks.get (elem, true, extra);
		}

		// Sinon, s'il existe un moyen d'obtenir la valeur calculée, utilisez-le
		if (val === undefined) {
			val = curCSS (élément, nom, styles);
		}

		// convertit "normal" en valeur calculée
		if (val === "normal" && nom dans cssNormalTransform) {
			val = cssNormalTransform [nom];
		}

		// Retourne, conversion en nombre si forcé ou un qualificatif a été fourni et val a l'air numérique
		if (extra === "" || extra) {
			num = parseFloat (val);
			retourne extra === true || jQuery.isNumeric (num)? num || 0: val;
		}
		return val;
	}
});

jQuery.each (["hauteur", "largeur"], fonction (i, nom) {
	jQuery.cssHooks [nom] = {
		get: function (elem, calculé, extra) {
			if (calculé) {
				// certains éléments peuvent avoir des informations de dimension si nous les montrons de manière invisible
				// cependant, il doit avoir un style d'affichage actuel qui en bénéficierait
				retourne rdisplayswap.test (jQuery.css (elem, "display")) && elem.offsetWidth === 0?
					jQuery.swap (elem, cssShow, function () {
						return getWidthOrHeight (elem, nom, extra);
					}):
					getWidthOrHeight (élément, nom, extra);
			}
		},

		set: function (elem, value, extra) {
			var styles = extra && getStyles (elem);
			return setPositiveNumber (elem, value, extra?
				augmentWidthOrHeight (
					elem,
					Nom,
					supplémentaire,
					support.boxSizing && jQuery.css (elem, "boxSizing", false, styles) === "border-box",
					modes
				): 0
			);
		}
	};
});

if (! support.opacity) {
	jQuery.cssHooks.opacity = {
		get: function (elem, calculé) {
			// IE utilise des filtres pour l'opacité
			return ropacity.test ((calculé && elem.currentStyle? elem.currentStyle.filter: elem.style.filter) || "")?
				(0.01 * parseFloat (RegExp. $ 1)) + "":
				calculé? "1" : "";
		},

		set: function (elem, valeur) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric (valeur)? "alpha (opacity =" + valeur * 100 + ")": "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE a des problèmes d'opacité s'il n'a pas de mise en page
			// Forcer en définissant le niveau de zoom
			style.zoom = 1;

			// si l'opacité est définie sur 1 et qu'aucun autre filtre n'existe - essayez de supprimer l'attribut de filtre # 6652
			// si valeur === "", alors supprimez l'opacité en ligne # 12685
			si ((valeur> = 1 || valeur === "") &&
					jQuery.trim (filtre.replace (ralpha, "")) === "" &&
					style.removeAttribute) {

				// Définition de style.filter sur null, "" & "" laisse toujours "filter:" dans le cssText
				// si "filter:" est présent du tout, clearType est désactivé, nous voulons éviter cela
				// style.removeAttribute est uniquement IE, mais ce chemin de code l'est apparemment ...
				style.removeAttribute ("filtre");

				// s'il n'y a pas de style de filtre appliqué dans une règle css ou une opacité en ligne non définie, nous avons terminé
				if (value === "" || currentStyle &&! currentStyle.filter) {
					revenir;
				}
			}

			// sinon, définir de nouvelles valeurs de filtre
			style.filter = ralpha.test (filtre)?
				filter.replace (ralpha, opacité):
				filtre + "" + opacité;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf (support.reliableMarginRight,
	function (elem, calculé) {
		if (calculé) {
			// Bogue WebKit 13343 - getComputedStyle renvoie une valeur incorrecte pour margin-right
			// Contournement en définissant temporairement l'affichage de l'élément sur un bloc en ligne
			return jQuery.swap (elem, {"display": "inline-block"},
				curCSS, [elem, "marginRight"]);
		}
	}
);

// Ces hooks sont utilisés par animate pour développer les propriétés
jQuery.each ({
	marge: "",
	rembourrage: "",
	largeur de la bordure"
}, fonction (préfixe, suffixe) {
	jQuery.cssHooks [préfixe + suffixe] = {
		expand: function (valeur) {
			var i = 0,
				développé = {},

				// suppose un seul nombre sinon une chaîne
				parts = typeof valeur === "chaîne"? value.split (""): [valeur];

			pour (; i <4; i ++) {
				développé [préfixe + cssExpand [i] + suffixe] =
					pièces [i] || parties [i - 2] || pièces [0];
			}

			retour étendu;
		}
	};

	if (! rmargin.test (préfixe)) {
		jQuery.cssHooks [préfixe + suffixe] .set = setPositiveNumber;
	}
});

jQuery.fn.extend ({
	css: function (nom, valeur) {
		retourne l'accès (this, function (elem, name, value) {
			styles var, len,
				map = {},
				i = 0;

			if (jQuery.isArray (nom)) {
				styles = getStyles (elem);
				len = nom.longueur;

				pour (; i <len; i ++) {
					map [nom [i]] = jQuery.css (elem, nom [i], faux, styles);
				}

				retour carte;
			}

			valeur de retour! == indéfini?
				jQuery.style (élément, nom, valeur):
				jQuery.css (elem, nom);
		}, nom, valeur, arguments.longueur> 1);
	},
	afficher: function () {
		return showHide (ceci, vrai);
	},
	cacher: function () {
		retourne showHide (this);
	},
	toggle: function (état) {
		if (typeof state === "boolean") {
			état de retour? this.show (): this.hide ();
		}

		retourne this.each (function () {
			if (isHidden (this)) {
				jQuery (this) .show ();
			} autre {
				jQuery (this) .hide ();
			}
		});
	}
});


function Tween (elem, options, prop, end, easing) {
	retourne un nouveau Tween.prototype.init (elem, options, prop, end, easing);
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructeur: Tween,
	init: function (elem, options, prop, end, easing, unit) {
		this.elem = elem;
		this.prop = prop;
		this.easing = assouplissement || "balançoire";
		this.options = options;
		this.start = this.now = this.cur ();
		this.end = fin;
		this.unit = unité || (jQuery.cssNumber [prop]? "": "px");
	},
	cur: function () {
		var hooks = Tween.propHooks [this.prop];

		renvoyer les crochets et les crochets.
			hooks.get (ceci):
			Tween.propHooks._default.get (ceci);
	},
	run: function (pourcentage) {
		var assouplie,
			hooks = Tween.propHooks [this.prop];

		if (this.options.duration) {
			this.pos = eased = jQuery.easing [this.easing] (
				pourcentage, this.options.duration * pourcentage, 0, 1, this.options.duration
			);
		} autre {
			this.pos = facilité = pourcentage;
		}
		this.now = (this.end - this.start) * eased + this.start;

		if (this.options.step) {
			this.options.step.call (this.elem, this.now, this);
		}

		if (hooks && hooks.set) {
			hooks.set (ceci);
		} autre {
			Tween.propHooks._default.set (ceci);
		}
		renvoyer ceci;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_défaut: {
		get: function (tween) {
			var result;

			if (tween.elem [tween.prop]! = null &&
				(! tween.elem.style || tween.elem.style [tween.prop] == null)) {
				return tween.elem [tween.prop];
			}

			// passer une chaîne vide comme 3ème paramètre à .css sera automatiquement
			// tente un parseFloat et retourne à une chaîne si l'analyse échoue
			// donc, des valeurs simples telles que "10px" sont analysées en Float.
			// les valeurs complexes telles que "rotate (1rad)" sont renvoyées telles quelles.
			result = jQuery.css (tween.elem, tween.prop, "");
			// Les chaînes vides, nulles, non définies et "auto" sont converties en 0.
			retour! résultat || résultat === "auto"? 0: résultat;
		},
		set: function (interpolation) {
			// utilise step hook pour back compat - utilise cssHook si c'est là - utilise .style si c'est
			// disponible et utilise les propriétés simples le cas échéant
			if (jQuery.fx.step [tween.prop]) {
				jQuery.fx.step [tween.prop] (interpolation);
			} else if (tween.elem.style && (tween.elem.style [jQuery.cssProps [tween.prop]]! = null || jQuery.cssHooks [tween.prop])) {
				jQuery.style (tween.elem, tween.prop, tween.now + tween.unit);
			} autre {
				tween.elem [tween.prop] = tween.now;
			}
		}
	}
};

// Prise en charge: IE <= 9
// Approche basée sur la panique pour définir les choses sur des nœuds déconnectés

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function (interpolation) {
		if (tween.elem.nodeType && tween.elem.parentNode) {
			tween.elem [tween.prop] = tween.now;
		}
	}
};

jQuery.easing = {
	linéaire: fonction (p) {
		retour p;
	},
	swing: fonction (p) {
		retourne 0,5 - Math.cos (p * Math.PI) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Retour Compatibilité <1.8 point d'extension
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = / ^ (?: basculer | afficher | masquer) $ /,
	rfxnum = new RegExp ("^ (?: ([+ -]) = |) (" + pnum + ") ([az%] *) $", "i"),
	rrun = / queueHooks $ /,
	animationPrefilters = [defaultPrefilter],
	interpolateurs = {
		"*": [fonction (accessoire, valeur) {
			var tween = this.createTween (prop, valeur),
				cible = tween.cur (),
				parts = rfxnum.exec (valeur),
				unité = parties && parties [3] || (jQuery.cssNumber [prop]? "": "px"),

				// Le calcul de la valeur de départ est requis pour d'éventuelles incohérences d'unités
				start = (jQuery.cssNumber [prop] || unité! == "px" && + cible) &&
					rfxnum.exec (jQuery.css (tween.elem, prop)),
				échelle = 1,
				maxIterations = 20;

			if (start && start [3]! == unit) {
				// Unités de confiance signalées par jQuery.css
				unité = unité || début [3];

				// Assurez-vous que nous mettons à jour les propriétés de l'interpolation plus tard
				parts = parts || [];

				// Approximation itérative à partir d'un point de départ différent de zéro
				début = + cible || 1;

				faire {
					// Si l'itération précédente est remise à zéro, double jusqu'à ce que nous obtenions * quelque chose *
					// Utilisez une chaîne pour le facteur de doublement afin que nous ne voyions pas accidentellement l'échelle comme inchangée ci-dessous
					échelle = échelle || ".5";

					// Ajuster et appliquer
					début = début / échelle;
					jQuery.style (tween.elem, prop, start + unit);

				// Mettre à jour l'échelle, en tolérant zéro ou NaN à partir de tween.cur ()
				// Et briser la boucle si l'échelle est inchangée ou parfaite, ou si nous en avons juste assez
				} while (scale! == (scale = tween.cur () / target) && scale! == 1 && --maxIterations);
			}

			// Mettre à jour les propriétés de l'interpolation
			if (parts) {
				début = tween.start = + début || + cible || 0;
				tween.unit = unité;
				// Si un jeton + = / - = a été fourni, nous faisons une animation relative
				tween.end = parties [1]?
					début + (parties [1] + 1) * parties [2]:
					+ pièces [2];
			}

			retour tween;
		}]
	};

// Les animations créées de manière synchrone s'exécuteront de manière synchrone
function createFxNow () {
	setTimeout (fonction () {
		fxNow = indéfini;
	});
	return (fxNow = jQuery.now ());
}

// Génère des paramètres pour créer une animation standard
function genFx (type, includeWidth) {
	var qui,
		attrs = {hauteur: type},
		i = 0;

	// si nous incluons la largeur, la valeur de l'étape est 1 pour faire toutes les valeurs cssExpand,
	// si nous n'incluons pas la largeur, la valeur du pas est 2 pour sauter à gauche et à droite
	includeWidth = includeWidth? dix;
	pour (; i <4; i + = 2 - includeWidth) {
		qui = cssExpand [i];
		attrs ["margin" + which] = attrs ["padding" + which] = type;
	}

	if (includeWidth) {
		attrs.opacity = attrs.width = type;
	}

	retour attrs;
}

function createTween (valeur, accessoire, animation) {
	var interpolation,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";
			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) {
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {
	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	// Minified: var a,b,c,d,e
	var input, div, select, a, opt;

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName("a")[ 0 ];

	// First batch of tests.
	select = document.createElement("select");
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName("input")[ 0 ];

	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute("style") );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute("href") === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement("form").enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
})();


var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) >= 0 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			// Support: Webkit
			// "" is returned instead of "on" if a value isn't specified
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;
					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hook for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		// Use defaultChecked and defaultSelected for oldIE
		} else {
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}

		return name;
	}
};

// Retrieve booleans specially
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {

	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ?
		function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		} :
		function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
});

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {
				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {
				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					(ret = elem.ownerDocument.createAttribute( name ))
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return (ret = elem.getAttributeNode( name )) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	});
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case senstitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						-1;
			}
		}
	}
});

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {
	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each([ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	});
}

// Support: Safari, IE9+
// mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			i = 0,
			len = this.length,
			proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			i = 0,
			len = this.length,
			proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {
	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {
		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	}) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	// Document location
	ajaxLocParts,
	ajaxLocation,

	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Cross-domain detection vars
			parts,
			// Loop variable
			i,
			// URL without anti-cache param
			cacheURL,
			// Response headers as string
			responseHeadersString,
			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,
			// Response headers
			responseHeaders,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
		(!support.reliableHiddenOffsets() &&
			((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
};

jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;
			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
	// Support: IE6+
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		return !this.isLocal &&

			// Support: IE7-8
			// oldIE XHR does not support non-RFC2616 methods (#13240)
			// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Although this check for six methods instead of eight
			// since IE also does not support "trace" and "connect"
			/^(get|post|head|put|delete|options)$/i.test( this.type ) &&

			createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
if ( window.ActiveXObject ) {
	jQuery( window ).on( "unload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	});
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport(function( options ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open( options.type, options.url, options.async, options.username, options.password );

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch( e ) {
									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;
								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					if ( !options.async ) {
						// if we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {
						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						setTimeout( callback );
					} else {
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	});
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch( e ) {}
}




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery("head")[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement("script");

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, response, type,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};





var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray("auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? (prop in win) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));