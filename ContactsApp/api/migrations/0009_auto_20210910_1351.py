# Generated by Django 3.2.7 on 2021-09-10 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_contact_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='email',
            field=models.CharField(blank=True, default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='contact',
            name='organization',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
