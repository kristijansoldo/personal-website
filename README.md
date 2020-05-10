Personal website
------------
Iterations of my personal website: www.kristijansoldo.com

Built with
---------------
- GatsbyJS
- ReactJS

Requirements
---------------
- NPM ^v6.9.0
- Node ^v10

Load App fixtures
---------------
```bash
$ php bin/console doctrine:migrations:migrate
$ php bin/console sylius:fixtures:load app_suite
```

Troubleshooting
---------------

If something goes wrong, errors & exceptions are logged at the application level:

```bash
$ tail -f var/log/prod.log
$ tail -f var/log/dev.log
```
