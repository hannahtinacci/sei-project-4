# Generated by Django 3.2 on 2021-04-15 16:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0002_auto_20210415_1556'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='points',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]