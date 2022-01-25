# Code status used

|code| Message | Signification |
|---|---|---|
|200|OK|Requête traitée avec succès. La réponse dépendra de la méthode de requête utilisée|
|201|Created|Requête traitée avec succès et création d’un document|
|204|No Content|Requête traitée avec succès mais pas d’information à renvoyer |
|400|Bad Request|La syntaxe de la requête est erronée |
|401|Unauthorized|Une authentification est nécessaire pour accéder à la ressource |
|403|Forbidden|Le serveur a compris la requête, mais refuse de l'exécuter. Contrairement à l'erreur 401, s'authentifier ne fera aucune différence. Sur les serveurs où l'authentification est requise, cela signifie généralement que l'authentification a été acceptée mais que les droits d'accès ne permettent pas au client d'accéder à la ressource |
|404|Not Found|Ressource non trouvée |