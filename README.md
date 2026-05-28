# Wagtail Template

A bare wagtail template with some nice to have development libraries.

Adds development libraries:
- [django-browser-reload](https://github.com/adamchainz/django-browser-reload)
- [django-debug-toolbar](https://django-debug-toolbar.readthedocs.io/)
- [django-pattern-library](https://github.com/torchbox/django-pattern-library)

Linting and Formatting is added with
- [ruff](https://astral.sh/ruff)
- [djhtml](https://github.com/rtts/djhtml)

Testing is set up with
- [pytest](https://docs.pytest.org/en/stable/)
- [pytest-django](https://pytest-django.readthedocs.io/)
- [wagtail-factories](https://github.com/wagtail/wagtail-factories/)

And a minimal [vite](https://vite.dev/) integration.

## Getting Started

To get started, start a new wagtail project with

```bash
wagtail start <project_name> <project_location> --template=https://github.com/lasse-cs/wagtail-template/archive/refs/heads/main.zip
```

> [!NOTE]
> Not all {{ project_name }} references will be updated by `wagtail start`, so you may need to update these yourself in `pyproject.toml`.

Then install:
1. Python dependencies with `uv sync`
2. JavaScript dependencies with `npm install`
3. Pre commit with `pre-commit install`

To run everything, a Procfile and [honcho](https://honcho.readthedocs.io/en/latest/) are provided, so within the virtual environment run

```bash
honcho start
```
