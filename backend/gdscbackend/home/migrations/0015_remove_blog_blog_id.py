# Generated by Django 4.2.9 on 2024-02-03 23:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0014_blog'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blog',
            name='blog_id',
        ),
    ]
