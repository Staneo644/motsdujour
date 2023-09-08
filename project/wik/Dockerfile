FROM php:7.4-apache

# Copiez les fichiers de votre projet dans le répertoire du serveur Apache
COPY ./src /var/www/html/



COPY ./src/.htaccess /var/www/html/.htaccess

# Exposez le port du serveur Apache
EXPOSE 80

# Démarrez Apache lorsque le conteneur démarre
CMD ["apache2-foreground"]