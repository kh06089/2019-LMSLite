# Generated by Django 2.1.7 on 2019-04-30 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0024_merge_20190430_1352'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quiz',
            name='quiz_code',
            field=models.CharField(blank=True, default=None, max_length=8, null=True),
        ),
    ]