{% set html %}
  {% include "../form-input-example/form-input-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../form-input-example/form-input-example.component.ts" %}
{% endset %}

<it-form-input-example></it-form-input-example>

<it-source-display
  html="{$ html | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}"
  typescript="{$ typescript | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>