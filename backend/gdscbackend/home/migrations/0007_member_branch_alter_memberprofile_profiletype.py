# Generated by Django 4.2.9 on 2024-02-03 22:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_alter_member_imageurl'),
    ]

    operations = [
        migrations.AddField(
            model_name='member',
            name='branch',
            field=models.CharField(blank=True, max_length=15000),
        ),
        migrations.AlterField(
            model_name='memberprofile',
            name='profileType',
            field=models.CharField(choices=[('Github', 'Github'), ('Linkedin', 'Linkedin'), ('Medium', 'Medium'), ('Twitter', 'Twitter'), ('Instagram', 'Instagram')], default='Profile', max_length=1500),
        ),
    ]
