# Generated by Django 3.2 on 2021-04-19 16:38

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0003_alter_user_points'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='wishlist',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=400), default=list, null=True, size=None),
        ),
    ]
