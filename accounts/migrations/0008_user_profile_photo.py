# Generated by Django 2.1.7 on 2019-04-03 23:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0007_auto_20190308_2257'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='profile_photo',
            field=models.ImageField(blank=True, upload_to='user-profile-photos'),
        ),
    ]
