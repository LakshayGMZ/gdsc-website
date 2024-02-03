# Generated by Django 4.2.9 on 2024-02-03 22:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0007_member_branch_alter_memberprofile_profiletype'),
    ]

    operations = [
        migrations.RenameField(
            model_name='event',
            old_name='description',
            new_name='Description',
        ),
        migrations.RenameField(
            model_name='event',
            old_name='eventUrl',
            new_name='Event_Url',
        ),
        migrations.RenameField(
            model_name='event',
            old_name='image',
            new_name='Image',
        ),
        migrations.RenameField(
            model_name='event',
            old_name='name',
            new_name='Name',
        ),
        migrations.RenameField(
            model_name='member',
            old_name='about',
            new_name='About',
        ),
        migrations.RenameField(
            model_name='member',
            old_name='branch',
            new_name='Branch',
        ),
        migrations.RenameField(
            model_name='member',
            old_name='imageUrl',
            new_name='Image_Url',
        ),
        migrations.RenameField(
            model_name='member',
            old_name='memberType',
            new_name='Member_Type',
        ),
        migrations.RenameField(
            model_name='member',
            old_name='name',
            new_name='Name',
        ),
        migrations.RenameField(
            model_name='member',
            old_name='position',
            new_name='Position',
        ),
        migrations.AddField(
            model_name='event',
            name='Event_Date_Time',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
