# Generated by Django 2.1.7 on 2019-03-27 20:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0006_homework_file'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='homework',
            name='link',
        ),
        migrations.AddField(
            model_name='quiz',
            name='file',
            field=models.FileField(blank=True, upload_to='homework'),
        ),
        migrations.AddField(
            model_name='survey',
            name='file',
            field=models.FileField(blank=True, upload_to='homework'),
        ),
    ]
