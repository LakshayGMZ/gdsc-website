# Generated by Django 4.2.9 on 2024-02-03 22:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0010_alter_event_event_url_alter_event_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='eventImages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.URLField()),
            ],
        ),
        migrations.RemoveField(
            model_name='event',
            name='Image',
        ),
        migrations.AddField(
            model_name='event',
            name='Images',
            field=models.ManyToManyField(to='home.eventimages'),
        ),
    ]