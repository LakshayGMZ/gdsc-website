# Generated by Django 4.2.9 on 2024-02-03 22:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0012_rename_description_event_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eventimages',
            name='event_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='eventImages', to='home.event'),
        ),
    ]
